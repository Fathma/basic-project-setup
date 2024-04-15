import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)
  const port: string | undefined = configService.get('APPLICATION_PORT') ?? '3001'

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Calcuu APIs')
    .setDescription('Calcuu APIs')
    .addServer(`http://localhost:${port}/`, 'Development environment')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT-auth'
    )
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  app.enableCors()

  await app.listen(port)
}
void bootstrap()
