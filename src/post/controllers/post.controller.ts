import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ICreatePostDto, IUpdatePostDto } from '../dto/post.dto';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Get()
    getAllPosts() {
        return this.postService.getAllPosts();
    }

    @Get(':id')
    getPostById(@Param('id') id: number) {
        return this.postService.getPostById(id);
    }

    @Post()
    createPost(@Body() post: ICreatePostDto) {
        return this.postService.createPost(post);
    }

    @Put(':id')
    updatePost(@Param('id') id: number, @Body() post: IUpdatePostDto) {
        return this.postService.updatePost(id, post);
    }

    @Delete(':id')
    deletePost(@Param('id') id: number) {
        return this.postService.deletePost(id);
    }
}
