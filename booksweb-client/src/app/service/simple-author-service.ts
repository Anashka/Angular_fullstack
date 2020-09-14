import {Author} from './author'; 
import {AuthorService} from './author-service'; 


export class SimpleAuthorService implements AuthorService{

    private authors:Author[];
    static serviceCount=0;
    private serviceId;
    
    constructor() {
        this.serviceId=++SimpleAuthorService.serviceCount;
        console.log(`SimpleAuthorService created with id ${this.serviceId}`);

        this.authors=this.authors=[
            {
              "name": "Chethan Bhagath",
              "biography": "Indian Author",
              "photograph": "photo_url",
              "email": "chethan@gmail.com",
       
            },
            {
                "name": "V.S Khandekkar",
                "biography": "Famous author who wrote yayathi",
                "photograph": "photo_url",
                "email": "khandekkar@outlook.com",

            }
          ];
        
    }

    addAuthor(author: Author): boolean {
        if(author && author.name && author.biography && author.email){
            this.authors.push(author);
            return true;
        } else{
            return false;
        }
    }
    
    getAuthors(): Author[] {
        return this.authors;
    }
    
    getAuthor(isbn: string): Author {
        return this.authors.find(b=>b.name==name);
    }

}
