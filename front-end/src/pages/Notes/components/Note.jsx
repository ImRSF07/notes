import React from 'react';

import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Note = ({ title, name, description, onEditNote, onDeleteNote }) => {
  return (
    <StyledNoteWrapper>
      <div className='icon__wrapper'>
        <AiFillEdit className='icon icon-edit' onClick={onEditNote} />
        <AiFillDelete className='icon icon-delete' onClick={onDeleteNote} />
      </div>
      <h3 className='note__title'>{title}</h3>
      <h3 className='note__name'>{name}</h3>
      <p className='note__description'>{description}</p>
    </StyledNoteWrapper>
  );
};

export default Note;

const StyledNoteWrapper = styled.div`
  cursor: pointer;
  padding: 1rem;
  width: 250px;
  height: 300px;
  border: solid black;
  margin: 0.5rem;

  .icon__wrapper {
    text-align: right;

    .icon {
      font-size: 20px;
      margin: 0 0.5rem;

      &.icon-edit {
        color: green;
      }

      &.icon-delete {
        color: red;
      }
    }
  }

  &.add-note {
    .add__note__wrapper {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .add__note__icon {
        font-size: 100px;
      }
    }
  }
`;
