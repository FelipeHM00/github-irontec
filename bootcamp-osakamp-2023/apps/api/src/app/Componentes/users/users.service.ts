import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}
    async getusers():Promise<any>{
        return await this.userModel.find()
    }

    async getuserone(elemail:string):Promise<any>{
        return await this.userModel.findOne({email: elemail}).lean()
    }
    async postuno(body:any){
        const data = await this.userModel.find()
        body.userId = data.length+1;
        const hashedPass = bcrypt.hashSync(body.password, 10);
        body.password = hashedPass;
        return await this.userModel.create(body)

    }
}
