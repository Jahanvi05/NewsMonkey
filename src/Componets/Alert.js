import React from 'react'

const Alert = (props) => {

  const capatalize =(word)=>
  {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  

  return (
   <div className="container" height="40px" style={{marginTop:"50px;"}}>

{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
  <strong>{capatalize(props.alert.type)}</strong> : {props.alert.msg}
</div>}
</div>


  )
}

export default Alert