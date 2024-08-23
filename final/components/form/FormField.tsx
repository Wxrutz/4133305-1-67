import { FC } from "react";
import { FormFieldProps } from "./Type";

const FormField: FC<FormFieldProps> = ({
    register,
    name,
    error,  // Changed from "Error" to "error" to match the prop name
    type,
    placeholder,
    valueAsNumber,
    required,
}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                {...register(name, { valueAsNumber })}
            />
            {error?.[name] && <span>{error[name]?.message}</span>} {/* Accessing the error message correctly */}
        </>
    );
};

export default FormField;
