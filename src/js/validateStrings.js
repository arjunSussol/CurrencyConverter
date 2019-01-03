export const validateStrings = {
    username:{
        required: 'Enter the username',
        containsSpaces: 'Username cannot contain spaces.',
    },
    password:{
        required: 'Enter the password',
        lengthInvalid: 'Password must be 8-32 characters long',
        containsSpaces: 'Password cannot contain spaces.',
    }
}