import Paciente from "./Paciente"

export const PacientList = ({propPacientes}) => {

console.log(propPacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
  
    <h2 className="font-black text-3xl text-center">
      Listado Pacientes
    </h2>

    <p className="text-xl mt-5 mb-10 text-center">
      Administra tus {' '}
      
      <span className="text-indigo-600 font-bold">
        Pacientes y Citas
     </span>

   </p>

  { propPacientes.map( (pacienteTemporal,index) => (

      <Paciente 
      key={index}
      propsPacienteTemporal={pacienteTemporal}
 
      />
       
    ))}

       
    
    </div>
  )
}
