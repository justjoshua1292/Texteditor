# Unit 19 PWA: Text Editor

OUR task is to build a text editor that runs in the browser. The editor will be a single page application that meets the PWA criteria. Additionally the application will feature a number of data persistence techniques that will serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

You will take an existing application that is already built and implement the methods for getting and storing data to an IndexedDB database. You will be using a package called `idb`, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

You will deploy this full stack application to Heroku using the [Heroku Deployment Guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide).

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Mock-Up

![Screenshot (418)](https://user-images.githubusercontent.com/83887301/141012819-50023e6e-e6b5-490e-b3cc-ff1ba0d740bb.png)
![Screenshot (419)](https://user-images.githubusercontent.com/83887301/141012821-30b78772-e2c6-4a34-a1a5-791fcc77fd16.png)
![Screenshot (420)](https://user-images.githubusercontent.com/83887301/141012823-927b646f-905c-4acd-a931-4abc6bd444f5.png)
![Screenshot (421)](https://user-images.githubusercontent.com/83887301/141012824-a43c3b31-7612-4e31-b42c-1d42075aa7d5.png)
