import {Component, OnInit} from '@angular/core'
import {Book} from '../service/book'; 
import { BookListComponent } from '../book-list/book-list.component';

@Component({
    selector: 'rating',
    template: 
        `
        <span>
        </span>
        `
})
export class RatingComponent {

    ratingList = [4.8,4.8,3.5,4.5];

    addStar(){

        for(let rating of this.ratingList){



        }

    }
    
    
}