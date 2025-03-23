import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS_CLIENT') private usersClinet: ClientProxy) { }

    findAll() {
        return this.usersClinet.send('users.findAll',{})
    }
}
