import {Author} from './author'; 

export interface AuthorService{
    addAuthor(author:Author):boolean;    
    getAuthors(): Author[];    
    getAuthor(isbn:string):Author|null;
}

