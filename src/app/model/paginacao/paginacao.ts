import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpSipService} from '../../service/api/http-sip.service';
import {catchError, finalize} from 'rxjs/internal/operators';

export class Paginacao<T> {
  private objectSubject = new BehaviorSubject<T[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  constructor(
    public totalPages: number,
    public totalElements: number | string,
    public pageAtual: number,
    public primeira: boolean,
    public last: boolean,
    public size: number | string,
    public urlBase: string,
    private service: HttpSipService<T>
  ) {}

  public next(): Observable<T[]> {
    console.log(this.pageAtual);
    if (this.primeira) {
      this.loadRecurso(this.pageAtual + 1);
      return this.objectSubject.asObservable();
    }
  }

  public previous(): Observable<T[]> {
    if (this.pageAtual <= this.totalPages) {
      this.loadRecurso(this.pageAtual - 1);
      return this.objectSubject.asObservable();
    }
  }

  private loadRecurso(page: number) {
    this.loadingSubject.next(true);

    this.service.getRecursoPage(this.urlBase, page)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        (object: T[]) => {
          this.objectSubject.next(object);
        }
      );
  }
}
