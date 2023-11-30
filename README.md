# Time

### Install

```
npm i @davidrebollo92/time
```

### Documentation

Extended version of Date with more features

The package adds the following functions:

```js
isValid(date: string)
day()
daysInMonth()
month()
year()
startOfDay()
add(amount: number, unit: "days" | "months" | "years")
subtract(amount: number, unit: "days" | "months" | "years")
isBefore(date: Time | string)
isAfter(date: Time | string)
isSameOrBefore(date: Time | string)
isSameOrAfter(date: Time | string)
isBetween(startDate: Time | string, endDate: Time | string, rule: "()" | "(]" | "[)" | "[]")
diff(date: Time | string, unit: "minutes" | "days" | "months" | "years")
clone()
format(rule: "YYYYMMDD" | "DDMMYYYY" | "YYMMDD" | "DDMMYY", separator?: "" | "-" | "/")
```

### Example

```js
import { Time } from "@davidrebollo92/time";

// Create a Time instance
const dateNow = new Time();
const dateInFiveDays = new Time().add(5, "days");


console.log(dateNow.isBefore(dateInFiveDays)); // Result: true
```

