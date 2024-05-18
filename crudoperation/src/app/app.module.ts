import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { CrudserviceService } from './Services/crudservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { aboutComponent } from './about/about.component';
import { ImageComponent } from './image/image.component';
import { AddTOcardComponent } from './add-tocard/add-tocard.component';
import { SelectimageComponent } from './selectimage/selectimage.component';
import { RouterModule } from '@angular/router';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    aboutComponent,
    ImageComponent,
    AddTOcardComponent,
    SelectimageComponent,
    FileComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],



  providers: [CrudserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
