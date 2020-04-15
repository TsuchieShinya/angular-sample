import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { AuthComponent } from './view/auth/auth.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
    autoUpgradeAnonymousUsers: false,
    signInFlow: 'redirect',
    signInOptions: [
	firebase.auth.FacebookAuthProvider.PROVIDER_ID,
	{
	    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
	    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
	}
    ]
};    

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
