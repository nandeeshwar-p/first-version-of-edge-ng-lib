import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
//import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-pagination-doc',
  templateUrl: './angular-pagination-doc.component.html',
  styleUrls: [ './styles.css','./angular-pagination-doc.component.css' ]
})

export class PaginationDocComponent implements OnInit {  
  public description:string;

  public example:string;
  public inputDisplayedColumns:any = ['Attribute', 'DataType', 'Default', 'Description'];
  public outputDisplayedColumns:any = ['MethodName', 'EventType', 'Description'];

  private input_element_data: IinputElement[] = [
    {attribute: "items", datatype: 'object', default: "", description: 'It will provide the total no of items.'},
    {attribute: "pageSize", datatype: 'Number', default: "10", description: 'It will change page size.'},
    {attribute: "maxPages", datatype: 'Number', default: "8", description: 'Here we can change the number of page to be displayed.'},
    {attribute: "setFontColor", datatype: 'String', default: "#337ab", description: 'It will set the font color.'},
    
  ];

  private output_element_data: IoutputElement[] = [
    {methodName: "changePage", eventType: 'event', description: 'Here we recieved the callback function when we change the selected page.'},
  ];

  public input_dataSource = new MatTableDataSource<IinputElement>(this.input_element_data);
  public output_dataSource = new MatTableDataSource<IoutputElement>(this.output_element_data);


  constructor() {
   }

  ngOnInit() {

    this.description = `
    Pagination is a component that displays page numbers. It will not manipulate your data collection. You will have to split your data 
    collection into pages yourself.
    `;

    this.example = `
    Sample default example

    <app-pagination-comp  class="xOTB-margin" (changePage)="onChangePage($event)"></app-pagination-comp>

    Sample attribute example
    
    <app-pagination-comp class="xOTB-margin"  setFontColor="#337ab" [items]="results" [pageSize]="10" [maxPages]="8" 
    (changePage)="onChangePage($event)"> </app-pagination-comp>
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
