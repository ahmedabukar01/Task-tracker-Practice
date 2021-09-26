import React from 'react'
import PropTypes from 'prop-types'

export const Buttons = ({text,color}) => {
    return (
        <button style={{backgroundColor:color}}>{text}</button>
    )
}

Buttons.defaultProps = {
    color:'black',
    text: 'test'
}
Buttons.propTypes = {
    text: PropTypes.string
}
export default Buttons
