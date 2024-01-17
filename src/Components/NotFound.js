import React from 'react'
import EventoBar from './EventoBar'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <EventoBar title="Página no encontrada" backButton={false} />
        <div className='container mx-auto mt-12'>
            <h1 className='w-full font-bold text-2xl pt-4 pb-4'>Página No encontrada</h1>
            <NavLink to="/inicio" type='button' className='rounded-md bg-blue-500 text-white  py-2 px-4'>Inicio</NavLink>
        </div>
    </>
  )
}

export default NotFound