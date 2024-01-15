import React from 'react'

const EventoItem = ({ id, name, description }) => {
  return (
    <div key={id} className='w-full rounded-md bg-slate-200 p-2 flex mb-2'>
        <div className='w-12 h-12 rounded-md bg-slate-300'></div>
        <div className='w-full'>
            <h3 className='w-full text-left font-bold pl-2'>{name}</h3>
            <p className='w-full text-left pl-2'>{description}</p>
        </div>
    </div>
  )
}

export default EventoItem