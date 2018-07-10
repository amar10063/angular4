import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
private isUserLoggedIn;
private username;
  constructor() {this.isUserLoggedIn=false;   }

   setUserLoggedIn(){     this.isUserLoggedIn=true;   }
   getUserLoggedIn(){     return isUserLoggedIn;   }
   
}
