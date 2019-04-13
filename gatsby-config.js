const { name } = require("./package.json")

const siteUrl = process.env.URL || process.env.DEPLOY_URL || ""

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    // initialize site metadata for SEO
    title: ``,
    description: ``,
    author: ``,
    siteUrl,
    siteVerification: {
      google: ``,
      bing: ``,
    },
    social: {
      //usernames for SEO
      twitter: "",
      linkedin: "",
    },
    socialLinks: {
      // profile URLS for social links, include https://
      twitter: "",
      linkedin: "",
      facebook: "",
      stackOverflow: "",
      github: "",
      instagram: "",
      youtube: "",
      email: "", //include mailto:
      phone: "", //include tel:
    },
    keywords: [],
    organization: {
      //update with relevant personal data
      name: "",
      url: "",
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl,
                author
              }
            }
          }
        `,
        feeds: [
          {
            // adjust to fit your specific query
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  language: `en-us`,
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  author:
                    edge.node.frontmatter.author.email +
                    `(` +
                    edge.node.frontmatter.author.name +
                    `)`,
                  image: {
                    url:
                      site.siteMetadata.siteUrl +
                      edge.node.frontmatter.featured.publicURL,
                    title: edge.node.frontmatter.featuredAlt,
                    link:
                      site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  },
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            // adjust below to fit markdown structure
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      path
                      date
                      title
                      featured {
                        publicURL
                      }
                      featuredAlt
                      author {
                        name
                        email
                      }
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "RSS Feed", // update to add your site name + RSS Feed
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``, // set up your own analytics account for this site and insert id here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    //
    // REMOVE COMMENTS ONCE YOU ARE READY TO IMPORT DOCS
    // {
    //   resolve: `gatsby-source-mongodb`,
    //   options: {
    //     dbName: `gatsby`,
    //     collection: [`users`, `posts`, `comments`, `categories`],
    //     server: {
    //       address: `127.0.0.1`,
    //       port: `27017`,
    //     },
    //     auth: {
    //       user: `admin`,
    //       password: `abc123`,
    //     },
    //     preserveObjectIds: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: "gatsby-remark-emojis",
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: "emoji-icon",
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: "inline",
                margin: "0",
                position: "relative",
                top: "2px",
                width: "19px",
              },
            },
          },
        ],
      },
    },
    // only use the following if you are importing web fonts as files, use gatsby-browser.js to handle external web fonts such as google fonts or typekit
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["komika_title-regular", "komika_title-axis_regular"],
          urls: ["/fonts/komika-reg.css", "/fonts/komika-axis.css"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``, // UPDATE
        short_name: ``, // UPDATE
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ffd42a`, // UPDATE
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the project.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
