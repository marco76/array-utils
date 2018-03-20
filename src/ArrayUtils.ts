export class ArrayUtils {

    /**
     * search a value in an array and remove it if found
     * @param {any[]} arrayToChange to be updated
     * @param {string} key, name of the field to be searched, e.g.: id, name
     * @param keyValue value of the key searched
     * @param {boolean} onlyFirst, if true only the first match will be deleted. Better for performances.
     *
     * The method doesn't return any result.
     */

    public static searchAndRemove(arrayToChange: any[], key: string, keyValue: any, onlyFirst?: boolean): void {

        let arrayLength = arrayToChange.length;
        let iteration = 0;

        while (iteration < arrayLength) {
            if (arrayToChange[iteration][key] === keyValue) {
                arrayToChange.splice(iteration, 1);
                arrayLength--;

                if (onlyFirst) {
                    break;
                }
            }
            iteration++;
        }
    }

    /**
     * search a value in an array and replace the value with the value passed in the parameter
     * @param {any[]} arrayToChange array that contains the original data
     * @param {string} key field name used to find the object (e.g. name, id)
     * @param keyValue  value of the key
     * @param replacement object that will replace the object found
     * @param {boolean} onlyFirst if true only the first occurrence is replaced
     * @returns {number} return the number of updated objects in the array
     */

    public static searchAndReplace(arrayToChange: any[], key: string, keyValue: any, replacement: any,  onlyFirst?: boolean): number {

        let occurrencesReplaced : number = 0;

        for (let i = 0; i < arrayToChange.length; i++) {
            if (arrayToChange[i][key] === keyValue) {

                arrayToChange[i] = replacement;
                occurrencesReplaced++;

                if (onlyFirst) {
                    break;
                }
            }
        }

        return occurrencesReplaced;
    }

    /**
     * search an object in an array by id
     *
     * @param arrayToSearch
     * @param keyValue value in the field/object to find
     * @param key name of the field to search by
     */
    public static findFirst<T>(arrayToSearch: any[], key: string, keyValue: any): T | null {

        for (let i = 0; i < arrayToSearch.length; i++) {
            if (arrayToSearch[i][key] == keyValue) {
                return arrayToSearch[i] as T;
            }
        }

        return null;
    }
}