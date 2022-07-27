import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsModule } from './tools/tools.module';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './tools/auth/auth.module';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'blur': 0,
  'delay':0,
  'fgsType': 'three-bounce',
  'fgsSize': 45,
  'fgsColor': '#ffffff',
  'pbColor': '#ffffff',
  'pbThickness': 7,
  'logoPosition': "center-center",
  'logoSize': 120,
  'logoUrl': "/assets/logo.png",
  'overlayColor': "rgba(17, 24, 39,0.9)",
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
