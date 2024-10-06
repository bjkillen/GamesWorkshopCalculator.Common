class RegexExtension {
    static matchNumber(input: string) {
        const match = input.match(/\d+/);

        if (match != null) {
            return Number(match[0]);
        }

        return undefined;
    }
}

export default RegexExtension;