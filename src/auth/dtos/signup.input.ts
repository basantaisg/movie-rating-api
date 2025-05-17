import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  password: string;
}
