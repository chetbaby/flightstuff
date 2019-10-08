This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install
### `npm install`
## Run
### `npm run dev`

In the project directory, you can run:


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Deploy
### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Approach 🛬
I followed the UI schematic provided in the readme for the most part. I chose to omit the progress bar on the bottom of the page due to time constraints. In all, **I spent arount 2.5 hours coding this app**. Previous to that, I spent an additional 1.5-2 hours reading the documentation and looking over the data model.

This app was bootstrapped using my own template repo of `create-react-app`. It provides me with a minimal `express` server (not used) w/ server proxying, a `skeleton.css` file, `eslint` and `prettier`, and most of the extraneous `create-react-app` boilerplate removed. Everything else was coded from scratch— save a few css rules.

## Function/Strategy
I used functional components with `hooks` exclusively throughout this app. My initial plan was to also involve the `Context API` and distribute state via `useContext`, but I chose not to in the end. The data is served in separate files and the app does not fetch from the `API`. This allowed me to scaffold out logic quickly.

The `<Flight>` components display each flight object pulled from the datasource. All available flights are displayed in the `<RotationDisplay>` container ordered by ascending time (earliest departures at the top). Flights moved to the `<FlightPlanDisplay>` and added to `currRotation` array when clicked.

I stopped before being able to implement flight filtration of the `<RotationDisplay>`. The plan was to use a rekeyed version of the flights data array, shaped to an object model like so:
```
{
LSFB: [
  {flights}, {sorted}, {by}, {departuretime}
],
//..etc.
}
```
This would allow me to filter using the last arrival airport of the last element of the rotation array and calculate current available departure time from that last element much faster than using the original object array since I could initially filter by airport using O(1) lookup, then use a linear lookup on a much smaller array. The initial loading time would be slower, but the user would have a more responsive UI when it came to arranging their rotation. There are state hooks that represent those two pieces of state, but their implementation is flawed, as it does not update when flights are deleted from the Rotation queue. The `currAirport` and `currDepartureTime` need to be dynamically assigned using the `currRotation` array instead.

Utilization is not calculated, but would also be dynamically assigned via processing `currRotation`. In planning for data persistence, another objects array would need to be created that held aircraft w/ their respective rotations:
```
[
  {
    aircraft: {aircraft object},
    rotation: [{},{},{}...]
  },
  //..etc
]
```
## Stretch Goals
Aside from the implentation details above, given more time I would have created tests from the beginning, built the progress bar with some kind of visualization library, fetched data from a live API, and generally spent more time on styling—perhaps using `styled-components`.