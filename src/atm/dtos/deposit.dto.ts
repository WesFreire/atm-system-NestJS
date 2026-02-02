import { IsInt, IsNumber } from 'class-validator';

export class DepositDto {
  @IsInt()
  accountId: string;

  @IsNumber()
  amount: number;
}
