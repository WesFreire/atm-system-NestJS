import { IsInt, IsNumber } from 'class-validator';

export class DepositDto {
  @IsNumber()
  amount: number;
}
