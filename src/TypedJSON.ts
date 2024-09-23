import { TypedJSON } from 'typedjson';
import DiceSkillValue from './enums/DiceSkillValue';
import WargearType from './enums/WargearType';

TypedJSON.mapType(DiceSkillValue, {
    serializer: value => value == null ? value : value.value.toString(),
});

TypedJSON.mapType(WargearType, {
    deserializer: json => json == null ? json : WargearType.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});

export default TypedJSON;
