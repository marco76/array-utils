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

    /**
     * search an object in an array by id
     * 
     * @param arrayToSearch 
     * @param objectId 
     * @param fieldIdName if the field is not filled, 'id' will be used
     */
    public static findFirst<T>(arrayToSearch: any[], objectId: any, fieldIdName?: string | undefined): T {
        let fieldToSearch : string = 'id';

        if (fieldIdName != undefined) {
            fieldToSearch = fieldIdName;
        }
        let foundIndexPosition = undefined;

        for (let i = 0; i < arrayToSearch.length; i++) {
            if (arrayToSearch[i][fieldToSearch] == objectId) {
                foundIndexPosition = i;
                break;
            }
        }
        if (foundIndexPosition !== undefined) {
            return arrayToSearch[foundIndexPosition];
        }

        return {} as T;
    }
}