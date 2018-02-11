# Native

## File Glossary

## Dev

## Prod Android

## Prod IOS

## Testing
Tests are run through Jest. Testing React components is done via an Enzyme shallow render. The example below is a pretty basic test that may not even be needed. When testing UI components it is important to only test things that give the code base value. With practice, unit testing can save a developer a lot of time that would otherwise be spent manually testing.

```jsx
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import assert from 'assert';

it('should render count', () => {
  const wrapper = shallow(<Counter {...props} count={1} />);

  assert.ok(wrapper.contains(<Text>Count: 1</Text>));
});
```
