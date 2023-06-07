import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ResultadoTableComponent } from './components/resultado-table/resultado-table.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/sidebar.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [
        MainPageComponent
    ],
    declarations: [
        MainPageComponent,
        ResultadoTableComponent 
    ],
    providers: [],
})
export class ResultadoModule { }
