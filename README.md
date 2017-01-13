# daKnight React Theme

A Wordpress theme developed for daKnight Productions. The theme is based on React and the Wordpress REST API.
*Developed by Anders Söderström*

***This theme develop environment uses:***
  - Sass (autoprefixer in Webpack)
  - React
  - React Router
  - ESLint
  - Axios
  - Pigeon Maps
  - jQuery
  - Webpack, to bundle it all together

### Installation

Open your favorite Terminal and run these commands.

**First:**
```sh
$ npm install --global yarn
$ yarn install
```

**Development:**
```sh
$ yarn run dmc
```
*Get it, RUN DMC!*

**Production:**

```sh
$ yarn run build
```

### Styling
This theme does not use Bootstrap. It uses flex box. Major React components have their own Sass files. Some minor components, like ContactForm.js, share Sass file with their parent component. Autoprefixer is applied with Webpack, so prefixing is not needed.

### Wordpress REST API
All content is fetched from the Wordpress REST API through the React plugin Axios in model.js. Most requests are queried on slugs. There are a few requests queried on page parent ID (serviceChildPages, serviceChildPageTitles, activeItem). Until a parent page slug endpoint is added, these will have to be updated to match the ID of the page 'Tjänster'.

### Tech

Documentation:

* [ReactJS](https://facebook.github.io/react/) - React library by Facebook.
* [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React.
* [Babel](https://babeljs.io/) - Babel is a JavaScript compiler.
* [Axios](https://github.com/mzabriskie/axios) - Promise based HTTP client for the browser and node.js.
* [Sass](http://sass-lang.com/) - CSS with superpowers.
* [Webpack](https://webpack.github.io/) - a module bundler.
* [Yarn](https://yarnpkg.com/) - Fast, reliable, and secure dependency management.
* [WP REST API](http://v2.wp-api.org/) - Wordpress REST API
* [jQuery](https://jquery.com/) - You know what it is..

### Plugins

Plugins used with this theme:

* Contact Form 7
* WP REST API
* Advanced Custom Fields

#### Todos

* Add custom API endpoint to get the parent page slug
* Add Service Worker


License
----

MIT