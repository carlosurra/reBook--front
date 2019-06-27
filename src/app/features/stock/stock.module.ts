import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockComponent } from './stock/stock.component';
import { StockHeaderComponent } from './stock-header/stock-header.component';
import { StockFooterComponent } from './stock-footer/stock-footer.component';
import { ShelvesComponent } from './shelves/shelves.component';

const routes: Routes = [
  {
    path: '',
    component: StockComponent
  }
];
@NgModule({
  declarations: [
    StockComponent,
    StockHeaderComponent,
    StockFooterComponent,
    ShelvesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class StockModule { }
