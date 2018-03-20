export class ArrayUtils {

    /**
     * search a value in an array and remove it if founded
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