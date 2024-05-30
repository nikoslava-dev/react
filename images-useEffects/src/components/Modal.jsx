import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, isModelOpen, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (isModelOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isModelOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog}  onClose={onClose}>
      {isModelOpen ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
