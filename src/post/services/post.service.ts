import { Injectable } from '@nestjs/common';
import { ICreatePostDto, IUpdatePostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
    deletePost(id: number) {
        return id;
    }
    updatePost(id: number, post: IUpdatePostDto) {
        return id;
    }
    createPost(post: ICreatePostDto) {
        return post;
    }
    getPostById(id: number) {
        return id;
    }

    getAllPosts() {
        return [];
    }
}
