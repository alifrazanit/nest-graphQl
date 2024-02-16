import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthResolver } from '../resolver/auth.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [
    AuthResolver, 
    AuthService, 
    PrismaService,
    JwtService
  ],
  imports:[
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
          return {
              secret: 'test1',
              signOptions: {
                  expiresIn: 3600
              }
          }
      }
  }),
  ]
})
export class AuthModule { }
