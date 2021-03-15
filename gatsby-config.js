module.exports = {
  pathPrefix : "/reevesdotnl",
  siteMetadata : {
    title : "reevesdotnl-gatsby",
  },
  plugins : [
    "gatsby-plugin-react-helmet", {
      resolve : "gatsby-plugin-manifest",
      options : {
        icon : "src/images/icon.png",
      },
    },
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
        }
      }
    }
  ],
};
