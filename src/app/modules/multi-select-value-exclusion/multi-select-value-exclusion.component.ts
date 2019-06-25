import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IDropDownOptions, ISelectorOptions } from './i-drop-down-options';

@Component({
  selector: 'app-multi-select-value',
  templateUrl: './multi-select-value-exclusion.component.html',
  styleUrls: ['./multi-select-value-exclusion.component.css']
})
export class MultiSelectValueExclusionComponent implements OnInit {
  public dynamicControlsForm: FormGroup;
  selectorValues:Array<IDropDownOptions>;
  containerStyle:String;
  headerStyle:String;
  mainSelectorStyle : String;
  mainOptionStyle : String;
  subSelectorStyle : String;
  subOptionStyle : String;
  extraSelectorsRequired:boolean=false;
  title:String;
  @Input() 
  selectorOptions : ISelectorOptions;

  @Output('onChange')
  onChange: EventEmitter<any> = new EventEmitter<any>();

  @Output('onChangeSubOption')
  onChangeSubOption: EventEmitter<any> = new EventEmitter<any>();

  @Output('addFormControl')
  addFormControl: EventEmitter<any> = new EventEmitter<any>();

  @Output('deleteControl')
  deleteControl: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _fb: FormBuilder) {
    console.log(this.selectorOptions);
   }

  ngOnInit() {
    console.log(this.selectorOptions);
    this.selectorValues = this.selectorOptions.dropdownValues;
    this.containerStyle = this.selectorOptions.styles.containerStyle;
    this.headerStyle = this.selectorOptions.styles.headerStyle;
    this.mainSelectorStyle = this.selectorOptions.styles.mainSelectorStyle;
    this.mainOptionStyle = this.selectorOptions.styles.mainOptionStyle;
    this.subSelectorStyle = this.selectorOptions.styles.subSelectorStyle;
    this.subOptionStyle = this.selectorOptions.styles.subOptionStyle;
    this.title = this.selectorOptions.title;
    this.extraSelectorsRequired = this.selectorOptions.extraSelectorsRequired;
    console.log(this.selectorValues);
    this.dynamicControlsForm = this._fb.group({
      newFormControlArray: this._fb.array([this.initFormControl()])
    });
  }

  initFormControl() {
    return this._fb.group({
      mainKeyChosen: [''],
      subKeyChosen: ['']
    });
  }

  addAnotherFormControl(event:any) {
    console.log('addAnotherFormControl',event);
    const control = <FormArray>this.dynamicControlsForm.controls['newFormControlArray'];
    control.push(this.initFormControl());
    this.addFormControl.emit({eventTarget:event});
  }

  deleteFormControl(index: number, event:any) {
    console.log('deleteFormControl',index,event);
    const control = <FormArray>this.dynamicControlsForm.controls['newFormControlArray'];
    control.removeAt(index);
    this.deleteControl.emit({index:index, eventTarget:event});
  }

  changeMainKey(i:any,event:any){
    console.log('changeMainKey', i, event);
    this.dynamicControlsForm.controls['newFormControlArray'].value[i].subKeyChosen = ''
    let newFormValues = this.dynamicControlsForm.controls['newFormControlArray'].value;
    this.dynamicControlsForm.controls['newFormControlArray'].setValue(newFormValues);
    this.onChange.emit({index:i, eventTarget:event});
  }
  changeSubKey(i:any,event:any){
    console.log('changeSubKey', i, event);
    this.onChangeSubOption.emit({index:i, eventTarget:event});

  }

}
