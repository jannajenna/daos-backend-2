import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

//My modules
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { EnsembleModule } from './modules/ensemble/ensemble.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/daos'),
    UserModule,
    EnsembleModule,
    PostModule,
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
