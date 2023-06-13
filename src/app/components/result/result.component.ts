import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  constructor(private authService: AuthServiceService) {
    
  }
  state: any;
  city: any;
  storeVal: any;
  stateName: any;
  cityName: any

  ngOnInit(): void {
    this.authService.subject1.subscribe(res => {
      this.stateName = res;
    })
    this.authService.subject.subscribe(res => {
      this.cityName = res;
    })
    this.authService.getCommonApi().subscribe((res: any) => {
      res.map((data: any) => {
        if (this.stateName = data.stateName) {
          this.stateName = data.stateName
          console.log(data);
        }
        data.city.filter((res: any) => {
          console.log(res);
          if (this.cityName == res.city) {
            this.cityName = res.cityName;
          }
        })
      });
    })
  }

}
