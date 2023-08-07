# task.ify-backend
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Takeoff-Tec/task.ify-backend">
    <img src="https://i.imgur.com/rMdsZcE.png" alt="Logo" width="800" height="300">
  </a>

  <p align="center">
    Task.ify: Streamlining your tasks with AI-curated playlists in a click.
    <br />
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)


The backend of this project is built using Node.js and Express.js, two popular frameworks for building server-side applications in Typescript. It serves as the server-side component responsible for handling incoming requests from clients, processing data, interacting with the database, and sending back appropriate responses.
The backend serves as the backbone of the application, allowing the frontend and other client applications to communicate with the database and external services seamlessly alongside the security provided by the Spotify OAuthentication. It plays a crucial role in providing a reliable and efficient service to users, managing data, and enabling the main features of the application to function smoothly.

Take a Look @ Task.ify: https://taskify-frontendhost-2277661894f3.herokuapp.com/

### Built With

* [![Express.js](https://img.shields.io/badge/Express.js-4.18.2-blue)](https://expressjs.com/)
* [![typescript](https://img.shields.io/badge/typescript-4.5.4-blue)](https://www.typescriptlang.org/)
* [![PostgreSQL](https://img.shields.io/badge/pg-8.11.1-blue)](https://www.postgresql.org/)
* [![Sequelize](https://img.shields.io/badge/Sequelize-6.32.1-orange)](https://sequelize.org/)
* [![Jest](https://img.shields.io/badge/Jest-29.6.1-critical)](https://jestjs.io/)
* [![supertest](https://img.shields.io/badge/supertest-6.3.3-blue)](https://github.com/visionmedia/supertest)
* [![ts-jest](https://img.shields.io/badge/ts--jest-29.1.1-blue)](https://github.com/kulshekhar/ts-jest)
* [![sequelize-mock](https://img.shields.io/badge/sequelize--mock-0.10.2-brightgreen)](https://github.com/BlinkUX/sequelize-mock)
* [![jest-mock-axios](https://img.shields.io/badge/jest--mock--axios-4.7.2-brightgreen)](https://github.com/knee-cola/jest-mock-axios)
* [![Axios](https://img.shields.io/badge/Axios-0.21.1-blueviolet)](https://github.com/axios/axios)
* [![Redis](https://img.shields.io/badge/Redis-3.2-brightgreen)
* [![nodemon](https://img.shields.io/badge/nodemon-3.0.1-red)](https://nodemon.io/)
* [![dotenv](https://img.shields.io/badge/dotenv-16.3.1-brightgreen)](https://github.com/motdotla/dotenv)
* [![cors](https://img.shields.io/badge/cors-2.8.5-brightgreen)](https://github.com/expressjs/cors)
* [![SQLite](https://img.shields.io/badge/sqlite3-5.1.6-lightgrey)](https://www.sqlite.org/)




<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Get a OpenAI API Key at [https://platform.openai.com/docs/api-reference/introduction)
2. Get a Spotify API Key at [https://developer.spotify.com/documentation/web-api)
3. Clone the repo
   ```sh
   git clone https://github.com/Takeoff-Tec/task.ify-backend
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create and Enter your Open AI API KEY and Spotify Client Secret/ID in `.env`
   ```
   GPT_SECRETKEY = 'ENTER YOUR API';
   CLIENT_ID = 'ENTER YOUR API';
   CLIENT_SECET = 'ENTER YOUR API';
   ```
6. Setup Database and Backend Server URL in `.env`
   ```
   DB_USER = 'ENTER YOUR LOCAL DB USERNAME';
   DB_HOST = 'ENTER YOUR LOCAL DB HOST';
   DB_NAME = 'ENTER YOUR LOCAL DB NAME';
   DB_PASSWORD = 'ENTER YOUR LOCAL DB PASSWORD';
   BACKEND_BASE_URL = 'ENTER YOUR LOCAL SERVER';
   FRONTEND_ASE_URL = 'ENTER YOUR LOCAL FRONTEND HOST';
   ```


<!-- USAGE EXAMPLES -->
## Usage

<div align="center">
  <a href="https://github.com/Takeoff-Tec/task.ify-backend">
    <img src="https://i.imgur.com/xv7Y678.png" alt="Spotify OAuth Screenshot" width="400" height="400">
  </a>
</div>

<p>Spotify OAuth and Redis Implementation</p>
<ul style="text-align:left;">
    <li>Spotify OAuth: Leveraged to authenticate users, this integration gave us direct access to users' Spotify profiles. This allowed us to craft a personalized experience based on users' musical preferences and listening histories.</li>
    <li>Redis Integration: Incorporated as our choice of in-memory data structure store, Redis was pivotal in caching user session data. This ensured rapid application interactions, drastically reducing latency during recurring data access operations.</li>
</ul>

<div align="center">
  <a href="https://github.com/Takeoff-Tec/task.ify-backend">
    <img src="https://i.imgur.com/HhA1QIS.png" alt="User Model Sequilize Code Screenshot" width="400" height="400">
  </a>
</div>

<p>Sequilize Implementation</p>
<ul style="text-align:left;">
    <li>Object-Relational Mapping (ORM): Tables were effortlessly defined as objects for each model, enabling a clear representation of our database structure.</li>
    <li>TypeScript Compatibility: Seamless integration with TypeScript ensured that our models were strongly typed, enhancing code reliability and predictability.</li>
    <li>Relationships Made Easy: Defining the relationships between tables became intuitive, as evident in the associations between the 'User', 'Playlist', and 'Task' models.</li>
    <li>Simplifying Queries: Gone are the days of lengthy SQL queries. With Sequelize, common tasks are abstracted into straightforward functions, streamlining database operations.</li>
</ul>
<div align="center">
    <img src="https://i.imgur.com/xFT0mhW.png" alt="Image 1" width="300" height="300" style="margin-right:20px;">
    <img src="https://i.imgur.com/J2SpgQK.png" alt="Image 2" width="300" height="300">
</div>

<p>Spotify Playlist Creation and Track Insertion</p>
<ul style="text-align:left;">
    <li><strong>Endpoint Creation</strong>: The code showcases an express route (`/callback`) designed to interact with the Spotify API, creating a playlist and then adding tracks to it.</li>
    <li><strong>User Authentication</strong>: It fetches the Spotify user's details using the provided access token, ensuring the correct user is authenticated before proceeding.</li>
    <li><strong>Playlist Creation</strong>: A new playlist is created for the authenticated user on Spotify using an API call, which, upon success, returns the newly created playlist's ID.</li>
    <li><strong>Database Update</strong>: The details of the created playlist, including its name and ID, are then updated or inserted into our database using Sequelize's `upsert` method.</li>
    <li><strong>Track Insertion</strong>: Another Spotify API call is made to add the provided tracks to the just-created playlist, using the tracks' URIs.</li>
    <li><strong>Error Handling</strong>: The code contains structured error handling, ensuring any hiccups in the process (like an invalid access token) result in meaningful error messages for debugging.</li>
</ul>




<!-- ROADMAP -->
## Roadmap

- [x] Spotify OAuthentication API
- [x] OpenAI API Generated Playlist Name and Tracks
- [x] Creation of Playlist with Tracks inserted in Spotify API
- [x] Task CRUD operations
    - [x] Retrieves Spotify Cover

See the [open issues](https://github.com/Takeoff-Tec/task.ify-backend/issues) for a full list of proposed features (and known issues).




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Pierre Johnson - [linkedin](https://www.linkedin.com/in/pierrelasaine) - pierrelasaine@gmail.com 

Camila Naranjo - [linkedin](https://www.linkedin.com/in/camilavnaranjo) - camilavnaranjoa@gmail.com 

Maria Fernanda Palacios Martinez - [linkedin](https://www.linkedin.com/in/maria-fernanda-palacios-14998518a?trk=contact-info) - 03fernanda.palacios@gmail.com

## Project Links

Backend Project Link: [https://github.com/Takeoff-Tec/task.ify-backend](https://github.com/Takeoff-Tec/task.ify-backend) 

Frontend Project Link: [https://github.com/Takeoff-Tec/task.ify-frontend](https://github.com/Takeoff-Tec/task.ify-frontend)

Deployed Site Link: https://taskify-frontendhost-2277661894f3.herokuapp.com/




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [A'shuan Thomas](https://github.com/lasagnamassage)
* [Sammy Au](https://github.com/samau3)
* [Paige Godfrey](https://github.com/paigegodfrey)
* Nilesh Patel (Salesforce Mentor)
* Samuel Paramar (Salesforce Mentor)
* Ryan Warnock (Salesforce Mentor)
* Salesforce FTL Cohort 2023




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Takeoff-Tec/task.ify-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/Takeoff-Tec/task.ify-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Takeoff-Tec/task.ify-backend.svg?style=for-the-badge
[forks-url]: https://github.com/Takeoff-Tec/task.ify-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/Takeoff-Tec/task.ify-backend.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/Takeoff-Tec/task.ify-backend.svg?style=for-the-badge
[issues-url]: https://github.com/Takeoff-Tec/task.ify-backend/issues
[license-shield]: https://img.shields.io/github/license/Takeoff-Tec/task.ify-backend.svg?style=for-the-badge
[license-url]: https://github.com/Takeoff-Tec/task.ify-backend/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[product-screenshot]: images/screenshot.png
