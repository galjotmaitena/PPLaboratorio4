import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideAuth(() => getAuth()),
    FormsModule,
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"recupplabo","appId":"1:729075835494:web:d671ae4a22763c4ac043a7","storageBucket":"recupplabo.appspot.com","apiKey":"AIzaSyCjH_Q6MNXLFv1VwCS0IsPVx1oqktzJkn8","authDomain":"recupplabo.firebaseapp.com","messagingSenderId":"729075835494"}))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
