import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignConfirm = ({ submitForm }) => {
        const { handleChange, handleSubmit, values, errors } = useForm(
            submitForm,
            validate
        );

        return ( <
            div className = "form-content-right" >
            <
            form onSubmit = { handleSubmit }
            className = "form"
            noValidate >
            <
            h1 > Confirm your code!. < /h1>{" "} <
            div className = "form-inputs" > { " " } <
            label className = "form-label" > Code < /label>{" "} <
            input className = "form-input"
            type = "text"
            name = "username"
            placeholder = "Enter your code"
            value = { values.username }
            onChange = { handleChange }
            />{" "} {
                errors.username && < p > { errors.username } < /p>}{" "} <
                    /div>{" "} <
                    button className = "form-input-btn"
                type = "submit" >
                    Confirm { " " } <
                    /button>{" "} <
                    /form>{" "} <
                    /div>
            );
        };

        export default FormSignConfirm;