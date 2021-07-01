import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PeriodicElement} from "../PeriodicElement";

import {NgForm} from "@angular/forms";
import {ListService} from "../list/list.service";
import {of} from "rxjs";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
// @ts-ignore
  @ViewChild('f') f: NgForm

  whenOpenPage = true;
  Type: string = '';


  @Output() namnam = new EventEmitter()


  periodicElement: PeriodicElement = new PeriodicElement();
  periodicElementBeforeChange: PeriodicElement = new PeriodicElement();

  //in
  constructor(private router: Router, private activeRouter: ActivatedRoute, private  listService: ListService) {

  }


  ngOnInit(): void {
    var id = this.activeRouter.snapshot.paramMap.get('id');

    if (id != null)
      // @ts-ignore
      this.periodicElement = ELEMENT_DATA.find(value => value.id == String(id));


  }

  exit() {
    this.router.navigate([''])
  }

  onSubmit() {
    //console.log(this.f.valid);
    this.namnam.emit('ali nad nam nam ');

    //in
    this.listService.stringObservable = of(this.periodicElement)

// debugger
//     console.log('alialialialial');

    this.router.navigate([''])
  }

  typeOnchange() {
    console.log(' typeOnchange')
    this.whenOpenPage = false

    // this.addData.emit('ali nad nam nam ');

    // console.log(' ali ')
    // @ts-ignore
    // this.periodicElementBeforeChange =ELEMENT_DATA.find(value => value.Type==String(this.Type))
  }


}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'ابطال بهره برداری کلینیک گیاهپزشکی، انسکتاریوم، شرکت ضد عفونی و دفع آفات نباتی',
    Type: 'گیاهپزشکی',
    service: 'ابطال بهره برداری کلینیک گیاهپزشکی، انسکتاریوم، شرکت ضد عفونی و دفع آفات نباتی',
    status: false,
    levels: '',
    operation: ''
  },
  {
    id: 2,
    name: 'ابطال پروانه بهره برداری دامپروری صنعتی و نیمه صنعتی کشور - دام',
    Type: 'دام صنعتی و نیمه صنعتی',
    service: 'ابطال پروانه بهره برداری دامپروری صنعتی و نیمه صنعتی فارس - دام ابطال بهره برداری دامپروری صنعتی و نیمه صنعتی استان فارس - دام ابطال بهره برداری دامپروری صنعتی و نیمه صنعتی - دام',
    status: true,
    levels: '',
    operation: ''
  },
  {
    id: 3,
    name: 'ابطال پروانه بهره برداری دامپروری صنعتی و نیمه صنعتی کشور - شیلات',
    Type: 'شیلات صنعتی و نیمه صنعتی',
    service: 'ابطال پروانه بهره برداری دامپروری صنعتی و نیمه صنعتی فارس - شیلات ابطال بهره برداری دامپروری صنعتی و نیمه صنعتی استان فارس - شیلات ابطال پروانه بهره برداری دامداری روستایی نظام مهندسی و نظام دامپزشکی فارس - شیلات ابطال بهره برداری دامپروری صنعتی و نیمه صنعتی - شیلات',
    status: true,
    levels: '',
    operation: ''
  },
  {
    id: 4,
    name: 'ابطال پروانه بهره برداری دامپروری صنعتی و نیمه صنعتی کشور - طیور',
    Type: 'شیلات صنعتی و نیمه صنعتی',
    service: 'تمدید پروانه بهره برداری دامپروری صنعتی و نیمه صنعتی فارس - طیور ابطال پروانه بهره برداری دامپروری صنعتی و نیمه صنعتی فارس - طیور تمدید پروانه بهداشتی دامپروری صنعتی و نیمه صنعتی فارس - طیور تمدید بهره برداری دامپروری صنعتی و نیمه صنعتی استان فارس - طیور ابطال بهره برداری دامپروری صنعتی و نیمه صنعتی استان فارس - طیور تمدید پروانه بهره برداری بهداشتی دامپروری صنعتی و نیمه صنعتی نظام دامپزشکی فارس - طیور ابطال بهره برداری دامپروری صنعتی و نیمه صنعتی - طیور',
    status: false,
    levels: '',
    operation: ''
  },
  {
    id: 5,
    name: 'ابطال پروانه بهره برداری صنایع کشاورزی کشور',
    Type: 'صنایع تبدیلی و غذایی',
    service: 'اصلاح بهره بر داری صنایع کشاورزی استان فارس ابطال بهره بر داری صنایع کشاورزی استان فارس ابطال بهره برداری صنایع کشاورزی',
    status: true,
    levels: '',
    operation: ''
  },
  {
    id: 6,
    name: 'ابطال پروانه بهره برداری گلخانه کوچک مقیاس جهاد',
    Type: 'گلخانه کوچک مقیاس',
    service: 'بطال بهره برداری واحدهای گلخانه ای کوچک مقیاس(تا 299 مترمربع)',
    status: true,
    levels: '',
    operation: ''
  },
  {
    id: 7,
    name: 'ابطال پروانه بهره برداری محصولات گلخانه ای و قارچ خوراکی کشور - قارچ',
    Type: 'قارچ',
    service: 'ابطال پروانه بهره برداری گلخانه - قارچ ابطال بهره برداری محصولات گلخانه ای و قارچ خوراکی استان فارس - قارچ ابطال بهره برداری محصولات گلخانه ای و قارچ خوراکی - قارچ',
    status: false,
    levels: '',
    operation: ''
  },
  {
    id: 8,
    name: 'ابطال پروانه بهره برداری محصولات گلخانه ای و قارچ خوراکی کشور - گلخانه',
    Type: 'گلخانه',
    service: 'ابطال پروانه بهره برداری گلخانه - گلخانه ابطال بهره برداری محصولات گلخانه ای و قارچ خوراکی استان فارس - گلخانه ابطال بهره برداری محصولات گلخانه ای و قارچ خوراکی - گلخانه',
    status: true,
    levels: '',
    operation: ''
  },
  {
    id: 9,
    name: 'ابطال پروانه تاسیس دامپروری صنعتی و نیمه صنعتی کشور - دام',
    Type: 'دام صنعتی و نیمه صنعتی',
    service: 'ابطال پروانه تاسیس دامپروری صنعتی و نیمه صنعتی فارس - دام ابطال تاسیس دامپروری صنعتی و نیمه صنعتی استان فارس - دام ابطال تاسیس دامپروری صنعتی و نیمه صنعتی - دام',
    status: true,
    levels: '',
    operation: ''
  },
  {
    id: 10,
    name: 'بطال پروانه تاسیس دامپروری صنعتی و نیمه صنعتی کشور - شیلات',
    Type: 'شیلات صنعتی و نیمه صنعتی',
    service: 'بطال پروانه تاسیس دامپروری صنعتی و نیمه صنعتی فارس - شیلات ابطال تاسیس دامپروری صنعتی و نیمه صنعتی استان فارس - شیلات ابطال تاسیس دامپروری صنعتی و نیمه صنعتی - شیلات',
    status: false,
    levels: '',
    operation: ''
  },
];
