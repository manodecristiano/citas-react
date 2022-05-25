

export const PacientList = () => {
  return (
    <div className="w-1/2 lg:w-3/5">
  
    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      Administra tus {' '}
      <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
   </p>
      
    <div className="m-3 py-10 px-10 rounded-xl mt-5 bg-white shadow-md">

        <p className="font-bold mb-3 uppercase text-gray-700">Nombre{' '}
          <span className="font-normal normal-case">Nuca</span> 
       </p>

       <p className="font-bold mb-3 uppercase text-gray-700">Propietario{' '}
          <span className="font-normal normal-case">Cristian</span> 
       </p>

       <p className="font-bold mb-3 uppercase text-gray-700">Email{' '}
          <span className="font-normal normal-case">cristian.carre.online@gmail.com</span> 
       </p>

       <p className="font-bold mb-3 uppercase text-gray-700">Fecha alta{' '}
          <span className="font-normal normal-case">25/05/2022Hook</span> 
       </p>

       <p className="font-bold mb-3 uppercase text-gray-700">Síntomas{' '}
          <span className="font-normal normal-case">Lorem ipsum, dolor sit amet 
          consectetur adipisicing elit. Ab eaque distinctio, voluptates 
          facere assumenda tempora. Temporibus doloribus labore, fugit sequi
           dolores modi, voluptas alias dolore odit adipisci quo quas sed.</span> 
       </p>
    </div>



    
    
    </div>
  )
}
