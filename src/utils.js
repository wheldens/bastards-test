export const validateObject = (schema, objectToValidate) => {

  let isValid = true;

  // transform the objects to array of values
  const schemaArray = Object.values(schema)
  const objArray = Object.values(objectToValidate)

  // compare the amount of properties
  if (schemaArray.length !== objArray.length) return false

  // compare the types (if a type does not match with the schema, isValid will be set to false)
  objArray.forEach((prop, i) => {
      if (schemaArray[i] === 'string' && typeof prop !== 'string')  isValid =  false;
      if (schemaArray[i] === 'number' && typeof prop !== 'number')  isValid =  false;
      if (schemaArray[i] === 'boolean' && typeof prop !== 'boolean')  isValid =  false;
      if (schemaArray[i] === 'array' && !Array.isArray(prop)) isValid =  false;

      // "typeof" will see an array as an object, therefore an extra check to see if it is an array or not
      if (schemaArray[i] === 'object' && typeof prop !== 'object' || schemaArray[i] === 'object' && Array.isArray(prop)) isValid =  false;
  })

  return isValid;
}
