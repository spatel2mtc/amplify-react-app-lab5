// Import useState and useEffect hooks from React
import React, { useState, useEffect } from 'react'

// Import the API category from AWS Amplify
import { API } from 'aws-amplify'

import './App.css';

function App() {
  // Create coins variable and set to empty array
const [coins, updateCoins] = useState([]);

 // Create additional state to hold user input for limit and start properties
const [input, updateInput] = useState({ limit: 5, start: 0 })

//Create variable for loading
const[loading, updateLoading] = useState(true);

// Create a new function to allow users to update the input values
function updateInputValues(type, value) {
  updateInput({ ...input, [type]: value })
}

// Define function to all API
async function fetchCoins() {
  const { limit, start } = input
  const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`)
  updateCoins(data.coins)
}

// Call fetchCoins function when component loads
useEffect(() => {
  fetchCoins()

}, []);

//



  return (
    <div className="App">
      <input
        placeholder="start"
        onChange={e => updateInputValues('start', e.target.value)}
      />
      <input
        onChange={e => updateInputValues('limit', e.target.value)}
        placeholder="limit"
      />
      <button onClick={fetchCoins}>Fetch Coins</button>
  
    </div>
  );
}

export default App;