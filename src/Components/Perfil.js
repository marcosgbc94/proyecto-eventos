import React from 'react'
import FormularioRegistro from './FormularioRegistro'
import EventoBar from './EventoBar'

const Perfil = () => {
  return (
    <>
      <EventoBar title="Registro" backButton="true" />
      <div className='container mx-auto mt-12'>
          <FormularioRegistro />
      </div>
    </>
  )
}

export default Perfil