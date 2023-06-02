import CommonElement from "./commonElement";
export default abstract class ScrollElement extends CommonElement {
    private ticking;
    protected currScrollPosition: number;
    protected lastScrollPosition: number;
    abstract onScrollHandler(): void;
    private readonly _onScrollHandler;
    protected getScrollPositionDx(): number;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=scrollElement.d.ts.map