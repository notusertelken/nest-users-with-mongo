import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.example.env' });

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.example.env',
    }),
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(`${process.env.MONGODB_URL}/users`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
