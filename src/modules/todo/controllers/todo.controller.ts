import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Todo } from '../entitiles/todo.entity';
import { CreateDto, UpdateDto } from './dto';

@Controller('rest/todo')
export class TodoController {

  @Get()
  getAllAction(): string {
    return "Todo Get All";
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return "Todo Get One by id=" + id ;
  }

  @Post()
  saveAction(@Body() todo: CreateDto): CreateDto {
    return todo;
  }

  @Put(':id')
  updateAction(
    @Param('id') id: string, 
    @Body() todo: UpdateDto
  ): UpdateDto {
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return "Delete Todo by id=" + id;
  }
}
