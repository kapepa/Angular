import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface ICountries {
  value: string,
  country: string,
  city: string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
  @ViewChild('selectRef') selectRef!: ElementRef;
  countries: ICountries[] = [
    { value: 'by', country: 'Белорусь', city: 'Минск' },
    { value: 'ru', country: 'Россия', city: 'Москва' },
    { value: 'ukr', country: 'Украина', city: 'Киев'}
  ];
  selected = this.countries[0];
  openCountry = false;
  skills: string[] = [];
  profileForm = new FormGroup({
    email: new FormControl('',[]),
    password: new FormControl('', []),
    address: new FormControl({
      country: new FormControl('by',[]),
      city: new FormControl('Минск')
    })
  });
  // Validators.required, Validators.minLength(6)
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const selected = this.selectRef.nativeElement as HTMLSelectElement;
    this.selected = this.countries[selected.selectedIndex];
  }

  putCountry(index: number): void {
    const current = this.countries[index];
    this.selectRef.nativeElement.children[index].click();
    this.selected = this.countries[index];
    this.openCountry = false;
    this.profileForm.patchValue({ address: { country: current.value, city: current.city } })
  }

  changeCity(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.selected.city = target.value;
    // this.profileForm.patchValue({ address: { ...this.profileForm.controls['address'], city: target.value } })
    // this.profileForm.controls['address']['city'].setValue('asdas')
    this.profileForm.controls['address'].value['city'].setValue(target.value)
  }

  inputSkill(e: Event): void {
    const target  = e.target as HTMLInputElement;
    this.skills[Number(target.dataset['skill'])] = target.value;
  }

  appendSkill(): void {
    this.skills.push('')
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(this.profileForm.value)
    // console.log(this.selectRef.nativeElement.value)
  }
}
