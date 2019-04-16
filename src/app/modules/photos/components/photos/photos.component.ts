import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/modules/photos/services/photos.service';
import { Photo } from 'src/app/modules/photos/models/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(public photosService: PhotosService) {}

  get photosSource(): string {
    return this.photosService.photosSource;
  }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(
      photos => {
        this.photos = photos;
      },
      err => console.log(err)
    );
  }
}
