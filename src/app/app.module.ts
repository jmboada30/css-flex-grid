import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UniversidadComponent } from './pages/universidad/universidad.component';
import { LoginNetflixComponent } from './pages/login-netflix/login-netflix.component';
import { BlogViajesComponent } from './pages/blog-viajes/blog-viajes.component';
import { HolyGrailComponent } from './pages/holy-grail/holy-grail.component';
import { LayaoutFlexComponent } from './pages/layaout-flex/layaout-flex.component';
import { FooterFijoComponent } from './pages/footerfijo/footer-fijo.component';
import { CentradoVerticalComponent } from './pages/centrado-vertical/centrado-vertical.component';
import { MasonryComponent } from './pages/masonry/masonry.component';
import { AdminFlexComponent } from './pages/admin-flex/admin-flex.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { BienesRaicesComponent } from './pages/bienes-raices/bienes-raices.component';
import { FreelancerComponent } from './pages/freelancer/freelancer.component';
import { MiViajeComponent } from './pages/mi-viaje/mi-viaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversidadComponent,
    LoginNetflixComponent,
    BlogViajesComponent,
    HolyGrailComponent,
    LayaoutFlexComponent,
    FooterFijoComponent,
    CentradoVerticalComponent,
    MasonryComponent,
    AdminFlexComponent,
    RecetasComponent,
    BienesRaicesComponent,
    FreelancerComponent,
    MiViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
