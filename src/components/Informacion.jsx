import { useUiStore } from "../hooks"
import { InfoModal } from "./InfoModal"

export const Informacion = () => {

  const {openInfoModal} = useUiStore();

  const onClickModal = (event) => {
    console.log({onClick: event})
    openInfoModal();
  }

  const onDoubleClick = (event) => {
    console.log({onDoubleClick: event})
    openInfoModal();
  }

  return (
    <div
      onDoubleClick={onDoubleClick}
      // onClick={onClickModal}
      className='info'>
      <i
        className="fas fa-info-circle"><InfoModal /></i>
    </div>
  )
}
