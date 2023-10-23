import { Injectable } from '@angular/core';
import { post } from './form.model';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  error = new Subject<any>()

  constructor(private http: HttpClient) { }

  postdata(title: string, content: string) {
    const postData: post = { title: title, content: content }
    this.http.post<{ name: string }>('https://foodie-app-611-default-rtdb.firebaseio.com/posts.json', postData,
      {
        observe: "response",

      })

      .subscribe(res => {
        console.log(res)
      }, (error: any) => {
        this.error.next(error.message)
      })
  }
  getdata() {
    let searchParams = new HttpParams()
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('hello', 'world')
    return this.http.get<{ [Key: string]: post }>('https://foodie-app-611-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'customHeader': 'josh' }),
        params: searchParams,
        // params: new HttpParams().set('print', 'pretty'),


      })
      .pipe(map(responsedata => {
        const postArray: post[] = []
        for (let Key in responsedata) {
          if (responsedata.hasOwnProperty(Key)) {
            postArray.push({ ...responsedata[Key], id: Key })
          }
        }
        return postArray
      })
        // ,catchError(errormessage=>{
        //   return throwError(errormessage)
        // })
      )

  }
  deletedata() {
    return this.http.delete('https://foodie-app-611-default-rtdb.firebaseio.com/posts.json',
      {
        observe: "events",
        responseType: 'text'

      }).pipe(tap(event => {
        console.log(event)
        if (event.type === HttpEventType.Sent) {
          console.log(event.type)
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body)
        }
      }))
  }
}
