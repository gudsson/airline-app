import React from 'react'

const Map = ({ mapData }) => {
  console.log(mapData)
  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
        
        {mapData.map((route, idx) => 
          <g key={idx}>
            <circle className="source" cx={route.src.x} cy={route.src.y}>
              <title>{route.src.name}</title>
            </circle>
            <circle className="destination" cx={route.dest.x} cy={route.dest.y}>
              <title>{route.dest.name}</title>
            </circle>
            <path d={`M${route.src.x} ${route.src.y} L ${route.dest.x} ${route.dest.y}`} />
          </g>
        )}
      </g>
    </svg>
  )
}

export default Map