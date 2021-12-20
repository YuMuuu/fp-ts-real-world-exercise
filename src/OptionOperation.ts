import { Option } from 'fp-ts/lib/Option'

export interface OptionOperation {
    optPlus(a: Option<number>, b: Option<number>): Option<number>
    optPlusGtTen(a: Option<number>, b: Option<number>): Option<number>
    optPlusGeTenAsTwicestring(a: Option<number>, b: Option<number>): Option<string>
    optDiv(a: Option<number>, b: Option<number>): Option<number>
    optFunc(a: Option<number>, b: Option<number>, f: (arg0: number, arg1: number) => number): Option<number>
}
