import { Option } from "fp-ts/lib/Option";
import * as O from "fp-ts/lib/Option";
import * as F from "fp-ts/lib/function";
import { OptionOperation } from "./OptionOperation";

export class YourOptionImpl implements OptionOperation {
  optPlus(a: Option<number>, b: Option<number>): Option<number> {
    return F.flow(
      O.bind("_a", () => a),
      O.bind("_b", () => b),
      O.map(({ _a, _b }) => _a + _b)
    )(a);
  }
  optPlusGtTen(a: Option<number>, b: Option<number>): Option<number> {
    throw new Error("Method not implemented.");
  }
  optPlusGeTenAsTwicestring(
    a: Option<number>,
    b: Option<number>
  ): Option<string> {
    throw new Error("Method not implemented.");
  }
  optDiv(a: Option<number>, b: Option<number>): Option<number> {
    throw new Error("Method not implemented.");
  }
  optFunc(
    a: Option<number>,
    b: Option<number>,
    f: (arg0: number, arg1: number) => number
  ): Option<number> {
    throw new Error("Method not implemented.");
  }
}
