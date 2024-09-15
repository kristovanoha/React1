import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Modal from "../components/Modal"; // Importujeme modál

function Pet() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Stav pro zobrazení modálu

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Toto je PET stránka</h1>
      <p>Vítejte na druhé stránce naší aplikace.</p>
      
      {/* Tlačítko pro otevření modálu */}
      <button onClick={openModal}>Otevřít modál</button>

      {/* Modální dialog */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modální dialog</h2>
        <p>Tento text je vykreslen v modálním okně.</p>
      </Modal>

      <TextInput labelName="PopisekPETKY" />
    </div>
  );
}

export default Pet;
