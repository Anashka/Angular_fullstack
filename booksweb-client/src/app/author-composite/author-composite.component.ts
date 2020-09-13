import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import { SimpleAuthorService } from '../service/simple-author-service';

@Component({
  selector: 'app-author-composite',
  templateUrl: './author-composite.component.html',
  styleUrls: ['./author-composite.component.css']
})
export class AuthorCompositeComponent implements OnInit {

  public authors:Author[];
  public selectedAuthor:Author; 

  constructor(

    private authorService:SimpleAuthorService
  ) { }

  ngOnInit(): void {

    this.authors=this.authorService.getAuthors();
    
    this.selectedAuthor=this.authors[0];

  }

  selectBook(author:Author){
    this.selectedAuthor=author;
  }

}
