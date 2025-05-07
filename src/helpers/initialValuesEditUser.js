import { useAuth } from "../context/authContext";

function initialValuesEdituser() {
    const { userState } = useAuth();

    return ({
        first: userState.name.first,
        middle: userState.name.middle,
        last: userState.name.last,
        phone: userState.phone,
        url: userState.image.url,
        alt: userState.image.alt,
        state: userState.address.state,
        country: userState.address.country,
        city: userState.address.city,
        street: userState.address.street,
        houseNumber: userState.address.houseNumber,
        zip: userState.address.zip,
        isBusiness: userState.isBusiness
    })
}

export default initialValuesEdituser;