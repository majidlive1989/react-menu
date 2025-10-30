import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { title } from "process";

function App() {
  const allItems = [
    {
      id: 1,
      title: "buttermilk pancakes",
      price: "15.9",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      addressImg: "./img/assetsimgitem-1.jpeg",
      type: "breakfast",
    },
  ];
  const [items, setItems] = useState();

  return <></>;
}

export default App;
