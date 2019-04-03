// "AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY"

import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"

const App = () =>
  <ReactGoogleMapLoader
    params={{
        key: "AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY", // Define your api key here
        libraries: "places,geometry", // To request multiple libraries, separate them with a comma
    }}
    render={(googleMaps, error) =>
        googleMaps ? (
            <div>
                {/*Show a custom error if SDK Authentication Error. See N/B 2 below.*/}
                {error ? error : "Google Maps is loaded !"}
            </div>
        )   :   (
            <div>
                {/*Check for network error so loading state ends if user lost connection.*/}
                {error === "Network Error" ? <p>{error}</p> : <p>isLoading...</p>}
            </div>
        )
    }/>

    export default App;