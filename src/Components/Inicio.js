import React, { useState } from 'react'
import ImagenUsuario from './ImagenUsuario'
import EventoItem from './EventoItem';

const Inicio = () => {
  const [tabActive, setTabActive] = useState(1);
  const eventList = [
    { id: 1, name: 'Evento Ciulero', description: 'Hackaton de todos los ciculeros de corazón.' },
    { id: 2, name: 'Cumpleaños del Lushin', description: 'Con la prescencia de DJ Mauro.' }
  ];
  return (
    <div className='container mx-auto'>
      <ImagenUsuario />
      <div className='w-full p-2'>
        <div className='w-full text-left'>
          <button type='button' className={(tabActive === 1 ? 'bg-blue-500 text-white' : null) + ' py-2 px-4 rounded-md'} onClick={() => setTabActive(1)}>Novedades</button>
          <button type='button' className={(tabActive === 2 ? 'bg-blue-500 text-white' : null) + ' py-2 px-4 rounded-md'} onClick={() => setTabActive(2)}>Agenda</button>
        </div>
        <div className='w-full'>
          <div className={(tabActive === 1 ? '' : 'hidden') + ' w-full py-2'}>
            {
              eventList.map(event => {
                return (<EventoItem key={event.id} name={event.name} description={event.description} />);
              })
            }
          </div>
          <div className={(tabActive === 2 ? '' : 'hidden') + ' w-full py-2'}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio