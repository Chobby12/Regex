"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("./regex");
console.log((0, regex_1.validateEmail)("omenyitk@gmail.com"));
// import * as {validateCard} from './regex';
console.log((0, regex_1.validateCard)("1234-5678-9012-3456"));
console.log((0, regex_1.validatePassword)("Omen))yitk@1234"));
console.log((0, regex_1.validateMyPhone)("+234-123-456-7890"));
console.log((0, regex_1.validateMyPhone)("123-456-7890"));
//# sourceMappingURL=index.js.map