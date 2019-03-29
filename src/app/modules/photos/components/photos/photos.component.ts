import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/modules/photos/services/photos.service';
import { Photo } from 'src/app/modules/photos/models/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(public photosService: PhotosService) { }
  
  photos: Photo[] = [];

  ngOnInit() {
    this.photosService.getPhotos()
      .subscribe(
        photos => {
          this.photos = photos;
          console.log(photos);
        },
        err => console.log(err)
      )
  }

}
