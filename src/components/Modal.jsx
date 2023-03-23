import React, { useEffect, useState } from 'react';

const Modal = (props) => {
    let { visible, children, onClose, bgClose, className, style } = props;

    const onModalClick = (e) => {
        e.stopPropagation();
    }

    const onCloseHandler = () => {
        onClose && onClose();
    };

    const onBgClick = () => {
        bgClose && onCloseHandler();
    }

    return visible?(

        <div className={"modal__overlay "}  onClick={onBgClick}>
            <div className={`modal ${className}`} onClick={onModalClick} style={style}>
                <div className={'modal__header'}>
                    <button className={"modal__closeBtn"} onClick={onCloseHandler}><i className="fas fa-times"></i></button>
                </div>
                <div className={'modal__body'}>
                    {children}
                </div>
            </div>
        </div>
        
    ) :
    null;
}

const ModalButtonWrapper = ({buttonText, children, className, bgClose, open, classNameModal, alCerrar, toggleOpen, setToggleOpen }) => {
    const [visible, setVisible] = useState(false);
    const [classNameM, setclassNameM] = useState('')

    useEffect(() => {
        toggleOpen !== null &&  setVisible(toggleOpen)
        setToggleOpen && setToggleOpen(null)
    }, [toggleOpen, setToggleOpen])
    
    useEffect(() => {
        open&& setVisible(true)
        classNameModal&& setclassNameM(classNameModal)
    }, [open, classNameModal])
    
    const onButtonClick = () => setVisible(true);

    const onClose = () => {
        open=false
        setVisible(false);
        alCerrar && alCerrar()
    };

    return (
        <>
            <button className={className} onClick={onButtonClick} type='button'><span>{buttonText}</span></button>
            <Modal visible={visible} className={classNameM} onClose={onClose} bgClose={bgClose}>
                {children}
            </Modal>
        </>
    );
}


export { Modal as default, ModalButtonWrapper };