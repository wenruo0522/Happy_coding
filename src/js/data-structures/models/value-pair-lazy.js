
import { ValuePair } from "./value-pair.js"

export default class ValuePairLazy extends ValuePair {
    constructor(key, value, isDeleted = false) {
        super(key, value)
        this.key = key
        this.value = value
        this.isDeleted = isDeleted
    }
}