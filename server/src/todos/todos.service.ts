import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepo.find();
  }

  async create(title: string): Promise<{ message: string; todo: Todo }> {
    const exists = await this.todoRepo.findOne({ where: { title } });
    if (exists) {
      throw new ConflictException(`Ya existe una tarea con el título: ${title}`);
    }

    const todo = this.todoRepo.create({ title });
    await this.todoRepo.save(todo);
    return { message: 'Se creó correctamente la tarea', todo };
  }

  async remove(id: string): Promise<{ message: string; todo: Todo }> {
    const todo = await this.todoRepo.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`No se encontró una tarea con id: ${id}`);
    }
    await this.todoRepo.remove(todo);
    return { message: 'Se eliminó correctamente la tarea', todo };
  }

  async update(id: string, changes: Partial<Pick<Todo, 'completed'>>): Promise<{ message: string; todo: Todo }> {
    const todo = await this.todoRepo.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`No se encontró una tarea con id: ${id}`);
    }

    todo.completed = changes.completed ?? todo.completed;
    await this.todoRepo.save(todo);

    return { message: `Tarea "${todo.title}" actualizada`, todo };
  }
  
}
