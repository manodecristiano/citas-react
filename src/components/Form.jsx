

function Form() {
  return (
  <div className="md:w-1/2 lg:w-2/5">
  
    <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{' '}
      <span className="text-indigo-600 font-bold text-lg">Administralos</span>
    </p>

    <form className="bg-white shadow-md rounded-lg py-10 px-5">
      <div className="mb-5">
        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

        <input 
        id="mascota"
        type="text"
        placeholder="Nombre Mascota"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        />

      </div>

      <div className="mb-5">
        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>

        <input 
        id="propietario"
        type="text"
        placeholder="Nombre Propietario"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        />

      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">Email</label>

        <input 
        id="email"
        type="email"
        placeholder="email contacto Propietario"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        />

      </div>

      <div className="mb-5">
        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

        <input 
        id="alta"
        type="date"
       
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
        />

      </div>
      <textarea
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg mb-7"
      placeholder="Describe los sintomas"
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