import { from, of, Subject } from "rxjs";
import { Timestamp } from "rxjs/internal/Rx";
import { map } from "rxjs/operators";

//from([1,2,3]).subscribe(resp=>console.log(resp));

let x = new Date();
const rr = new Subject<{ num: number; time: Date }>();

rr.subscribe(
  resp => {
    let g: number = Date.parse(resp.time.toString());
    let x1: number = Date.parse(x.toString());
    let secondLimit = (g - x1) / 1000;
    if (secondLimit > 60) rr.complete();

    if (resp.num === 100) {
      console.log("centrato 100 in ");

      console.log(secondLimit);
    }
  },
  error => console.log(error),
  () => console.log("complete")
);

setInterval(function() {
  rr.next({ num: Math.ceil(Math.random() * 100), time: new Date() });
}, 100);
