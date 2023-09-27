import React, { useEffect, useState } from 'react'
import {
    NavLink,
    useLocation
} from 'react-router-dom'

const Breadcrumb = () => {
    let location = useLocation();
    const [pathName, setPathName] = useState(null)
    let route = ''

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            location.pathname !== '/' ?
                setPathName(location.pathname.split('/'))
                :
                setPathName([''])
        }
        return () => { isMounted = false }
    }, [location])
    return (
        <nav className="breadcrumb">
            <ol className="conteiner breadcrumb__list">
                {
                    pathName?.map(path => {
                        if (path !== '') { route = `${route}/${path}` }
                        return (
                            <li className="breadcrumb__list__item ms--1" key={`path${path}`}>
                                {path === '' && <NavLink to="/">Home</NavLink>}
                                {path !== '' && <NavLink to={`${route}`}>/ {path.replaceAll('-', ' ')}</NavLink>}
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
    )
}

export default Breadcrumb
