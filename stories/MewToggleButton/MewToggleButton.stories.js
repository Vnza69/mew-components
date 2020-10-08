import {
  withKnobs,
  boolean,
  object,
  optionsKnob
} from '@storybook/addon-knobs';
import MewToggleButton from '@/components/MewToggleButton/MewToggleButton.vue';

export default {
  title: 'MewToggleButton',
  parameters: {
    component: MewToggleButton
  },
  decorators: [withKnobs]
};

const buttonDefaultGroup = ['1D', '1W', '1M', '1Y', 'All'];

const buttonPercentageGroup = ['25%', '50%', '75%', 'Max'];

const buttonTypes = {
  custom: 'custom',
  default: 'default',
  percentage: 'percentage'
}

export const mewToggleButton = () => ({
  components: { MewToggleButton },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    buttonGroup: {
      default: object('button-group', buttonDefaultGroup)
    },
    buttonType: {
      default: optionsKnob('button-type', buttonTypes, buttonTypes.default, { display: 'inline-radio'})
    }
  },
  watch: {
    enableDarkMode(newVal) {
      this.$vuetify.theme.dark = newVal === true ? true : false;
    }
  },
  template: `
    <div>
    <br />
    <mew-toggle-button
      :button-group="buttonGroup"
      :button-type="buttonType"
      @onBtnClick="onBtnClick"
    >
      <template v-slot:btn1>
        <v-btn>Button 1</v-btn>
      </template>
      <template v-slot:btn2>
        <v-btn>Button 2</v-btn>
      </template>

    </mew-toggle-button>
    
  </div>`,
  methods: {
    onBtnClick(newVal) {
      // eslint-disable-next-line no-console
      console.log('btn click:', newVal);
    }
  }
});
