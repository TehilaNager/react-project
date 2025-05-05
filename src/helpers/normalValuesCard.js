function normalValuesCard(values) {
    return ({
        title: values.title,
        subtitle: values.subtitle,
        description: values.description,
        phone: values.phone,
        email: values.email,
        web: values.web,
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
        }
    })
};


export default normalValuesCard;