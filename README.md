# array-utils
Helper to manage arrays and lists in javascript

## find item in array by id

``` typescript

 let arrayOfPerson = new Array<Person>();
   arrayOfPerson.push(new Person('marco', 'molteni', 1));

  let result = ArrayUtils.findFirst<Person>(arrayOfPerson, 1);
```


## find item in array by field

``` typescript
 it('should the record with the same name', () => {
        let arrayToTest = createData();
        let result = ArrayUtils.findFirst<Person>(arrayToTest, 'marco', 'firstName');
        expect(result.firstName).deep.eq('marco')
    })
```

