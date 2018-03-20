import {ArrayUtils} from "./ArrayUtils";

/**
 * This class operates on arrays using the field 'id' in the object array.
 *
 */
export class IdArrayUtils {

    public static searchAndRemove(arrayToChange: any[], keyValue: any) : void{
        if (arrayToChange.length == 0) {
            return;
        }

        let idKey = this.getIdDefinition(arrayToChange);

        if (idKey) {
            ArrayUtils.searchAndRemove(arrayToChange, idKey, keyValue);
        }
    }

    public static find(arrayToSearch: any[], value: any) : any {
        if (arrayToSearch.length == 0) {
            return;
        }

        let idKey = this.getIdDefinition(arrayToSearch);

        if (idKey) {
            return ArrayUtils.findFirst(arrayToSearch, idKey, value);
        }
    }

    private static getIdDefinition(arrayToChange: any[]) : string | undefined {
        const idPossibleValues = ['id', 'ID', 'Id'];

        if (!arrayToChange || arrayToChange.length === 0) {
            return undefined;
        }
        for (let i = 0; i < idPossibleValues.length; i++) {
            if (arrayToChange[0].hasOwnProperty(idPossibleValues[i])){
                return idPossibleValues[i];
            }
        }

        return undefined;
    }


}