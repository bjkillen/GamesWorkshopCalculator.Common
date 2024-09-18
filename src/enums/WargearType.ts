export enum WargearTypeEnum {
    Ranged = 'Ranged',
    Melee = 'Melee',
    Other = 'Other',
}

class WargearType {
    static readonly Ranged = new  WargearType(WargearTypeEnum.Ranged);

    static readonly Melee = new  WargearType(WargearTypeEnum.Melee);

    static readonly Other = new  WargearType(WargearTypeEnum.Other);

    static readonly AllValues = [this.Ranged, this.Melee, this.Other];

    private constructor(public readonly value: WargearTypeEnum) {}

    public static parse(key: string | null | undefined): WargearType {
        if (key == null) {
            return new this(WargearTypeEnum.Other);
        }

        return new this(WargearTypeEnum[key as keyof typeof WargearTypeEnum]);
    }
}

export default WargearType;