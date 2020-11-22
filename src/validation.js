export const isRequired = value => {
    if (!value || value === '') {
        return 'Field is required'
    }
    return undefined;
}

export const timeValidation = value => {
    if (value === '00:00:00' || !value || value === '') {
        return 'Set preparation time.'       
    }
    return undefined;
}