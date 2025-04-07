import { User } from '../user/user.model';

export const userIncludeOptions = [
  { model: User, as: 'projectManager' },
  { model: User, as: 'assignedUsers', through: { attributes: [] } },
];
