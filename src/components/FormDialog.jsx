import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
  Option,
  Select,
} from "@material-tailwind/react";

export default function AddNoteDialog({ addNote }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({
      title,
      category,
      description,
      date: new Date().toLocaleDateString("en-GB"),
    });
    setTitle("");
    setCategory("");
    setDescription("");
    handleClose();
  };

  return (
    <>
      <Button className="bg-primary rounded-full" onClick={handleOpen}>
        + Add
      </Button>
      <Dialog open={open} size="sm" handler={handleOpen}>
        <DialogBody>
          <Typography className="mb-10 text-gray-800" variant="h4">
            Add Note
          </Typography>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex justify-between">
                <Typography className="-mb-1" color="blue-gray" variant="h6">
                  Title
                  <Input
                    label="Add title"
                    className="w-[16rem]"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </Typography>

                <Typography color="blue-gray" variant="h6">
                  Category
                  <div className="w-42 mb-4">
                    <Select
                      label="Select Category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                    >
                      <Option value="Personal">Personal</Option>
                      <Option value="Home">Home</Option>
                      <Option value="Business">Business</Option>
                    </Select>
                  </div>
                </Typography>
              </div>
              <Textarea
                label="Add Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="gray" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="gradient" color="blue">
                Add
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
