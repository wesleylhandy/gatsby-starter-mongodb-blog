# What to Add Here

This folder should hold any assets related to webfonts you have downloaded an intend to include.

The root `gatsby-config.js` includes the `gatsby-plugin-web-font-loader`, configure as follows:

```
{
    resolve: `gatsby-plugin-web-font-loader`,
    options: {
    custom: {
        families: ['name of first font', 'name of second font'],
        urls: ['/fonts/path/to/first/stylesheet.css', '/fonts/path/to/second/stylesheet.css']
    }
    }
},
```