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
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
