# mark-schnabel-dot-com

[![Netlify Status](https://api.netlify.com/api/v1/badges/1703b17e-95a2-49fc-8688-e76c8ad0d3de/deploy-status)](https://app.netlify.com/sites/markschnabel/deploys)

Repository which contains the code for my personal website that you can find here:<br /> [https://markschnabel.com](https://markschnabel.com).

## About this site
* **This site was built & deployed with:**
    * JavaScript
    * React
    * GatsbyJS
    * GraphQL
    * Markdown
    * Tailwind CSS
    * EmotionJS
    * Netlify

#### JavaScript, React & Gatsby
JavaScript, React & Gatsby were used to build the core of the site. Gatsby was chosen in particular for its ability to turn React into static HTML/CSS/JS. This allowed me to write code for the site in React but ship the most minimal amount of JavaScript possible as well as pre-render the entire page in order to optimize page load times for the site. I also wanted to take advantage of the image optimization features that Gatsby provides through [gatsby-image](https://www.npmjs.com/package/gatsby-image). What was great about this plug-in was it allowed me to generate perfectly re-sized versions of an image for mobile, tablet and desktop which helps by allowing me to avoid making smaller devices download unecessarily large images and in turn again increasing page performance.

## Installation instructions
If you would like to play around with the code for this site you can do so with the following instructions:

First make sure you have `node` and `yarn` installed on your machine. To find the correct node version, check the `.nvmrc` file in the root of the repository

Then simply install the project dependencies with `yarn install`

And finally run `yarn start`

And you should be good to go!
