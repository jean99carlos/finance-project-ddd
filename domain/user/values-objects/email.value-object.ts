import { ValueObject,Result } from 'types-ddd';
export interface EmailValueObjectProps {
  value: string;
}
export class EmailValueObject extends ValueObject<EmailValueObjectProps> {
  private constructor(props: EmailValueObjectProps) {
    super(props);
  }
  static create(email: string):Result<EmailValueObject> {
    return Result.Ok<EmailValueObject>(new EmailValueObject({ value: email }));
  }
}
