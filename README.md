# array-utils
Helper to manage arrays and lists in javascript

## find item in array by key-value and remove it



``` typescript
/**
     * search a value in an array and remove it if founded
     * @param {any[]} arrayToChange to be updated
     * @param {string} key, name of the field to be searched, e.g.: id, name
     * @param keyValue value of the key searched
     * @param {boolean} onlyFirst, if true only the first match will be deleted. Better for performances.
     *
     * The method doesn't return any result.
     */

    public static searchAndRemove(arrayToChange: any[], key: string, keyValue: any, onlyFirst?: boolean): void
```


## find item in array by field

``` typescript
 /**
     * search an object in an array by id
     *
     * @param arrayToSearch
     * @param keyValue value in the field/object to find
     * @param key name of the field to search by
     */
    public static findFirst<T>(arrayToSearch: any[], key: string, keyValue: any): T | null
```

