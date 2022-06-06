import {useState,useEffect} from 'react';
import Error from './Error';


function Form({propPacientes,propSetPacientes})  {

  const [nombreMascota,setNombreMascota]=useState('');
  const [propietario,setPropietario]=useState('');
  const [email,setEmail]=useState('');
  const [fecha,setFecha]=useState('');
  const [sintomas,setSintomas]=useState('');

  const [error,setError]=useState(false);

  const generarID = () => {
    const fecha  = Date.now().toString(36); 
    const random = Math.random().toString(36).substr(2);
    return fecha+random;
  }

  const handleSubmit=(e) => {

      e.preventDefault();

    //Validacion del Formulario (lo genero como arreglo para poder usar includes)
    if([nombreMascota,propietario,email,fecha,sintomas].includes('')){
        
      console.log('hay algún campo vacio');
      setError(true);

    }else{
 
      console.log('todos llenos');
      setError(false);
         
      //Creas al paciente
      const pacienteNuevo = {nombreMascota,
                             propietario,
                             email,
                             fecha,
                             sintomas,
                             id:generarID()
                          };
        
      //coges el array de pacientes y lo copias con ...
      //y creas uno nuevo añadiendole el nuevo paciente
      propSetPacientes([...propPacientes,pacienteNuevo]);

      //Reiniciar el Form
      setNombreMascota('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');

     }
  }

  return (
  <div className="md:w-1/2 lg:w-2/5 mx-5">
  
    <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{' '}
      <span className="text-indigo-600 font-bold text-lg">Administralos</span>
    </p>

    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-lg py-10 px-5">

     {/*UNA TERNARIA QUE DEVUELVE UN DIV SI ES UN TRUE*/}
     {/*error &&<div className='bg-red-800 text-white rounded text-center uppercase p-3 font-bold mb-3'>
      Todos los campos son obligatorios
      </div> :''*/}

      {error&&<Error mensaje='Todos los campos son obligatorios'/>}

      <div className="mb-5">
        <label htmlFor="mascota" className="block text-gray-700 font-bold">NOMBRE MASCOTA
        <span className="text-indigo-600 font-bold text-lg"> {nombreMascota}</span>
       </label>

        <input 
        id="mascota"
        type="text"
        placeholder="Nombre Mascota"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        value={nombreMascota}
        onChange ={(e) => {setNombreMascota(e.target.value) }}
        />

      </div>

      <div className="mb-5">
        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>

        <input 
        id="propietario"
        type="text"
        placeholder="Nombre Propietario"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        value={propietario}
        onChange ={(e) => {setPropietario(e.target.value) }}
        />

      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">Email</label>

        <input 
        id="email"
        type="email"
        placeholder="email contacto Propietario"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        value={email}
        onChange ={(e) => {setEmail(e.target.value) }}
        />

      </div>

      <div className="mb-5">
        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
        <input 
        id="alta"
        type="date"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        value={fecha}
        onChange ={(e) => {setFecha(e.target.value) }}
        />

      </div>
      <textarea
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg mb-7"
      placeholder="Describe los sintomas"
      value={sintomas}
      onChange ={(e) => {setSintomas(e.target.value) }}
      />

      <input
      type="submit"
      className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
       hover:bg-indigo-700 cursor-pointer transition-colors"
      value="agregar paciente"
      />
    </form>
  </div>

  )
}

export default Form