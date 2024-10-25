import { jsonObject, jsonMember } from "typedjson";

@jsonObject
class StratagemQuestion {
    @jsonMember
    public stratagemID: string;

    @jsonMember
    public questionText: string;

    @jsonMember
    public modifier?: string;

    constructor(
        stratagemID: string,
        questionText: string,
        modifier: string
    ) {
        this.stratagemID = stratagemID;
        this.questionText = questionText;
        this.modifier = modifier;
    }
}

export default StratagemQuestion;