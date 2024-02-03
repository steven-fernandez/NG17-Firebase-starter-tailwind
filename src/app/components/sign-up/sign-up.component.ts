import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    standalone: true,
    imports: [RouterLink],
})
export class SignUpComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
