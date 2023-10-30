import React from 'react';

import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa6';

const AddNote = ({ onAddNote }) => {
  return (
    <StyledAddNoteWrapper>
      <span className='add__note__wrapper' onClick={onAddNote}>
        <FaPlus className='add__note__icon' />
        <h3>Add Note</h3>
      </span>
    </StyledAddNoteWrapper>
  );
};

const StyledAddNoteWrapper = styled.div`
  cursor: pointer;
  padding: 1rem;
  width: 250px;
  height: 300px;
  border: solid black;
  margin: 0.5rem;

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
`;

export default AddNote;
