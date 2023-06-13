import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  @Input() city: any;
  @Input() state: any;
  
  constructor(private route: ActivatedRoute, private authService: AuthServiceService) {
       }

  ngOnInit() {
    
  }


}
