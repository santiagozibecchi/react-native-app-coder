import { object, string, ref } from "yup"
export const signupSchema = object().shape({
    email: string().required("El email es necesario").email("No es un email váilido"),
    password: string()
        .required("La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 carateres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "Las contraseñas deben ser iguales")
        .required(),
})

export const signInSchema = object().shape({
    email: string().required("El email es necesario").email("No es un email váilido"),
    password: string()
        .required("La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 carateres"),
})
