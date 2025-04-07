import { IsArray, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUUID()
  projectManagerId: string;

  @IsArray()
  @IsUUID('4', { each: true })
  assignedUserIds: string[];

  @IsEnum(['enabled', 'disabled'])
  status: 'enabled' | 'disabled';
}
