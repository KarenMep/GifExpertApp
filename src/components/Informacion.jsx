// import { useUiStore } from "../hooks"
// import { useState } from "react"
import { useState } from "react";
// import { useFetchGifs } from "../hooks/useFetchGifs"
// import { InfoModal } from "./InfoModal"
import Modal from 'react-modal';

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

export const Informacion = () => {


  // const {openModal} = useFetchGifs()

  // const {openInfoModal} = useUiStore();
  // const [modalIsOpen, setIsOpen] = useState(false)

  // const onClickModal = (event) => {
  //   console.log({onClick: event})
  //   // openInfoModal();
  //   setIsOpen(true)
  // }

  // const onDoubleClick = (event) => {
  //   console.log({onDoubleClick: event})
  //   openInfoModal();
  // }

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Informacion de proyecto</h1>
        <p>Este proyecto fue creado con la API GIPHY y con ayuda del curso de Fernando Herrera en Udemy
        </p>
        <p>Escriba sobre el buscador el GIF que desea buscar</p>

      </Modal>
    <div
      // onDoubleClick={onDoubleClick}
      className='info'>
      <i
        onClick={openModal}
        className="fas fa-info-circle"></i>
    </div>
    </>
  )
}
