import { TypedJSON } from 'typedjson';
import DiceSkillValue from './enums/DiceSkillValue';
import WargearType from './enums/WargearType';
import DiceRerollModifierValue from './enums/DiceRerollModifierValue';

TypedJSON.mapType(DiceSkillValue, {
    deserializer: json => json == null ? json : DiceSkillValue.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});

TypedJSON.mapType(DiceRerollModifierValue, {
    deserializer: json => json == null ? json : DiceRerollModifierValue.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});

TypedJSON.mapType(WargearType, {
    deserializer: json => json == null ? json : WargearType.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});

export default TypedJSON;
