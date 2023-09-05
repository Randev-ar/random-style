import { useEffect, useState } from "react"

const Form = ({onSubmit, onChange, children}) => {
    return(
        <form className="form" onSubmit={onSubmit} onChange={onChange} >
            {children}
        </form>
    )
}

const Input = ({ name, label, value, type, placeholder, expresionRegular, leyendaError, required}) => {
    const [current, setCurrent]             = useState(value);
    const [valid, setValid]                 = useState('');
    const [empty, setEmpty]                 = useState(false)
    const [success, setSuccess]             = useState('none');
    const [error, setError]                 = useState('none');
    const expresiones = {
        usuario: /^[a-zA-Z0-9-]{4,16}$/,             // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,                // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/,                          // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/                          // 7 a 14 numeros.
    }

    const validacion = () => {
        if ( expresionRegular ) {
            if(expresiones[expresionRegular].test(current)){
                setValid('--success')
                setSuccess('')
                setError('none')
            }
            else {
                setValid('--error')
                setError('')
                setSuccess('none')
            }
        }
        if (required){
            if(current?.length>0){
                setValid('--success')
                setSuccess('')
                setError('none')
                setEmpty(false)
            }
            else if( expresionRegular && expresiones[expresionRegular].test(current)){
                setValid('--success')
                setSuccess('')
                setError('none')
            }
            else  if( !current?.length>0 ) {
                setValid('--error')
                setError('')
                setSuccess('none')
                setEmpty(true)
            }
            else {
                setValid('--error')
                setError('')
                setSuccess('none')
            }
        }
    }

    return(
        <div>
            <label 
                className={`form__label${valid}`} htmlFor={name}> {label}
            </label>

            <div className="form__group">
                <input 
                    className={`form__group__input${valid}`}
                    type={type} 
                    id={name} 
                    name={name} 
                    value={current} 
                    onChange={ e => setCurrent(e.target.value) }
                    placeholder={placeholder}
                    onKeyUp={validacion}
                    onBlur={validacion}/>
                    
                <i className={`fas fa-check-circle form__group__icono__success`}    style={{'display':`${success}`}}></i>
                <i className={`fas fa-times-circle form__group__icono__error`}      style={{'display':`${error}`}}></i>
            </div>

            {empty && <p className={`form__leyenda--error`}>{leyendaError}</p>}
        </div>
    )
}

const Select = ({ name, label, value, children}) => {
    const [current, setCurrent] = useState(value);

    return(
        <div className='form_item'>
            <label 
                className="form__label" htmlFor={name}> {label}
            </label>

            <div className="form__group">
                <select className="form__group__input"  
                id={name} name={name} value={current} onChange={ e => setCurrent(e.target.value) }>

                    {children}
                </select>
            </div>
        </div>
    )
}

const Checkbox = ({ name, label, value }) => {
    const [current, setCurrent] = useState(value);
    return(
        <div className="form__tyc">
            <label className="form__label" htmlFor={name}>
                <input className="form__tyc__checkbox" type="checkbox" name={name} id={name} checked={current} onChange={e => setCurrent(e.target.checked)}/>
                {label}
            </label>
        </div>
    )
}

const Textarea = ({ name, label, value, type, placeholder, rows}) => {
    const [current, setCurrent]             = useState(value);

    return(
        <div>
            <label 
                className={`form__label`} htmlFor={name}> {label}
            </label>

            <div className="form__group">
                <textarea 
                    className={`form__group__textarea`}
                    type={type} 
                    id={name} 
                    name={name} 
                    value={current} 
                    onChange={ e => setCurrent(e.target.value) }
                    placeholder={placeholder}
                    rows={rows}/>
            </div>
        </div>
    )
}

const Submit = ({ submited, submitedMessage, buttonText }) => {
    const [showMessage, setShowMessage] = useState(submited)

    useEffect(() => {
        const ctrl = new AbortController();
        if (!submited) return
        setShowMessage(true)
        setTimeout(setShowMessage(false),10000);
        return () => ctrl.abort()
    }, [submited])

    return(
        <div className="form__submit">
            <button name='submit' type="submit" className="form__submit__button">{buttonText}</button>
            { showMessage && <p>{submitedMessage}</p>}
        </div>
    )
}

export {
    Form,
    Input,
    Select,
    Checkbox,
    Textarea,
    Submit
}