import { useRef, useEffect } from 'react'

export default function Modal({title, body, uid, visible, onClose}) {
  const modalRef = useRef(null);

    useEffect(() => {
      if (!modalRef.current) {
        return;
      }
      visible ? modalRef.current.showModal() : modalRef.current.close();
    }, [visible]);

    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    }

    const handleESC = (event) => {
      event.preventDefault();
      handleClose();
    }

  return (
    <dialog ref={modalRef} id={uid} className="modal" onCancel={handleESC}>
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">{body}</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={handleClose}>Close</button>
        </div>
      </form>
    </dialog>
  )
}
