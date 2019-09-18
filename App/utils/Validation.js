import t from "tcomb-form-native";

export default formValidation = {
  email: t.refinement(t.String, value => {
    return /@/.text(value);
  }),
  password: t.refinement(t.String, value => {
    return value.length >= 6;
  })
};
