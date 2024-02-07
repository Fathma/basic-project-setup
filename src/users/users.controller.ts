import { Controller, Get, Param } from '@nestjs/common'

@Controller('users')
export class UsersController {
  @Get()
  getUsers (): string {
    return 'Users'
  }

  @Get('/:id')
  getUser (@Param('id') id: string): string {
    return `User ${id}`
  }
}
