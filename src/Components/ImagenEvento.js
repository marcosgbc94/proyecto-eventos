import React from 'react'

const ImagenEvento = ({ nameEvent = "Nombre del Evento" }) => {
  return (
    <div className='w-full p-2'>
      <div className='absolute w-20 h-24 bg-slate-300 ml-2 rounded-md'></div>
      <div className='w-full mt-4 pl-24 text-left leading-10 font-bold'>{nameEvent}</div>
      <div className='w-full h-48 bg-slate-200 rounded-md'></div>
    </div>
  )
}

export default ImagenEvento