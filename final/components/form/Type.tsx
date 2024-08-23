import { z, ZodType } from "zod";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export type ValidationFields = "email" | "url" | "exp" | "pass" | "confirmPass";

export type FormData = {
    email: string;
    url: string;
    exp: number;
    pass: string;
    confirmPass: string;
};

export type FormFieldProps = {
    register: UseFormRegister<FormData>;
    name: ValidationFields;
    error: FieldErrors | undefined;  // Changed from "Error" to "error"
    type: string;
    placeholder: string;
    valueAsNumber?: boolean;
    required?: boolean; 
}

// Corrected Zod Schema
export const loginSchema: ZodType<FormData> = z.object({
    email: z.string().email(),
    url: z.string().url().refine((url) => url.includes("github.com"), {
        message: "Invalid GitHub URL",
    }),
    exp: z.number({
        required_error: "Experience is required !!",
        invalid_type_error: "Experience must be a number between 1 and 10 years",
    })
    .min(1, "Experience must be at least 1 year")
    .max(10, "Experience must be at most 10 years"),
    pass: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 characters"),
    confirmPass: z.string(),
}).refine((data) => data.pass === data.confirmPass, {
    message: "Passwords do not match",
    path: ["confirmPass"],
});
