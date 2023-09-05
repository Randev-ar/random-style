import React from 'react'

/* A React component that is a select input. */
const FormSelect = ({ value, name, className, label, defaultValue, disabled, id, options, onChange, required, multiple }) => {

  const labelProps = {
    htmlFor: name || '',
    className: `form__label ${className?.label || ''}`
  }

  const selectProps = {
    defaultValue: defaultValue || ``,
    name: name || '',
    id: id || '',
    className: `form__group__textarea p--1 ${className?.select || ''}`,
    disabled,
    onChange,
    value,
    required,
    multiple
  }

  return (
    <div className="form__group">
      <label {...labelProps}> {label} </label>
      <select {...selectProps}>
        {!defaultValue && <option className='m--1' defaultValue selected disabled hidden>Seleccionar una opcion</option>}
        {
          options?.map((option, index) => {
            const optionProps = {
              key: `${option.value}_${name}_${index}`,
              value: `${option.value || index}`
            }
            return (<option className='m--1' {...optionProps}>{option.name || option.description}</option>)
          })
        }
      </select>
    </div>
  )
}

export default FormSelect