import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListagemAnimaisComponent } from './components/shared/listagem-animais/listagem-animais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    NavbarComponent,
    ListagemAnimaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
