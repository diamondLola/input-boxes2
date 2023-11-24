import React from 'react'
import { useState } from 'react'
import './Box1.css'
import Box2 from '../Box2/Box2'


export default function Box1() {

    const [text, setText] = useState('gap')



  return (
    <div>
        <div className="box1">
            <input type="text" onChange={(e) => {setText(e.target.value)}} />
            <Box2 value={text}/>
        </div>
      
    </div>
  )
}
