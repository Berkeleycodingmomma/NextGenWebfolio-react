# NextGenWebfolio-react

Cutting-edge portfolio showcasing web development projects built using React.


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description.
The challenge is to create a portfolio as a web developer using React. The goal is to showcase my projects and skills using the latest technologies, such as React, to stand out among other developers. The portfolio is deployed on GitHub Pages, following the same instructions used for the module project 20, to make it accessible online.
#
## Short Demo Gif of Project:
#
![](./src/images/Demo%2C%20cutting-edge%20portfolio%20showcasing%20web%20development%20projects%20built%20using%20React..gif)
#
## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The Challenge
The main goal of this project is to develop a single-page application portfolio for a web developer, highlighting their expertise and skills in building React applications.

1. Design an engaging and intuitive user interface that adapts to user interactions.
2. Incorporate seamless navigation functionality to effortlessly switch between different sections of the portfolio.
3. Construct a contact form with robust validation and error handling capabilities.
4. Integrate links to the developer's resume and various social media profiles for enhanced connectivity.
#
## Assigned User Story:
```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria:

```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```
#
## Installation Process:
1. Obtain the project by either cloning the repository from GitHub or downloading the zip folder.
2. Open the downloaded repository in your preferred source code editor.
3. Access the integrated terminal of the editor and follow the installation instructions provided under the "Built With" section to ensure proper setup of the cloned documentation.
#
## Built With:
- Dynamic JavaScript
- How To Create React.md: [Click to Preview Document](./src/documentation/HowToCreateReact.md)
- JSON: [JSON](https://www.npmjs.com/package/json)
- Mongoose: [7.0.3](https://www.npmjs.com/package/mongoose)
- Express: [4.18.2](https://www.npmjs.com/package/express)
- Node.js: [16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- MongoDB: [Website](https://www.mongodb.com/)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- Fontawesome: [6.4.0](https://www.npmjs.com/package/@fortawesome/)
- dotenv: [16.0.3](https://www.npmjs.com/package/dotenv)
- GraphQL: [16.6.0](https://www.npmjs.com/package/graphql)
- JsonWebToken: [9.0.0](https://www.npmjs.com/package/jsonwebtoken))
- React: [18.2.0](https://www.npmjs.com/package/react)
- React-Dom: [18.2.0](https://www.npmjs.com/package/react-dom)
- Mongoose ODM: [7.0.3](https://mongoosejs.com)
- JWT: [9.0.0](https://jwt.io)
- Heroku: [Website](https://www.heroku.com/platform)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)
#
## Usage Instructions:
1. Visit the deployed application link to access the live version of the project.
2. Utilize the navigation titles to seamlessly switch between different sections.
3. Explore the developer's work samples showcased in the Portfolio section.
4. Fill out and submit the contact form provided in the Contact section.
5. Download the developer's resume from the Resume section for further reference.
#
## React Portfolio Screenshots:
### Figure 1: Main page (About Me)
#
![Screen Shot 2023-06-02 at 9 28 21 PM](https://github.com/Berkeleycodingmomma/NextGenWebfolio-react/assets/127444682/d55def3b-2d25-4d5f-a4d7-2bcbfa29d2ea)
#
### Figure 2: Portfolio (click buttons redirects you to Github Repo/deployed link)
#
![Screen Shot 2023-06-02 at 9 29 38 PM](https://github.com/Berkeleycodingmomma/NextGenWebfolio-react/assets/127444682/d25f6496-bb17-451e-8d94-3ab26672bfa3)
#
### Figure 3: Resume (click the Download button and it redirects you to my resume)
#
![Screen Shot 2023-06-02 at 9 29 52 PM](https://github.com/Berkeleycodingmomma/NextGenWebfolio-react/assets/127444682/75bf53b2-49c6-44da-9a88-d04b9cb7c1b5)
#
### Figure 4: Contact (fill in the info requested, sends a message or responds with an error message)
#
![Screen Shot 2023-06-02 at 9 30 07 PM](https://github.com/Berkeleycodingmomma/NextGenWebfolio-react/assets/127444682/28eecc70-8bb4-48f2-9ffa-2a58b2906ff4)
#
## Demo video of project:
[Click here to watch demo](https://youtu.be/bcppeHN_mD8)
#
## Deployed Application Link:
[Deployed Application Link](https://berkeleycodingmomma.github.io/NextGenWebfolio-react/)
#
## GitHub Repository:
[GitHub Repository](https://github.com/Berkeleycodingmomma/NextGenWebfolio-react)
#
## Code Snippets
#

```sh

function Portfolio() {
    return (
          // Portfolio container
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="container">
          <div className="row">
            {[
    {
    title: "Life in the Saddle Blog",
    description: "CMS-Style Model View Controller Blog",
    imgSrc: LifeInTheSaddleBlog,
    deployedLink:
        "https://mysterious-fortress-89318.herokuapp.com/",
    githubLink:
        "https://github.com/Berkeleycodingmomma/cms-style-mvc-tech-blog",
        
    },

**ABOVE: The Portfolio function returns a container that displays a portfolio title and a set of items, each containing information about a project such as its title, description, image source, deployed link, and GitHub link.

```
#

```sh

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="/Berkeleycodingmomma/NextGenWebfolio-react/about/" element={<About />} />
            <Route path="/Berkeleycodingmomma/NextGenWebfolio-react/contact" element={<Contact />} />
            <Route path="/Berkeleycodingmomma/NextGenWebfolio-react/resume" element={<Resume />} />
            <Route path="/Berkeleycodingmomma/NextGenWebfolio-react/" element={<Portfolio />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component

**ABOVE: The App function represents the main component of the application, which sets up the routing functionality using React Router. It includes a header, a container for different routes, and a footer component. The routes are defined using <Route> elements, mapping specific paths to corresponding components such as About, Contact, Resume, and Portfolio.

```
#

```sh

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);

**ABOVE: 
The App function is the core component that utilizes React Router for navigation. It consists of a header, a container for different routes, and a footer. Routes are defined using <Route> elements, linking specific paths to their corresponding components.

```
#
## What I Learned:
1. Developing a React-based single-page application.
2. Utilizing React Router for seamless navigation.
3. Crafting a visually appealing and responsive user interface.
4. Implementing form validation and error handling in React applications.

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2023 [Amanda Gray](https://github.com/Berkeleycodingmomma)
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

Follow me on Github at [Amanda Gray](https://github.com/Berkeleycodingmomma). 

Find me on Linkedin at [Amanda Gray](https://www.linkedin.com/in/amanda-gray-121a6a254/)

## Acknowledgments

- UC Berkeley Extension, Coding Bootcamp

- Shout out to my Instructor Jerome Chenette and all his TA's: Manuel Nunes, Kyle Vance, and James Harding

- Google Search! Seriously, thank you google search!


© 2023 [Amanda Gray](https://github.com/Berkeleycodingmomma). Confidential and Proprietary. All Rights Reserved.
