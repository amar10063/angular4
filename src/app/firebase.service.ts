import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  constructor(private https : Http) { }
  fetchData(){
    return this.https.get("https://amar-angular2.firebaseio.com/.json").map((res)=>res.json()
  );
  }
}
