import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"

// Styles
import './App.scss'

// Components
import Suggestions from './pages/suggestion/sugesstion'
import Roadmap from './pages/roadmap/roadmap'
import FeedbackDetail from './pages/feedback-detail/feedback-detail'
import FeedbackEdit from './pages/feedback-edit/feedback-edit'
import FeedbackNew from './pages/feedback-new/feedback-new'


function App() {
  const [data, setData] = useState();
   
  useEffect(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));

    console.log(data);
  },[])

  return (
    <div className='content-grid app-container'>
    <Routes>
      <Route path='product-feedback-app' element={<Suggestions data={data}/>}/>
      <Route path='product-feedback-app/new' element={<FeedbackNew/>}/>
      <Route path='product-feedback-app/edit' element={<FeedbackEdit/>}/>
      <Route path='product-feedback-app/detail' element={<FeedbackDetail/>}/>
      <Route path='product-feedback-app/roadmap' element={<Roadmap/>}/>
    </Routes>
    </div>
  )
}

export default App
