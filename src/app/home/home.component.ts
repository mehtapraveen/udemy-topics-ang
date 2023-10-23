import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onload(id: number) {
    this.route.navigate(['/servers', id, 'edit'], { queryParams: { allowediting: '1' }, fragment: 'loading' })
  }
  login() {
    this.auth.login()

  }
  logout() {
    this.auth.logout()
  }

}
