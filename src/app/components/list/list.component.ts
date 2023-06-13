import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) {}

  dataSource: any;
  selectedState: any;
  @Output() onSelected = new EventEmitter<any>();
  ngOnInit(): void {
    this.authService.getCommonApi().subscribe((res: any) => {
      this.dataSource = res;
      console.log(this.dataSource);
      
    })
  }

  selectedStateChange(data: any) {
    this.selectedState = data.target.value;
  }
  onSubmit() {
    this.dataSource.map((data: any) => {
      if(this.selectedState == data.stateName) {
        // this.authService.subject1.next(this.selectedState)
        sessionStorage.setItem('storeval', this.selectedState)
        this.router.navigate(['/cities-list'])
      }
    });
  }

}
