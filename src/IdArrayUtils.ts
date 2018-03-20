import {ArrayUtils} from "./ArrayUtils";

export class IdArrayUtils {

    public static searchAndRemoveById(arrayToChange: any[], keyValue: any) : void{
        if (arrayToChange.length == 0) {
            return;
        }

        let idKey = this.getIdDefinition(arrayToChange);

        if (idKey) {
            ArrayUtils.searchAndRemove(arrayToChange, idKey, keyValue);
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