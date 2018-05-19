# React.js Cross Platform Boilerplate
This is a simple counter application that runs on any platform! The majority of the code is reused between platforms with the view components and entry points being the exception.

NOTE: This is currently being developed to be easy to use. While the basic funcionality should be working it should be used with caution for the time being.


### Features
* Native application development dev build with HMR
* Web development dev build with auto page refresh on change
* Desktop development dev and prod builds
* Local dev server hosting web application
* Uniform testing framework across all platforms



## Setting up everything
This will install all the modules we need for each platform.

Note: This might take awhile. There is around 750mb of node_modules at the moment.
```
$ npm install
```


## Quick docs links
* [Shared docs](./shared/shared.md)
* [Web docs](./web/web.md)
* [Native docs](./native/native.md)
* [Desktop docs](./desktop/desktop.md)



# Current Progress
### In Progress
*

### TODO
1. Add some styles for the react app
1. Include CSS in JS for web and desktop
    1. PreStyle and possibly PreStyle native?
    1. css-blocks?
1. Add sonarwhal to web and desktop for accessibility linting
1. True HMR for desktop dev
1. Possibly remove desktop build since it's losing relevance
  1. maybe use Proton?
1. Docker files for windows, linux, mac?


## Dependency Explanations
### dependencies
Name|Use
-|-
expo|Useful tool for React Native development
prop-types|Prop Type validation for React
react|Awesome front end framework
react-dom|Part of React
react-redux|React Bindings for Redux
redux|Central store used with React components

### devDependencies
Name|Use
-|-
babel-core|Part of Babel for transforming JS
babel-loader|Part of Babel for transforming JS
babel-plugin-transform-async-to-generator|Used by electron build
babel-preset-env|Babel preset for various browser support
babel-preset-expo|Babel Expo preset for React Native
babel-preset-react|Babel preset for React
documentation|The JSDoc generation tool
electron-compile|Desktop dependency
electron-forge|Desktop dependency
electron-prebuild-compile|Desktop dependency
electron-squirrel-startup|Desktop dependency
enzyme|Testing utility for React
enzyme-adapter-react-16|React 16 adapter for Enzyme
eslint|Linter for JS
eslint-plugin-react|Eslint plugin for React
eslint-plugin-react-native|Eslint plugin for React Native
exp|Build tool for Expo React Native
html-webpack-plugin|Webpack plugin that allows usage of html template for web build
jest-expo|Expo stuff for Jest
nodeblues|Dev server for web stuff
react-native-scripts|Convenient scripts for React Native development
react-test-renderer|Render React components to pure JavaScript objects
sinon|JS mocking library
webpack|Awesome JS build tool
webpack-bundle-analyzer|Utility to analyze size of JS bundle
