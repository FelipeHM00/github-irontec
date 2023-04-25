import { Body, Controller, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthguard } from '../../Auth/auth/jwt.auth.guards';
import { RegistroService } from './registro.service';

@Controller('registro')
export class RegistroController {
    constructor(private readonly registroService:RegistroService){}
    
    // @UseGuards(AuthGuard('jwt'))
    // @Get()
    // async getall():Promise<any>{
    //     return await this.registroService.getregistro()
    // }

    @UseGuards(AuthGuard('jwt'))
    @Get('dia')
    async getone( @Req() req:any , @Query('date') date:string):Promise<any>{
        console.log(date)
        console.log(req.body)
        return await this.registroService.getUnRegistro(req.user.userID,date)
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('/estado/:id')
    async getlast(@Param('id') param:any  ,@Req() req:any ):Promise<any>{
        console.log(req.user.userID)
        return await this.registroService.getlast(req.user.userID)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('mes')
    async getmes( @Req() req:any , @Query('date') date:string):Promise<any>{
        console.log(date)
        console.log(req.body)
        return await this.registroService.getelmes(req.user.userID,date)
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('year')
    async getyear( @Req() req:any , @Query('date') date:string):Promise<any>{
        console.log(date)
        console.log(req.body)
        return await this.registroService.getelyear(req.user.userID,date)
    }


    @Post()
    async postuno(@Body() body:any):Promise<any>{
        await this.registroService.postuno(body)
        return {message:`Se ha registrado el registro ${body.registroId}`}
    }

    @Put()
    async putUno( @Body() body:any):Promise<any>{
       return await this.registroService.putuno(body)
       
    }
}
