export class ArrayUtils {

    public static searchAndRemove(arrayToChange: any[], keyValue: any, fieldIdName?: string) {
        let fieldToSearch = 'id';
        if (fieldIdName) {
            fieldToSearch = fieldIdName;
        }
        let foundIndexPosition = undefined;

        for (let i = 0; i < arrayToChange.length; i++) {
            if (arrayToChange[i][fieldToSearch] === keyValue) {
                foundIndexPosition = i;
                break;
            }
        }
        if (foundIndexPosition !== undefined) {
            arrayToChange.splice(foundIndexPosition, 1);
        }
    }

    public static searchAndReplace(arrayToChange: any[], objectId: any, objectContent: any, fieldIdName?: string) {
        let fieldToSearch = 'id';

        if (fieldIdName) {
            fieldToSearch = fieldIdName;
        }

        let foundIndexPosition = undefined;

        for (let i = 0; i < arrayToChange.length; i++) {
            if (arrayToChange[i][fieldToSearch] === objectId) {
                foundIndexPosition = i;
                break;
            }
        }
        if (foundIndexPosition !== undefined) {
            arrayToChange[foundIndexPosition] = objectContent;
        }
    }

    public static find(arrayToSearch: any[], objectId: number, fieldIdName?: string) {
        if (!fieldIdName) {
            fieldIdName = 'id';
        }
        let foundIndexPosition = undefined;

        for (let i = 0; i < arrayToSearch.length; i++) {
            if (arrayToSearch[i].id === objectId) {
                foundIndexPosition = i;
                break;
            }
        }
        if (foundIndexPosition !== undefined) {
            return arrayToSearch[foundIndexPosition];
        }

        return null;
    }

    public static findFirst(arrayToSearch: any[],  fieldNameToSearch: string, valueToFind: any) : any {

        let foundIndexPostition = undefined;
        if (!arrayToSearch) {
            return null;
        }

        for (let i = 0; i < arrayToSearch.length; i++) {
            if (arrayToSearch[i].fieldNameToSearch == valueToFind) {
                foundIndexPostition = i;
                break;
            }
        }
        if (foundIndexPostition !== undefined) {
            return arrayToSearch[foundIndexPostition];
        }

        return null;
    }
}