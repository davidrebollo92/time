class $149c1bd638913645$export$680ea196effce5f extends Date {
    constructor(date){
        if (date) {
            if (typeof date == "string") super(new Date(date));
            else super(date);
        } else super(new Date());
    }
    isValid() {
        return !isNaN(this.getTime());
    }
    day() {
        return this.getDay();
    }
    daysInMonth() {
        return new Date(this.year(), this.month() + 1, 0).getDate();
    }
    month() {
        return this.getMonth();
    }
    year() {
        return this.getFullYear();
    }
    startOfDay() {
        this.setHours(0);
        this.setMinutes(0);
        this.setSeconds(0);
        this.setMilliseconds(0);
        return this;
    }
    add(amount, unit) {
        switch(unit){
            case "days":
                this.setDate(this.getDate() + amount);
                return this;
            case "months":
                this.setMonth(this.getMonth() + amount);
                return this;
            case "years":
                this.setFullYear(this.getFullYear() + amount);
                return this;
        }
    }
    subtract(amount, unit) {
        switch(unit){
            case "days":
                this.setDate(this.getDate() - amount);
                break;
            case "months":
                this.setMonth(this.getMonth() - amount);
                break;
            case "years":
                this.setFullYear(this.getFullYear() - amount);
                break;
        }
        return this;
    }
    isBefore(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        if (this < date) return true;
        else return false;
    }
    isAfter(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        if (this > date) return true;
        else return false;
    }
    isSameOrBefore(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        if (this <= date) return true;
        else return false;
    }
    isSameOrAfter(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        if (this >= date) return true;
        else return false;
    }
    isBetween(startDate, endDate, rule) {
        if (typeof startDate == "string") startDate = new $149c1bd638913645$export$680ea196effce5f(startDate);
        if (typeof endDate == "string") endDate = new $149c1bd638913645$export$680ea196effce5f(endDate);
        switch(rule){
            case "()":
                return this > startDate && this < endDate;
            case "(]":
                return this > startDate && this <= endDate;
            case "[)":
                return this >= startDate && this < endDate;
            case "[]":
                return this >= startDate && this <= endDate;
        }
    }
    diff(date, unit) {
        let diff;
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        switch(unit){
            case "minutes":
                diff = this.diffInMinutes(date);
                break;
            case "days":
                diff = this.diffInDays(date);
                break;
            case "months":
                diff = this.diffInMonths(date);
                break;
            case "years":
                diff = this.diffInYears(date);
                break;
        }
        return diff;
    }
    clone() {
        return new $149c1bd638913645$export$680ea196effce5f(this);
    }
    format(rule, separator) {
        if (!separator) separator = "";
        switch(rule){
            case "YYYYMMDD":
                this.year().toString(), this.month().toString(), this.day().toString();
                break;
            case "DDMMYYYY":
                this.day().toString(), this.month().toString(), this.year().toString();
                break;
            case "YYMMDD":
                this.year().toString().substring(2), this.month().toString(), this.day().toString();
                break;
            case "DDMMYY":
                this.day().toString(), this.month().toString(), this.year().toString().substring(2);
                break;
        }
    }
    diffInMinutes(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        let diff = (this.getTime() - date.getTime()) / 1000;
        diff /= 60;
        return Math.round(diff);
    }
    diffInDays(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        const _MS_PER_DAY = 86400000;
        const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        const utc2 = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    diffInMonths(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        let months;
        months = (this.getFullYear() - date.getFullYear()) * 12;
        months -= date.getMonth();
        months += this.getMonth();
        return months;
    }
    diffInYears(date) {
        if (typeof date == "string") date = new $149c1bd638913645$export$680ea196effce5f(date);
        return this.getFullYear() - date.getFullYear();
    }
}


export {$149c1bd638913645$export$680ea196effce5f as Time};
//# sourceMappingURL=index.mjs.map
