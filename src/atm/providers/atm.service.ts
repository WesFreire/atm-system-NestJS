import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

export interface Account {
  id: number;
  owner: string;
  balance: number;
  createdAt: Date;
}

@Injectable()
export class AtmService {
  private accounts: Account[] = [
    {
      id: 1,
      owner: 'Alice',
      balance: 1000,
      createdAt: new Date('2025-01-01'),
    },
    {
      id: 2,
      owner: 'Bob',
      balance: 500,
      createdAt: new Date('2025-01-10'),
    },
  ];

  public findAccount(accountId: number): Account {
    const account = this.accounts.find((acc) => acc.id === accountId);

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return account;
  }

  public withdraw(accountId: number, amount: number) {
    if (amount <= 0)
      throw new BadRequestException('Amount must be greater than 0.');

    const account = this.findAccount(accountId);

    if (account.balance < amount) {
      throw new BadRequestException('Insufficient funds');
    }

    if (account.id != accountId) {
      throw new BadRequestException('Not your account. ');
    }

    account.balance -= amount;

    return account;
  }
}
