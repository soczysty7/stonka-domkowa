import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

function getWindow (): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private viewerContentHeight = new BehaviorSubject<number>(0);
  private headerHeight = new BehaviorSubject<number>(0);
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any) { }
  

  get nativeWindow (): Window {
    return getWindow();
}

  public getContentHeight$(): Observable<number> {
    return this.viewerContentHeight.asObservable();
  }

  public getHeaderHeight$(): Observable<number> {
    return this.headerHeight.asObservable();
  }

  public scaleWindowHeight(windowHeight: number): void {
    if (!isPlatformBrowser(this.platformId)) { return; }
    const header = this.document.querySelector('#toolbar') as HTMLElement;
    const headerHeight = header.offsetHeight;
    const numericContentHeight = windowHeight;
    this.headerHeight.next(headerHeight);
    this.viewerContentHeight.next(numericContentHeight);
  }
}
