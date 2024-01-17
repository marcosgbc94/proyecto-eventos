import React from 'react'
import { useParams } from 'react-router-dom'
import ImagenEvento from './ImagenEvento';
import EventoBar from './EventoBar';

const Evento = () => {
  const {id} = useParams();

  const eventList = [
    { id: 1, name: 'Evento Ciulero', description: 'Hackaton de todos los ciculeros de corazón.', scheduled: false, date: 'Mañana' },
    { id: 2, name: 'Cumpleaños del Lushin', description: 'Con la prescencia de DJ Mauro.', scheduled: true, date: '10-02-2024' }
  ];

  const eventInfo = eventList.filter(event => event.id === parseInt(id))[0];

  return (
    <>
      <EventoBar title="Evento" backButton="true" />
      <div className='container mx-auto mt-12'>
        <ImagenEvento nameEvent={eventInfo.name} />
        <div className='w-full text-left px-2 mb-3'>
          <label className='block w-full font-bold mb-1'>Descripción</label>
          <textarea className='w-full px-2 py-2 rounded-md bg-slate-100' readOnly value={eventInfo.description}/>
        </div>
      </div>
    </>
  )
}

export default Evento