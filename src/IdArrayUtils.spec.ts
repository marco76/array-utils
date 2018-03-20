import { expect, assert } from "chai";
import { IdArrayUtils } from "./IdArrayUtils";

describe( 'Array update', () => {

    it('should find the record with the id', () => {
        let arrayToTest = createRepeatedData();
        let result = IdArrayUtils.find(arrayToTest, 1);
        assert.isNotNull(result);
        expect(result!.firstName).deep.eq('marco')
    });
});


describe( 'Array replace', () => {

    it('should remove one occurence', () => {
        let arrayToTest = createRepeatedData();
        expect(arrayToTest.length).eq(3);
        let result = IdArrayUtils.searchAndRemove(arrayToTest, 2);
        expect(arrayToTest.length).eq(2);
    });
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