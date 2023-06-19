import { Item } from './../item.model';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
@Injectable()

  itens$!: Observable<Item[]>;
  colunasTabela = ['id', 'nome', 'username', 'email'];

  constructor(private clienteService:ClienteService){}

  ngOnInit(){
    this.listarItens();
  }

  listarItens(){
    this.itens$ = this.clienteService.listar();
    //  this.clienteService.listar().subscribe(
    //   (data) =>{      
    //   console.log(data)
    //   },
    //   (error) =>{
    //     console.log(error)
    //   };
  }

}
