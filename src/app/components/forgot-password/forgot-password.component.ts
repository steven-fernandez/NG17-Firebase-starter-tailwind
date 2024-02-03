import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    standalone: true,
    imports: [RouterLink],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
