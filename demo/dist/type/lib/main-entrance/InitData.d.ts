import { positionInfoType } from "@/lib/type/ComponentType";
export default class InitData {
    constructor();
    setInitStatus(status: boolean): void;
    setScreenShortInfo(width: number, height: number): void;
    setScreenShotPosition(left: number, top: number): void;
    showScreenShortPanel(): void;
    getScreenShortController(): HTMLCanvasElement | null;
    getToolController(): HTMLDivElement | null;
    getTextInputController(): HTMLDivElement | null;
    getTextStatus(): boolean;
    getScreenShortImageController(): HTMLCanvasElement | null;
    setScreenShortImageController(imageController: HTMLCanvasElement): void;
    setToolStatus(status: boolean): void;
    setTextStatus(status: boolean): void;
    setToolInfo(left: number, top: number): void;
    getToolClickStatus(): boolean;
    setToolClickStatus(status: boolean): void;
    getCutOutBoxPosition(): positionInfoType;
    getDragging(): boolean;
    setDragging(status: boolean): void;
    getDraggingTrim(): boolean;
    setDraggingTrim(status: boolean): void;
    setCutOutBoxPosition(mouseX: number, mouseY: number, width: number, height: number): void;
    setOptionStatus(status: boolean): void;
    hiddenOptionIcoStatus(): void;
    getOptionIcoController(): HTMLDivElement | null;
    getOptionController(): HTMLDivElement | null;
    setOptionPosition(position: number): void;
    getToolPosition(): {
        left: number;
        top: number;
    } | undefined;
    getSelectedColor(): string;
    setSelectedColor(color: string): void;
    getColorSelectPanel(): HTMLElement | null;
    getToolName(): string;
    setToolName(itemName: string): void;
    getPenSize(): number;
    setPenSize(size: number): void;
    getBorderSize(): number;
    getHistory(): Record<string, any>[];
    shiftHistory(): Record<string, any> | undefined;
    popHistory(): Record<string, any> | undefined;
    pushHistory(item: Record<string, any>): void;
    getUndoClickNum(): number;
    setUndoClickNum(clickNumber: number): void;
    getColorPanel(): HTMLElement | null;
    setColorPanelStatus(status: boolean): void;
    getRightPanel(): HTMLElement | null;
    setRightPanel(status: boolean): void;
    setUndoStatus(status: boolean): void;
    cancelEvent(): void;
    getUndoController(): HTMLElement | null;
    destroyDOM(): void;
}
