export class Statistics {
    answeredCorrectly: number;
    answeredWrongly: number;

    constructor() {
    }

    // Correctly Area
    getAnsweredCorrectly(): number {
        return localStorage.getItem('answeredCorrectly') ? parseInt(localStorage.getItem('answeredCorrectly')) : 0;
    }

    setAnsweredCorrectly(correctly: string) {
        localStorage.setItem('answeredCorrectly', correctly);
    }

    addOneAnsweredCorreclty() {
        localStorage.setItem('answeredCorrectly', (this.getAnsweredCorrectly() + 1).toString());
    }

    // Wrongly Area
    getAnsweredWrongly() {
        return localStorage.getItem('answeredWrongly') ? parseInt(localStorage.getItem('answeredWrongly')) : 0;
    }

    setAnsweredWrongly(wrongly) {
        localStorage.setItem('answeredWrongly', wrongly);
    }

    addOneAnsweredWrongly() {
        localStorage.setItem('answeredWrongly', (this.getAnsweredWrongly() + 1).toString());
    }

    // Total Answered Area
    getTotalAnswered() {
        return localStorage.getItem('totalAnswered') ? parseInt(localStorage.getItem('totalAnswered')) : 0;
    }

    setTotalAnswered(total) {
        localStorage.setItem('totalAnswered', total);
    }

    addOneTotalAnswered() {
        localStorage.setItem('totalAnswered', (this.getTotalAnswered() + 1).toString());
    }

    resetTotalAnswered() {
        this.setTotalAnswered(0);
    }
}