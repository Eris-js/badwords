type DefinitelyString<T> = Extract<T, string> extends never ? string : Extract<T, string> extends any ? string : Extract<T, string>;
type DefinitelyArray<T> = Extract<T, any[]> extends never ? any[] : Extract<T, any[]> extends any ? any[] : Extract<T, any[]>;
type DefinitelyFunction<T> = Extract<T, Function> extends never ? Function : Extract<T, Function> extends any ? Function : Extract<T, Function>;

function isString<T>(input: T | string): input is DefinitelyString<T> {
    return typeof input === 'string';
}

function isArray<T>(input: T | any[]): input is DefinitelyArray<T> {
    return Array.isArray(input);
}

function isFunction<T>(input: T | Function): input is DefinitelyFunction<T> {
    return typeof input === 'function';
}

export type badWordsOptions = {
    readonly lang: 'vi' | 'en';
    readonly blacklist?: (defaultBlacklist: string[]) => string[];
    readonly replacement: string;
    readonly validate: boolean;
};

type badWordsConfig = Omit<badWordsOptions, 'blacklist'> & {
    readonly blacklist: string[];
};

export type badWordsCallback = (badWordMatch: string[], length: number) => unknown;
type badWord = boolean | string;

import DEFAULT_BLACKLIST_VI from './language/vietnamese.json';
import DEFAULT_BLACKLIST_EN from './language/english.json';

const DEFAULT_OPTIONS: badWordsOptions = {
    lang: 'vi',
    blacklist: undefined,
    replacement: "*",
    validate: false
};

function getDefaultBlacklist(lang: 'vi' | 'en'): string[] {
    return lang === 'vi' ? DEFAULT_BLACKLIST_VI : DEFAULT_BLACKLIST_EN;
}

function createConfig(extraConfig?: string | Partial<badWordsOptions>): badWordsConfig {
    if (isString(extraConfig)) {
        return {
            ...DEFAULT_OPTIONS,
            blacklist: getDefaultBlacklist(DEFAULT_OPTIONS.lang),
            replacement: extraConfig
        };
    }

    const config: badWordsOptions = { ...DEFAULT_OPTIONS, ...extraConfig };
    const defaultBlacklist = getDefaultBlacklist(config.lang);
    const customBlacklist = config.blacklist && isFunction(config.blacklist) ? config.blacklist(defaultBlacklist) : defaultBlacklist;

    return {
        ...config,
        blacklist: isArray(customBlacklist) && customBlacklist.length > 0 ? customBlacklist : defaultBlacklist
    };
}

function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function badWords(input: string, options?: string | Partial<badWordsOptions>, callback?: badWordsCallback): badWord {
    if (!isString(input)) {
        throw new Error('[bad-words] Input must be a string');
    }

    const config = createConfig(options);

    const escapedBlacklist = config.blacklist.map(word => escapeRegExp(word));
    const regexp = new RegExp(`(\\s|W*)(\\b${escapedBlacklist.join("\\b|\\b")}\\b)(\\W|$)`, "gi");
    input = input.normalize();
    const badWordsMatched: string[] = [];
    const strReplace = input.replaceAll(regexp, (match, p1, p2, p3) => {
        badWordsMatched.push(p2);
        return p1 + config.replacement.repeat(p2.length) + p3;
    });
    if (callback) {
        callback(badWordsMatched, badWordsMatched.length);
    }

    if (config.validate) {
        return regexp.test(input);
    }
    return strReplace;
}
