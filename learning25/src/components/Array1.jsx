import React from 'react'

const Array1 = () => {
    var name = ["abhay","meet","archi","sahil"] 
  return (
    <div style={{textAlign:'center'}}>
        {
            name.map((n) => {
                return <li>{n}</li>
            })
        }
    </div>
  )
}

export default Array1