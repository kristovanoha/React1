import React, {useState, useEffect} from "react";
import axios from "axios"; 

function DataList(){

    const [userData, setUserData] = useState([]); // Stav pro ukládání dat z API
    const [loading, setLoading] = useState(true); // Stav pro indikaci načítání

    useEffect(() => {
        // Funkce pro načtení dat z API
        const fetchWeatherData = async () => {
          try {
            const response = await axios.get("https://localhost:7098/User"); // URL endpointu API
            setUserData(response.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching USER data:", error);
            setLoading(false);
          }
        };
    
        fetchWeatherData();
      }, []);

      return (
        <div>
          <div>dataList user</div>
      
          {loading ? (
            <p>Načítám data...</p>
          ) : (
            <div>
              <h2>Seznam uzivatelu</h2>
              <ul>
                {userData.map((item, index) => (
                  <li key={index}>
                    <strong>Jmeno:</strong> {item.name} <br />
                  
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

}
export default DataList;