import daysInMonth from "./getDaysInMonth";

function isCorrectDate(d: number, m: number, y: number) {
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
}

export default isCorrectDate;
