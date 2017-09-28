import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  teste: string = "Isso é só um teste!"

  constructor(private auth: AuthService) { }

  ngOnInit() {
  
  }

}
