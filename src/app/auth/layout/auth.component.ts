import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import { PARTICLE_OPTIONS } from "../../shared/PARTICLE_OPTIONS";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements AfterViewInit, OnInit {
  id = "tsparticles";
  public PARTICLE_OPTIONS = PARTICLE_OPTIONS;

  constructor(private ngParticlesService: NgParticlesService) {
  }


  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);

      await loadSlim(engine);
    });
  }

}
