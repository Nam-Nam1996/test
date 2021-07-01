import {Component, OnInit} from '@angular/core';
import {PeriodicElement} from "../PeriodicElement";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {ModalComponent} from "../modal/modal.component";
import {ListService} from "./list.service";

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

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent implements OnInit {

  checked = true;

  displayedColumns: string[] = ['name', 'Type', 'service', 'status', 'levels', 'operation'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new MatTableDataSource(this.dataToDisplay);

  //in
  constructor(private router: Router, public dialog: MatDialog, private listService: ListService) {
  }

  onCheckboxChange(e: MatCheckboxChange) {
    this.checked = e.checked;
    if (e.checked) {
      let data = this.dataToDisplay.filter(value => value.status)
      this.dataSource = new MatTableDataSource(data);
    } else {
      let data = this.dataToDisplay
      this.dataSource = new MatTableDataSource(data);
    }
    this.dataSource._updateChangeSubscription()

    // this.activeDeActiveStatus();
  }

  ngOnInit() {
    if (this.checked) {
      let data = this.dataToDisplay.filter(value => value.status)
      this.dataSource = new MatTableDataSource(data);
    } else {
      let data = this.dataToDisplay.filter(value => !value.status)
      this.dataSource = new MatTableDataSource(data);
    }

    //in
    this.listService.stringObservable.subscribe(newValue => {

      // @ts-ignore
      var oldData = ELEMENT_DATA.find(value => value.id == String(newValue.id));
      // @ts-ignore
      oldData.Type = newValue.Type
      // @ts-ignore
      oldData.name = newValue.name
      // @ts-ignore
      oldData.service = newValue.service
      // @ts-ignore
      oldData.status = newValue.status

      this.dataSource._updateChangeSubscription()
    })
  }

  applyFilter(event: Event) {

    if (!this.checked) {
      console.log('checked false ' + this.checked)
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
        // @ts-ignore
        return data.name.includes(filter) === filter ||
          // @ts-ignore
          data.Type.toString() === filter;
      };
    } else {
      console.log('checked false ' + this.checked)
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
        // @ts-ignore
        return (data.name.includes(filter) ||
          // @ts-ignore
          data.service.includes(filter) === filter ||
          // @ts-ignore
          data.Type.toString() === filter);
      };

    }


    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;

  }

  removeData(i: number) {
    // @ts-ignore

    this.dataSource.data.splice(i, 1);
    this.dataSource._updateChangeSubscription();

  }

  openDialog(i: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.afterClosed()) {
        if (result) {
          this.removeData(i);
        }
      }

    });
  }

  UpdateData(i: number) {
    const Obj = this.dataSource.data.slice(i, i + 1);
    var pop = Obj.pop();
    // @ts-ignore
    this.router.navigate(['update', pop.id])

  }


  activeDeActiveStatus() {
    ELEMENT_DATA.forEach(value => {
      value.status = this.checked;
    })
  }

  addData() {
    this.router.navigate(['creat'])
  }

  setdata1(e: any) {
    console.log(e)
  }

  openDialogg() {
    const dialogRef = this.dialog.open(ModalComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }

  setData(event: string) {
    console.log('hoy');

  }

  data($event: any) {
    // console.log(event);
    console.log('gosfand kar kon');
  }
}
