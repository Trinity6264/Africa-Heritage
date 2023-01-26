import React from 'react'

const TextField = ({hintText,lblText}) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={lblText}>{lblText}</label>
            <input type="text" placeholder={hintText} id={lblText} />
        </div>
    )
}

export default TextField