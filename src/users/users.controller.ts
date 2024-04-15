import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('auth')
@Controller('auth')
export class UserController {
  @Post('/signup')
  @ApiOperation({ summary: 'This endpoint is used for creating user/painter.' })
  @ApiOkResponse({ description: 'Create User/Painter' })
  createUser (@Body() body: CreateUserDto): string {
    console.log(body)

    return "test"
  }
}
