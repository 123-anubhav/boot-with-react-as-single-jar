import axios from "axios";
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(""); // Initialize as an empty string
  const [error, setError] = useState(null);

  useEffect(() => {    

    //axios.get("http://localhost:8080/testing")
    axios.get("/testing")
      .then(response => {
        // Remove HTML tags using DOMParser
        console.log("response from testing react is "+data);
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, "text/html");
        setData(doc.body.textContent || "");

        // Alternative: Remove HTML using Regex
        // setData(response.data.replace(/<[^>]*>?/gm, ""));
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Response</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <p>{data}</p> {/* Now displaying cleaned data without HTML tags */}
    </div>
  );
}

export default App;