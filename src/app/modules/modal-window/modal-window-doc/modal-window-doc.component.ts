import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-modal-window-doc',
  templateUrl: './modal-window-doc.component.html',
  styleUrls: ['./modal-window-doc.component.css']
})
export class ModalWindowDocComponent implements OnInit {

  public description:string;

  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "modalOptions", datatype: 'IModalOptions', default: "Undefined", description: 'It will set the modal content,title and give the flag nexmodel required or not.'},
  ];

  private output_element_data: IoutputElement[] = [
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Model window Component
    `;

    this.example = `
    Sample example

    <app-model [modalOptions]="modalOptions">
    </app-model>

    `;
  }
}

export interface IinputElement {
  attribute: string;
  datatype: string;
  default: string;
  description: string;
}

export interface IoutputElement {
  methodName: string;
  eventType: string;
  description: string;
}
