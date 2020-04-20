import { Component, OnInit } from '@angular/core';
import { Account } from '../shared/account';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/service/toast.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  accountModel: Account = new Account();

  constructor(private authService: AuthService, private router: Router, private toast: ToastService) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.authService.createAccount(this.accountModel);
      this.toast.showSuccess('Conta criada com sucesso!');
      this.router.navigate(['/login']);
    } catch (error) {
      this.toast.showError('Erro ao criar a conta!');
    }
  }

}
