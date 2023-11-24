import React from 'react'
import { useState, useEffect } from 'react'
import './Box3.css'
import Display from '../Display/Display'

export default function Box3(props) {
    const {value: text2} = props
    const [text3, setText3] = useState(text2)
    useEffect(()=>{
        setText3(text2)
    },[text2])
  return (
    <div>
      <div className="box3">
            <input type="text" onChange={(e) => {setText3(e.target.value)}} />
            <Display value={text3}/>
        </div>
    </div>
  )
}
