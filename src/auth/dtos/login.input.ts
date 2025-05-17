import { InputType, PartialType } from '@nestjs/graphql';
import { SignupInput } from './signup.input';

@InputType()
export class LoginInput extends PartialType(SignupInput) {}
