import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateTodoDto {

  @IsString()
  @IsNotEmpty( { message: 'El título no puede estar vacio' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(25, { message: 'El título no puede superar los 25 caracteres' })
  readonly title: string;
}