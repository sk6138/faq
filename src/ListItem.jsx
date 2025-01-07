import React, { useState } from 'react'

export default function ListItem({dataitem}) {
  const [show,setshow] = useState(false)

  
  return (
    <div className= {(show)? "listborder":"list"} >
      <em>
        {dataitem.id}
      </em>
      <em>
        {dataitem.question}
      </em>
      {
        (show) ? <em>
        {dataitem.answer}
      </em> : null
      }
      
      <em onClick={()=>{
        setshow((s)=>!s)
      }}>
      {
       (show)? <em >
          ➖ 
     </em>:
     <em>
      ➕
     </em>
      }
      </em>
      
    </div>
  )
}
