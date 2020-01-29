# Welcome

This project has been created to explore some initial thoughts and ideas when working with Gatsby and ecommerce.

## Getting started

To create a new Gatsby app, I will use `npx` to create a new [Gatsby](https://www.gatsbyjs.com) app using the latest version of the [Gatsby CLI](https://www.gatsbyjs.com):

```sh
# Generate a new app using the latest version of the Gatsby CLI
$ npx gatsby new app

# Navigate to the app directory and verify the app loads
$ cd app
$ npx gatsby develop

success open and validate gatsby-configs - 0.023s
success load plugins - 0.531s
success onPreInit - 0.003s
success initialize cache - 0.009s
success copy gatsby files - 0.049s
success onPreBootstrap - 0.015s
success createSchemaCustomization - 0.004s
success source and transform nodes - 0.085s
success building schema - 0.282s
success createPages - 0.002s
success createPagesStatefully - 0.058s
success onPreExtractQueries - 0.002s
success update schema - 0.029s
success extract queries from components - 0.242s
success write out requires - 0.021s
success write out redirect data - 0.002s
success Build manifest and related icons - 0.104s
success onPostBootstrap - 0.128s
⠀
info bootstrap finished - 4.475 s
⠀
success run queries - 0.150s - 8/8 53.28/s
success Generating image thumbnails - 2.297s - 6/6 2.61/s

You can now view gatsby-starter-default in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.

To create a production build, use gatsby build
⠀
success Building development bundle - 4.403s

```

The app should be available at [http://localhost:8000](http://localhost:8000).

The GraphiQL IDE should be available at [http://localhost:8000/___graphql](http://localhost:8000/___graphql)
