// src/project/project.model.ts

import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { ProjectUser } from './project-user.model';

interface ProjectAttributes {
  id: string;
  name: string;
  description: string;
  status: 'enabled' | 'disabled';
  projectManagerId: string;
}

type ProjectCreationAttributes = Omit<ProjectAttributes, 'id'>;

@Table
export class Project extends Model<
  ProjectAttributes,
  ProjectCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idProject: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  status: 'enabled' | 'disabled';

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  projectManagerId: string;

  @BelongsTo(() => User, { as: 'projectManager' }) // ← le das nombre explícito
  projectManager: User;

  @BelongsToMany(() => User, () => ProjectUser) // ← explícito también
  assignedUsers: User[];
}
