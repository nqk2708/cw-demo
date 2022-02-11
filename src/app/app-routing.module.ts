import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhatwedoPageComponent } from './whatwedo-page/whatwedo-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'what-we-do', component: WhatwedoPageComponent },
    { path: 'contact-us', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
