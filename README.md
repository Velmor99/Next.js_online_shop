# Welcome to my Next.js application "owl-top"
---
## Used technologies

[![Next.js](https://img.shields.io/badge/Next.js-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-blue.svg?style=for-the-badge&logo=React&labelColor=23272f&logoWidth=20)](https://react.dev/) [![Nest.js](https://img.shields.io/badge/Nest.js-gray.svg?style=for-the-badge&logo=Nestjs&labelColor=e0234e&logoWidth=20)](https://nestjs.com/) [![Typescript](https://img.shields.io/badge/typescript-3178c6.svg?style=for-the-badge&logo=typescript&labelColor=262626&logoWidth=20)](https://www.typescriptlang.org/) 
[![Heroku](https://img.shields.io/badge/heroku-9575b9.svg?style=for-the-badge&logo=heroku&labelColor=262626&logoWidth=20)](https://id.heroku.com/login) [![Heroku](https://img.shields.io/badge/docker-eff0f2.svg?style=for-the-badge&logo=docker&labelColor=262626&logoWidth=20)](https://www.docker.com/) 

[![npm version](https://img.shields.io/badge/node-18.12.1-green)](https://nodejs.org/en) ![app version](https://img.shields.io/badge/version-1.0.0-green) ![app version](https://img.shields.io/badge/license-MIT-green) [![npm version](https://img.shields.io/badge/front_end-link-purple)](https://top-app-4ffe51ef33b4.herokuapp.com/) [![npm version](https://img.shields.io/badge/backend-link-red)](https://github.com/Velmor99/nestjs_top_api)

## Navigation
- [SUMMARY](#title1)
- [STRUCTURE OF PROJECT](#title2)
- [TECHNICAL PART](#title3)
- [FEATURES](#title4)
- [INSTALLATION](#title5)
- [LICENSE](#title7)

## <a id="title1">Summary</a>
[Owl-top](https://top-app-4ffe51ef33b4.herokuapp.com/) is an application about the best courses, books, products and services.
Each of these sections has a lot of pages where you can find the best options with rating. 
The main idea of this application is to give a possibility of choice with feedback and rating, where you can search and choose the best thing for yourself, like a book of delivery service, of IT course, whatever.
In this app I try to solve the problem when you can't decide what do you need best: Glovo or Bolt, Franz Kafka or Immanuel Kant, React or Vue e.t.c. I wanted to give a user a choice and possibility to gather feedback while helping other people find the best for themselves.

---

## <a id="title2">Structure of project</a>
The project is implemented according to the MVC template, all fictitious components are added to the components folder, and only on pages (folders of pages) assembly and communication with servers is implemented. Some components also store the logic of communication with the server, such as the menu and the rating form. For each component, an interface is implemented that describes not only the incoming properties, but also the HTML attributes. The project used the functionality of functional components that react using built-in and custom casings. CSS modules were implemented as a basis for styling. with the class name library, it is possible to combine selectors, as well as write conditions for classes. For search by request, the getServerSideProps method was implemented, and for the rest of the pages, the standard getStaticProps and getStaticPaths are used. Fonts are connected in the global _app.tsx file and the head of the application is written.

---

## <a id="title3">Technical part</a>
The main technology on front-end I used is a popular framework Next.js. I chose this because my application needs good seo optimization and I made comfortable site for blind people, also next.js give a good performance for my application. Also I used typescript for good typization and bug profilactic, with typescript I always know what data I use and how to work with it, good typization saves a lot of time when debugging. 
On the back-end, I used Nest.js because it's convenient and supports typescript from the beginning of development, and it provides convenient pipe and validation functionality, which makes it extremely efficient.
I used the heroku service as a host, it is clear and completely satisfied my needs. I also made sure that my application would be easy to deploy on any machine, so I wrote a dockerfile that allows me to run my code in a container.

---

## <a id="title4">Features</a>
## Front-end features

- Nice animation done with framer-motion
- Performance check in lighthouse gives 100
- Code is strongly typed
- Implemented a context that stores data about the menu
- layout implemented as HOC
- Implemented its own tracking scroll hook
- The design is implemented both for mobile devices and for wide screens.
- Opportunity for SEO optimization


## Back-end features

- Used Mongo database with aggregation implementation
- Written e2e tests using jest built into the assembly
- Code is strongly typed
- Implemented pipe validating incoming id data
- Implemented JWT guard
- Implemented its own decorator returning the user by email

---

## <a id="title5">Installation</a>
Top-app requires [Node.js](https://nodejs.org/en) v 18+ to run

1. First you need to go to the repository [next.js top app](https://github.com/Velmor99/Next.js_top-app) and take it to yourself
    ```sh
    git clone https://github.com/Velmor99/Next.js_top-app.git
    ```
2. After the application is installed on your local computer, you need to install all dependencies
    ```
    npm install
    ```
3. For best performance, you need to assemble the assembly
    ```
    npm run build
    ```
4. And finally you can run
    ```
    npm start
    ```
---

## <a id="title7">License</a>

MIT

**Free Software, Hell Yeah!** 
:laughing: :laughing: :laughing:
