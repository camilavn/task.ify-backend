import express, { Request, Response } from 'express'
import querystring from 'querystring'
import { Buffer } from 'buffer'
import config from '../utils/config'
import utils from '../utils/utils'

interface ISpotifyTokenResponse {
    access_token: string
    token_type: string
    scope: string
    expires_in: number
    refresh_token: string
}

declare module 'express-session' {
    interface SessionData {
        accessToken?: string
        refreshToken?: string
    }
}

const redirect_uri = 'http://localhost:3001/oauth/callback'

const oAuthRoute = express()

oAuthRoute.get('/login', function (req: Request, res: Response) {
    var state = utils.generateRandomString(16)
    var scope = 'user-read-private user-read-email'

    res.redirect(
        'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: config.client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            })
    )
})

oAuthRoute.get('/callback', async (req: Request, res: Response) => {
    const code = req.query.code as string | null
    const state = req.query.state as string | null
    /**
     * @todo const error = req.query.error as string | null
     */

    if (!state) {
        return res.redirect(
            /**
             * @todo redirect to frontend error page
             */
            '/#' +
                querystring.stringify({
                    error: 'state_mismatch'
                })
        )
    }

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization':
                'Basic ' +
                Buffer.from(
                    config.client_id + ':' + config.client_secret
                ).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true
    }

    try {
        const response = await fetch(authOptions.url, {
            method: 'POST',
            headers: authOptions.headers,
            body: querystring.stringify(authOptions.form)
        })

        if (!response.ok) {
            const errorData = await response.json()
            console.error('Error from Spotify API:', errorData)
            return res.status(response.status).json(errorData)
        }

        const data: ISpotifyTokenResponse = await response.json()

        /**
         * @login tokens for camila <3
         */

        res.cookie('userAuthToken', data.access_token, {
            maxAge: 900000,
            httpOnly: true,
            sameSite: 'none',
            secure: true
        })
        res.cookie('userAuthRefreshToken', data.refresh_token, {
            maxAge: 900000,
            httpOnly: true,
            sameSite: 'none',
            secure: true
        })

        res.redirect('http://localhost:3000/dashboard')
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve token from Spotify' })
    }
})

oAuthRoute.get('/logout', (req: Request, res: Response) => {
    res.cookie('userAuthToken', '', { expires: new Date(0) })
    res.cookie('userAuthRefreshToken', '', { expires: new Date(0) })
    res.json({ data: 200 })
})

oAuthRoute.get('/session-status', (req: Request, res: Response) => {
    /**
     *  @todo validate token? 
     */
    if (req.cookies && req.cookies.userAuthToken) {
        res.json({ data: { isAuthenticated: true }})
    } else {
        res.json({ data: {isAuthenticated: false }})
    }
})

export default oAuthRoute
