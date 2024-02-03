import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-verify-email',
    templateUrl: './verify-email.component.html',
    styleUrls: ['./verify-email.component.scss'],
    standalone: true,
    imports: [RouterLink],
})
export class VerifyEmailComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
