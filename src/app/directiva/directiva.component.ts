import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  listaCurso: string[] = ['Typescript','JavaScript','Java','Angular'];
  habilitar: boolean = true;
  
  setHabilitar():void{
    this.habilitar = !this.habilitar;
  }

  constructor() { }
  ngOnInit() {
  }

}
