import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://user:kmh0659@marcus-test-tkbnu.mongodb.net/school?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
