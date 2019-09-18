import t from "tcomb-form-native";
import formValidation from "../utils/Validation";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  Facultad: t.String,
  Celular: t.String,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      label: "Nombre:",
      placeholder: "Nombre Completo",
      error: "Nombre invalido"
    },
    email: {
      label: "Correo Electronico:",
      placeholder: "Escribe tu email",
      error: "email invalido"
    },
    Facultad: {
      label: "Facultad",
      placeholder: "Escribe el nombre de tu facultad",
      error: "Facultad invalida"
    },
    Celular: {
      label: "Celular",
      placeholder: "Escribe tu numero celular",
      error: "Celular invalido"
    },
    password: {
      label: "Contrasena",
      placeholder: "Escribe tu contrasena",
      error: "Contrasena invalida",
      password: true,
      secureTextEntry: true
    },
    passwordConfirmation: {
      label: "Confirma tu contrasena",
      placeholder: "Escribe tu contrasena de nuevo",
      error: "Contrasena invalida",
      password: true,
      secureTextEntry: true
    }
  }
};
