/* eslint-disable no-template-curly-in-string */
const Yupi18N = {
  en: {
    boolean: {
      isValue: "Should be a boolean value",
    },
    number: {
      min: "Should be at least ${min}",
    },
    array: {
      length: "",
      max: "",
      min: "",
    },
    date: {
      max: "Should be lower or equals than ${max}",
      min: "Should at least ${min}",
    },
    mixed: {
      default: "Should specify a value",
      defined: "",
      notOneOf: "",
      notType: "",
      oneOf: "",
      required: "is Required",
    },
    object: {
      noUnknown: "",
    },
    string: {
      email: "Should be a valid email",
      length: "",
      lowercase: "",
      matches: "",
      max: "Should be lower or equals than ${max} characters",
      min: "Should be at least ${min} characters",
      trim: "",
      uppercase: "",
      url: "",
      uuid: "",
    },
  },
  es: {
    boolean: {
      isValue: "Debe ser un valor booleano 1 o 0",
    },
    number: {
      min: "Debe ser un valor menor a ${min}",
    },
    array: {
      length: "",
      max: "",
      min: "",
    },
    date: {
      max: "El valor debe ser menor o igual a ${max}",
      min: "El valor minimo aceptado es ${min}",
    },
    mixed: {
      default: "Debe especificar un valor",
      defined: "",
      notOneOf: "",
      notType: "",
      oneOf: "",
      required: "es Requerido",
    },
    object: {
      noUnknown: "",
    },
    string: {
      email: "Debe ser un correo eléctronico válido",
      length: "",
      lowercase: "",
      matches: "",
      max: "Debe ser menor o igual a  ${max} carácteres",
      min: "Debe ser al menos ${min} carácteres",
      trim: "",
      uppercase: "",
      url: "",
      uuid: "",
    },
  },
};

export { Yupi18N };
