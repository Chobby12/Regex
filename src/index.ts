import { validateCard, validateEmail, validateMyPhone, validatePassword } from "./regex";

console.log(validateEmail("omenyitk@gmail.com"))
// import * as {validateCard} from './regex';
console.log(validateCard("1234-5678-9012-3456"))
console.log(validatePassword("Omen))yitk@1234"))
console.log(validateMyPhone("+234-123-456-7890"))
console.log(validateMyPhone("123-456-7890"))



