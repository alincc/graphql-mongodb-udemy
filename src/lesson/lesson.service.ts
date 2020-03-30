import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { v4 as uuid } from 'uuid';

import { Lesson } from './lesson.entity';
import { LessonType } from './lesson.type';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<LessonType>,
  ) {}

  async createLesson(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<LessonType> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }

  async getLessonById(id: string): Promise<LessonType> {
    const lesson = await this.lessonRepository.findOne({ id });
    return lesson;
  }
}
