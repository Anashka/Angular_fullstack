import { Component, OnInit } from '@angular/core';
import {Book} from '../service/book'; 
import {SimpleAuthorService} from '../service/simple-author-service'; 
import { Author } from '../service/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  public authors: Author[];

  constructor(
    private authorService: SimpleAuthorService

  ) { }

  ngOnInit(): void {
    this.authors=this.authorService.getAuthors();
  }

}
