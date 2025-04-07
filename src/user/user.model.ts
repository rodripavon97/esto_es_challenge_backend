import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Project } from '../project/project.model';
import { ProjectUser } from '../project/project-user.model';

interface UserAttributes {
  idUser: string;
  name: string;
  imageUrl: string;
}

type UserCreationAttributes = Omit<UserAttributes, 'idUser'>;

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  idUser: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  imageUrl: string;

  @BelongsToMany(() => Project, () => ProjectUser)
  projects: Project[];
}
