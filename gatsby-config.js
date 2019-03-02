module.exports = {
  siteMetadata: {
    title: 'Mark Schnabel - Software Developer',
    description: 'Software development portfolio website for Mark Schnabel.',
    keywords: 'Software Development, Portfolio, Mark Schnabel',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'mark-schnabel-dot-com',
        short_name: 'markschnabel.com',
        start_url: '/',
        background_color: '#0C0C0C',
        theme_color: '#ff7d2b',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/projects`,
        name: 'projectsImages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown/projects`,
        name: 'projectsMarkdown',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: 'gatsby-remark-copy-linked-files',
                  options: {
                    destinationDir: '/images/projects',
                    ignoreFileExtensions: [],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
