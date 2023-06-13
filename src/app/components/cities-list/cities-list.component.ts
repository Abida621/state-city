import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {

  dataSource: any;
  cityVal: any;
  state: any;
  constructor(private authService: AuthServiceService, private router: Router) {}
  ngOnInit() {
    const getVal = sessionStorage.getItem('storeval');
    this.authService.getCommonApi().subscribe((res: any) => {
      let city = res;
      city.map((res: any) => {
        if (getVal == res.stateName) {
          this.dataSource = res.city;
          this.state = res.stateName;
        }
      })
      
    })
  }

  selectedStateChange(event: any) {
    this.cityVal = event?.target.value
  }

  onSubmit() {
    this.authService.subject.next(this.cityVal);
    this.authService.subject1.next(this.state);
    this.router.navigate(['result'])
  }
}
