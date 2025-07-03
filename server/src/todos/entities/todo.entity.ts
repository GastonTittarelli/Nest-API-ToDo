import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 25, unique: true })
  title: string;

  @Column({ default: false })
  completed: boolean;
}