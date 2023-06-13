import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) {}

  dataSource: any;
 ngOnInit(): void {
   this.authService.getCommonApi().subscribe((data:any) => {
    this.dataSource = data;
   })
 }

 onSubmit(options: any) {
  console.log(options.value);
  sessionStorage.setItem('StateName', options.value);
  this.router.navigate(['/cities-list'])
 }

}
