import { InNavigationModel } from "@in/data/models";
import { CommonElement } from "@in/main";
import { TemplateResult } from "lit";
export default class InHeaderNavItem extends CommonElement {
    navItem: InNavigationModel | undefined;
    onNavItemClicked: () => void;
    onHashChange: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
}
//# sourceMappingURL=inHeaderNavItem.d.ts.map