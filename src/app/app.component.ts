import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xotbEDGE';
  height: any = 0;
  isDemo: boolean = false;
  isDocumentation: boolean = false;
  isOthers: boolean = false;
  isMore: boolean = false;
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

  ngOnInit() {
    this.height = window.innerHeight - 87;
    // this.height = window.outerHeight;
    // this.position = 'fixed';
  }

  onActionButtonClick(buttonName) {
    switch (buttonName) {
      case 'demo':
          this.onDemoClick();
        break;
      case 'documentation':
          this.onDocumentaionClick();
        break;
      case 'others':
          this.onOthersClick();
        break;
      case 'more':
          this.onMoreClick();
        break;
    }
  }

  onDemoClick() {
    this.isDemo = true;
    this.isDocumentation = false;
    this.isOthers = false;
    this.isMore = false;
  }
  onDocumentaionClick() {
    this.isDemo = false;
    this.isDocumentation = true;
    this.isOthers = false;
    this.isMore = false;
  }
  onOthersClick() {
    this.isDemo = false;
    this.isDocumentation = false;
    this.isOthers = true;
    this.isMore = false;
  }
  onMoreClick() {
    this.isDemo = false;
    this.isDocumentation = false;
    this.isOthers = false;
    this.isMore = true;
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
