// The extension of test files are `.test.jsx` so that Jest knows where to find the tests in our
// repo.  This file contains all of the unit tests for our HelloWorld component.
import React from 'react';

import HelloWorld from './index';
import messages from './displayMessages';
// This is a wrapper around Enzyme's mount() that makes it work with our internationalized
// components
import { mountWithIntl } from '../../utils/i18n/enzymeHelper';
import WrappedMessage from '../../utils/i18n/formattedMessageWrapper';

let wrapper;

// The first describe block wraps up all the tests in this file with the title "<HelloWorld />"
describe('<HelloWorld />', () => {
  // This describe block wraps tests that just deal with the basic rendering of our component
  describe('renders', () => {
    // The beforeEach() function is called before every it() function in this describe() block
    beforeEach(() => {
      // Here we "mount" our component in Enzyme which simulates a render
      wrapper = mountWithIntl(<HelloWorld />);
    });
    // This is our first actual test function. Test if the display message is inside the rendered
    // output.
    it('displays hello world text', () => {
      const message = wrapper.find(WrappedMessage);
      expect(message.text()).toEqual(messages.helloWorld.defaultMessage);
    });
  });
});
