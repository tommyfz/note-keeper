import React, { useState } from "react";

const CreateArea = (props) => {
  const [inputNote, setInputNote] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputNote((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(inputNote);
            setInputNote({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
