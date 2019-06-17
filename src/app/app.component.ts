import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xotb';
  height:number=0;
  position:string='relative';
  isExpand:boolean = false;

  isHome:boolean = true;
  isMultiSelValue:boolean=false;
  isAcordionGroup:boolean=false;
  isModelDialog:boolean = false;
  isSpeedoMeter:boolean=false;
  isDynamicForm:boolean=false;
  isFormCreation:boolean=false;
  isImageSlider:boolean=false;
  isIndetermineTree:boolean=false;
  isPagination:boolean=false;
  isContextMenu:boolean=false;
  isExample4:boolean=false;


  constructor(){

  }
  ngOnInit(){
    this.height = window.outerHeight;
    this.position = 'fixed';
  }

  onSelectTab(selButton){
    this.isExpand = false;
    switch(selButton){
      case 'home':
      this.onHome();
      break;
      case 'multiSelvalue':
      this.onMultiSelValue();
      break;
      case 'accordiongroup':
      this.onAccordionGroup();
      break;
      case 'modeldialog':
      this.onModelDialog();
      break;
      case 'speedometer':
      this.onSpeedoMeter();
      break;
      case 'dynamicform':
      this.onDynamicForm();
      break;
      case 'formcreation':
      this.onFormCreation();
      break;
      case 'imageslider':
      this.onImageSlider();
      break;
      case 'indetermintree':
      this.onIndetermineTree();
      break;
      case 'pagination':
      this.onPagination();
      break;
      case 'contextmenu':
      this.onContextMenu();
      break;
    }
  }


  onHome(){
  this.isHome = true;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
  }

  onMultiSelValue(){
    this.isHome = false;
    this.isMultiSelValue=true;
    this.isAcordionGroup=false;
    this.isModelDialog = false;
    this.isSpeedoMeter=false;
    this.isDynamicForm=false;
    this.isFormCreation=false;
    this.isImageSlider=false;
    this.isIndetermineTree=false;
    this.isPagination=false;
    this.isContextMenu=false;
    this.isExample4=false;
  }

onAccordionGroup(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=true;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onModelDialog(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = true;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onSpeedoMeter(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=true;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onDynamicForm(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=true;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onFormCreation(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=true;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onImageSlider(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=true;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onIndetermineTree(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=true;
  this.isPagination=false;
  this.isContextMenu=false;
  this.isExample4=false;
}
onPagination(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=true;
  this.isContextMenu=false;
  this.isExample4=false;
}
onContextMenu(){
  this.isHome = false;
  this.isMultiSelValue=false;
  this.isAcordionGroup=false;
  this.isModelDialog = false;
  this.isSpeedoMeter=false;
  this.isDynamicForm=false;
  this.isFormCreation=false;
  this.isImageSlider=false;
  this.isIndetermineTree=false;
  this.isPagination=false;
  this.isContextMenu=true;
  this.isExample4=false;
}
}
