import { ArrayUtils } from "./ArrayUtils";
import { expect } from "chai";

describe( 'Array update', () => {

    it('should the record with the same id', () => {
        let arrayToTest = createData();
        let result = ArrayUtils.findFirst<Person>(arrayToTest, 1);
        expect(result.firstName).deep.eq('marco')
    })

    it('should the record with the same name', () => {
        let arrayToTest = createData();
        let result = ArrayUtils.findFirst<Person>(arrayToTest, 'marco', 'firstName');
        expect(result.firstName).deep.eq('marco')
    })
});

function createData():Array<Person> {
    let arrayOfPerson = new Array<Person>();
    arrayOfPerson.push(new Person('marco', 'molteni', 1));

    return arrayOfPerson;

}
class Person {
    constructor (public firstName : string, public familyName : string, public id : number){
    
    };
}