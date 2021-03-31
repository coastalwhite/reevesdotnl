module.exports = {
  pathPrefix : "/reevesdotnl",
  siteMetadata : {
    title : "Reeves.nl",
    siteUrl: "http://www.reeves.nl/",
    author : "Colin Reeves",
    keywords : [
      "Geophysics", "Geological mapping", "Southern continents", "Gondwana",
      "Geodynamics", "Aeromagnetic surveys", "Geophysical interpretation",
      "Ocean-floor topography", "Paleogeographic reconstructions",
      "Africa, India, Australia, Antarctica, South America",
      "Cretaceous period", "Jurassic period", "Continental margins", "Rifts",
      "Mid-ocean ridges", "Dyke swarms", "Large igneous provinces",
      "Precambrian terranes"
    ]
  },
  plugins : [
    "gatsby-plugin-sharp", "gatsby-plugin-react-helmet", {
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
          resolve : `gatsby-remark-copy-linked-files`,
          options : {ignoreFileExtensions : []}
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
          resolve : 'gatsby-remark-copy-linked-files',
          options : {
            ignoreFileExtensions : [],
          }
        } ]
      }
    }
  ],
};
