import React from 'react';
import logo from './logo.svg';
import './dialog.css';
import { createPortal } from 'react-dom';

function Dialog({isOpen, onClose}) {
    return isOpen?
  createPortal (
    <div className="Dialog">
      <header className="Dialog-header" >
        <img src={logo} className="Dialog-logo" alt="logo" />
        <p>
          I'm a Dialog!
        </p>
        <button
          onClick={onClose}
        >
          Close dialog
        </button>
      </header>
    </div>
  , document.getElementById("my-portal")) :null
}

export default Dialog;
