import './App.css'

import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [boxArray, setBoxArrary] = React.useState(boxes)
    
    function toggle(param) {
        setBoxArrary((prevBoxArray)=> {
            const newArray = []
            for (let i = 0; i < prevBoxArray.length; i++) {
                if (param === prevBoxArray[i].id) {
                    var newBox = {...prevBoxArray[i], on : !prevBoxArray[i].on}
                    newArray.push(newBox)
                }
                else {
                    const sameBox = newArray.push(prevBoxArray[i])
                }
            }
            return newArray
        }
        )
    }


// for i in boxarray
// if  id matches i, then toggle
// otherwise keep it the same
// push new results to newArray
    const mappedBox = boxArray.map((i) => ( 
        <Box
            key={i.id}
            id={i.id}
            on={i.on}
            toggle={toggle}
         />

    ))
    return (
        <div>
            {mappedBox}
        </div>
    )
}



