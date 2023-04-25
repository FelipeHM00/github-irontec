import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { jwtConstants } from "./constan"
import {Strategy, ExtractJwt} from "passport-jwt"




@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:true,
            secretOrKey: jwtConstants.secret,
        })
    }
async validate(payload:any){
    return {userID:payload.userID, username:payload.username,role:payload.role}

}
}