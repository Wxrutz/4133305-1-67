import { useForm } from "react-hook-form";
import { FormData, loginSchema } from "./Type";
import FormField from "./FormField";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginSchema),  // Integrate Zod schema with react-hook-form
    });

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Zod & React-Hook-Form</h1>

                <FormField
                    type="url"
                    placeholder="URL"
                    name="url"
                    register={register}
                    required
                    error={errors.url}  // Corrected prop name
                />
                <br />
                <FormField
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={register}
                    required
                    error={errors.email}  // Corrected prop name
                />
                <br />
                <FormField
                    type="number"  // Corrected input type
                    placeholder="Experience"
                    name="exp"
                    register={register}
                    required
                    valueAsNumber
                    error={errors.exp}  // Corrected prop name
                />
                <br />
                <FormField
                    type="password"  // Corrected input type
                    placeholder="Password"
                    name="pass"
                    register={register}
                    required
                    error={errors.pass}  // Corrected prop name
                />
                <br />
                <FormField
                    type="password"  // Corrected input type
                    placeholder="Confirm Password"
                    name="confirmPass"
                    register={register}
                    required
                    error={errors.confirmPass}  // Corrected prop name
                />

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Form;
