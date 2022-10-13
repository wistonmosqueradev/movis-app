import React from 'react'
import'./peliculatarjetas.css'

const PeliculasTarjetas = ({url, name}) => {
  return (
    <div className='t'>
        <img src={url} alt=''/>
        <h2>{name}</h2>
      
    </div>
    
  )
}

export default PeliculasTarjetas