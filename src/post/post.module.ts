import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './models/post.model';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'post',
      schema: PostSchema,
    }
  ])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule { }
