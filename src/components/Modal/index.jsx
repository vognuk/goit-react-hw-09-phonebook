import { Component } from "react"
import PropTypes from "prop-types"
import s from "./Modal.module.css"

class Modal extends Component {
  static propTypes = {
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

  state = {
    showModal: false,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div
        className={s.Overlay}
        onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
