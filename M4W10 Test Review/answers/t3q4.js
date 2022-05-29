"use strict";

/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bytes convert it to relevant size in B/KB/MB/GB/TB. Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"

*/

const filesize = function(bytes) {
  // var counter
  // var output
  // array for units with all B - TB
  // figure out unit = number of zeroes
  // if bytes / factor less than zero = units
  // create counter for factory of 1000
  // / bytes by counter
  // if less than zero the right unit is counter - 1
  
  // let units = ["B", "kb", "MB", "GB", "TB"];
  // let output = "";

  // for(let i = counter; i < units.length; i++) {
  //   let divider = 1000 ** counter;
  //   if(bytes % divider < 1) {
  //     let iDunnoNumber = bytes / divider ;
  //     let unit = units[counter - 1];
  //     console.log(iDunnoNumber, unit)  
  //     return iDunnoNumber + unit;
  //   }
  // }

  let counter = 0;
  const unitArr = ['B', 'kB', 'MB', 'GB', 'TB'];
  let divider = 1000

  const division = (bytes) => {
    return bytes / divider;
  };

  const getRightUnit = (bytes) => {
    if (division(bytes) < 1) {
      return true;
    } else {
      counter++;
      divider *= 1000
      getRightUnit(bytes);
    }
  };

  getRightUnit(bytes);
  return `${bytes / divider * 1000}${unitArr[counter]}`;

  // let count = 0;
  // let adjustedBytes = bytes;
  // let i;
  // for(i = 0; adjustedBytes >= 1000; i++) {
  //   adjustedBytes = adjustedBytes / 1000
  // }

  // return `${Math.round((adjustedBytes * 100) /100)}/${units[i]}}`
  
  

};


// Don't change below:
module.exports = { filesize };
