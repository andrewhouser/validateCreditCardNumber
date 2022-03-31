const { validateCreditCardNumber } = require('./index');

const validNumber = '4242 4242 4242 4242';
const invalidNumber = '4242 4252 4242 4242';

test('Valid number', () => {
  const result = validateCreditCardNumber(validNumber);
  expect(result).toBe(true);
});

test('Invalid number', () => {
  const result = validateCreditCardNumber(invalidNumber);
  expect(result).toBe(false);
});
