import './main.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/landing';
import Navbar from './components/navbar';
import ProjectInfo from './components/project-info';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='sections'>
        <Landing/>
        <ProjectInfo/>
        <Contact/>
      </div>
      
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
