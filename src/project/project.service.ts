import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './project.model';
import { CreateProjectDto } from './dto/createProject.dto';
import { Op } from 'sequelize';
import { userIncludeOptions } from '../utils/includesOptions';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project) private projectModel: typeof Project) {}

  private async getOrFail(id: string) {
    const project = await this.findOne(id);
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async create(dto: CreateProjectDto) {
    const { name, description, projectManagerId, status } = dto;

    const assigned = dto.assignedUserIds.filter(
      (id) => id !== projectManagerId,
    );

    const project = await this.projectModel.create({
      name,
      description,
      projectManagerId,
      status,
    });

    await project.$set('assignedUsers', assigned);
    return project;
  }
  async findAll(page: number, limit: number, search?: string) {
    return this.projectModel.findAndCountAll({
      where: search ? { name: { [Op.iLike]: `%${search}%` } } : {},
      limit,
      offset: (page - 1) * limit,
      include: userIncludeOptions,
    });
  }

  async findOne(id: string) {
    return this.projectModel.findByPk(id, { include: userIncludeOptions });
  }

  async findByProyectById(id: string) {
    return await this.getOrFail(id);
  }

  async update(id: string, dto: CreateProjectDto) {
    const project = await this.findOne(id);
    if (!project) throw new NotFoundException('Project not found');

    const { name, description, projectManagerId, status } = dto;

    await project.update({
      name,
      description,
      projectManagerId,
      status,
    });

    const assigned = dto.assignedUserIds.filter(
      (userId) => userId !== projectManagerId,
    );
    await project.$set('assignedUsers', assigned);

    return project;
  }

  async remove(id: string) {
    const project = await this.getOrFail(id);
    await project.destroy();
  }
}
