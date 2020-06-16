import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './Dialog'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          className="App-link"
          onClick={()=>setOpen(!open)}
        >
          Open Dialog
        </div>
      </header>
      <Dialog isOpen={open} onClose={()=>setOpen(!open)}/>
    </div>
  );
}

export default App;
