import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operating-area',
  templateUrl: './operating-area.component.html',
  styleUrls: ['./operating-area.component.scss'],
})
export class OperatingAreaComponent implements OnInit {
  selectedOperatingArea: number = 0;
  selectedNotAllowed: number = 0;
  selectedMile: number = 0;
  selectedPerDriver: number = 0;
  selectedWeekly: number = 0;

  toggle: boolean = false;

  operatingAreaOptions: string[] = [
    'Operating area',
    'OPERATING AREA',
    'WEIGHT',
    'GROSS',
    'UTILIZATION',
    'LOAD LENGTH',
    'HOS',
    'LOAD LEGTH',
    'LOAD LEGTH',
  ];
  notAllowedOptions: string[] = [
    'Not allowed',
    'OPERATING AREA',
    'WEIGHT',
    'GROSS',
    'UTILIZATION',
    'LOAD LENGTH',
    'HOS',
    'LOAD LEGTH',
    'LOAD LEGTH',
  ];
  mileOptions: string[] = [
    '$/mile',
    'OPERATING AREA',
    'WEIGHT',
    'GROSS',
    'UTILIZATION',
    'LOAD LENGTH',
    'HOS',
    'LOAD LEGTH',
    'LOAD LEGTH',
  ];
  perDriverOptions: string[] = [
    'Per driver',
    'OPERATING AREA',
    'WEIGHT',
    'GROSS',
    'UTILIZATION',
    'LOAD LENGTH',
    'HOS',
    'LOAD LEGTH',
    'LOAD LEGTH',
  ];
  weeklyOptions: string[] = [
    'Weekly',
    'OPERATING AREA',
    'WEIGHT',
    'GROSS',
    'UTILIZATION',
    'LOAD LENGTH',
    'HOS',
    'LOAD LEGTH',
    'LOAD LEGTH',
  ];

  constructor() {}

  ngOnInit(): void {}

  selectedOperatingAreaOption(i: number) {
    this.selectedOperatingArea = i;
  }
  selectedNotAllowedOption(i: number) {
    this.selectedNotAllowed = i;
  }
  selectedMileOption(i: number) {
    this.selectedMile = i;
  }
  selectedPerDriverOption(i: number) {
    this.selectedPerDriver = i;
  }
  selectedWeeklyOption(i: number) {
    this.selectedWeekly = i;
  }

  toggleState() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}
