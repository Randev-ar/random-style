import React, { useState } from 'react'

/* This is a React component that receives a data object with headers and items. */
const Table = (props) => {
    const {headers, items, className, name, id} = props
    const [order, setOrder] = useState('')

    const handleFilters = field => {
        if(order ===  field) setOrder('')
        setOrder(field)
    }

    const orderBy = (field, list) => {
        const sortByField = (a, b) => {
            if (a[field] < b[field]) {
            return -1;
            }
            if (a[field] > b[field]) {
            return 1;
            }
            return 0;
        }
        if (!list) return []
        return list?.sort(sortByField)
    }

    return (
        <table className={className || 'primaryGridTable'} id={id}>
            <thead>
                <tr>
                    {
                       headers?.map((header) => {
                        return <th key={`${header.field}_${name}`} onClick={() => handleFilters(header.field)}>{header.name}</th>
                       }) 
                    }
                </tr>
            </thead>
            <tbody>
            {
                orderBy(order, items)?.map(item => {
                    return(
                        <tr key={`${item.id}_${name}`}>
                            {
                                headers?.map((header, index) => {
                                    if ( index === 0) return <th scope="row"  key={`${header.field}_${item.id}_${name}`}>{item[header.field]}</th>
                                    return <td key={`${header.field}_${item.id}_${name}`}>{item[header.field]}</td>
                                }) 
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table