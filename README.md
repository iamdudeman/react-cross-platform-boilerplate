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
1. Improve linting rules
  1. command to lint whole project
  1. commands for each platform

### TODO
1. Include PreStyle for CSS in JS for web and desktop
    1. PreStyle native?
1. Add sonarwhal to web and desktop for accessibility linting
1. True HMR for desktop dev
1. Docker files for windows, linux, mac?





