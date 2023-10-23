
export class CounterService {

  countersetToActive = 0;
  countersetToInActive = 0;

  incrementsetToActive() {
    this.countersetToActive++
    console.log('setToActive:' + this.countersetToActive)
  }

  incrementsetToInActive() {
    this.countersetToInActive++
    console.log('setToInactive:' + this.countersetToInActive)
  }

}
