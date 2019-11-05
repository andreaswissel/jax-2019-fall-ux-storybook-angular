import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from './button.component';
import {text, withKnobs} from '@storybook/addon-knobs';

const mdNotes = `
# Button Documentation
                 
This is the documentation of the button component.`;

storiesOf('Components | Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: ButtonComponent,
    props: {
      label: text('Label', 'Submit')
    }
  }), { notes: mdNotes })
  .add('Secondary', () => ({
    component: ButtonComponent,
    props: {
      label: text('Label', 'Reset'),
      isSecondary: true,
    }
  }));
