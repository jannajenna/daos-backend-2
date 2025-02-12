import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './schemas/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]), // Added
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService], // Allows use in other modules
})
export class PostModule {}
