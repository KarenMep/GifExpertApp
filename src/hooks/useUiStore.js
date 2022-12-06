import { useDispatch, useSelector } from "react-redux"
import { onCloseInfoModal, onOpenInfoModal } from "../store";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isInfoModalOpen
    } = useSelector(state => state.ui);

    const openInfoModal = () => {
        dispatch(onOpenInfoModal())
    }

    const closeInfoModal = () => {
        dispatch(onCloseInfoModal())
    }

    return {
        //Propiedades
            isInfoModalOpen,
        // Metodos
            openInfoModal,
            closeInfoModal
    }
}