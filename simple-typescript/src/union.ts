interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj).bark !== undefined
}

function callMyPet(pet: Dog | Cat) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    } else {
        pet.meow();
    }
}

class Foo {
    foo: number | undefined;
    commonProp: string | undefined;
}

class Bar {
    bar: number | undefined;
    commonProp: string | undefined;
}

function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof(Foo)) {
        obj.foo;
    } else {
        obj.bar;
    }
}
