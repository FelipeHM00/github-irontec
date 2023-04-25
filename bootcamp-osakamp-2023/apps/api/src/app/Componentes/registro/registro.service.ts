import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registro, RegistroDocument } from './registro.schema';

@Injectable()
export class RegistroService {
    constructor(
        @InjectModel(Registro.name) private registroModel: Model<RegistroDocument>
    ){}
    async getregistro():Promise<any>{
        return await this.registroModel.find()
    }

    async getUnRegistro(userId:number,date:any):Promise<any>{
        
        console.log(date)
        return await this.registroModel.find({userId:userId,date:date})
    }
    async getelmes(userId:number,date:any):Promise<any>{
        
        console.log(date)
        return await this.registroModel.find({userId:userId,mes:date})
    }
    async getelyear(userId:number,date:any):Promise<any>{
        
        console.log(date)
        return await this.registroModel.find({userId:userId,year:date})
    }

    async getlast(eluserId:number):Promise<any>{
        console.log(eluserId)
        return await this.registroModel.find({userId:eluserId})
        
    }

    async postuno(body:any){
        const data = await this.registroModel.find()
        body.registroId = data.length+1;
        return await this.registroModel.create(body)
    }
    async putuno(body:any){
        return await this.registroModel.updateOne({registroId:body.registroId},
            {$set:{status:body.status,timeOut:body.timeOut}})
    }
}
