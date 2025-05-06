function formatPhoneToInternational(phone) {
    const digits = phone.replace(/\D/g, '');
    if (digits.startsWith('0')) {
        return '+972' + digits.slice(1);
    }
    if (digits.startsWith('972')) {
        return '+' + digits;
    }
    return console.log(digits);
}

export default formatPhoneToInternational;
