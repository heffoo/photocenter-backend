import { Position } from 'src/modules/positions/entities/position.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  firstname: string;

  @Column({
    nullable: true,
  })
  lastname: string;

  @Column({
    nullable: true,
  })
  username: string;

  @Column()
  positionId: string;

  @ManyToOne(() => Position, (position) => position.employees)
  position: Position;

  @OneToMany(() => Task, (task) => task.creator)
  createdTasks: Array<Task>;

  @OneToMany(() => Task, (task) => task.executor)
  executedTasks: Array<Task>;
}
