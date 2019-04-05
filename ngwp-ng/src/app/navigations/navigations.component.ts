import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media-service/media-service.service';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})
export class NavigationsComponent implements OnInit {

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.mediaService.getMedia(17).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
