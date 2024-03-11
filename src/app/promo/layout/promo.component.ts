import { AfterViewInit, Component, HostListener, inject, OnInit } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import { PARTICLE_OPTIONS_NO_CLICK } from "../../shared/PARTICLE_OPTIONS_NO_CLICK";
import { fromEvent } from "rxjs";
import { Router } from "@angular/router";

interface Section {
  id: string;
  yOffset: number;
  label: string;
  onClick: () => void;
}
@Component({
  selector: 'app-promo',
  standalone: true,
    imports: [
        NgxParticlesModule
    ],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss'
})
export class PromoComponent implements OnInit, AfterViewInit {
  private ngParticlesService = inject(NgParticlesService);
  private router = inject(Router);

  public readonly PARTICLE_OPTIONS = PARTICLE_OPTIONS_NO_CLICK;
  public sections: Section[] = this.getSections();

  public activeSection: string = '';
  public ngOnInit(): void {
    this.initParticles()
  }

  public ngAfterViewInit(): void {
    this.updateSectionOffsets();
    this.initWindowScrollHandle()
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.updateSectionOffsets();
  }

  public initWindowScrollHandle() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          console.log(entry.target.id + " is active");
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }
  public scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public redirectTo(link: string) {
    this.router.navigate([link]);
  }

  private initParticles(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }

  private getSections(): Section[] {
    return [
      { id: 'why-us', yOffset: 0, label: 'Why us?', onClick: () => this.scrollToSection('why-us') },
      { id: 'who-needs-this-product', yOffset: 0, label: 'Who needs this product?', onClick: () => this.scrollToSection('who-needs-this-product') },
      { id: 'our-values', yOffset: 0, label: 'Our values', onClick: () => this.scrollToSection('our-values') },
      { id: 'our-mission', yOffset: 0, label: 'Our mission', onClick: () => this.scrollToSection('our-mission') },
      { id: 'get-started', yOffset: 0, label: 'Get started', onClick: () => this.scrollToSection('get-started')},
    ]
  }

  private updateSectionOffsets(): void {
    console.log('update')
    this.sections = this.sections.map((section) => {
      const element = document.getElementById(section.id);
      const yOffset = element?.offsetTop || 0;
      return { ...section, yOffset };
    });
  }
}
