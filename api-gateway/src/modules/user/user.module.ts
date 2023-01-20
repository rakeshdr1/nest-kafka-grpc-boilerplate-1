import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class AuthModule {}
