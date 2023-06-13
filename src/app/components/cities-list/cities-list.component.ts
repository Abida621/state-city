import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit  {
  
  dataSource: any;
  selectedValue: boolean = false;
  selectedCity: any
  selectedState: any

  @Output() selectedStateName = new EventEmitter<any>();
  @Output() selectedCityName = new EventEmitter<any>();

  StateName: any = sessionStorage.getItem('StateName');
  constructor(private authService: AuthServiceService, private router: Router) {
  }

  ngOnInit() : void{
   this.authService.getCommonApi().subscribe((res: any) => {
    res.forEach((element: any) => {
      if(this.StateName == element.stateName) {
        this.dataSource = element.city;
      }
    });
   })
  }

  onSubmit(options: any) {
    console.log(options.value);
    this.selectedValue = true;
    this.selectedCity = options.value;
    this.selectedState = this.StateName;
  }
  
}
