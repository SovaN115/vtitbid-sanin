export default class Validator {
    static getCheckedInput(input) {
        return input !== null && input !== undefined && input !== "" && /[a-zA-Z]/.test(input) === false ? true : false;
    }
    static checkInputOnLength(input, length) {
        if (input === null || input.length < length || input.length > length) {
            return false;
        }
        return true;
    }
}
