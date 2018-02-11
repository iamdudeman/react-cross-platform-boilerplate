# Desktop
Desktop contains all the presentational components for building desktop applications in Electron.



## File Glossary
* .compilerc
  * Used by electron to build the app
* index.js
  * The entry point for the electron app
  * Must be in the root directory




## Special Notes
* If you are using a unix subsystem on windows the build will not work since gui elements do not exist. The builds will have to be run elsewhere.



## Dev
TODO



## Prod
TODO



## Testing
Tests are run through Jest. Testing React components is done via an Enzyme shallow render. The example below is a pretty basic test that may not even be needed. When testing UI components it is important to only test things that give the code base value. With practice, unit testing can save a developer a lot of time that would otherwise be spent manually testing.

If you add a new test be sure to require it in the desktop/src/testConfig.js file.


```jsx
import { shallow } from 'enzyme';
import assert from 'assert';

it('should render count', () => {
  const wrapper = shallow(<Counter {...props} count={1} />);

  assert.ok(wrapper.contains(<span>Count: 1</span>));
});
```
