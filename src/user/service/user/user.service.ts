import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  public users: UserDto[] = [];

  create(user: UserDto): Promise<UserDto> {
    return this.userRepo.save(user);
  }

  findAll(): Promise<UserDto[]> {
    return this.userRepo.find();
  }
}
