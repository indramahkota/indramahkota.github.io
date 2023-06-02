import { CommonElement } from "@in/main";
declare const InGreeting_base: (new (...args: any[]) => import("../base/mixins/cardMixin").CardInterface) & typeof CommonElement;
export default class InGreeting extends InGreeting_base {
    greeting: string;
    description: string;
    render(): import("lit").TemplateResult;
}
export {};
//# sourceMappingURL=inGreeting.d.ts.map