import { Component  , OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';




@Component({
  selector: 'my-heroes',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [HeroService]

})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(
      (heroes) => {
        this.heroes = heroes;
      }
    );
    // this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


