import { of, fromEvent } from 'rxjs';
import { map, filter, tap, switchMap } from 'rxjs/operators';


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(x => console.log(x));

let todo = document.getElementById('todo');
let input$ = fromEvent(todo, 'keyup');
input$.subscribe(input => console.log(input.target.value));


let todo2 = document.getElementById('todo2');
let input2$ = fromEvent(todo2, 'keyup');
input2$.pipe(filter((ev) => {
  ev.keyCode === 32
}), map((ev) => {
  ev
})).subscribe(ev => console.log(ev.target.value));