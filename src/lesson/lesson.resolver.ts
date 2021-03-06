import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  lesson(@Args('id') id: 'string') {
    return this.lessonService.getLessonById(id);
  }

  @Mutation((returns) => LessonType)
  async createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ): Promise<LessonType> {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
