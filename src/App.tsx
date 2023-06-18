import React from 'react';
import Main from './components/Main/Main';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import CustomForm from './components/CustomForm/CustomForm';
import CustomFormContainer from './components/CustomForm/CustomFormContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/create' element={<CustomFormContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
