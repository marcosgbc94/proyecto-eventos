import React from 'react'

const ImagenUsuario = ({ nameUser = "Usuario" }) => {
  return (
    <div className='w-full p-2'>
      <div className='absolute w-20 h-24 bg-slate-300 ml-2 rounded-md'></div>
      <div className='w-full h-10 pl-24 text-left leading-9 font-bold'>{nameUser}</div>
      <div className='w-full h-48 bg-slate-200 rounded-md'></div>
    </div>
  )
}

export default ImagenUsuario