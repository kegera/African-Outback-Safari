/* import React from 'react'
import InputField from "../styles/inputfield.css"

const Input = props => {


    const validateInput = values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
            <input
                className='primaryBtn primaryBtn--big g__justify-self-center'
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
        <label className="inputField__label">
            {props.label}
            <textarea
                onChange={(e) => props.onChangeHandler(e.target.value)}
                placeholder={props.placeholder}
                value={props.value}
                required={props.isRequired}
                className="inputField__field"
                rows={7}
                name={props.name}
            />
        </label>

        );
    } else {
        return (
        <label className="inputField__label">
                {props.label}
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    name={props.name}
                />
            </label>
        );
    }

 
}

export default React.memo(Input); */