import styled from "styled-components";

export const PostItWrapper = styled.div<{ color: string; rotation: number }>`
  background-color: ${(props) => props.color || "#FFF9C4"};
  border-radius: 0px;
  padding: 1rem;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 0.2s;
  user-select: none;

  textarea {
    width: 100%;
    resize: none;
    padding: 5px;
    background-color: #ffffff3d;
    color: #616161;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: scale(1.04) rotate(0deg);
  }

  h3 {
    margin: 0;
    color: #424242;
    font-size: 1.2rem;
  }

  .content {
    flex-grow: 1;
    margin: 10px 0;
    color: #616161;
    overflow: auto;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }
`;
