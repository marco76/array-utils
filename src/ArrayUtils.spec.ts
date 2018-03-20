import { ArrayUtils } from "./ArrayUtils";
import { expect, assert } from "chai";

describe( 'Array update', () => {

    it('should the record with the same id', () => {
        let arrayToTest = createData();
        let result = ArrayUtils.findFirst<Person>(arrayToTest, "id",  1);
        assert.isNotNull(result);
        expect(result!.firstName).deep.eq('marco')
    });

    it('should the record with the same name', () => {
        let arrayToTest = createData();
        let result = ArrayUtils.findFirst<Person>(arrayToTest, 'firstName', 'marco');
        expect(result!.firstName).deep.eq('marco')
    })
});


describe( 'Array replace', () => {

    it('should remove the two occurences', () => {
        let arrayToTest = createRepeatedData();
        expect(arrayToTest.length).eq(3);
        let result = ArrayUtils.searchAndRemove(arrayToTest, "firstName",  'marco');
        expect(arrayToTest.length).eq(1);
    });

    it('should remove only the first match', () => {
        let arrayToTest = createRepeatedData();
        expect(arrayToTest.length).eq(3);
        let result = ArrayUtils.searchAndRemove(arrayToTest, "firstName",  'marco', true);
        expect(arrayToTest.length).eq(2);
    })
});

function createData():Array<Person> {
    let arrayOfPerson = new Array<Person>();
    arrayOfPerson.push(new Person('marco', 'molteni', 1));

    return arrayOfPerson;
}

function createRepeatedData():Array<Person> {
    let arrayOfPerson = new Array<Person>();
    arrayOfPerson.push(new Person('marco', 'molteni', 1));
    arrayOfPerson.push(new Person('jim', 'gates', 2));
    arrayOfPerson.push(new Person('marco', 'mueller', 3));


    return arrayOfPerson;
}

class Person {
    constructor (public firstName : string, public familyName : string, public id : number){
    
    };
}