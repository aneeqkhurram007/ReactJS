import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css';
import { useState } from 'react';

function App() {

  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevItems) => {
      return [...prevItems, note];
    });
    console.log(note);

  }
  const onDelete = (id) => {
    setAddItem((prevItem) =>
      prevItem.filter((currData, index) => {
        return index !== id;
      })
    )
  }
  return (
    <div className="App">
      <header className="App-header" >

        <Header />
        <CreateNote passNote={addNote} />
        {
          addItem.map((val, index) => {
            return (<Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />);
          })
        }
        <Footer />

      </header>
    </div>
  );
}

export default App;
