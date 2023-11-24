import React from 'react'
import { useState, useEffect } from 'react'
import './Box2.css'
import Box3 from '../Box3/Box3'

export default function Box2(props) {
    const {value: text} = props
    const [text2, setText2] = useState(text)
    useEffect(()=>{
        setText2(text)
    },[text])
  return (
    <div>
       <div className="box2">
            <input type="text" onChange={(e) => {setText2(e.target.value)}} />
            <Box3 value={text2}/>
        </div>
    </div>
  )
}
