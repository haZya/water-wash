import * as yup from 'yup';

function createYupSchema(schema: any, config: any) {
  const { name, validationType, validations = [] } = config;

  if (!(yup as any)[validationType]) {
    return schema;
  }
  let validator = (yup as any)[validationType]();
  validations.forEach((validation: any) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[name] = validator;
  return schema;
}

export default createYupSchema;
