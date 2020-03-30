const schema = {
  type: "string",
  format: "email"
};

var Ajv = require("ajv");

var ajv = new Ajv(); 
var validate = ajv.compile(schema);

const email1 = "first.last@hotmail.com";
const email2 = "first.last@hormailcom";

if (validate(email1)) console.log('ajv regards "' + email1 + '" as valid');
else console.log('ajv regards "' + email1 + '" as invalid');

if (validate(email2)) console.log('ajv regards "' + email2 + '" as valid');
else console.log('ajv regards "' + email1 + '" as invalid');
