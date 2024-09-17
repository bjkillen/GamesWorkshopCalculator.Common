import { TypedJSON } from 'typedjson';
import DiceSkillValue from './enums/DiceSkillValue';

TypedJSON.mapType(DiceSkillValue, {
    deserializer: json => json == null ? json : DiceSkillValue.parse(json),
    serializer: value => value == null ? value : value.value.toString(),
});

export default TypedJSON;
