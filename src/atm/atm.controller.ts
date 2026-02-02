import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { DepositDto } from './dtos/deposit.dto';
import { WithdrawDto } from './dtos/withdraw.dto';
import { CreateAccountDto } from './dtos/create-account.dto';
import { AtmService } from './providers/atm.service';

@Controller('atm')
export class AtmController {
  constructor(private readonly atmService: AtmService) {}
  @Post('register')
  createAccount(@Body() createAccountDto: CreateAccountDto) {}

  @Post(':id/deposit')
  depositMoney(
    @Param('id', ParseIntPipe) accountId: number,
    @Body() depositDto: DepositDto,
  ) {
    return this.atmService.deposit(accountId, depositDto.amount)
  }

  @Post(':id/withdraw')
  withdrawMoney(
    @Param('id', ParseIntPipe) accountId: number,
    @Body() withdrawDto: WithdrawDto,
  ) {
    return this.atmService.withdraw(accountId, withdrawDto.amount);
  }

  @Get(':id')
  checkBalance(@Param('id', ParseIntPipe) accountId: number) {
    return this.atmService.getAccountBalance(accountId);
  }
}
