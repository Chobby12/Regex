import { validateCard, validateEmail, validateMyPhone, validatePassword } from "./regex";

console.log(validateEmail("omeuijk@gmail.com"))
// import * as {validateCard} from './regex';
console.log(validateCard("1234-5678-9012-3456"))
console.log(validatePassword("Om)yitk@234"))
console.log(validateMyPhone("+234-123-456-7890"))
console.log(validateMyPhone("123-456-7890"))



