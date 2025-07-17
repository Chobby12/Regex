"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = validateEmail;
exports.validatePassword = validatePassword;
exports.validatePhone = validatePhone;
exports.validateMyPhone = validateMyPhone;
exports.validateCard = validateCard;
function validateEmail(email) {
    const emailRegex = /^[A-Za-z](?!.*\.\.)(?!.*\.$)[A-Za-z\d\+\.]{0,18}[A-Za-z\d+]@(gmail|outlook|yahoo)\.com$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\s\w]).{8,20}$/;
    return passwordRegex.test(password);
}
function validatePhone(phone) {
    const phoneRegex = /^(\+?\d{1,3}[-\s]?)?\d{10,11}$|^(\+?\d{1,3}[-\s]?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/; //ai
    return phoneRegex.test(phone);
}
function validateMyPhone(phone) {
    const myPhoneRegex = /^(\+?\d{1,3}[-\s]?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    return myPhoneRegex.test(phone);
}
function validateCard(card) {
    const cardRegex = /^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/;
    return cardRegex.test(card);
}
//# sourceMappingURL=regex.js.map