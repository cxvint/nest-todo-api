import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoService extends TypeOrmCrudService<Todo> {
  constructor(@InjectRepository(Todo) todoRepository) {
    super(todoRepository);
  }
}





/*
findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  create(todo: Todo): Promise<Todo> {
    delete todo.id;
    return this.todoRepository.save(todo);
  }

  update(todo: Todo): Promise<Todo> {
     return this.todoRepository.save(todo);
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  } */