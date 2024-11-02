export enum StratagemTypeEnum {
    Attacker = 'Attacker',
    Defender = 'Defender',
    Both = 'Both',
}

class StratagemType {
    static readonly Attacker = new  StratagemType(StratagemTypeEnum.Attacker);

    static readonly Defender = new  StratagemType(StratagemTypeEnum.Defender);

    static readonly Both = new  StratagemType(StratagemTypeEnum.Both);

    static readonly AllValues = [this.Attacker, this.Defender, this.Both];

    private constructor(public readonly value: StratagemTypeEnum) {}

    public static parse(key: string | null | undefined): StratagemType {
        if (key == null) {
            return new this(StratagemTypeEnum.Both);
        }

        return new this(StratagemTypeEnum[key as keyof typeof StratagemTypeEnum]);
    }

    public static parseDescriptionLower(value: string): StratagemType {
        switch (value.toLocaleLowerCase()) {
            case StratagemTypeEnum.Attacker.toLocaleLowerCase():
                return StratagemType.Attacker;
            case StratagemTypeEnum.Defender.toLocaleLowerCase():
                return StratagemType.Defender;
            default:
                return StratagemType.Both;
        }
    }
}

export default StratagemType;