const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Mark Schnabel - Software Developer',
    description: 'Software development portfolio website for Mark Schnabel.',
    keywords: 'Software Development, Portfolio, Mark Schnabel'
  },
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    );
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mark-schnabel-dot-com',
        short_name: 'markschnabel.com',
        start_url: '/',
        background_color: '#0C0C0C',
        theme_color: '#ff7d2b',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown/`,
        name: 'markdown'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content'
      }
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-transformer-remark',
            options: {
              plugins: [
                {
                  resolve: 'gatsby-remark-copy-linked-files',
                  options: {
                    destinationDir: '/images/projects',
                    ignoreFileExtensions: []
                  }
                }
              ]
            }
          }
        ]
      }
    },
    'gatsby-plugin-offline'
  ]
};
