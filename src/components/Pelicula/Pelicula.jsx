import React from 'react'
import '../Pelicula/Pelicula.css'

import PeliculasTarjetas from './PeliculasTarjetas/PeliculasTarjetas'
 const peliculaInfo=[
   {
     id:"1",
     name:"wiston",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/qISzj26R3LnsChQcXQKnuyxQQhK.jpg"
   },
   {
    id:"2",
    name:"alberto",
   urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/qISzj26R3LnsChQcXQKnuyxQQhK.jpg"
  },
  {
    id:"3",
    name:"alberto mosquera",
   urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/qISzj26R3LnsChQcXQKnuyxQQhK.jpg"
  },
  {
    id:"4",
    name:" mosquera",
   urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/qISzj26R3LnsChQcXQKnuyxQQhK.jpg"
  },
  {
    id:"5",
    name:"alberto mos",
   urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/qISzj26R3LnsChQcXQKnuyxQQhK.jpg"
  }
 ]

 
const Pelicula = () => {
  return (

    <div className='container-pelicula'>
                
       {
         peliculaInfo.map(pelucula=>(
           <PeliculasTarjetas url={pelucula.urlImagen} name={pelucula.name}/>
         ))
       }

    </div>
  )
}

export default Pelicula