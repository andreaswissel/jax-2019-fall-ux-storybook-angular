import {storiesOf} from '@storybook/angular';
import {InputComponent} from './input.component';
import {select, text, withKnobs} from '@storybook/addon-knobs';

const mdNotes = `
# Input Documentation
                 
This is the documentation of the input component.`;

storiesOf('Components | Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: InputComponent,
    props: {
      label: text('Label', 'My Label'),
      placeholder: text('Placeholder', 'My Placeholder'),
      type: select('Input Type', ['text', 'number', 'email', 'password'], 'text')
    }
  }), { notes: mdNotes });
