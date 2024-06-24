import "./App.css";
import NoteLists from "./components/NoteLists";
import PopupBeforeDelete from "./components/PopupBeforeDelete";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Finish the task on the board",
      category: "Business",
      description:
        "Remember to finish task on the board. After finishing give for evaluation Matt.",
      date: "22/01/2023",
    },
    {
      id: 2,
      title: "Buy a new tea cup",
      category: "Home",
      description: "Remember to buy a new tea cup.",
      date: "22/01/2023",
    },
    {
      id: 3,
      title: "Hang out with Marry",
      category: "Personal",
      description: "Hang out with Marry, friday at 7 pm in Blue Wolf",
      date: "22/01/2023",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor",
      category: "Category",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore pariatur, provident sint nulla id architecto aliquid unde aperiam praesentium deserunt doloremque inventore. Libero, earum possimus recusandae suscipit laudantium provident repellat.",
      date: "22/01/2023",
    },
  ]);

  const addNote = (note) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...note, id: prevNotes.length + 1 },
    ]);
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  return (
    <div>
      <SearchBar addNote={addNote} />
      <NoteLists notes={notes} deleteNote={deleteNote} />
      <PopupBeforeDelete />
    </div>
  );
}
