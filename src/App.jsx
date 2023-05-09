import React, { useState } from "react";

import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="m-20">
      <h1 className="text-6xl text-center text-purple-500">
        Hot Cold Coffee: {loadedCoffees.length}
      </h1>
      <div className="grid md:grid-cols-3 my-20 gap-4 ">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
