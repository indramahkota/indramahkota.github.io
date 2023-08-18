import { InSocialMediaModel, InUserModel } from "@in/data/models";
import { CommonElement } from "@in/main";
declare const InProfile_base: (new (...args: any[]) => import("../base/mixins/cardMixin").CardInterface) & typeof CommonElement;
export default class InProfile extends InProfile_base {
    user: InUserModel | undefined;
    socialMedia: InSocialMediaModel[];
    render(): import("lit-html").TemplateResult;
}
export {};
//# sourceMappingURL=inProfile.d.ts.map