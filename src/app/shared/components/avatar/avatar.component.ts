import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../../core/core.models';

@Component({
  selector: 'rb-avatar',
  template: `
    <img
      class="img-responsive rounded-circle"
      *ngIf="imageUrl"
      [src]="imageUrl"
      [ngStyle]="{ width: width, height: height, 'min-width': width }"
    />
  `
})
export class AvatarComponent implements OnChanges {
  imageUrl = '';

  @Input() user: User;


  ngOnChanges(changes: SimpleChanges) {
    console.log({changes})
    if (changes.user && changes.user.currentValue && changes.user.currentValue.avatar !== undefined) 
      this.imageUrl =
        changes.user.currentValue.avatar 
    
    else this.imageUrl = `https://api.adorable.io/avatars/128/`
  }
}
