import React from 'react'
import PropTypes from 'prop-types'

const Capital =(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1);

}

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{Capital(props.alert.type)}</strong>:{props.alert.msg}
    
   </div>
  )
}
