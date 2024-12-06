// src/App.tsx
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import PostIt from "./components/post-it/PostIt";
import AddPostItForm from "./components/add-post-it-form/AddPostItForm";
import { INote } from "types";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import Button from "./components/button/Button";

const Wrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PostItContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  max-width: 1600px;
`;

const App: React.FC = () => {
  const savedNotesString = localStorage.getItem("postIts");
  const savedNotes = savedNotesString ? JSON.parse(savedNotesString) : [];
  const [notes, setNotes] = useState<INote[]>(savedNotes);

  useEffect(() => {
    localStorage.setItem("postIts", JSON.stringify(notes));
  }, [notes]);

  const addNote = useCallback((note: Omit<INote, "id">) => {
    const newNote: INote = {
      ...note,
      id: Date.now(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }, []);

  const deleteNote = useCallback((id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }, []);

  const updateNote = useCallback((id: number, updatedContent: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content: updatedContent } : note))
    );
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      // Se não houver destino (soltar fora), não faça nada
      if (!destination) {
        return;
      }

      // Se a posição não mudou, não faça nada
      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
      }

      // Reorganizar a lista
      const reorderedNotes = Array.from(notes);
      const [movedNote] = reorderedNotes.splice(source.index, 1);
      reorderedNotes.splice(destination.index, 0, movedNote);

      setNotes(reorderedNotes);
    },
    [notes]
  );

  return (
    <Wrapper>
      <h1>Aplicação de Post-It</h1>
      <AddPostItForm addNote={addNote} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="postits" direction="horizontal">
          {(provided) => (
            <PostItContainer ref={provided.innerRef} {...provided.droppableProps}>
              {notes.map((note, index) => (
                <Draggable key={note.id} draggableId={note.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <PostIt
                        id={note.id}
                        title={note.title}
                        content={note.content}
                        color={note.color}
                        onDelete={deleteNote}
                        onUpdate={updateNote}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </PostItContainer>
          )}
        </Droppable>
      </DragDropContext>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </Wrapper>
  );
};

export default App;
