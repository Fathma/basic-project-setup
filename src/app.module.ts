import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/entities/users.entity'
import { ConfigModule } from '@nestjs/config'
import configuration from '../configs/app.config'
import databaseConfig, { dataSourceOptions } from '../configs/database.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
