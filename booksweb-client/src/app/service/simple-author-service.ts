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
              "name": "vivek",
              "biography": "xxxxx",
              "photograph": "xxxxxxxx",
              "email": "xxxxxxxx",
       
            },
            {
                "name": "vivek",
                "biography": "xxxxx",
                "photograph": "xxxxxxxx",
                "email": "xxxxxxxx",

            },
            {
                "name": "vivek",
                "biography": "xxxxx",
                "photograph": "xxxxxxxx",
                "email": "xxxxxxxx",
           
            },
            {
                "name": "vivek",
              "biography": "xxxxx",
              "photograph": "xxxxxxxx",
              "email": "xxxxxxxx",
             
            },
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
