import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { CiUser } from "react-icons/ci";

const EventoBar = ({ title, backButton = false }) => {
  return (
    <div className='w-full fixed h-12 top-0 bg-slate-100 px-2 z-10 font-bold flex items-center justify-center'>
        <div className='container mx-auto h-100 flex items-center justify-between'>
            <div className='h-full flex items-center justify-start'>
                {
                    backButton ? (
                        <NavLink to="/inicio" className='w-10 h-10 flex justify-center items-center rounded-full mr-2'>
                            <IoMdArrowBack />
                        </NavLink>
                    ) : null
                }
                {title}
            </div>
            <div className='h-full flex items-center justify-center'>
                <NavLink to="/registro" className='mx-auto mx-2 bottom-2 w-10 h-10 bg-slate-200 flex justify-center items-center rounded-full'>
                    <CiUser />
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default EventoBar