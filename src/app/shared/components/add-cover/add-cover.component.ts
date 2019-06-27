import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { LibraryService } from '../../../core/services/library.service';

class ImageSnippet {
  pending = false;
  status = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'rb-add-cover',
  templateUrl: './add-cover.component.html',
  styleUrls: ['./add-cover.component.scss']
})
export class AddCoverComponent {
  @Input() imageUrl: string;
  @Input() id: string;

  selectedFile: ImageSnippet;

  constructor(private libraryService: LibraryService) {}

  private onSuccess(response: any) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.imageUrl = response.headers.get('Location');
    console.log({imageUrl: this.imageUrl})
    console.log({imageUrl: this.imageUrl})
    interval(1000)
      .pipe(take(5))
      .subscribe(() => (this.selectedFile = null));
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.libraryService
        .uploadCover(this.selectedFile.file, this.id)
        .subscribe(response => this.onSuccess(response), () => this.onError());
    });
    console.log({file})
    reader.readAsDataURL(file);
  }

  getIcon() {
    if (this.selectedFile.status === 'ok') {
      return 'fa fa-check';
    }

    if (this.selectedFile.status === 'fail') {
      return 'fa fa-exclamation-triangle';
    }

    return 'fa fa-user-circle';
  }
}