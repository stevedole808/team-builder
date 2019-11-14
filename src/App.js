import React, { useState } from 'react';
import './App.css';
import List from "./components/List"
import TheList from "./components/TheList"

function App() {
  const [lists, setLists] = useState([{
    id: 1,
    name: "Steve",
    email: "steve.dole101@gmail.com",
    role: "King of the World"
  }]);

  const addNewList = list => {
    const newList= {
      name: list.name,
      email: list.email,
      role: list.role
    }
    setLists([...lists, newList])
  }

  return (
    <div className="App">
      <TheList addNewList={addNewList} />
      <List lists ={lists} />
    </div>
  );
}

export default App;
