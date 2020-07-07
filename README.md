This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Trouble Shooting:

# I was working with create-react-app and came across this issue where I get Home does not contain an export named Home.

you're exporting as the default export, not as a named export. Check this line:
    export default Home;
You're exporting as default, not as a name. Thus, import Home like this:
    import Home from './layouts/Home';

# I use create-react-app to create a new app, but I find react-boorstrap does not show any css style.

reference: https://react-bootstrap.netlify.app/getting-started/introduction/

First, we need to npm install react-bootstrap and react-router-bootstrap for 'LinkContainer',
Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included CSS. However, some stylesheet is required to use these components. 

{/* The following line can be included in your src/index.js or App.js file*/}
import 'bootstrap/dist/css/bootstrap.min.css';

How and which Bootstrap styles you include is up to you, but the simplest way is to include the latest styles from the CDN. A little more information about the benefits of using a CDN can be found https://www.w3schools.com/bootstrap/bootstrap_get_started.asp.
'<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>'

# 奇怪的知识又增加了

加<img>时， src必须以localhost开头，否则不能load local pictures. 且图片需要放在public folder中。

deploy to github: https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson

smooth scroll: https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

how to load a list of images in react: https://stackoverflow.com/questions/34582405/react-wont-load-local-images