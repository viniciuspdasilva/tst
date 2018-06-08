import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpSipService} from '../service/api/http-sip.service';
import {catchError, finalize} from 'rxjs/internal/operators';

export class TemplateDataSource<T> extends DataSource<T> {
  private recursoSubject = new BehaviorSubject<T[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public load$ = this.loadingSubject.asObservable();

  constructor(private service: HttpSipService<T>, private urlBase: string) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return this.recursoSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.recursoSubject.complete();
    this.loadingSubject.complete();
  }
  loadRecursosPage(page: number = 0, size: number = 5) {
    this.loadingSubject.next(true);

    this.service.getRecursoPage(this.urlBase, page, size)
      .pipe(
        catchError((err => of(err))),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        object => this.recursoSubject.next(object.content)
      );
  }
  loadRecursos() {
    this.loadingSubject.next(true);

    this.service.getRecurso(this.urlBase)
      .pipe(
        catchError(err => of(err)),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        (object: any) => {
          this.recursoSubject.next(object);
        }
      )
  }
}
