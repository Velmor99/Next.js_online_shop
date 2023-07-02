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
- [DOCKER](#title6)
- [LICENSE](#title7)

## <a id="title1">Summary</a>
[Owl-top](https://top-app-4ffe51ef33b4.herokuapp.com/) is an application about the best courses, books, products and services.
Each of these sections has a lot of pages where you can find the best options with rating. 
The main idea of this application is to give a possibility of choice with feedback and rating, where you can search and choose the best thing for yourself, like a book of delivery service, of IT course, whatever.
In this app I try to solve the problem when you can't decide what do you need best: Glovo or Bolt, Franz Kafka or Immanuel Kant, React or Vue e.t.c. I wanted to give a user a choice and possibility to gather feedback while helping other people find the best for themselves.
---
## <a id="title2">Structure of project</a>

Проект реализован по паттерну MVC, в папке components сложены все dummy components, и лишь на страницах (папка pages) реализована сборка и общение с серверов. Так же некоторые компоненты хранят в себе логику общения с сервером такие как меню и форма рейтинга. Для каждого компонента реализован интерфейс описывающий не только входящие пропсы но и HTML атрибуты. В проэкте использован функционал функциональных компонентов реакт с использованием встроенных и кастомных хуков. За основу стилизации были взяты css модули. с библиотекой classnames есть возможность объеденять селекторы, а так же писать условия для классов. Для поиска по запросу был реализован метод getServerSideProps, а для остальных страниц реализован стандартный getStaticProps и getStaticPaths.В глобальном файле _app.tsx подключены шрифты и написан head приложения.

---

## <a id="title3">Technical part</a>
The main technology on front-end I used is a popular framework Next.js. I chose this because my application needs good seo optimization and I made comfortable site for blind people, also next.js give a good performance for my application. Also I used typescript for good typization and bug profilactic, with typescript I always know what data I use and how to work with it, good typization saves a lot of time when debugging. 
На серверной части я использовал Nest.js так как он удобен и поддерживает typescript с начала разработки, так же он предоставляет удобный функционал пайпов и валидации что делает его крайне эффективным.
В качевстве хоста я использовал сервис heroku, он понятен и полностью удовлетворял мои потребности. Так же я позаботился о том что бы мое приложение было лекго развернуть на любой машине, поэтому я написал докерфайл позволяющий запустить мой код в контейнере.
---


## <a id="title4">Features</a>
## Front-end features

- Сделана приятная анимация с помощью framer-motion
- При проверке производительности в lighthouse выдает 100
- Код строго типизирован
- Реализован контекст хранящий в себе данные о меню
- layout реализован как HOC
- Реализован свой хук отслеживающий скролл
- Дизайн реализован как под мобильные устройства так и под широкие экраны
- Есть возможность для seo оптимизации


## Back-end features

- Использована Mongo database с реализацией агрегации
- Написаны e2e тесты с помощью jest встроенного в сборку
- Код строго типизирован
- Реализован пайп валидирующий входящие id данные
- layout реализован как HOC
- Реализован JWT guard
- Реализован свой декоратор возвращающий пользователя по email
---

## <a id="title5">Installation</a>
Top-app requires [Node.js](https://nodejs.org/en) v 18+ to run

1. Для начала нужно перейти в репозиторий [next.js top app](https://github.com/Velmor99/Next.js_top-app) и забрать его себе 
    ```sh
    git clone https://github.com/Velmor99/Next.js_top-app.git
    ```
2. После того как приложение установится на ваш локальный компьютер нужно установить все зависимости
    ```
    npm install
    ```
3. Для лучшего быстродействия нужно собрать сборку 
    ```
    npm run build
    ```
4. И наконец можно запускать 
    ```
    npm start
    ```
---



## <a id="title6">Docker</a>

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## <a id="title7">License</a>

MIT

**Free Software, Hell Yeah!** 
:laughing: :laughing: :laughing:
