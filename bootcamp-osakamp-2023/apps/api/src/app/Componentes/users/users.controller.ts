import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    async getall():Promise<any>{
        return await this.usersService.getusers()
    }

    @Get(':one')
    async getone(@Param('one') one:string):Promise<any>{
        return await this.usersService.getuserone(one)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async postuno(@Body() body:any,@Req() req:any):Promise<any>{
        console.log(req.user)
        if(req.user.role=="Admin"){
            await this.usersService.postuno(body)
        return {message:`Se ha registrado el usuario ${body.email}`}
        }else{
            return alert("No eres administrador")
        }
        
    }
}
