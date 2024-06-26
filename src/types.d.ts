type badWordsOptions = {
    readonly lang: 'vi' | 'en';
    readonly blacklist?: (defaultBlacklist: string[]) => string[];
    readonly replacement: string;
    readonly validate: boolean;
};
type badWordsCallback = (badWordMatch: string[], length: number) => unknown;
type badWord = boolean | string;
declare function badWords(input: string, options?: string | Partial<badWordsOptions>, callback?: badWordsCallback): badWord;

export { badWords };
