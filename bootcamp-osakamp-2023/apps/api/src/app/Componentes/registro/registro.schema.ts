import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type RegistroDocument = Registro & Document;

@Schema()
export class Registro {
  @Prop()
  userId: number;
  @Prop()
  registroId:number;
  @Prop()
  date: string;
  @Prop()
  timeIn: string;
  @Prop()
  timeOut:string;
  @Prop()
  outType:string;
  @Prop()
  place:Array<number>;
  @Prop()
  status:string;
  @Prop()
  notes:string;
  @Prop()
  mes:string;
  @Prop()
  year:string;
  @Prop()
  ausencia:string;
  @Prop()
  aceptado:string;
  @Prop()
  dateFin:string;
}

export const RegistroSchema = SchemaFactory.createForClass(Registro);