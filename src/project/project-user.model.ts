import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Project } from './project.model';
import { User } from 'src/user/user.model';

@Table
export class ProjectUser extends Model<ProjectUser> {
  @ForeignKey(() => Project)
  @Column
  projectId: string;

  @ForeignKey(() => User)
  @Column
  userId: string;
}
