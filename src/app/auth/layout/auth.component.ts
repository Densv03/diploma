import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ISourceOptions,
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
      number: {
        value: 5,
        density: {
          enable: true,
        }
      },
      color: {
        value: "#1b1e34"
      },
      shape: {
        type: "polygon",
      },
      opacity: {
        value: 0.3,
        animation: {
          enable: true,
          speed: 1,
          sync: false
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
        enable: false
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble" // Change to 'bubble' for a more interactive effect on hover
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250, // Reduced distance for bubble effect to be more noticeable
          size: 80, // Increased size for bubble effect
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
  }


  constructor(private readonly ngParticlesService: NgParticlesService) {
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
