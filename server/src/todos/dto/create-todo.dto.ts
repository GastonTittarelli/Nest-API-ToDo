import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateTodoDto {

  @IsString()
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @MinLength(3)
  @MaxLength(25, { message: 'El título no puede superar los 25 caracteres' })
  readonly title: string;
}