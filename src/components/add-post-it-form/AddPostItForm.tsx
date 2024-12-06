// src/components/AddPostItForm.tsx
import React, { useState } from "react";
import { INote } from "types";
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface AddPostItFormProps {
  addNote: (note: Omit<INote, "id">) => void;
}

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px",
    marginBottom: "20px",
  },
  select: {
    minWidth: "120px",
  },
  button: {
    alignSelf: "flex-end",
  },
});

const AddPostItForm: React.FC<AddPostItFormProps> = ({ addNote }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#FFF9C4");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("Por favor, preencha o título e o conteúdo.");
      return;
    }
    addNote({ title, content, color });
    setTitle("");
    setContent("");
    setColor("#FFF9C4");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Título"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Conteúdo"
        variant="outlined"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <FormControl variant="outlined" className={classes.select}>
        <InputLabel>Cor</InputLabel>
        <Select value={color} onChange={(e) => setColor(e.target.value as string)} label="Cor">
          <MenuItem value="#F8BBD0">Rosa Pastel</MenuItem>
          <MenuItem value="#BBDEFB">Azul Pastel</MenuItem>
          <MenuItem value="#C8E6C9">Verde Pastel</MenuItem>
          <MenuItem value="#FFF9C4">Amarelo Pastel</MenuItem>
          <MenuItem value="#E1BEE7">Lilás Pastel</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit" className={classes.button}>
        Adicionar Post-It
      </Button>
    </form>
  );
};

export default AddPostItForm;
