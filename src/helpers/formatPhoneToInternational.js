function formatPhoneToInternational(phone) {
    if (typeof phone !== 'string') return null;

    const digits = phone.replace(/\D/g, '');

    if (digits.startsWith('0')) {
        return '+972' + digits.slice(1);
    }

    if (digits.startsWith('972')) {
        return '+' + digits;
    }

    return '+' + digits;
}

export default formatPhoneToInternational;
