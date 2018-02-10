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
When developing in dev mode you will have several advantages. The first is that whenever webpack detects a change in a file it will recreate the js bundle for you. Since our dev server is using NodeBlues the webpage will also automatically refresh whenever the bundle finishes generating. No code is needed to be added to the web source code. This is all done via webpack and NodeBlues. You can view the site at "localhost:1337"

```
# In one tab run below, starts the dev server on 1337
npm run dev-server

# In another tab run below, webpack listens for changes in files and rebuilds
npm run web:dev
```



## Prod
The production build generates the minified vendor and app bundle as well as the index.html file that references them. A "build/web/bundleAnalyzer.html" file is also created that will display the sizes of all of the depedencies included in the web bundle.
```
npm run web:prod
```


## Testing
Tests are run through Jest. Testing React components is done via an Enzyme shallow render. The example below is a pretty basic test that may not even be needed. When testing UI components it is important to only test things that give the code base value. With practice, unit testing can save a developer a lot of time that would otherwise be spent manually testing.

```jsx
import { shallow } from 'enzyme';
import assert from 'assert';

it('should render count', () => {
  const wrapper = shallow(<Counter {...props} count={1} />);

  assert.ok(wrapper.contains(<span>Count: 1</span>));
});
```
