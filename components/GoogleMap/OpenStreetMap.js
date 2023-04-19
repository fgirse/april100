import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'


const Map2 = () => {
  const [center, setCenter] = useState({ lat: 47.99757, lng: 7.83806 })
  const ZOOM_LEVEL = 13
  const mapRef = useRef()
   
  return (
    <>
      <div className='container'>
        <div className='container'>
          <h1 className='text-center-mt-5'>OpenStreetMap Embeded</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {location.loaded && !location.error && (
                  <Marker
                    position={[
                      location.coordinates.lat,
                      location.coordinates.lng,
                    ]}
                  ></Marker>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Map2
