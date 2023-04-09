import type { SvelteHTMLElements } from 'svelte/elements';

export type Nullable<T> = T | null;

export type ValueOf<T> = T[keyof T];

export type BaseProps<El extends keyof SvelteHTMLElements = 'div'> = SvelteHTMLElements[El] & {
	['data-testid']?: string;
	[key: `data-${string}`]: string | boolean | undefined;
};
