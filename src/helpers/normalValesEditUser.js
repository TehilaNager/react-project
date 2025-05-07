function normalValuesEditUser(values) {
    return ({
        name: {
            first: values.first,
            middle: values.middle,
            last: values.last,
        },
        phone: values.phone,
        image: {
            url: values.url,
            alt: values.alt,
        },
        address: {
            state: values.state,
            country: values.country,
            city: values.city,
            street: values.street,
            houseNumber: values.houseNumber,
            zip: values.zip,
        },
    });
}

export default normalValuesEditUser;