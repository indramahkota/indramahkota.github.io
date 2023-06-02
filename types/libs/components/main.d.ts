import CommonElement from "./base/commonElement";
import { Card } from "./base/mixins/cardMixin";
import ScrollElement from "./base/scrollElement";
import Config from "./base/utils/Config";
import Icons from "./base/utils/Icons";
import Utils from "./base/utils/Utils";
import InButtonHamburger from "./in-button-hamburger/inButtonHamburger";
import InFooter from "./in-footer/inFooter";
import InGreeting from "./in-greeting/inGreeting";
import InHeaderLogo from "./in-header-logo/inHeaderLogo";
import InHeaderNavItem from "./in-header-nav-item/inHeaderNavItem";
import InHeaderNav from "./in-header-nav/inHeaderNav";
import InHeader from "./in-header/inHeader";
import InProfile from "./in-profile/inProfile";
import InProjectCard from "./in-project-card/inProjectCard";
import InSocialMedia from "./in-social-media/inSocialMedia";
import InToTop from "./in-to-top/inToTop";
import InToggleDark from "./in-toogle-dark/inToggleDark";
declare global {
    interface HTMLElementTagNameMap {
        "in-button-hamburger": InButtonHamburger;
        "in-footer": InFooter;
        "in-greeting": InGreeting;
        "in-header": InHeader;
        "in-header-logo": InHeaderLogo;
        "in-header-nav": InHeaderNav;
        "in-header-nav-item": InHeaderNavItem;
        "in-profile": InProfile;
        "in-social-media": InSocialMedia;
        "in-to-top": InToTop;
        "in-toggle-dark": InToggleDark;
        "in-project-card": InProjectCard;
    }
}
export { Card };
export { Config };
export { Utils };
export { Icons };
export { CommonElement };
export { ScrollElement };
export { InButtonHamburger, InFooter, InGreeting, InHeaderLogo, InHeaderNavItem, InHeaderNav, InHeader, InProfile, InSocialMedia, InToTop, InToggleDark, InProjectCard, };
//# sourceMappingURL=main.d.ts.map