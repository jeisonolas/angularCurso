import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes:string []=['Spiderman','Ironman','Thor','Capitan America','Hulk'];
  heroeBorrado:string='';

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('NgOnit');
  }

  borrarHeroe(){
    const heroe = this.heroes.shift();

    this.heroeBorrado=heroe || '';
  }
}
