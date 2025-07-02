import { IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsBoolean()
  readonly completed: boolean;
}
