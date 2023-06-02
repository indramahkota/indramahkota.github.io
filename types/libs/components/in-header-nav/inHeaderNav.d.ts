import { InNavigationModel } from "@in/data/models";
import { CommonElement } from "@in/main";
import { TemplateResult } from "lit";
export default class InHeaderNav extends CommonElement {
    navData: InNavigationModel[];
    isDrawerOpen: boolean;
    onNavItemClicked: () => void;
    render(): TemplateResult;
}
//# sourceMappingURL=inHeaderNav.d.ts.map