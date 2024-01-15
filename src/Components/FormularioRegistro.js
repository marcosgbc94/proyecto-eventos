import React from 'react'

const FormularioRegistro = () => {
  return (
    <form>
        <h1 className='text-2xl text-left font-black px-2 mb-6 mt-2'>Formulario de Registro</h1>
        <div className='w-full text-left px-2 mb-3'>
            <label htmlFor="nameUser" className='block w-full font-bold mb-1'>¿Cúal es tu nombre?</label>
            <input type='text' id='nameUser' name='nameUser' placeholder='Ej. Luis' className='w-full px-2 py-2 rounded-md bg-slate-100' />
        </div>
        <div className='w-full text-left px-2 mb-3'>
            <label htmlFor="sexUser" className='block w-full font-bold mb-1'>¿Qué eres?</label>
            <select id='sexUser' name='sexUser' className='w-full px-2 py-2 rounded-md bg-slate-100'>
                <option value="0">Seleciona una opción</option>
                <option value="1">Mujer</option>
                <option value="2">Hombre</option>
                <option value="3">Otro</option>
            </select>
        </div>
        <div className='w-full text-left px-2 mb-3'>
            <label htmlFor="doUser" className='block w-full font-bold mb-1'>¿A qué te dedicas?</label>
            <textarea type='text' id='doUser' name='doUser' placeholder='Ej. Soy ingeniero en informática' className='w-full px-2 py-2 rounded-md bg-slate-100'></textarea>
        </div>
    </form>
  )
}

export default FormularioRegistro