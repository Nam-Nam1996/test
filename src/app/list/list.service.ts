import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {PeriodicElement} from "../PeriodicElement";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  //in
  stringObservable: Observable<PeriodicElement> = new Observable<PeriodicElement>();

  constructor() {
  }

}
