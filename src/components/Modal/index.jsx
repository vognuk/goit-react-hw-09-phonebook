import React, { useEffect } from 'react'
import PropTypes from "prop-types"
import s from "./Modal.module.css"

const Modal = ({ children, handleKeyDown, closeModal }) => {

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
  }, [handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div
      className={s.Overlay}
      onClick={handleBackdropClick}>
      <div className={s.Modal}>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClose: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
