import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
  @ViewChild('selectRef') selectRef!: ElementRef;
  countries = [{ value: 'by', country: 'Белорусь' }, { value: 'ru', country: 'Россия' }, { value: 'ukr', country: 'Украина' }];
  selected = this.countries[0];
  openCountry = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const selected = this.selectRef.nativeElement as HTMLSelectElement;
    this.selected = this.countries[selected.selectedIndex];
  }

  putCountry(index: number): void {
    this.selectRef.nativeElement.children[index].selected = true;
    this.selected = this.countries[index];
    this.openCountry = false;
  }
}
