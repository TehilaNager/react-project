export const emptyValues = {
    values: {
        first: "",
        middle: "",
        last: "",
        phone: "",
        url: "",
        alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
        isBusiness: false,
    },
}

function initialValuesEdituser(userToEdit) {
    return ({
        first: userToEdit.name.first,
        middle: userToEdit.name.middle,
        last: userToEdit.name.last,
        phone: userToEdit.phone,
        url: userToEdit.image.url,
        alt: userToEdit.image.alt,
        state: userToEdit.address.state,
        country: userToEdit.address.country,
        city: userToEdit.address.city,
        street: userToEdit.address.street,
        houseNumber: userToEdit.address.houseNumber,
        zip: userToEdit.address.zip,
        isBusiness: userToEdit.isBusiness
    })
}

export default initialValuesEdituser;