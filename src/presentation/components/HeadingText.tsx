import { Typography } from 'antd'
import React from 'react'

type IHeadingText = { 
    text: string,
    span: string,
    size?: number,
    color?: string
}
const HeadingText: React.FC<IHeadingText> = ({text, span, size = "6vmin", color = "#000"}) => {
   const { Text } = Typography
    const heading = {
        fontFamily: 'Rubik, sans-serif',
        fontSize: size,
        fontWeight: "700",
        lineHeight: "85px",
        color: color,
    }
  return (
    <Text style={heading}>{text} <span id='span'> {span} </span></Text>
  )
}

export default HeadingText