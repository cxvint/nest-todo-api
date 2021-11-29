import { Controller } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
import { ApiTags } from '@nestjs/swagger';
import {Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: {
    type: Todo
  }
})
@ApiTags('todo')
@Controller('rest/todo')
export class TodoController implements CrudController<Todo>{
  constructor(public service: TodoService) {}
}




/*
@Get()
  @ApiResponse({
    status:200,
    description: 'get all todo',
    type:[Todo]
  })
  getAllAction(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status:200,
    description: 'get todo by id',
    type: Todo
  })
  @ApiResponse({
    status:404,
    description: 'not found',
  })
  async getOneAction(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new HttpException(
        'Todo with id=' + id + 'not exists',
        HttpStatus.NOT_FOUND
        );
    }
    return todo;
  } 

  @Post()
  @ApiResponse({
    status:200,
    description: 'create todo',
    type: Todo
  })
  @ApiResponse({
    status:404,
    description: 'not found',
  })
  @ApiBody({ type: CreateDto })
  createAction(@Body() createDto: CreateDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createDto.title;
    if (createDto.isComplited !== undefined) {
      todo.isComplited = createDto.isComplited;
    }
    return this.todoService.create(todo);
  }

  @Put(':id')
  @ApiResponse({
    status:200,
    description: 'update todo',
    type: Todo
  })
  @ApiResponse({
    status:404,
    description: 'not found',
  })
  @ApiBody({ type: CreateDto })
  async updateAction(
    @Param('id') id: string,
    @Body() {title, isComplited = false}: UpdateDto
  ): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new NotFoundException('Todo with id=' + id + 'not exists');
    }
    todo.title = id;
    todo.title = title;
    todo.isComplited = isComplited;
    return this.todoService.update(todo);
  }

  @Delete(':id')
  @ApiResponse({
    status:200,
    description: 'delete todo',
  })
  @ApiResponse({
    status:404,
    description: 'not found',
  })
  async deleteAction(@Param('id') id: string): Promise<{success: boolean}> {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new HttpException(
        'Todo with id=' + id + 'not exists',
        HttpStatus.NOT_FOUND
        );
        await this.todoService.remove(id);
    }
    return {
      success: true
    };
  }
  */