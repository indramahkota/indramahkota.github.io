import { CommonElement } from "@in/main";
import { TemplateResult } from "lit";
type Constructor<T> = new (...args: any[]) => T;
export declare class CardInterface {
    renderCard(content: TemplateResult): TemplateResult;
}
export declare const Card: <T extends Constructor<CommonElement>>(superClass: T) => Constructor<CardInterface> & T;
export {};
//# sourceMappingURL=cardMixin.d.ts.map