# Web
Web contains all of the presentational specific stuff for browsers.

## File Glossary
* wepack.config.js
  * Contains the webpack config for the build
  * Note: the babel loader configuration is also in here due to React Native needing a .babelrc file in the root directory with Expo
* web/index.template.html
  * Contains the basic structure of the html file for the site
  * The root element is defined here
* build/web/index.html
  * Generated from the template
  * Contains the script tag that points to the js bundles
    * There is an app bundle and a vendor bundle
* build/web/bundleAnalyzer.html
  * Super awesome utility to check the size of your prod bundle!
* browserlist
  * Specifies what browsers we support for webpack to build to
  * Read more about it here! https://github.com/ai/browserslist


## Dev

## Prod

## Testing
