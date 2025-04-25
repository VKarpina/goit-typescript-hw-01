const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;

type Number = (a: number) => number;
const callback: Number = (a) => {
  return 100 + a;
};
