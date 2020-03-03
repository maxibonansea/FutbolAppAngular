import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';
import { JugadorAddComponent } from './jugador-add/jugador-add.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'jugadores', component: JugadoresListComponent},
  {path: 'crear-jugador', component: JugadorAddComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingsProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
