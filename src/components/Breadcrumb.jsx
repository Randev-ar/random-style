import React, { useEffect, useState } from 'react'
import {
    NavLink,
    useLocation
} from 'react-router-dom'

const Breadcrumb = ({ customPathName }) => {
    let location = useLocation();
    const [pathName, setPathName] = useState(customPathName || null)
    let route = ''

    useEffect(() => {
        const ctrl = new AbortController()
        if (!customPathName) {
            location.pathname !== '/'
                ? setPathName(location.pathname.split('/'))
                : setPathName([''])
        }
        return () => ctrl.abort()
    }, [location])

    return (
        <nav className="breadcrumb">
            <ol className="container breadcrumb__list">
                {
                    pathName?.map(path => {
                        if (path !== '') { route = `${route}/${path}` }
                        return (
                            <li className="breadcrumb__list__item" key={`path${path}`}>
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
