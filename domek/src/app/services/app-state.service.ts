import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private viewerContentHeight = new BehaviorSubject<number>(0);
  private headerHeight = new BehaviorSubject<number>(0);
  constructor() { }

  public getContentHeight$(): Observable<number> {
    return this.viewerContentHeight.asObservable();
  }

  public getHeaderHeight$(): Observable<number> {
    return this.headerHeight.asObservable();
  }

  public scaleWindowHeight(windowHeight: number): void {
    const header = document.querySelector('#toolbar') as HTMLElement;
    const headerHeight = header.offsetHeight;
    const numericContentHeight = windowHeight;
    this.headerHeight.next(headerHeight);
    this.viewerContentHeight.next(numericContentHeight);
  }
}
