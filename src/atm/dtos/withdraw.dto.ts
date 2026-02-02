import { IsInt, IsNumber } from 'class-validator';

export class WithdrawDto {
  @IsNumber()
  amount: number;
}
