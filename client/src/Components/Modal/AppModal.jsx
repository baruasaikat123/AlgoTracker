import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MdClose } from 'react-icons/md'
import './appmodal.css'


const AppModal = ({ showModal, setShowModal},props) => {
  
    
    const toggle = () => setShowModal(!showModal);
    
    const closeBtn = <MdClose className="close-btn" onClick={toggle}>&times;</MdClose>
    
    return (
        <>
            {showModal ?
                (<div className="back">
            
                        <Modal size="lg" isOpen={showModal} toggle={toggle} className="custom" >
                            <ModalHeader className="modal-header" toggle={toggle} close={closeBtn}>Add Questions Here</ModalHeader>
                            <ModalBody className="modal-body">
                                
                            </ModalBody>
                            <ModalFooter className="modal-footer">
                                <button className="mybtn" onClick={toggle}>Submit</button>
                            </ModalFooter>
                        </Modal>
                    {/* </animated.div> */}
                </div>
            ):null}
        </>
    )
}

export default AppModal