import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  selectedValue='Toronto';
  weatherResponce: any;
  constructor(private service :DataService) { }

  ngOnInit() {
    this.submit()
   }

   submit() {
    this.service.getApi(this.selectedValue).subscribe((x:any)=> {

      this.weatherResponce=x.data
      console.log("sdsd",this.weatherResponce)
    })

   }
}
