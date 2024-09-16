import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import TextInput from "../components/TextInput";
import Modal from "../components/Modal"; // Importujeme modál

function Pet() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Stav pro zobrazení modálu
  const [weatherData, setWeatherData] = useState([]); // Stav pro ukládání dat z API
  const [loading, setLoading] = useState(true); // Stav pro indikaci načítání

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Funkce pro načtení dat z API
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("https://localhost:7098/WeatherForecast"); // URL endpointu API
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []); // Prázdné pole závislostí, efekt se spustí pouze při montáži komponenty

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

      <TextInput labelName="PopisekPETKY ss" />

      {/* Zobrazení dat z API */}
      {loading ? (
        <p>Načítám data...</p>
      ) : (
        <div>
          <h2>Weather Forecast</h2>
          <ul>
            {weatherData.map((item, index) => (
              <li key={index}>
                <strong>Date:</strong> {item.date} <br />
                <strong>Temperature (C):</strong> {item.temperatureC} <br />
                <strong>Summary:</strong> {item.summary}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Pet;

