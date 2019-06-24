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
  @Input() width = 'auto';
  @Input() height = 'auto';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users && changes.users.currentValue.avatar !== undefined) {
      this.imageUrl =
        changes.users.currentValue.avatarUrl ||
        `https://api.adorable.io/avatars/128/${changes.users.currentValue.uuid}`;
    }
  }
}
