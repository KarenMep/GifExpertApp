import { useState } from "react";
import Modal from "react-modal"
import { useUiStore } from "../hooks";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export const InfoModal = () => {

    const {isInfoModalOpen, closeInfoModal} = useUiStore();

    const onCloseModal = () => {
        console.log('Cerrando modal')
        closeInfoModal();
    }

  return (
    <Modal
        isOpen={isInfoModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
    >
        <h1>Información del proyecto</h1>
    </Modal>
  )
}
