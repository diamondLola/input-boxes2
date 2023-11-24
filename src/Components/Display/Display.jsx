import React from 'react'
import './Display.css'

export default function Display(props) {
    const {value: text3} = props
  return (
    <div>
        <div className="display">
      <h1>{text3}</h1>
        </div>

    </div>
  )
}
