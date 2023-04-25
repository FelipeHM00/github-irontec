import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constan';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './Local.strategy';

import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../Componentes/users/users.schema';
import { UsersService } from '../../Componentes/users/users.service';
import { UsersModule } from '../../Componentes/users/users.module';

@Module({
  imports:[MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema,
  }]), UsersModule,PassportModule,JwtModule.register({
    secret:jwtConstants.secret,
    signOptions:{expiresIn:'300s'},})],
  controllers:[AuthController],
  providers: [UsersService, AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
