import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { FiEdit, FiFileText } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getLoggedIn = localStorage.getItem('auth_user');
    if (!getLoggedIn) {
      navigate('/login');
    }
  }, []);

  const authUser = JSON.parse(localStorage.getItem('auth_user'));

  const handleAddNote = () => navigate('/add-note');
  const handleViewNotes = () => navigate(`/notes/${authUser?.id}`);

  return (
    <StyledNotes>
      <h2>A Sample Title</h2>
      <p>
        Click the <strong>Add a note</strong> button to create a note
      </p>
      <div className='btn__container'>
        <button className='btn__create_note' onClick={handleAddNote}>
          <FiEdit className='icon' />
          <span>Add a note</span>
          <IoIosArrowForward className='icon' />
        </button>
        <button className='btn__create_note' onClick={handleViewNotes}>
          <FiFileText className='icon' />
          <span>
            <p>View notes</p>
          </span>
          <IoIosArrowForward className='icon' />
        </button>
      </div>
    </StyledNotes>
  );
};

const StyledNotes = styled.article`
  h2 {
    font-size: 4rem;
    font-weight: 300;
    color: #31374f;
    line-height: 1.5;
    letter-spacing: 3%;
    text-align: center;
  }

  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
    color: #31374f;
    line-height: 1.5;
    letter-spacing: 3%;
  }

  .btn__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7rem auto;
    gap: 2rem;
    width: 100%;
    max-width: 600px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 5rem auto;
    }

    .btn__create_note {
      background: none;
      border: 1px solid #858aa0;
      border-radius: 100px;
      padding: 0 1.5rem;
      height: 4.5rem;
      width: 100%;
      max-width: 800px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      .icon {
        font-size: 1.5rem;
        color: #ff5880;
      }

      span {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        font-size: 1rem;
        color: #31374f;
        font-weight: 300;
        letter-spacing: 3%;
        margin: 0 0.5rem;
        width: 80px;

        &.small {
          font-size: 0.6rem;
          display: block;
          text-align: left;
          margin-top: 0.5rem;
        }
      }

      &:hover,
      &:active {
        border-color: #31374f;
      }
    }
  }
`;

export default Home;
