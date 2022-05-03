export function getYears (month, day) {
    const date = new Date();
    const min = date.getUTCFullYear() - 18;
    const max = min - 100;
    let years = [];
    let leapYear = false;

    if(month === "2" && day === "29") {
        leapYear = true;
    }

    for (let i = min; i >= max; i--) {
        if(i%4 && leapYear) {
            continue;
        }
        years.push(i);
    }

    return years;
}

export function getMonths (day, year) {
    const max = 11;
    const allMonths = [
        { value: 1, name: "Jan" },
        { value: 2, name: "Feb" },
        { value: 3, name: "Mar" },
        { value: 4, name: "Apr" },
        { value: 5, name: "May" },
        { value: 6, name: "Jun" },
        { value: 7, name: "Jul" },
        { value: 8, name: "Aug" },
        { value: 9, name: "Sep" },
        { value: 10, name: "Oct" },
        { value: 11, name: "Nov" },
        { value: 12, name: "Dec" }];
    let months = [];
    const leapYear = year%4;
    day = parseInt(day);

    for (let i = 0; i <= max; i++) {
        const knuckleMonth = i<7 ? i%2 : !(i%2);
        if(i === 1){
            if(day > 29) { continue; }
            if(day === 29 && leapYear) { continue; }
        }
        if(knuckleMonth && day > 30) { continue; }
        months.push(allMonths[i]);
    }

    return months;
}

export function getDays (month, year) {
    let max = 31;
    let days = [];
    const knuckleMonth = month<8 ? month%2 : !(month%2);
    const leapYear = !(year%4);

    if(!knuckleMonth && month) {
        if(month === "2") {
            max = 28;
            if(leapYear) {
                max++;
            }
        } else {
            max--;
        }
    }
    for (let i = 1; i <= max; i++) {
        days.push(i);
    }

    return days;
}