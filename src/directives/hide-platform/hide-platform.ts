import { AppPlatformProvider } from './../../providers/app-platform/app-platform';
import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[hidePlatform]' // Attribute selector
})
export class HidePlatformDirective {

  @Input() set hidePlatform(platforms: Array<String>) {
    if (platforms.indexOf(this.platformProvider.getCurrentPlatform()) > -1 ) {
      console.log('hide');
      this.viewContainer.clear();
    } else {
      console.log('show');
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private viewContainer: ViewContainerRef, 
    private templateRef: TemplateRef<any>,
    private  platformProvider: AppPlatformProvider
  ) {
    console.log('Hello HidePlatformDirective Directive');
  }

}
