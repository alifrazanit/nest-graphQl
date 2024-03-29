import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

import { ConfigModuleModule } from '@modules/config-module/config-module.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaService } from '../prisma/prisma.service';

import { UsersModule } from './services/users/module/users.module';
import { ExampleModule } from './example/example.module';
import { AuthModule } from './services/auth/module/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './services/post/module/post.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => {
        return {
          autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          formatError: (error) => {
            const originalError = error.extensions?.originalError as any;
            if (!originalError) {
              return {
                message: error.message,
                code: error.extensions?.code,
              };
            }
            return {
              message: originalError.message,
              code: error.extensions?.code,
            };
          },
        }
      },
    }),
    UsersModule,
    ExampleModule,
    AuthModule,
    PostModule,
    ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
