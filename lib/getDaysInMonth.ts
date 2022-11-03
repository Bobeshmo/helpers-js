/**
 * Get the number of days in any particular month
 * @link https://stackoverflow.com/a/1433119/1293256
 */
function daysInMonth(m: number, y: number) {
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31;
    }
}

export default daysInMonth;