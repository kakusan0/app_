import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

// app.component.ts
declare var google: any;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => this.googleOneTap(), 1000);
  }
  constructor(private router: Router, private ngZone: NgZone) { }

  googleOneTap() {
    if (
      typeof google !== 'undefined' &&
      google.accounts &&
      google.accounts.id
    ) {
      google.accounts.id.initialize({
        client_id:
          '119845162852-ai9js7ioqp51kb9logn3vtjj5rc4khpi.apps.googleusercontent.com',
        callback: this.handleCredentialResponse,
      });
      google.accounts.id.prompt();
    }
  }

  handleCredentialResponse = (response: any) => {
    console.log('Response:', response);
    const idToken = response.credential;
    const decoded: any = jwtDecode(idToken);
    console.log(decoded.email);
    this.authenticateUser(idToken);
  };

  authenticateUser(idToken: string) {
    fetch('http://localhost:3001/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.ngZone.run(() => {
          this.router.navigate(['/main']);
        });
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }
  logout() {
    // Googleのログアウトメソッドを呼び出す
    if (google && google.accounts && google.accounts.id) {
      google.accounts.id.disableAutoSelect();
      console.log('Logout');
    }

    // ログイン画面にリダイレクト
    this.router.navigate(['/main1']);
  }
}
