import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail = new Cocktail('mojito','https://img.cuisineaz.com/610x610/2017-07-28/i131123-mojito-au-thermomix.jpeg','Au xxe siècle, la recette originelle évolue : le tafia est remplacé par du rhum et le citron vert agrémente le mélange. Ainsi est né le mojito connu aujourd’hui, et qui tire son nom du « mojo », une mixture à base de citron initialement destinée à rehausser le goût des aliments.');

  constructor() { }

  ngOnInit(): void {
  }

}
