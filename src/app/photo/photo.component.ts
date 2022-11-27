import { Component, OnInit } from '@angular/core';

import { PhotoService } from './../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  srcImg = '';
  constructor(private photoService: PhotoService) {
    this.onGetImage();
  }

  ngOnInit(): void {}

  onGetImage() {
    this.photoService.getRandomImage().subscribe((response) => {
      this.srcImg = response.urls.regular;
      console.log(this.srcImg);
    });
  }
}
