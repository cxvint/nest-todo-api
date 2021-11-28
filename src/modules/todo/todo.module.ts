import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './controllers/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [TodoController],
  providers: [],
})
export class TodoModule {}
