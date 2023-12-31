import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from './user/user.entity'

@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password:'*Qsku03tEVGt87L2$6Oqvj',
    database:'Pets',
    entities:[UserEntity],
    synchronize: true,
    dropSchema: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {};
