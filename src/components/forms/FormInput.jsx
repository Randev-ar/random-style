import React from 'react'

const FormInput = ({required, label, type, name, id, defaultValue, disabled, className, value, onChange, readOnly}) => {
  const labelProps = {
    htmlFor: name || '', 
    className: `form__label ${className?.label || ''}`
  }
  const commonProps = {
    type: type || 'text',
    name: name || '',
    id: id || '',
    disabled,
    value,
    onChange,
    readOnly,
    required
  }
  const textAreaProps = {
    ...commonProps,
    defaultValue: defaultValue || ``,
    className: `form__group__textarea ${className?.textarea || ''}`,
  }
  const inputProps = {
    ...commonProps,
    defaultValue: defaultValue || ``,
    defaultChecked: defaultValue,
    className: `form__group__input ${className?.input || ''}`
  }
  const checkBox = {
    ...commonProps,
    defaultChecked: defaultValue || false,
    className: `form__group__input ${className?.input || ''}`
  }

  if(type === 'checkbox') return (
    <div className={`form__group`}>
      <label {...labelProps} >{label}</label>
      <input {...checkBox}/>
    </div>
  )
  return(
    <div className={`form__group ${className?.group || ''}`}>
      <label {...labelProps} >{label}</label>
      {
        type === 'textarea' 
        ? <textarea  {...textAreaProps} />
        : <input {...inputProps}/>
      }
    </div>
  )
}

export default FormInput