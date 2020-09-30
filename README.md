# Beacon weather app

A fun project for showing what the weather is at a given address.

## Installation

### Requirements

* [Yarn](https://yarnpkg.com/)
* [Node.js](https://nodejs.org/en/) (preferably version 10+)

### Steps

1. Clone this repo to your local machine.
2. Run `yarn install`

## Starting up on development

This app has two scripts built into `package.json`. A backend Express server, and a webpack dev server.

### 1) Express server

Spin up an Express server that enables you to work on your app in development:

```
yarn dev
```

### 2) Webpack dev server

Run webpack builds in development. Webpack automatically rebuilds when you make changes to the files in `public/`.

Additionally, [hot reloading](https://github.com/gaearon/react-hot-loader) causes UI components to auto-update when you make changes, without the need for a page refresh.

```
yarn webpack
```

### Open the app

Once you have the above two running, open the app on http://localhost:1234.

This application shows an individual contact record, but we should imagine that this is a real CRM database, with thousands of different contacts, each living at different addresses.

## Task

Your task today (if you choose to accept it) is to build a "weather card" to show what the weather is like where a contact lives. On the right hand side, we've started building it already. Currently, all it does is show a loading spinner.

__We'd like you to finish it off.__ You will need to:

1. Look up the weather at the contact's postcode using external APIs (more below)
2. Store the data in Redux (in the `weather.js` reducer)
3. Build a great-looking component (with an icon and message) that tells the user what the weather is like where this contact lives

Additionally, we'd like to re-check the weather when the postcode changes.

### Utility functions

We've built a couple of utility functions that will be useful for you:

* `getPostcodeInfo(postcode)` - retrieves information about a valid UK postcode (includes coordinates)
* `isValidPostcode(postcode)` - returns `true`/`false` to indicate whether a postcode is valid or not
* `getWeatherAtCoordinates(longitude, latitude)` - finds out what the weather is at a given set of coordinates

Feel free to use these functions as they are, move them to a different location in the folder structure, or edit them if you like.

### Icons

The `getWeatherAtCoordinates` utility function returns data in [this format](https://openweathermap.org/weather-conditions). An `icon` parameter is returned, which corresponds to a number of images in the `public/img/weather_icons` folder.

We recommend that you use this parameter to render an icon in your components, like so:

```
<img src={`/img/weather_icons/01d.png`} />
```


### Folder structucture

The directory you'll need to work from is `public/js/app`. **You do not need to work from any other directories.**

Within this directory, there are a few sub directories:

* `actions` - a list of Redux "action creators" 
* `components` - a place for generic components that can be used across the app
* `constants` - a list of constants that relate to Redux actions/reducers
* `reducers` - a list of reducers. (You'll probably only need to use the `weather.js` reducer)
* `views` - React components that render a view. The view you need to focus on is `views/Dashboard/Weather`




Tips:

* Load the channels via [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)
* You may want to use an `isLoading` state value to handle loading state
* When the channels are loading a [progress spinner](https://material-ui.com/components/progress/) can be a nice touch

## TODO

* Consider recommending trying things out with Material UI first (e.g. paste in a `Button`)
* Make Nodemon auto-restart the server when the `.env` file changes
* Consider removing Beacon linting as it's too strict
