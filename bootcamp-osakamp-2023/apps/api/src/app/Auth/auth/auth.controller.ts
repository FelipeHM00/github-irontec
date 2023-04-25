import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../../Componentes/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthguard } from './jwt.auth.guards';
import { LocalAuthguard } from './Local-auth.guards';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,private usersService:UsersService) {}
    
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req){
      console.log(req.user);
      
      return this.authService.login(req.user);
    }
    
    // @UseGuards(JwtAuthguard)
    // @Get('profile')
    // getprofile(@Req() req){
    //     return req.user
    // }
    @UseGuards(AuthGuard('jwt'))
  @Get(':email')
  async getUserData(@Param('email')email:string, @Req() req:any) {
    return await this.usersService.getuserone(email);
  }
}
