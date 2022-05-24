import Form from './components/Form.jsx';
import Header from './components/Header';
import { PacientList } from './components/PacientList.jsx';

function App() {
  return (
    <div className='container mx-auto mt-20 bg-slate-300 h-screen'>
      <Header/>
    <div className='mt-12 md:flex'>
      <Form/>
      <PacientList/>
    </div>
    
    </div>
  );
}

export default App;
