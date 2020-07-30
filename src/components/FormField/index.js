import React from 'react';

function FormField({ label, type, name, value, onChange}) {
    return (
        <div>
            <label>
                {label}:
                {/* Se precisar de um textarea passar type="textarea" */}
                {type === 'textArea' ? 
                    <textarea 
                        label={label}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    /> 
                    : 
                    type === 'color' ?
                    // se precisar de um input do tipo cor passar type="color"
                    <input 
                        label={label}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                    :
                    
                     // se precisar de um input comum passar type="text"
                     <input 
                     label={label}
                     type={type}
                     value={value}
                     name={name}
                     onChange={onChange}
                 />
                }
            </label>
        </div>
    );
}
export default FormField;