import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [items, setItems] = React.useState([
    { name: "Denis", type: "main", color: "#f4f4f4" },
    { name: "Pasha", type: "side", color: "#f8f8f8" }
  ])

  function addItem(obj) {
    setItems(
      items.concat([{
        name: '',
        type: '',
        color: ''
      }])
    )
    console.log('click', items)
  }

  function changeItem(ev) {
    let text = ev.currentTarget.closest(p);
    let changeBtnEL = ev.currentTarget;
    let saveBtnEL = ev.currentTarget.nextSibling;

    text.toggleAttribute('contenteditable');
    changeBtnEL.toggleAttribute('disabled');
    saveBtnEL.toggleAttribute('disabled');
    console.log(text);
  }

  return (
    <div className="App">
      <Header />
      <Main 
      items={items} 
      addItem={addItem}
      changeItem={changeItem}/>
    </div>
  );
}

export default App;