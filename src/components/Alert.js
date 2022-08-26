import React from 'react'

function Alert(props) {
    return (
        <div>
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong>: {props.alert.msg}
                    <span aria-hidden="true">&times;</span>
            </div>
        </div>
    )
}

export default Alert;