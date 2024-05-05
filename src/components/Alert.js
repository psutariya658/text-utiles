import React from 'react';

export default function Alert(props) {


    const latterCase = (words) =>{
const lower = words.toLowerCase();
return lower.charAt(0).toUpperCase()+words.slice(1);

    }

    return (
        <div>
            {props.alert && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{latterCase(props.alert.type)}</strong> : {props.alert.msg}
            </div>
            )}
        </div>
    );
}
