export class Time extends Date {
   constructor(date?: string | Date) {
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

   add(amount: number, unit: "days" | "months" | "years") {
      switch (unit) {
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

   subtract(amount: number, unit: "days" | "months" | "years") {
      switch (unit) {
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

   isBefore(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      if (this < date) return true;
      else return false;
   }

   isAfter(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      if (this > date) return true;
      else return false;
   }

   isSameOrBefore(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      if (this <= date) return true;
      else return false;
   }

   isSameOrAfter(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      if (this >= date) return true;
      else return false;
   }

   isBetween(startDate: Time | string, endDate: Time | string, rule: "()" | "(]" | "[)" | "[]") {
      if (typeof startDate == "string") startDate = new Time(startDate);
      if (typeof endDate == "string") endDate = new Time(endDate);

      switch (rule) {
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

   diff(date: Time | string, unit: "minutes" | "days" | "months" | "years") {
      let diff;

      if (typeof date == "string") date = new Time(date);

      switch (unit) {
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
      return new Time(this);
   }

   format(rule: "YYYYMMDD" | "DDMMYYYY" | "YYMMDD" | "DDMMYY", separator?: "" | "-" | "/") {
      if (!separator) separator = "";

      switch (rule) {
         case "YYYYMMDD":
            this.year().toString() + separator + this.month().toString() + separator + this.day().toString();
            break;
         case "DDMMYYYY":
            this.day().toString() + separator + this.month().toString() + separator + this.year().toString();
            break;
         case "YYMMDD":
            this.year().toString().substring(2) +
               separator +
               this.month().toString() +
               separator +
               this.day().toString();
            break;
         case "DDMMYY":
            this.day().toString() +
               separator +
               this.month().toString() +
               separator +
               this.year().toString().substring(2);
            break;
      }
   }

   private diffInMinutes(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      let diff = (this.getTime() - date.getTime()) / 1000;
      diff /= 60;

      return Math.round(diff);
   }

   private diffInDays(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      const _MS_PER_DAY = 1000 * 60 * 60 * 24;

      const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
      const utc2 = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate());

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
   }

   private diffInMonths(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      let months;

      months = (this.getFullYear() - date.getFullYear()) * 12;
      months -= date.getMonth();
      months += this.getMonth();

      return months;
   }

   private diffInYears(date: Time | string) {
      if (typeof date == "string") date = new Time(date);

      return this.getFullYear() - date.getFullYear();
   }
}
