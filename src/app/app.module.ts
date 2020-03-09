import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { routing, appRoutingsProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';
import { JugadorAddComponent } from './jugador-add/jugador-add.component';
import { JugadorDetailComponent } from './jugador-detail/jugador-detail.component';
import { JugadorEditComponent } from './jugador-edit/jugador-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    JugadoresListComponent,
    JugadorAddComponent,
    JugadorDetailComponent,
    JugadorEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
