import React from "react"
import './style.css'
import boxes from './boxes'


export default function Box(props) {


    const style = props.on ? 'fox' : 'box'

    return(
    <div 
        className={style} 
        onClick={() => props.toggle(props.id)}
    >
        {props.id}
    </div>
    )
}