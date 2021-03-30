module.exports = {
  pathPrefix : "/reevesdotnl",
  siteMetadata : {
    title : "reevesdotnl-gatsby",
  },
  plugins : [
    "gatsby-plugin-sharp", "gatsby-remark-images", "gatsby-plugin-react-helmet",
    {
      resolve : "@chakra-ui/gatsby-plugin",
      options : {
        isResettingCSS : true,
        isUsingColorMode : true,
      },
    },
    {
      resolve : "gatsby-source-filesystem",
      options : {name : 'pages', path : `${__dirname}/src/pages/`}
    },
    {
      resolve : "gatsby-source-filesystem",
      options : {
        name : 'data',
        path : `${__dirname}/src/md-texts/`,
        ignore : [ "**/\.*" ]
      }
    },
    {
      resolve : "gatsby-source-filesystem",
      options : {
        name : 'assets',
        path : `${__dirname}/src/assets/`,
        ignore : [ "**/\.*" ]
      }
    },
    'gatsby-plugin-sharp', {
      resolve : 'gatsby-transformer-remark',
      options : {
        plugins : [ {
          resolve : 'gatsby-remark-images',
          options : {
            maxWidth : 640,
          }
        } ]
      }
    },
    {
      resolve : 'gatsby-plugin-mdx',
      options : {
        defaultLayouts : {
          default : require.resolve("./src/templates/pdf-view.tsx"),
        },
        gatsbyRemarkPlugins : [ {
          resolve : 'gatsby-remark-images',
          options : {
            maxWidth : 1200,
          }
        } ]
      }
    }
  ],
};
