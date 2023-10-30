import { useContext } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Button } from './Button';

import { ModalContext } from '../context/ModalContext';

const Modal = ({
  modalClass = 'info',
  headerText = '',
  bodyText,
  mainButton,
}) => {
  const { openModal, setOpenModal } = useContext(ModalContext);

  const handleCloseModal = () => setOpenModal(false);

  if (openModal) {
    return ReactDOM.createPortal(
      <ModalContainer>
        <ModalContent>
          <ModalHeader className={modalClass}>
            <h2>{headerText}</h2>
            <span class='close' onClick={handleCloseModal}>
              &times;
            </span>
          </ModalHeader>
          <ModalBody>
            <p>{bodyText}</p>
          </ModalBody>
          <ModalFooter>
            <div className='button__wrapper'>
              {mainButton}
              <Button btnClass='primary' onClick={handleCloseModal}>
                Close
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>,
      document.getElementById('modal')
    );
  }
};

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  height: 92vh;
  width: 120vh;
  position: absolute;
  left: 50%;
  margin-left: -58vh;
  top: 52%;
  margin-top: -45vh;
  background-color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-left: -50%;
  }
`;

const ModalHeader = styled.div`
  height: 10vh;
  width: 100%;
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;

  &.danger {
    background: red;
  }

  &.info {
    background: blue;
  }

  .close {
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 11.5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .close {
      display: none;
    }
  }
`;

const ModalBody = styled.div`
  width: 100%;
  height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .close {
      display: none;
    }
  }
`;

const ModalFooter = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;

  .button__wrapper {
    display: flex;
    gap: 1rem;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      }
    }
  }
`;

Modal.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string.isRequired,
  mainButton: PropTypes.element,
};

export default Modal;
