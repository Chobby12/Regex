function validateEmail(email: string): boolean{
    const emailRegex: RegExp = /^[A-Za-z](?!.*\.\.)(?!.*\.$)[A-Za-z\d\+\.]{0,18}[A-Za-z\d+]@(gmail|outlook|yahoo)\.com$/
    return emailRegex.test(email);
}

function validatePassword(password: string): boolean {
    const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\s\w]).{8,20}$/
    return passwordRegex.test(password);
}

function validatePhone(phone: string): boolean {
    const phoneRegex: RegExp = /^(\+?\d{1,3}[-\s]?)?\d{10,11}$|^(\+?\d{1,3}[-\s]?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/ //ai
    return phoneRegex.test(phone);
}

function validateMyPhone(phone: string): boolean {
    const myPhoneRegex: RegExp = /^(\+?\d{1,3}[-\s]?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/
    return myPhoneRegex.test(phone);
}

function validateCard(card: string): boolean {
    const cardRegex: RegExp = /^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/
    return cardRegex.test(card);
}

export { validateEmail, validatePassword, validatePhone, validateMyPhone, validateCard };
