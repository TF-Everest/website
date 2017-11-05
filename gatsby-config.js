module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      {
	    resolve: `gatsby-plugin-google-analytics`,
	    options: {
	      trackingId: 'UA-109264620-1'
	    }
	  }
  ],
}
