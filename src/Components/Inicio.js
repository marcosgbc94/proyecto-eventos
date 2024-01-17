import React, { useState } from 'react';
import { IoAdd } from "react-icons/io5";
import ImagenUsuario from './ImagenUsuario';
import EventoItem from './EventoItem';
import EventoBar from './EventoBar';

const Inicio = () => {
  const [tabActive, setTabActive] = useState(1);
  const eventList = [
    { id: 1, name: 'Evento Ciulero', description: 'Hackaton de todos los ciculeros de corazón.', scheduled: false, date: 'Mañana' },
    { id: 2, name: 'Cumpleaños del Lushin', description: 'Con la prescencia de DJ Mauro.', scheduled: true, date: '10-02-2024' }
  ];
  return (
    <>
      <EventoBar title="App" />
      <div className='container mx-auto mt-12'>
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
                  return (<EventoItem key={event.id} id={event.id} name={event.name} description={event.description} date={event.date} />);
                })
              }
            </div>
            <div className={(tabActive === 2 ? '' : 'hidden') + ' w-full py-2'}>
            {
                eventList.filter(event => event.scheduled).map(event => {
                  return (<EventoItem key={event.id} id={event.id} name={event.name} description={event.description} date={event.date} />);
                })
              }
            </div>
          </div>
        </div>
        <button className='fixed right-2 bottom-2 w-10 h-10 bg-violet-700 text-white flex justify-center items-center rounded-full'>
          <IoAdd />
        </button>
      </div>
    </>
  )
}

export default Inicio