import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdensinPageComponent } from './pages/ordensin-page/ordensin-page.component';
import { OrdenTableComponent } from './components/orden-table/orden-table.component';
import { OrdenTableCComponent } from './components/orden-table-c/orden-table-c.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AgregarPageComponent } from './pages/agregar-page/agregar-page.component';
import { AgregarFormComponent } from './components/agregar-form/agregar-form.component';
import { MostrarOrdenCComponent } from './components/mostrar-orden-c/mostrar-orden-c.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
      SidebarComponent,
      HomePageComponent,
      OrdensinPageComponent,
      SearchBoxComponent,
      AgregarPageComponent
    ],
    declarations: [
    SidebarComponent,
    HomePageComponent,
    OrdensinPageComponent,
    OrdenTableComponent,
    OrdenTableCComponent,
    SearchBoxComponent,
    AgregarPageComponent,
    AgregarFormComponent,
    MostrarOrdenCComponent
  ],
    providers: [],
})
export class SharedModule { }
