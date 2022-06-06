import React from 'react'

     
const Paciente = ({propsPacienteTemporal}) => {
  console.log(propsPacienteTemporal);

  const{nombreMascota,propietario,email,fecha,sintomas} = propsPacienteTemporal
 
  return (
    
<div className="ml-3 mb-3 mr-3 py-10 px-10 rounded-xl  bg-white shadow-md">

<p className="font-bold mb-3 uppercase text-gray-700">Nombre{' '}
  <span className="font-normal normal-case">{nombreMascota}</span> 
</p>

<p className="font-bold mb-3 uppercase text-gray-700">Propietario{' '}
  <span className="font-normal normal-case">{propietario}</span> 
</p>

<p className="font-bold mb-3 uppercase text-gray-700">Email{' '}
  <span className="font-normal normal-case">{email}</span> 
</p>

<p className="font-bold mb-3 uppercase text-gray-700">Fecha alta{' '}
  <span className="font-normal normal-case">{fecha}</span> 
</p>

<p className="font-bold mb-3 uppercase text-gray-700">Síntomas{' '}
  <span className="font-normal normal-case">{sintomas}</span> 
</p>
</div>


  )
}

export default Paciente