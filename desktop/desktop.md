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
This will build the application on the platform you are running and open an instance of the application with
the debug tools open. As you make changes you can "refresh" the application to load in changes.

```
$ npm run desktop:dev
```



## Prod
This creates a distributable for the platform that you are running the command on. You can find it in
/desktop/out/make.

```
$ npm run desktop:prod
```



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

Run tests via
```
npm run desktop:test
```
