import { observable, action } from 'mobx'

export class Store {
  @observable public num: number
  @observable public text: string
  constructor () {
    this.num = 0
    this.text = 'tate'
  }
  @action
  public plus () {
    ++this.num
  }
  @action
  public minus () {
    --this.num
  }
}
