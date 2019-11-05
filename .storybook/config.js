import {addDecorator, configure} from '@storybook/angular';
import {withA11y} from "@storybook/addon-a11y";

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.ts$/), module);
addDecorator(withA11y)
