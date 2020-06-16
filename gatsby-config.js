module.exports = {
    siteMetadata: {
        title: `Hyein Jeong | Landscape Designer`,
        description: `A portfolio site for hyein, landscape designer`,
        author: `mjworld`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve(`./src/components/layout.js`),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `hyein's portfolio`,
                short_name: `hyein`,
                start_url: `/`,
                background_color: `#E7EAE4`,
                theme_color: `#E7EAE4`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
