// import { useState } from "react";
import Modal from "react-modal"
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { useUiStore } from "../hooks";

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

    // const {isInfoModalOpen, closeInfoModal} = useUiStore();

    // const onCloseModal = () => {
    //     console.log('Cerrando modal')
    //     // closeInfoModal();
    //     setIsOpen(false)
    // }

    // const {modalIsOpen, closeModal} = useFetchGifs();



  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
    >
        <h1>Información del proyecto222</h1>
        <p>Este proyecto fue realizado gracias al curso de Fernando Herrera en Udemy
          con la ayuda de la API GIPHY 
        </p>
    </Modal>
  )
}
