import { Component, OnInit } from '@angular/core';
import { NasaAPIService } from './nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NASA';
  imageOfTheDay: any;

  constructor(private nasaService: NasaAPIService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((APODFromJsonFile) => {
      this.imageOfTheDay = APODFromJsonFile;
      console.log(this.imageOfTheDay);
    })
  }
}
