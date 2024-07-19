import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  const createNote = (note, key) => {
    return <Note key={key} title={note.title} content={note.content} />;
  };

  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    console.log(note);
    setNotes((prev) => {
      return [...prev, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((_, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
