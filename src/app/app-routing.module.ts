import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversidadComponent } from './pages/universidad/universidad.component';
import { HomeComponent } from './pages/home/home.component';
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

const  ROUTES: Routes = [
  { path:'home', component: HomeComponent },
  { path:'universidad', component: UniversidadComponent },
  { path:'netflix', component: LoginNetflixComponent },
  { path:'blogviajes', component: BlogViajesComponent },
  { path:'holygrail', component: HolyGrailComponent },
  { path:'layaoutsflex', component: LayaoutFlexComponent },
  { path:'footerfijo', component: FooterFijoComponent },
  { path:'centradovertical', component: CentradoVerticalComponent },
  { path:'adminflex', component: AdminFlexComponent },
  { path:'masonry', component: MasonryComponent },
  { path:'recetas', component: RecetasComponent },
  { path:'bienes', component: BienesRaicesComponent },
  { path:'freelancer', component: FreelancerComponent },
  { path:'miviaje', component: MiViajeComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'home' },
]

@NgModule({
  imports: [
    RouterModule.forRoot( ROUTES )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }