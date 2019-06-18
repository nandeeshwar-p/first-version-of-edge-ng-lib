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

  ngOnInit() {
    this.height = window.innerHeight - 87;
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
}
