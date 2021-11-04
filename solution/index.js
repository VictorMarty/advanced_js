module.exports = class {
  #_items = []
  constructor(values) {
    this.size = 0
    if(values) {
      for (let value of values) this.add(value)
    }
    Object.prototype.toString = () =>  {return "[object ^_^]"}
  }

  *[Symbol.iterator]() {
    for (let item of this.#_items) {
      yield item
    }
  }

  has(value) {
    return this.#_items.includes(value)
  }

  add(value) {
    if (!this.has(value)) {
      this.#_items.push(value)
      this.size++
    }
    return this
  }

  *keys() {
    for (let item of this.#_items) {
      yield item
    }
  }

  *values() {
    for (let item of this.#_items) {
      yield item
    }
  }

  *entries() {
    for (let item of this.#_items) {
      yield [item, item]
    }
  }

  clear() {
    this.#_items = []
    this.size = 0
  }

  delete(value) {
    if (this.has(value)) {
      this.#_items.splice(this.#_items.indexOf(value),1)
      this.size--
    }
    return this
  }

  valueOf() {return this}

  forEach(callback, thisArg) {
    // if (thisArg) Function.call(this, thisArg)
    for (let item of this.#_items) {
      if (thisArg) callback.call(thisArg, item)
    }
  }
}

