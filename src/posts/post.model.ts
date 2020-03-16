import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose'

export class Post {
  @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
  @prop()
  title: string
  @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
  @prop()
  content: string


}

