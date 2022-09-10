import React, { useState } from 'react'
import './Components/NoteContainer'
import NoteContainer from './Components/NoteContainer'
import Sidebar from './Components/Sidebar'
import './App.css'

const App = () => {

  const [notes, setNotes] = useState([]);
    
  const date = new Date();


  const addNote = (val) =>{
    const temp = [...notes];

    temp.unshift({
      id: Date.now(),
      text: "",
      time: date.toLocaleTimeString(),
      color: val
    });

    setNotes(temp);
  }

  const delNote = (id) => {
    const res = notes.filter((val)=>{
      return (
        val.id !== id
      )
    });
    setNotes(res);
  }

  return (
    <div className='App'>
      <Sidebar addNote={addNote} />
      <NoteContainer noteSend={notes} delNote={delNote}/>
    </div>
  )
}

export default App
