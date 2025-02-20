import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

//My modules
import { MongooseModule } from '@nestjs/mongoose'; //This is an ORM
import { UserModule } from './modules/user/user.module';
import { EnsembleModule } from './modules/ensemble/ensemble.module';
import { PostModule } from './modules/post/post.module';
import { MusiciansModule } from './modules/musicians/musicians.module';

@Module({
  //The forRoot() method accepts the same configuration object as mongoose.connect() from the Mongoose package
  //Used to configure the global Mongoose connection for the entire application.
  //https://medium.com/@developerwhoismean/forroot-v-s-forfeature-in-nestjs-mongodb-6748d68cf762
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/daosdb',
    ),
    UserModule,
    EnsembleModule,
    PostModule,
    MusiciansModule,
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
