import React from 'react'

const Map = () => {
    return (
      <>

      <p id="status">Click the button to get your location</p>
      <a id="map-link" target="_blank" rel="noopener noreferrer"></a>
      <iframe
        title="Map"
        width="100%"
        height="250"
        frameBorder={0}
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyB3we59Q0GEIedl8pE7jO9zeBSn9_OS5Z4&q=places+near+University+of+Auckland&center=-36.8526098, 174.7702446&zoom=15"
        allowFullScreen
      ></iframe>
      </>
    )
  }

export default Map
