# Grpc Client

 `gRPC` client is used to fetch the real time Market Data in React Component.

 ## `gRPC`
 gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. 

## Approach We used
We built a Transcoder layer between `gRPC` & the `Browser client` using `Express Js`
- `Client`: where gRPC serves the remote calls defined in the proto file

### FlowChart 
 <img src="./assets/Flow chart.png" alt="flowchart" />

## Available Scripts

### Install the NPM Packages

```
npm install
```

In the project directory, you can run:

## Start the ExpressJs client
```
node client.js
```

### Start the app
To start the component, run the following command
``` 
npm start 
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Errors you may get.
#### Error: `cannot read properties of undefined`

To get Rid from this Error, you should generate
`Bearer Token`

### To Generate the Bearer Token, following the Below steps

1) Generate Token from [quodd]: https://developer.quodd.com/docs/rest-api
2) Login & signup your account on [quodd]: https://developer.quodd.com/dashboard 
3) Generate a token using your user credentials.
4) Change the Authorization Bearer Token in `App.js`
```
const token= <insert the Token>;
```
##### Tokens expire after 24 hours. Once a token expires, make this request again to generate a new one.

### Running Tests
To run tests, run the following command

``` 
npm test
```


### To Build the component
To create build , run the following command
``` 
npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)