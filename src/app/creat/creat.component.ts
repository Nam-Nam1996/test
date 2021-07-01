import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css'],

})
export class CreatComponent implements OnInit {
  // periodicElement: any;
  // @ts-ignore
  @ViewChild('f') f:NgForm
  periodicElement: any;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  exit() {
    this.router.navigate([''])
  }

  save() {

    this.router.navigate([''])
  }
  onSubmit(){
    console.log(this.f.valid)
  }

}
