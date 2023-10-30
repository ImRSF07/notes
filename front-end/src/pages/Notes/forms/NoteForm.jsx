import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { toast } from 'react-toastify';

import PageLayout from '../../../layouts/PageLayout';

const AddNote = ({ mode }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const getLoggedIn = localStorage.getItem('auth_user');
    if (!getLoggedIn) {
      navigate('/login');
    }
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const authUser = JSON.parse(localStorage.getItem('auth_user'));

      if (mode === 'add') {
        // handle note add functionality
      }

      if (mode === 'edit') {
        // handle note edit functionality
      }

      navigate(`/notes/${authUser?.id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <PageLayout>
      <StyledAddNoteForm>
        <h2 className='form__title'>
          {`${mode === 'add' ? 'Add' : 'Edit'}`} Note Form
        </h2>
        <div className='form__input_group'>
          <h3 className='input__title'>Name</h3>
          <input
            className='input__field'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form__input_group'>
          <h3 className='input__title'>Title</h3>
          <input
            className='input__field'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form__input_group'>
          <h3 className='input__title'>Description</h3>
          <textarea
            className='input__field'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className='btn__submit' onClick={handleSubmit}>
          Submit Note
        </button>
      </StyledAddNoteForm>
    </PageLayout>
  );
};

const StyledAddNoteForm = styled.form`
  .form__title {
    font-size: 4rem;
    font-weight: 300;
    color: #31374f;
    line-height: 1.5;
    letter-spacing: 3%;
    text-align: center;
  }

  .form__input_group {
    display: flex;
    width: 100%;
    margin: 0.5rem 0rem;

    .input__title {
      color: red;
      width: 20%;
    }

    .input__field {
      width: 80%;
    }
  }

  .btn__submit {
    width: 100%;
  }
`;

export default AddNote;
