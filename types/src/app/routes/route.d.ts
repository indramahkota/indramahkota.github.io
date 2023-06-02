import { TemplateResult } from "lit";
type Create = (data?: MatchObject) => TemplateResult | void;
interface Parameter {
    key: string;
    value: string;
}
export interface MatchObject {
    path: string | null;
    url: string;
    isExact: boolean;
    params: Parameter[];
}
export declare class Route {
    path: string;
    render: Create;
    exact?: boolean | undefined;
    constructor(path: string, render: Create, exact?: boolean);
    match(): MatchObject | null;
    mount(): TemplateResult | void;
}
export {};
//# sourceMappingURL=route.d.ts.map