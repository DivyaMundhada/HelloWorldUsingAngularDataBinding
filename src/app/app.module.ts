//app.module.ts - Indicating this is a Typescript file.
//                Essentially Provides Strong Type Checking.

//Importing core modules of Angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Whenever ClI is used to generate new components and services, 
// it will automatically update this file to import and add them here.
import { AppComponent } from './app.component';


//Further using @NgModule decorator we provide additional metadata to 
//specify the Components, the Services, the Imports, etc.. Further
//Decorators are used while processing, installation and at runtime.
@NgModule({

  //Components are added here. Essentially the classes that has views,
  // they are Components, Directives and Pipes.
  declarations: [
    AppComponent,
  ],

  //Various imports needed for application can be added here.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  //Services like http-services are added.
  providers: [],

  // The root component which is the main view of the application.
  //  Only the root module has this property ad it indicates the 
  //  component that is going to be bootstrapped.
  bootstrap: [AppComponent]
})
export class AppModule { }