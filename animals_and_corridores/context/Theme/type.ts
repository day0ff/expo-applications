export type FontSizeType = "huge" | "large" | "medium" | "small" | "tiny";

export type LineHeightType = "huge" | "large" | "medium" | "small" | "tiny";

export type ColorType = "title" | "text" | "label" | "link" | "background" | "accent" | "primary" | "secondary";

export type ColorSchemeType = "light" | "dark" | null | undefined;

export type ThemeType = {
    colorScheme: ColorSchemeType;
    fontSize: Record<FontSizeType, string>,
    lineHeight: Record<LineHeightType, string>,
    color: Record<ColorType, string>
}