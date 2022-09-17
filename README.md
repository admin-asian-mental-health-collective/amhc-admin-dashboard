# Asian Mental Health Collective

AMHC client facing website and therapist dashboard.

@jadeallencook

## Getting Started

1. `nvm use`
1. `npm install`
1. `npm start`

## Application Architecture

Webpack builds the application using Babel loaders and the entry file `/src/index.js` to serve at `/public/`. The entry file contains the router and template to deliver the template with the correct page. Shared design tokens, such as colors and sizes, are stored within the theme file `/src/theme.css`.

## Development Workflow

Please open a pull request for any changes you make.

## Development Guidelines

Please follow these guidelines when contributing to the codebase.

### React Components

Components have their own directory (that is named using a capitalized first letter) containing an `index.js` and a `style.css`.

```jsx

import React from 'react';

export default MyComponent() {
	return (<div id="my-component"></div>);
}

```

All components should be formatted using Prettier, be functional components, utilize hooks where needed, and have a test file.

We use atomic design and typically start our component creation in the `/src/components/organisms/` directory.

Once you've created your component it can then be refactored into smaller components that are stored in the `/src/components/molecules/` directory.

The `/src/components/atoms/` directory is used to stored primitive components such as buttons and inputs.

### Styling Components

The theme that contains all of our design tokens is accessible within any component style file using CSS variables.

```css
div#my-component {
	background-color: var(--green);
}
```

## Future Initiatives

- Create a Storybook
- Add tests to pipeline
- Setup aliases for components