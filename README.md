# Email validation failure

## Summary

`{format: email}` fails to recognize `first.last@hormailcom` as invalid

## Details

### How to reproduce

- Clone this repository
- Run `node index.js`

### What would I have expected

- `ajv` to regard `first.last@hormailcom` as an invalid email address, because TLD is not separated by a `.`

### What happens instead

- `ajv` validation is true for `first.last@hormailcom`

### Version info

- `ajv`: 
  - `6.12.0` (cf. `package-lock.json`)
- `node`: 
  - `v12.16.1`
