import React from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

// Komponenta modálního dialogu
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Pokud modál není otevřen, nevracíme nic

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="modal-close">
          Zavřít
        </button>
        {children} {/* Zde zobrazíme obsah modálu */}
      </div>
    </div>,
    document.getElementById("portal-root") // Vykreslíme modál do `portal-root`
  );
};

export default Modal;
