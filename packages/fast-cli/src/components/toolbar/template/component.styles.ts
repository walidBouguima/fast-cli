import type { ComponentTemplateConfig } from "../../../utilities/template";

export default (config: ComponentTemplateConfig): string =>
`import { css, ElementStyles } from "@microsoft/fast-element";
import {
    display,
    focusVisible,
    forcedColorsStylesheetBehavior,
    FoundationElementTemplate,
    ToolbarOptions,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    controlCornerRadius,
    fillColor,
    focusStrokeWidth,
    neutralStrokeFocus,
    strokeWidth,
} from "@microsoft/adaptive-ui";

/**
 * Styles for ${config.className}
 * @public
 */
export const styles: FoundationElementTemplate<ElementStyles> = (
    context,
    definition
) =>
    css\`
        \${display("inline-flex")} :host {
            --toolbar-item-gap: calc(
                (var(--design-unit) + calc(var(--density) + 2)) * 1px
            );
            background-color: \${fillColor};
            border-radius: calc(\${controlCornerRadius} * 1px);
            fill: currentcolor;
            padding: var(--toolbar-item-gap);
        }
        :host(\${focusVisible}) {
            outline: calc(\${strokeWidth} * 1px) solid \${neutralStrokeFocus};
        }
        .positioning-region {
            align-items: flex-start;
            display: inline-flex;
            flex-flow: row wrap;
            justify-content: flex-start;
        }
        :host([orientation="vertical"]) .positioning-region {
            flex-direction: column;
        }
        ::slotted(:not([slot])) {
            flex: 0 0 auto;
            margin: 0 var(--toolbar-item-gap);
        }
        :host([orientation="vertical"]) ::slotted(:not([slot])) {
            margin: var(--toolbar-item-gap) 0;
        }
        .start,
        .end {
            display: flex;
            margin: auto;
            margin-inline: 0;
        }
        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            width: 16px;
            height: 16px;
        }
        \`.withBehaviors(
            forcedColorsStylesheetBehavior(
                css\`
                    :host(:\${focusVisible}) {
                        box-shadow: 0 0 0 calc(\${focusStrokeWidth} * 1px) \${SystemColors.Highlight};
                        color: \${SystemColors.ButtonText};
                        forced-color-adjust: none;
                    }
                \`
            )
        );`;