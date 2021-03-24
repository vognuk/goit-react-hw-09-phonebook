import validator from 'validator'

const validatePhoneNumber = number => {
    const isValidPhoneNumber = validator.isMobilePhone(number, "uk-UA");
    return (isValidPhoneNumber);
};

export default validatePhoneNumber;
