import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
export const SAVE_DATA  = '[Employee] Save'
export const REMOVE_DATA  = '[Employee] Remove'
export class SaveTutorial implements Action {
    readonly type = SAVE_DATA
    constructor(public payload:any) {}
}
export class RemoveTutorial implements Action {
  readonly type = REMOVE_DATA
  constructor(public payload:number) {}
}
export type Actions = SaveTutorial |RemoveTutorial
