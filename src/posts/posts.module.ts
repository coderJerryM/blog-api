import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { Post } from './post.model'

@Module({
  imports: [
    TypegooseModule.forFeature([Post])
  ],
  controllers: [PostsController]
})
export class PostsModule { }
