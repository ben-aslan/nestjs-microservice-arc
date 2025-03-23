import { Module } from '@nestjs/common';
import { HttpGatewayController } from './http-gateway.controller';
import { HttpGatewayService } from './http-gateway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [HttpGatewayController],
  providers: [HttpGatewayService],
})
export class HttpGatewayModule {}
