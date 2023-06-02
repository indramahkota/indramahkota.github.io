import { InNavigationModel } from "@in/data/models";
import { ScrollElement } from "@in/main";
import { TemplateResult } from "lit";
export default class InHeader extends ScrollElement {
    title: string;
    navData: InNavigationModel[];
    isShow: boolean;
    isDrawerOpen: boolean;
    darkMode: boolean;
    supportDarkMode: boolean;
    onScrollHandler(): void;
    onResizeHandler: () => void;
    onDrawerChange: (open: boolean) => void;
    onNavItemClicked: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
}
//# sourceMappingURL=inHeader.d.ts.map