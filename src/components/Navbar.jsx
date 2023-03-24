import React, { useState } from 'react'

const Navbar = ({src, titulo, list}) => {
    const [show, setShow] = useState('')
    return (
        <nav className="navbar--faqstyle">
            <label className='navbar__brand'>
                <img src={src} className="logoname" alt="logo"  style={{maxWidth: '10rem'}}/>
                <p className="navbar__link">{titulo}</p>
            </label>
            <ul className={`navbar__linkGroup ${show}`}>
                {list}
            </ul>
            <span className='navbar__btn' onClick={() => show===''?setShow('show'):setShow('')}>
                <i className="fas fa-bars"></i>
            </span>
        </nav>
    )
}

export default Navbar
