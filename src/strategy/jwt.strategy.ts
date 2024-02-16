import { PassportStrategy } from "@nestjs/passport";
import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-jwt";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('ENCRYPTION_TOKEN'),
        })
    }

    async validate(payload: any) {
        return { userId: payload.id, email: payload.email };
    }
}