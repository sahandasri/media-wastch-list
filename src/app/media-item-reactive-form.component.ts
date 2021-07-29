import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'mw-media-item-reactive-form',
  templateUrl: './media-item-reactive-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemReactiveFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(),
      category: new FormControl(),
      year: new FormControl()
    });
  }

  onSubmit(response) {
    // alert(response.medium);
    console.log(response);
  }
}
