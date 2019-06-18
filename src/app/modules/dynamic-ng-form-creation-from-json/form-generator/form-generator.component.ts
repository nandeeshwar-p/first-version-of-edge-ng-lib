import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-form-generator",
  templateUrl: "./form-generator.component.html",
  styleUrls: ["./form-generator.component.css"]
})
export class FormGeneratorComponent implements OnInit {
  @Input() jsonFormData;
  @Input() formGeneratorName;
  public selRadioValue: string;
  constructor() {}

  ngOnInit() {}

  chechType(data) {
    return (
      data.type == "text" ||
      data.type == "password" ||
      data.type == "number" ||
      data.type == "tel" ||
      data.type == "email" ||
      data.type == "date"
    );
  }
}
