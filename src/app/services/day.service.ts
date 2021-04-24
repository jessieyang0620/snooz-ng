import { Injectable } from '@angular/core';
import { Day } from '../data-structs/Day';
import { DOSAGE_UNIT } from '../data-structs/Medication';
import { SYMPTOM_TYPE } from '../data-structs/Symptom';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  emptyDay: Day = {
    date: {month: 4, day: 1, year: 2021},
    tasks: [],
    symptoms: [],
    medications: []
  };
  april: Day[] = [
    {date: {month: 4, day: 1, year: 2021},
     tasks: [],
     symptoms: [
      {name: 'depressed', 
        comments:'i hate it here', 
        severity: 5, 
        type: SYMPTOM_TYPE.MENTAL},
      {name: 'headache', 
        comments:'help', 
        severity: 2, 
        type: SYMPTOM_TYPE.PHYSICAL},
      {name: 'nausea', 
        comments:'N/a', 
        severity: 3, 
        type: SYMPTOM_TYPE.PHYSICAL}],  
    medications: []},

    {date: {month: 4, day: 19, year: 2021},
     tasks: [],
     symptoms: [
      {name: 'depressed', 
        comments:'i hate it here', 
        severity: 5, 
        type: SYMPTOM_TYPE.MENTAL},
      {name: 'headache', 
        comments:'help', 
        severity: 2, 
        type: SYMPTOM_TYPE.PHYSICAL},
      {name: 'nausea', 
        comments:'N/a', 
        severity: 3, 
        type: SYMPTOM_TYPE.PHYSICAL},
        {name: 'anxious', 
        comments:':(', 
        severity: 4, 
        type: SYMPTOM_TYPE.MENTAL}],  
    medications: [
      {name: 'Tylenol',
      dosage: 300,
      unit: DOSAGE_UNIT.mg}]},

    {date: {month: 4, day: 20, year: 2021},
    tasks: [],
    symptoms: [{name: 'depressed', 
                  comments:'i hate it here', 
                  severity: 5, 
                  type: SYMPTOM_TYPE.MENTAL},
              {name: 'headache', 
                comments:'help', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'anxious', 
                comments:':(', 
                severity: 4, 
                type: SYMPTOM_TYPE.MENTAL}],  
    medications: [{name: 'Tylenol',
                    dosage: 300,
                    unit: DOSAGE_UNIT.mg}
    ]},
    {date: {month: 4, day: 21, year: 2021},
    tasks: [],
    symptoms: [{name: 'depressed', 
                  comments:'i hate it here', 
                  severity: 5, 
                  type: SYMPTOM_TYPE.MENTAL},
              {name: 'headache', 
                comments:'help', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'anxious', 
                comments:':(', 
                severity: 4, 
                type: SYMPTOM_TYPE.MENTAL},
                {name: 'fatigue', 
                comments:'didn\'t sleep well', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL}],  
    medications: [{name: 'Claritin',
                    dosage: 200,
                    unit: DOSAGE_UNIT.mg}
    ]},
    {date: {month: 4, day: 22, year: 2021},
    tasks: [],
    symptoms: [{name: 'depressed', 
                  comments:'i hate it here', 
                  severity: 5, 
                  type: SYMPTOM_TYPE.MENTAL},
              {name: 'headache', 
                comments:'help', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'anxious', 
                comments:':(', 
                severity: 4, 
                type: SYMPTOM_TYPE.MENTAL},
              {name: 'fatigue', 
                comments:'didn\'t sleep well', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'pain', 
                comments:'back hurts -- note to self: fix posture', 
                severity: 4, 
                type: SYMPTOM_TYPE.PHYSICAL}],  
    medications: [{name: 'Claritin',
                    dosage: 200,
                    unit: DOSAGE_UNIT.mg},
                  {name: 'Tylenol',
                    dosage: 0.5,
                    unit: DOSAGE_UNIT.g}
    ]},
    {date: {month: 4, day: 23, year: 2021},
    tasks: [],
    symptoms: [
              {name: 'headache', 
                comments:'help', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'anxious', 
                comments:':(', 
                severity: 4, 
                type: SYMPTOM_TYPE.MENTAL},
              {name: 'fatigue', 
                comments:'didn\'t sleep well', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'pain', 
                comments:'back hurts -- note to self: fix posture', 
                severity: 4, 
                type: SYMPTOM_TYPE.PHYSICAL}],  
    medications: [{name: 'Tylenol',
                    dosage: 0.5,
                    unit: DOSAGE_UNIT.g}
    ]},
    {date: {month: 4, day: 23, year: 2021},
    tasks: [],
    symptoms: [
              {name: 'headache', 
                comments:'help', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'anxious', 
                comments:':(', 
                severity: 4, 
                type: SYMPTOM_TYPE.MENTAL},
              {name: 'fatigue', 
                comments:'didn\'t sleep well', 
                severity: 2, 
                type: SYMPTOM_TYPE.PHYSICAL},
              {name: 'pain', 
                comments:'back hurts -- note to self: fix posture', 
                severity: 4, 
                type: SYMPTOM_TYPE.PHYSICAL}],  
    medications: [{name: 'Tylenol',
                    dosage: 0.5,
                    unit: DOSAGE_UNIT.g}
    ]},
  ]
  // uhhhhh note to self deal with this late i don't remember what I was thinking with this
  // update this is for using with calendar to fill data. should have CRUD abilities but rn only 
  // has get and update because thats all our tasks need and i am tired <3 Jessie
  constructor() { }

  getAllDays(): Day[] {
    return this.april;
  }

  getDay(day: number): Day {
    for (let d of this.april) {
      if (d.date.day === day) {
        return d;
      }
    }
    return this.emptyDay;
  }
}
