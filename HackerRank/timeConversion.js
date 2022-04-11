function timeConversion(s) {
   // Write your code here
    
   let amPM = s.charAt(8)
   let militaryHour = '';

   if (amPM == 'A') {
       if (s.substring(0,2) == '12')
          militaryHour = '00';
       else {
          militaryHour = s.substring(0, 2)
       }
   } else { // PM
      if (s.substring(0,2) == '12') {
          militaryHour = s.substring(0,2)
      } else {
          console.log(parseInt(s.substring(0,2), 10) + 12)
          militaryHour = parseInt(s.substring(0,2), 10) + 12;
      }
   }
   console.log(militaryHour + s.substring(2,8))
   return militaryHour + s.substring(2, 8)
}

timeConversion('07:05:45PM')
// timeConversion('12:00:00AM')
// timeConversion('12:00:00PM')

