import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css';
import { useState } from 'react';

function App() {
  const addNote = (note) => {
    setAddItem((prevItems) => {
      return [...prevItems, note];
    });
    console.log(note);

  }
  const [addItem, setAddItem] = useState([]);

const onDelete=(id)=>{
setAddItem((prevItem)=>{
  prevItem.filter()
})
}
  return (
    <div className="App">
      <header className="App-header" >

        <Header />
        <CreateNote passNote={addNote} />
        {
          addItem.map((val,index)=>{
          return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />;
        })
        }
        <Footer />

      </header>
    </div>
  );
}

export default App;
