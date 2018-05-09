import React from 'react';
import { Button } from '@edx/paragon';

import messages from './displayMessages';
// Sass styles are imported in JS so that we can programatically apply styles to React elements by
// class name.  Webpack's css-loader can later rename the actual class name to a name that is scoped
// to just this component to avoid clashing with other component styles that use the same class name
// (this is called CSS Modules).
import styles from './HelloWorld.scss'; // Need the .scss because Webpack assumes .js by default

// This is a handy component which will wrap display messages in a <span> with a `lang` attribute
// indicating the language of the text. This is necessary because not all of our display messages
// could be translated to the user's language and we need to let them know that the string is
// English ("en") in that case.
import WrappedMessage from '../../utils/i18n/formattedMessageWrapper';

// Render our translated "Hello, world!" message in a styled div.
const HelloWorld = () => (
  <div className={styles['hello-world']}>
    <Button
      className={['btn-primary']}
      label={<WrappedMessage message={messages.helloWorld} />}
      onClick={() => alert('Hello!')}
    />
  </div>
);

export default HelloWorld;
