import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';


@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail('mojito', 'https://img.cuisineaz.com/610x610/2017-07-28/i131123-mojito-au-thermomix.jpeg','Au xxe siècle, la recette originelle évolue : le tafia est remplacé par du rhum et le citron vert agrémente le mélange. Ainsi est né le mojito connu aujourd’hui, et qui tire son nom du « mojo », une mixture à base de citron initialement destinée à rehausser le goût des aliments.'),
    new Cocktail('margarita', 'https://titiranol-cocktail.fr/wp-content/uploads/2019/03/Frozen-Margarita-720x720-recipe.jpg', 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. Cest un before lunch qui serait une version du cocktail daisy (qui signifie « marguerite » en français, « margarita » en espagnol) dans lequel on remplaça le brandy par de la téquila1 durant la prohibition, période où les Américains ouvrirent des bars au Mexique et au Canada dans les zones frontalières'),
    new Cocktail('sour', 'https://cocktailand.fr/images/cache/large/images/cocktails/304.png', 'Un aigre est une famille traditionnelle de boissons mélangées. Des exemples courants de sours sont la margarita et le side-car. Les sours appartiennent à une des anciennes familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks.'),
    new Cocktail('martini', 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/cocktail-au-martini-blanc-et-tonic-2852300/51285468-1-fre-FR/Cocktail-au-Martini-blanc-et-tonic.jpg', 'Le martini ou le Dry martini est un cocktail à base de gin et de vermouth blanc sec. Il est connu en fiction comme en atteste son omniprésence dans la littérature et le cinéma, particulièrement aux États-Unis, d’où il est originaire')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
