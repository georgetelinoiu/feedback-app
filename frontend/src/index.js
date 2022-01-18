import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Intro from './intro';
import StudentForm from './StudentForm';
import ProfesorForm from './ProfesorForm';
import FeedbackForm from './FeedbackForm';
import CursuriForm from './CursuriForm';



ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<Intro/>}/>
      <Route path="/students" element={<StudentForm/>}/>
      <Route path="/profesori" element={<ProfesorForm/>}/>
      <Route path = "/feedback/:cursId" element = {<FeedbackForm/>}/>
      <Route path = "/cursuri/:cursId" element = {<CursuriForm/>}/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
