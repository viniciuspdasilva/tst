import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpSipService} from '../../service/api/http-sip.service';
import {catchError, finalize} from 'rxjs/internal/operators';

export class DataTable<T> extends DataSource<T> {
  private tSubject = new BehaviorSubject<T[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  constructor(public service: HttpSipService<T>, public urlBase: string) {
    super();
  }
  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return this.tSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

  loadObject() {
    this.loadingSubject.next(true);

    this.service.getRecurso(this.urlBase)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      ).subscribe(
      object => {
        this.tSubject.next(object);
        console.log(object);
      }
    );
  }
}
