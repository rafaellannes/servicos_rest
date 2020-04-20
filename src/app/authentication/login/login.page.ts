import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/login';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginModel: Login = new Login();

  constructor(private authService: AuthService, private router: Router, private toast: ToastService) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.authService.login(this.loginModel)
      this.toast.showSuccess('Login efetuado com sucesso!');
      this.router.navigate(['/tabs/services/']);
    } catch (error) {
      this.toast.showError('Erro ao logar!');
    }
  }

}
