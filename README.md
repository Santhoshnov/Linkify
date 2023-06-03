# Linkify
   URL-Shortener WebApp

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Demo](#demo)

## Features

- Shorten long URLs into shorter, customized links.
- Redirect users to the original URL when accessing the shortened link.
- User-friendly interface to input and manage URLs.
- Store URL mappings in a MongoDB database.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Santhoshnov/Linkify.git`
2. Install the dependencies: `npm install`
3. Set up the MongoDB connection in `server.js`
4. Start the application: `node server.js`

## Usage

1. Open your web browser and navigate to `http://localhost:3000`
2. Enter a long URL in the input field on the homepage and click the "Shorten" button.
3. The application will generate a shortened URL for the entered long URL.
4. Copy the shortened URL and share it with others.
5. When someone accesses the shortened URL, they will be redirected to the original long URL.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript)
- Valid-Url
- Shortid
- HTML/CSS
- Bootstrap

## Demo


![longurl](https://github.com/Santhoshnov/Linkify/assets/108118100/dd089873-ef4a-42af-8979-dcddf40bfd42)
![shorturl](https://github.com/Santhoshnov/Linkify/assets/108118100/61162674-b00e-4772-886f-296063a033a0)

livelink - https://odd-tan-pangolin-veil.cyclic.app/
