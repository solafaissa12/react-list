import './CodeChallenge1.css'
import Text from './Text/Text'
import Input from './Input/Input'
import { useState } from 'react'

const CodeChallenge1 = () => {

    const [color, setColor]=useState('')
    const [isDark, setIsDark]=useState(true)
  return (
    <div>
        <Text  color={color} isDark={isDark}/>
        <Input color={color} setColor={setColor} isDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}

export default CodeChallenge1