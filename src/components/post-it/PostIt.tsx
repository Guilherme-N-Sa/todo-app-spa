import React, { useRef, useState } from "react";
import Button from "components/button/Button";
import { PostItWrapper } from "./styles";

interface PostItProps {
  id: number;
  title: string;
  content: string;
  color: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedContent: string) => void;
}

const PostIt = ({ id, title, content, color, onDelete, onUpdate }: PostItProps) => {
  const [isEditing, setIsEditing] = useState(false);
  let contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSave = () => {
    let currentContent = contentRef.current?.value || "";
    onUpdate(id, currentContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja deletar esta nota?")) {
      onDelete(id);
    }
  };

  return (
    <PostItWrapper color={color} rotation={(Math.random() - 0.5) * 6}>
      <h3>{title}</h3>
      {isEditing ? (
        <textarea rows={5} defaultValue={content} ref={contentRef} />
      ) : (
        <div className="content">{content}</div>
      )}
      <div className="actions">
        {isEditing ? (
          <Button variant="base" onClick={handleSave}>
            Salvar
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => setIsEditing(true)}>
            Editar
          </Button>
        )}
        <Button variant="outlined-delete" onClick={handleDelete}>
          Deletar
        </Button>
      </div>
    </PostItWrapper>
  );
};

export default React.memo(PostIt);
