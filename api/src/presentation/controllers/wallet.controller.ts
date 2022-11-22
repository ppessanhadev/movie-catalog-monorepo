import { Controller, Get } from '@nestjs/common';

@Controller('wallet')
export class WalletController {
  @Get()
  index(): number {
    return 5.75;
  }
}
