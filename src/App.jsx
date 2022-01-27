import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Components/Coin";

function App() {
  const [coins, setListOfCoins] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        setListOfCoins(response.data.coins);
        console.log(coins);
      });
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bit coin search"
          onChange={(event) => {
            setsearchWord(event.target.value);
          }}
        />
      </div>

      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
