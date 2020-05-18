export class Person {
    constructor() {
    }
    getFirstName() {
        return localStorage.getItem('firstName') ? parseInt(localStorage.getItem('firstName')) : '';
    }
    setFirstName(firstName) {
        localStorage.setItem('firstName', $.trim(firstName));
    }
    isEmpty() {
        if (this.getFirstName() == null || this.getFirstName() === '') {
            return true;
        }
        else {
            return false;
        }
    }
}
