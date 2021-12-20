import { Option } from 'fp-ts/lib/Option'
import { OptionOperation } from './ OptionOperation';

export class YourOptionImpl implements OptionOperation {
    optPlus(a: Option<number>, b: Option<number>): Option<number> {
        throw new Error('Method not implemented.');
    }
    optPlusGtTen(a: Option<number>, b: Option<number>): Option<number> {
        throw new Error('Method not implemented.');
    }
    optPlusGeTenAsTwicestring(a: Option<number>, b: Option<number>): Option<string> {
        throw new Error('Method not implemented.');
    }
    optDiv(a: Option<number>, b: Option<number>): Option<number> {
        throw new Error('Method not implemented.');
    }
    optFunc(a: Option<number>, b: Option<number>, f: (arg0: number, arg1: number) => number): Option<number> {
        throw new Error('Method not implemented.');
    }
}