import { Option } from "fp-ts/lib/Option";
import * as O from "fp-ts/lib/Option";
import * as F from "fp-ts/lib/function";
import { OptionOperation } from "./OptionOperation";
import { number } from "fp-ts";

export class YourOptionImpl implements OptionOperation {
  optPlus(a: Option<number>, b: Option<number>): Option<number> {
    return F.flow(
      O.bind("_a", () => a),
      O.bind("_b", () => b),
      O.map(({ _a, _b }) => _a + _b)
    )(a);
  }
  optPlusGtTen(a: Option<number>, b: Option<number>): Option<number> {
    return F.flow(
      O.bind("_a", () => a),
      O.bind("_b", () => b),
      O.map(({ _a, _b }) => _a + _b),
      O.filter((ab) => ab >= 10)
    )(a);
  }
  optPlusGeTenAsTwicestring(
    a: Option<number>,
    b: Option<number>
  ): Option<string> {
    return F.flow(
      O.bind("_a", () => a),
      O.bind("_b", () => b),
      O.map(({ _a, _b }) => _a + _b),
      O.map((ab) => (ab >= 10 ? ab * 2 : ab)),
      O.map((rs) => String(rs))
    )(a);
  }
  optDiv(a: Option<number>, b: Option<number>): Option<number> {
    return F.flow(
      O.bind("_a", () => a),
      O.bind("_b", () => b),
      O.filter(({ _b }) => _b !== 0),
      O.map(({ _a, _b }) => _a / _b)
    )(a);
  }
  optFunc(
    a: Option<number>,
    b: Option<number>,
    f: (arg0: number, arg1: number) => number
  ): Option<number> {
    return F.flow(
      O.bind("_a", () => a),
      O.bind("_b", () => b),
      O.map(({ _a, _b }) => f(_a, _b))
    )(a);
  }
}
