/*
Luhn algorithm for validating credit card numbers
https://en.wikipedia.org/wiki/Luhn_algorithm

- Drop Last digit (check digit)
- Starting from last digit (including last digit), double every other number
    - If the doubled number is more than 10, then add the two digits together
- Add all digits together, including ones not doubled
- Take last digit from the sum above and subtract from 10
    - If digit is zero, don't do anything
- Result should be the check digit
*/

export default function validateCreditCardNumber(ccNum) {
  const digits = ccNum
    .toString()
    .split('')
    .filter(num => num)
    .map(num => Number(num));
  const checkSum = Number(digits.pop());

  let total = 0;

  digits.reverse().forEach((digit, i) => {
    if (i % 2 !== 0) {
      total += digit;
    } else {
      const double = digit * 2;
      let amt = double;

      if (double >= 10) {
        amt = double - 9;
      }

      total += amt;
    }
  });

  const lastTotal = total.toString().split('').pop();
  const checkVal = lastTotal === 0 ? 0 : 10 - lastTotal;

  return checkVal === checkSum;
}
