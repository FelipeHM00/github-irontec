import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './Componentes/users/users.module';
import { AuthModule } from './Auth/auth/auth.module';
import { RegistroModule } from './Componentes/registro/registro.module';
// import { AusenciasModule } from './Componentes/ausencias/ausencias.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/Irontec'),UsersModule,
AuthModule,RegistroModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
