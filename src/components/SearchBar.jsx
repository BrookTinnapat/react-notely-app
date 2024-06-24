import FormDialog from "./FormDialog";

export default function SearchBar({ addNote }) {
  return (
    <>
      <div className="sticky top-0">
        <div className="bg-white p-4 flex gap-4 justify-between">
          <div className="text-4xl p-0 m-0">Note App</div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="p-2 w-[70rem] rounded-xl border-none outline-none flex-grow bg-secondary"
            />
          </div>
          <FormDialog addNote={addNote} />
        </div>
      </div>
    </>
  );
}
