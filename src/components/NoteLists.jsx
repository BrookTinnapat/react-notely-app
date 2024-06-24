import React, { useState } from "react";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import PopupBeforeDelete from "./PopupBeforeDelete";
import { Button } from "@material-tailwind/react";

export default function NoteLists({ notes, deleteNote }) {
  const [open, setOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const handleOpen = (note) => {
    setNoteToDelete(note);
    setOpen(!open);
  };

  const handleConfirm = () => {
    if (noteToDelete) {
      deleteNote(noteToDelete.id);
      setOpen(false);
    }
  };

  return (
    <>
      <PopupBeforeDelete
        open={open}
        handleOpen={() => setOpen(!open)}
        handleConfirm={handleConfirm}
      />
      <div className="m-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-6 w-full h-[250px] shadow-lg rounded-xl relative"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span>{note.category}</span>
                  <div>
                    <button className="mr-2">
                      <CheckIcon className="size-6 text-gray-500" />
                    </button>
                    <button className="mr-2">
                      <PencilIcon className="size-6 text-gray-500" />
                    </button>
                    <Button
                      onClick={() => handleOpen(note)}
                      variant="text"
                      className="rounded-full p-1 mb-4"
                    >
                      <TrashIcon className="size-6 text-gray-500" />
                    </Button>
                  </div>
                </div>
                <p className="font-bold text-lg">{note.title}</p>
                <p className="text-gray-700">
                  {note.description.length > 100
                    ? note.description.substring(0, 150) + "..."
                    : note.description}
                </p>
                <div className="text-sm text-gray-500 absolute right-4 bottom-4">
                  {note.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
