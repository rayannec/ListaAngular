import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaClientesRoutingModule } from './lista-clientes-routing.module';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@NgModule({
  declarations: [
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    ListaClientesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class ListaClientesModule { }
