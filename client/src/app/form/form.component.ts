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
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormControl({
      country: new FormControl('by',[Validators.required]),
      city: new FormControl('Минск',[Validators.minLength(3)])
    }),
    skill: new FormControl([],[]),
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
    this.profileForm.controls['address'].value.city.setValue(current.city)
    this.profileForm.controls['address'].value.country.setValue(current.value)
  }

  changeCity(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.selected.city = target.value;
    this.profileForm.controls['address'].value.city.setValue(target.value)
  }

  inputSkill(e: Event): void {
    const target  = e.target as HTMLInputElement;
    this.skills[Number(target.dataset['skill'])] = target.value;
    this.profileForm.controls['skill'].setValue(this.skills);
  }

  appendSkill(): void {
    this.skills.push('')
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;


  }
}
