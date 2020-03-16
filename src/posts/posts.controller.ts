import { Controller, Get, Post, Body, Query, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

import { Crud } from 'nestjs-mongoose-crud'

class CreatePostDto {
  @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string
  @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
  content: string
}

@Crud({
  model: PostSchema,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '帖子列表' })
      ]
    },
    create: {
      dto:CreatePostDto
    }
  }

})
@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(
    @InjectModel(PostSchema) private readonly model: ModelType<PostSchema>
  ) { }




}
