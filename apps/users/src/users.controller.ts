import { Controller, ForbiddenException, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, RpcException } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @MessagePattern('users.findAll')
  findAll(): string {
    // throw new RpcException({
    //   statusCode: 403,
    //   message: 'Forbidden: You do not have access to this resource',
    // });
    // throw new ForbiddenException()
    return process.env.JWT_SECRET ?? "";
    return this.usersService.getHello();
  }
}
