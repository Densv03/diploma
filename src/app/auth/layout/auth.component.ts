import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";





@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements AfterViewInit, OnInit {
  id = "tsparticles";
  particlesOptions: ISourceOptions = {
    particles: {
      number: { value: 10, density: { enable: true } },
      color: { value: "#1b1e34" },
      shape: {
        type: "polygon",
      },
      opacity: {
        value: 0.3,
        animation: {
          mode: 'auto'
        }
      },
      size: {
        value: 160,
        animation: {
          enable: true,
          speed: 10,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#1b1e34",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: { enable: false, mode: "grab" },
        onClick: { enable: false, mode: "push" },
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  };


  constructor(private readonly ngParticlesService: NgParticlesService) { }


  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);

      await loadSlim(engine);
    });
  }

}
