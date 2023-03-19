import React, { useState }  from 'react'
/* import logo from '../../assets/logo320x132.png'
import userImg from '../../assets/guest.webp'; */
import { NavLink } from 'react-router-dom';

const Sidebar = ({ user, logout, rol, style, navList }) => {
    let titulo   = process.env.REACT_APP_WEBSITE_NAME;
    const [active, setActive] = useState(false);

    return (
        <aside className={`sidebar ${active && 'active'}  ${user===null && 'd--none'}`} style={ style && style.sidebar }>

            <div className="logo_content" >
                <div className="logo" style={ style && style.logo }>
                    {/* <img src={ style?.logo?.src || logo} className="logoname" alt="logo"  style={{maxWidth: '10rem', maxHeight: '49px'}}/> */}
                    {titulo && <div className="logoname">{titulo}</div>}
                </div>
                <i className="fa-solid fa-bars" id='btn' onClick={() => setActive(!active)}></i>
            </div>
            <ul className="nav_list">
                {
                    navList?.map((navItem) => 
                    <li key={navItem.to}>
                        <NavLink className="navbar__link" to={navItem.to}>
                            <i className={navItem.icon} ></i>
                            <span className="links_name">{navItem.name}</span>
                        </NavLink>
                        <span className="tooltip">{navItem.name}</span>
                    </li>)
                }
            </ul>
            <div className="profile_content bg--primary">
                <div className="profile">
                    <div className="profile_details">
                        <NavLink to='/profile'>
                            {/* <img src={user?.photoURL ? user.photoURL : userImg} 
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src="../../../assets/guest.webp";
                                }}
                                alt="imagen_del_usuario"
                            /> */}
                        </NavLink>
                        <div className="name_job">
                            <div className="name">{user?.displayName}</div>
                            {rol && <div className="job">{rol}</div>}
                        </div>
                    </div>
                    <i className="fas fa-sign-out-alt" id="log_out" onClick={logout} ></i>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
