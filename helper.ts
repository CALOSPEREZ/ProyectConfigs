export class Helper {
  static blue : boolean = true
  static funcionalidad (param:boolean):void {
    if (this.blue && param) { console.log('volando') } else { console.log('no logrado') }
  }
}
