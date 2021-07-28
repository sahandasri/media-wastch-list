import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstMediaItem = {
    id: 1,
    name: 'Batman',
    medium: 'Movie',
    category: 'Action',
    year: 2005,
    watchedOn: null,
    isFavorite: false
  };

  secondMediaItem = {
    id: 2,
    name: 'How I Met Your Mother',
    medium: 'Series',
    category: 'Sitcom',
    year: 2003,
    watchedOn: 1294166565384,
    isFavorite: true
  };

  mediaItems = [this.firstMediaItem, this.secondMediaItem];

  onMediaItemDelete(mediaItem) {
    alert(`Deleted: ${mediaItem.name}`);
  }
}
