import { Typography } from 'antd'
import React from 'react'


const HeadingText = ({text, span, size = "6vmin", color = "#000", br = false}) => {
   const { Text } = Typography
    const heading = {
        fontFamily: 'Rubik, sans-serif',
        fontSize: size,
        fontWeight: "700",
        color: color,
    }
  return (
    <Text style={heading}>{text} { br ? <br />  : null} <span id='span'> {span} </span></Text>
  )
}

export default HeadingText