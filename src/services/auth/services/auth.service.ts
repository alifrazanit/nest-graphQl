import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthService {
 
  // async signIn(payload: authInput) {
  //   const salt = await bcrypt.genSalt();
  //   const hashedPassowrd = await bcrypt.hash(payload.password, salt);
  //   const user = this.prismaService.user.create({
  //     data: {
  //       name: payload.
  //     }
  //   })
  //   return 'This signIn';
  // }
}
