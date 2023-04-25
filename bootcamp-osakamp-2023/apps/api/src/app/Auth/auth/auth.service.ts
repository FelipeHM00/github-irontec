import { Injectable, UnauthorizedException } from '@nestjs/common';

import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { UsersService } from '../../Componentes/users/users.service';
@Injectable()
export class AuthService {
    constructor(private userservice:UsersService,
        private jwtService:JwtService){}

    async validete(elemail:string,passw:string):Promise<any>{
        const user=await this.userservice.getuserone(elemail);
        console.log(user)
        console.log(passw);
        console.log(bcrypt.compareSync( passw, user.password));
        console.log(bcrypt.hashSync(passw,10));
        console.log(bcrypt.hashSync(passw,10));
        console.log(bcrypt.hashSync(passw,10));
        console.log(bcrypt.hashSync(user.password,10));

        
        
        
        
        
        
        if (!user){
            throw new UnauthorizedException('User not found(email)')}
        if ( !bcrypt.compareSync( passw, user.password)){
            console.log("error passwords");
            
            throw new UnauthorizedException('Wrong password')
        } else{
            const{password, ...result}=user;
            return result
        }}

    login(user:any){
        const payload={username:user.email,userID:user.userId,role:user.role};
        return{
            acces_token: this.jwtService.sign(payload),
        }
    }


}
