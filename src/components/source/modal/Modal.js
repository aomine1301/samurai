import React from 'react';
import Modal from 'react-modal';
import {Setting} from "../setting/Setting";
import classes from './modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


export const ModalWindow = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={classes.modalContainer}>
            <button className={classes.buttonOpenModalWindow} onClick={openModal}><Setting/></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className={classes.modalClose} onClick={closeModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className={classes.container}>
                    <div> <h2 ref={_subtitle => (subtitle = _subtitle)}>Setting</h2>


                        <form>
                            <label style={{marginRight:'10px'}} htmlFor="input">New name</label>
                            <input style={{marginRight:'10px'}}/>
                            <button type={"submit"}>Submit</button>
                        </form></div>
                   <div>
                       <button>Save</button>
                   </div>
                </div>
            </Modal>
        </div>
    );
}
