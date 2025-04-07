// src/seed/seed.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async onModuleInit() {
    const count = await this.userModel.count();
    if (count === 0) {
      const users: CreationAttributes<User>[] = [
        {
          name: 'Ignacio Truffa',
          imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          name: 'Walt Cosani',
          imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          name: 'Otro Usuario',
          imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
      ];

      await this.userModel.bulkCreate(users, { validate: true });
      console.log('Usuarios de prueba insertados.');
    }
  }
}
