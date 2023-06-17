interface Profile {
    readonly name: string;
    age?: number;
}

let profile: Profile = {
    name: 'John',
}

interface A {
    someProp: string;
    [key: string]: number | string
}

const a: A = {someProp: "Johnny"};
a.x = 1;
a.y = 2;

interface Sum {
    (a: number, b: number): number;
    prop1: string;
}

const sum: Sum = (a, b) =>  a + b;
sum.prop1 = 'someprop';


interface Parent {
    x: string
}
interface Parent2 {
    y: number
}

interface Child extends Parent, Parent2 {}

let child: Child = {x: 'jjjj', y: 4}
