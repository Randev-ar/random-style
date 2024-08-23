import React from 'react'

/**
 * The `TooltipIconLabel` component in JavaScript React displays an icon with a tooltip and a label.
 * @returns The `TooltipIconLabel` component is being returned. It consists of a paragraph (`<p>`)
 * element containing a tooltip with an icon, tooltip text, and a label.
 */
export const TooltipIconLabel = ({ icon, tooltipText, label }) => {
    return (
        <p>
            <div class="tooltip">
                <b><i className={icon}></i></b>
                <span class="tooltip-text">{tooltipText}</span>
            </div>
            {label}
        </p>
    )
}
/**
 * Construye un boton con la className predeterminada `boton--e e--2 bg-color--primary mb--1`
 * @param label -> Sera el texto a mostrar en el boton
 * @param icon -> Sera el icono de FontAwsome a mostrar. De enviar esta opcion no se usara label
 * @param color -> Cambia el color de fondo del boton
 * @param className -> Cambia la predefinida
 * @param addClassName -> Agrega opciones a la clase definida
 * @param rest -> Cualquier otro parametro que se envie se pasara directamente al cuerpo del boton
 */
const Button = (props) => {
    const { label, icon, color, className, addClassName, image, tooltipText, ...rest } = props
    const buttonClassName = className || `boton--e e--2 bg-color--${color || 'primary'} mb--1 ${addClassName}`

    return (
        <button className={buttonClassName} {...rest}>
            <span>
                {tooltipText && <TooltipIconLabel icon={icon} label={label} tooltipText={tooltipText} />}
                {!tooltipText && icon && <i className={icon} />}
                {!tooltipText && label && label}
                {image && <img style={{ "max-width": "25px", "width": "100%" }} src={image} alt='img_boton' />}
            </span>
        </button>
    )
}

export default Button