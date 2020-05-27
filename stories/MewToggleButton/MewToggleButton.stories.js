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
  components: { 'mew-toggle-btn': MewToggleButton },
  props: {
    enableDarkMode: {
      default: boolean('dark mode ?', false)
    },
    buttonDefaultGroup: {
      default: object('button-default-group', buttonDefaultGroup)
    },
    buttonPercentageGroup: {
      default: object('button-percentage-group', buttonPercentageGroup)
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
    <mew-toggle-btn
      :button-group="this.buttonType === 'default' ? buttonDefaultGroup : buttonPercentageGroup"
      :button-type="buttonType"
      @onBtnClick="onBtnClick"
    >
      <template v-slot:btn0>
        <span v-if="buttonType === 'custom'">Btn1</span>
      </template>

    </mew-toggle-btn>
    
  </div>`,
  methods: {
    onBtnClick(newVal) {
      // eslint-disable-next-line no-console
      console.log('btn click:', newVal);
    }
  }
});
