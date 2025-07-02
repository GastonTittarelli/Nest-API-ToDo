import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.findAll();
  }

  @Post()
    create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto.title);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.remove((id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
  return this.todosService.update(id, updateTodoDto);
}
}