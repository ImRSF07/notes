import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import AddNote from './components/AddNote';
import Note from './components/Note';
import Modal from '../../components/Modal';

import { ModalContext } from '../../context/ModalContext';

import { handleGetRequest } from '../../services/axios';

const MyNotes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [notesChanged, setNotesChanged] = useState(false);
  const [modal, setModal] = useState(null);

  const { setOpenModal } = useContext(ModalContext);

  useEffect(() => {
    const getLoggedIn = localStorage.getItem('auth_user');
    if (!getLoggedIn) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // handle note fetch functionality
        const authUser = JSON.parse(localStorage.getItem('auth_user'));
        if (authUser?.id) {
          const request = {
            user_id: authUser?.id,
          };
          const response = await handleGetRequest('/notes', request);
          setNotes(response?.data?.result?.notes);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    })();
  }, [notesChanged]);

  const handleAddNote = () => navigate('/add-note');

  const handleDeleteNote = () => {
    // handle note delete functionality

    alert('note deleted');
    setNotesChanged(!notesChanged);
    setOpenModal(false);
    setModal(null);
  };

  const handleToDeleteNote = () => {
    setOpenModal(true);
    setModal(
      <Modal
        modalClass='danger'
        headerText='Are you sure you want to delete this note?'
        bodyText='Deleted notes cannot be recovered. Are you sure you want to continue?'
        mainButton={<Button onClick={() => handleDeleteNote()}>Delete</Button>}
      />
    );
  };

  const handleToEditNote = () => navigate('/edit-note');

  return (
    <StyledMyNotes>
      {modal}
      <h2 className='notes__title'>My Notes</h2>
      <div className='notes__wrapper'>
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            name={note.name}
            description={note.description}
            onEditNote={handleToEditNote}
            onDeleteNote={handleToDeleteNote}
          />
        ))}
        <AddNote onAddNote={handleAddNote} />
      </div>
    </StyledMyNotes>
  );
};

const StyledMyNotes = styled.section`
  .notes__title {
    font-size: 4rem;
    font-weight: 300;
    color: #31374f;
    line-height: 1.5;
    letter-spacing: 3%;
    text-align: center;
  }

  .notes__wrapper {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    overflow: auto;
    width: 820px;
  }
`;

export default MyNotes;
