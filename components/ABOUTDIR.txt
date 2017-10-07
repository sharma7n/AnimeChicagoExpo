* This directory is used for mainly functional,
  reusable, and sharable components.

- This is a good place for avatar, button, generic
  text, loading indicators, and etc logic.

- Each directory inside should have an index.js to
  manage what is exported from the components
  that live in this directory.

- Each directory inside will also have a file named
  after the component such as Button.js

- Many of the directories inside might also have a
  styles.js file.

Sample Directory Tree:

|-- components
    |-- Avatar
        |-- Avatar.js
        |-- index.js
        |-- styles.js
    |-- Button
        |-- Button.js
        |-- index.js
        |-- styles.js
    |-- GenericTextInput
        |-- GenericTextInput.js
        |-- index.js
        |-- styles.js
