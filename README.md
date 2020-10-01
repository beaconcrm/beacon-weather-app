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

Your task today is to build a "weather card" to show what the weather is like where a contact lives. This should include the "category" (e.g. rain), but ideally will also include other things (e.g. temperature).

On the right hand side of the sample app, we've started building it already. Currently, all it does is show a loading spinner.

__We'd like you to finish it off.__ You will need to:

1. Look up the weather at the contact's postcode using external APIs (more below)
2. Store the data in Redux (in the `weather.js` reducer)
3. Build a great-looking component (with an icon and message) that tells the user what the weather is like where this contact lives
4. The weather should re-check when the postcode changes.

### Utility functions

We've built a few utility functions that will be useful for you:

* `getPostcodeInfo(postcode)` - retrieves information about a valid UK postcode (includes coordinates) (using [Postcodes.io](http://postcodes.io/))
* `isValidPostcode(postcode)` - returns `true`/`false` to indicate whether a postcode is valid or not
* `getWeatherAtCoordinates(longitude, latitude)` - finds out what the weather is at a given set of coordinates (using [OpenWeatherMap](https://openweathermap.org/current))

Feel free to use these functions as they are, move them to a different location in the folder structure, or edit them if you like.

### Icons

The `getWeatherAtCoordinates` utility function (above) returns data in [this format](https://openweathermap.org/weather-conditions). An `icon` parameter is returned, which corresponds to a number of images in the `public/img/weather_icons` folder.

We recommend that you use this parameter to render an icon in your weather card, like so:

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

### Material UI & styling

We're using the fantastic React framework [Material UI](https://material-ui.com/) for rendering the UI.

Material UI comes baked in with a [withStyles](https://material-ui.com/guides/typescript/#usage-of-withstyles) system to inject JSS into components. If you're familiar with JSS, feel free to use it. If you'd prefer to use another styling system (e.g. styled components) then feel free to install it.


### Tips

* Build a new component to render the weather card's content, pulling directly from Redux state
* The current weather should be stored in Redux state
* What should happen when the postcode isn't valid?
* Feel free to take inspiration from your favourite weather app or website!

### What we're looking to see

* Good usage of React and Redux
* Clean code and file structure
* A great looking component that's easy to understand
