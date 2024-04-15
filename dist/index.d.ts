export class Time extends Date {
    constructor(date?: string | Date);
    isValid(): boolean;
    day(): number;
    daysInMonth(): number;
    month(): number;
    year(): number;
    startOfDay(): Time;
    add(amount: number, unit: "days" | "months" | "years"): this;
    subtract(amount: number, unit: "days" | "months" | "years"): this;
    isBefore(date: Time | string): boolean;
    isAfter(date: Time | string): boolean;
    isSameOrBefore(date: Time | string): boolean;
    isSameOrAfter(date: Time | string): boolean;
    isBetween(startDate: Time | string, endDate: Time | string, rule: "()" | "(]" | "[)" | "[]"): boolean;
    diff(date: Time | string, unit: "minutes" | "days" | "months" | "years"): number;
    clone(): Time;
    format(rule: "YYYYMMDD" | "DDMMYYYY" | "YYMMDD" | "DDMMYY", separator?: "" | "-" | "/"): string;
}

//# sourceMappingURL=index.d.ts.map
