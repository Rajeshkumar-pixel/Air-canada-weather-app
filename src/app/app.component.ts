import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-App';
  selectedValue='Calgary';
  weatherResponce: any;
  constructor(private service :DataService,private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.submit()
   }

   submit() {
    this.ngxService.start()
    this.service.getApi(this.selectedValue).subscribe((x:any)=> {
      this.weatherResponce=x.data;
      this.ngxService.stop()
    })

   }
}
