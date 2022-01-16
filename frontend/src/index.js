import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Intro from './intro';
import StudentForm from './StudentForm';
import ProfesorForm from './ProfesorForm';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<Intro/>}/>
      <Route path="/students" element={<StudentForm/>}/>
      <Route path="/profesori" element={<ProfesorForm/>}/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
