import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistroController } from './registro.controller';
import { Registro, RegistroSchema } from './registro.schema';
import { RegistroService } from './registro.service';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: Registro.name, schema: RegistroSchema }]),
      ],
      controllers:[RegistroController],
      providers: [RegistroService]
})
export class RegistroModule {}
