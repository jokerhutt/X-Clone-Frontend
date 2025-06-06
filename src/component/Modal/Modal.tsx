import { useState, type ReactNode} from "react";
import type { ModalType } from "../../types/ModalType";
import { useModal } from "../../context/misc/ModalProvider";


type ModalProps = {
    children: ReactNode;
    setToggle: (type: ModalType) => void;
  };
  
  function Modal({ children, setToggle }: ModalProps) {
    const {modalData, setModalData} = useModal();

    return (
        <div 
        className="w-full z-10 h-full top-0 pt-16 px-4 fixed backdrop-blur-sm
        flex justify-center items-start"
        onClick={() => {
            if (modalData) {
                setModalData(null);
            }
            setToggle(null)
        }} 
         >

            <div 
            className="w-full h-fit"
            onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>

        </div>
    )

}

export default Modal;