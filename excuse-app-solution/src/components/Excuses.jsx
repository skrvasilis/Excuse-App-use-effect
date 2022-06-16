import React from 'react'

const Excuses = ({excuse , background}) => {
  return (
    <div  style={{width:"50%", margin: "auto"}}>
      {excuse.map((item,i)=> {
       return <div key={i} className={`alert ${background} m-4`} role="alert">
       {item.excuse}
      </div>
      })}  
    </div>
  )
}

export default Excuses