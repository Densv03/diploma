import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../../../../service/auth.service";
import { Router } from "@angular/router";

interface SidenavItem {
  link?: string;
  label?: string;
  onclick?: () => void;
}

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  private readonly SIDENAV_ITEMS: SidenavItem[] = [
    {
      link: '/main/create-letter',
      label: 'Create letter'
    },
    {
      link: '/main/labels-list',
      label: 'Labels list'
    },
    {
      link: '/main/account-settings',
      label: 'Account settings'
    },
    {
      link: '/main/about-project',
      label: 'About project'
    },
    {
      label: 'Logout',
      onclick: () => {
        this.authService.logout();
        this.router.navigate(['/auth', 'login'])
      },
    },
  ];

  ngOnInit(): void {
  }

  public get sidenavItems(): SidenavItem[] {
    return this.SIDENAV_ITEMS;
  }

}
