import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HotToastService } from "@ngneat/hot-toast";
import { AccountSettingsService } from "../../service/account-settings.service";

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
  public accountSettingsFormGroup: FormGroup = new FormGroup({
    currentPassword: new FormControl(null, Validators.required),
    newPassword: new FormControl(null, Validators.required),
    repeatNewPassword: new FormControl(null, Validators.required),
  });
  constructor(private hotToastService: HotToastService,
              private accountSettingsService: AccountSettingsService) { }

  public ngOnInit(): void {
  }

  public changePassword(): void {
    if (this.accountSettingsFormGroup.value.newPassword !== this.accountSettingsFormGroup.value.repeatNewPassword) {
      this.hotToastService.error('Passwords do not match')
      return;
    }
    if (this.accountSettingsFormGroup.invalid) {
      console.log('invalid')
      return;
    }

    console.log(this.accountSettingsFormGroup.value);
    this.hotToastService.info('Not yet implemented')
    return;

    this.accountSettingsService.changePassword(this.accountSettingsFormGroup.value.newPassword).pipe(
      this.hotToastService.observe({
        loading: 'Changing password...',
        success: 'Password changed',
        error: 'Error changing password'
      })).subscribe()
  }

  public deleteAccount(): void {
    this.hotToastService.info('Not yet implemented');
    return;
    this.accountSettingsService.deleteAccount().pipe(
      this.hotToastService.observe({
        loading: 'Deleting account...',
        success: 'Account deleted',
        error: 'Error deleting account'
      })
    ).subscribe()
  }
}
