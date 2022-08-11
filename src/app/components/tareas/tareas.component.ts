import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {tarea} from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas: tarea[]= []
  nombreTarea= '';
  constructor() { }

  ngOnInit(): void {
  }

  //crear un objeto tarea
  agregarTarea(){
    const tarea: tarea = {
      nombre:this.nombreTarea,
      estado:false
    }
    //agregar el objeto tarea al array

    this.listTareas.push(tarea);

    //reset form
    this.nombreTarea='';
  }

  eliminarTarea(index: number): void{
  this.listTareas.splice(index,1);
  }

  actualizarTarea( index:number,tarea:tarea):void{
  this.listTareas[index].estado=!tarea.estado;
  }

}
