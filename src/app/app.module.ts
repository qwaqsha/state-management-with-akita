import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environment';
// import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, UserListComponent], // Declare components
    imports: [BrowserModule, environment.production ? [] : AkitaNgDevtools.forRoot()], // Import necessary Angular modules
    bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }
