import { EmailValueObject } from './email.value-object';

describe('email.value-object', () => {
  it('should return a valid email', () => {
    const email = EmailValueObject.create('validemail@domain.com');
    expect(email.isFail).toBe(false);
  });
});
