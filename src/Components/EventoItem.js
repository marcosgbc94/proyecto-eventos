import React from 'react'
import { NavLink } from 'react-router-dom'

const EventoItem = ({ id, name, description, date }) => {
  return (
    <NavLink to={`/evento/${id}`} className='w-full rounded-md bg-slate-200 p-2 flex mb-2'>
        <div className='w-12 h-12 rounded-md bg-slate-300'></div>
        <div className='w-full'>
            <div className='w-full flex space-between items-center'>
              <h3 className='w-full text-left font-bold pl-2'>{name}</h3>
              <span className='opacity-60 text-sm whitespace-nowrap'>{date}</span>
            </div>
            <p className='w-full text-left pl-2'>{description}</p>
        </div>
    </NavLink>
  )
}

export default EventoItem