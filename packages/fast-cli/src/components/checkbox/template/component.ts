import type { ComponentTemplateConfig } from "../../../utilities/template";

export default (config: ComponentTemplateConfig): string =>
`import { Checkbox as FoundationCheckbox } from "@microsoft/fast-foundation";
/**
 * A class derived from the Checkbox foundation component
 */
export class ${config.className} extends FoundationCheckbox {};` 