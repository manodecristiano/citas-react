import Form from './components/Form.jsx';
import Header from './components/Header';
import { PacientList } from './components/PacientList.jsx';
import {useState} from 'react';


function App() {


  const [pacientes,setPacientes] = useState([]);
 

  return (
    <div className='container mx-auto mt-20 bg-slate-300 h-screen'>

      <Header/>

     <div className='mt-12 md:flex'>

        <Form  
        propPacientes = {pacientes}
        propSetPacientes = {setPacientes}
       
        />

       <PacientList
       propPacientes={pacientes}
       
       />
       
      </div>
    
    </div>
  );
}

export default App;
