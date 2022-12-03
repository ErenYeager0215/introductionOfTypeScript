/* eslint-disable @typescript-eslint/no-unused-vars */

let bool: boolean = true;

let num: number = 0;

let str: string = "A";

let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

let tuple: [number, string] = [0, "A"];

//any型はどの型にもなりえる
let any1: any = false;

//戻り値がない関数にこのように書くが書かなくてもいい
const funcA = (): void => {
  const test = "TEST";
};

//nullを表すnull型
let null1: null = null;

// undefinedを表す型
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
