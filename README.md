# mark-schnabel-dot-com

[![Netlify Status](https://api.netlify.com/api/v1/badges/1703b17e-95a2-49fc-8688-e76c8ad0d3de/deploy-status)](https://app.netlify.com/sites/markschnabel/deploys)

Repository which contains the code for my personal website that you can find running here:<br /> [https://markschnabel.com](https://markschnabel.com).

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
    * Netlify AWS Lambda Functions 

#### JavaScript, React & Gatsby
JavaScript, React & Gatsby were used to build out the core of the site. Gatsby was chosen in particular to turn React into static HTML/CSS/JS for increased page load times & better SEO. I also wanted to take advantage of the image optimization features that Gatsby provides through [gatsby-image](https://www.npmjs.com/package/gatsby-image). What was great about this plug-in was it allowed me to display images that it generates perfectly re-sized versions of the original for mobile, tablet and desktop to avoid making smaller devices download unecessarily large images, increasing page performance. It also adds a "blur up" effect to the images, which allows the the page to load with blurred versions of the images that slowly develop as they become available. This again added an increase page performance.

#### GraphQL, Markdown & Netlify
GraphQL, Markdown & Netlify were used to automate the process of updating the site. When the site is built static GraphQL queries are run searching for Markdown files in specific directories. These Markdown files contain all the necessary data to build components such as my project components or about component. Netlify was used for setting up continuous deployment with GitHub. All of this allowed me to have a site that is as easy to edit as pushing a couple of markdown files to GitHub.

#### Tailwind & Emotion
Tailwind and emotion were used as the primary tools for doing styling on the website. Tailwind was used for its utility classes that allowed me to easily define a lot of CSS styles in a very confined amount of space. Emotion JS is a styled components library which complemented tailwind very well. Styles were referened in the components using a global variable *tw*. This allowed me to create components that used complementary styles and follow a consistent theme as they were all defined in the tailwind.js file. 

This combination also had other benefits. Tailwind CSS is 1.5x the size of Bootstrap, and importing it directly into the project would have forced that to be downloaded by the client. Emotion JS fixes this by only pulling the styles it needs from the *tw* variable.

#### Netlify AWS Lambda Functions
Netlify AWS Lambda Functions were used for implementing the functionality of my contact form. I used nodemailer within the lambda functions to send emails with the data from the contact form to myself. I used an OAuth2 protocol to allow for nodemailer to access my account and send emails on behalf of it. Setting this all up with Netlify Lambda functions allowed me to provide this functionality, without setting up an entire backend server. This made the project much simpler and avoided the overhead that would've come with setting up and deploying a custom server.

## Getting Started

If you would like to play around with the code you can do so by first installing the [gatsby-cli](https://www.npmjs.com/package/gatsby-cli).

```
    npm install --global gatsby-cli
```
Once you have done that you can simply run the following command to transfer the site to your computer:
```
    gatsby new new-project-name https://github.com/markschnabel/mark-schnabel-dot-com
```
Here "new-project-name" is where you should write what you want the name of the directory the project is stored in on your computer to be called.

Next you can get the site up and running with the following commands:
``` 
    cd new-project-name
    npm install
    gatsby develop
```
By default the site will be running on port 8000 on your computer. You can access it by navigating to localhost:8000 in your favorite browser. The site performs best when accessed using Chrome.

### Running Lambda Functions
There are two commands that will allow you to run the Lambda functions: `npm start:lambda` and `npm start`. 

`npm start:lambda` will run just the lambda functions locally<br/>
`npm start` will run bold the client and the lambda functions

`npm start` utlizes a proxy configured in the gatsby-config.js file to allow the client to communicate with the lambda functions

*Note:* The lambda functions utilize an OAuth2 workflow to send emails with nodemailer. If you would like to use this site as a basis for setting up your own email based Lambda functions you will have to provide your own credentials via environment variables. You can find a good tutorial for obtaining Oauth credentials for nodemailer here: 
[https://www.woolha.com/tutorials/node-js-send-email-using-gmail-with-nodemailer-oauth-2](https://www.woolha.com/tutorials/node-js-send-email-using-gmail-with-nodemailer-oauth-2) 

If you would like to read more about how Oauth interacts with nodemailer you can see the docs here: [https://nodemailer.com/smtp/oauth2/](https://nodemailer.com/smtp/oauth2/)


### Prerequisites
```
node
npm
```

## Authors
* **Mark Schnabel** - *Sole contributor* 
    * GitHub - [markschnabel](https://github.com/markschnabel)
    * Linked In - [mark-j-schnabel](https://github.com/markschnabel)
    * [mark.schnabel@markschnabel.com](mailto:mark.schnabel@markschnabel.com)

## License
 
The MIT License (MIT)

Copyright (c) 2019 Mark Schnabel <mark.schnabel@markschnabel.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.