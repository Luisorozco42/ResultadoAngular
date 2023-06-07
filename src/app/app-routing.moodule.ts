import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { MainPageComponent } from './resultado/pages/main-page/main-page.component';
import { OrdensinPageComponent } from './shared/pages/ordensin-page/ordensin-page.component';
import { AgregarPageComponent } from './shared/pages/agregar-page/agregar-page.component';
import { MostrarOrdenCComponent } from './shared/components/mostrar-orden-c/mostrar-orden-c.component';

const routes: Routes = [
    {
        path: 'resultados/main-page',
        component: MainPageComponent
    },
    {
        path: 'shared/home-page',
        component: HomePageComponent
    },
    {
        path: 'shared/ordensin-page',
        component: OrdensinPageComponent
    },
    {
        path: 'shared/agregar-page/:id',
        component: AgregarPageComponent
    },
    {
        path: 'shared/by/:id',
        component: MostrarOrdenCComponent
    },
    {
        path: '**',
        redirectTo: 'resultados/main-page'
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
