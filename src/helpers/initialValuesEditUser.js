import { useAuth } from "../context/authContext";

function initialValuesEdituser() {
    const { user, userState, initialValueEdit } = useAuth();

    console.log(initialValueEdit.name.first);


    if (user.isAdmin === true) {
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

    // return ({
    //     first: initialValueEdit.name.first,
    //     middle: initialValueEdit.name.middle,
    //     last: initialValueEdit.name.last,
    //     phone: initialValueEdit.phone,
    //     url: initialValueEdit.image.url,
    //     alt: initialValueEdit.image.alt,
    //     state: initialValueEdit.address.state,
    //     country: initialValueEdit.address.country,
    //     city: initialValueEdit.address.city,
    //     street: initialValueEdit.address.street,
    //     houseNumber: initialValueEdit.address.houseNumber,
    //     zip: initialValueEdit.address.zip,
    //     isBusiness: initialValueEdit.isBusiness
    // })
}

export default initialValuesEdituser;