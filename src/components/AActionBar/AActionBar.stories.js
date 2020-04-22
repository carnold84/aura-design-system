import AActionBar from './AActionBar';

export default { title: 'Action Bar' };

export const actionBar = () => ({
  components: { AActionBar },
  template: `
    <div style="position: relative; width: 600px;">
      <a-action-bar>
        <template v-slot:controls-left>Left Controls</template>
        <template v-slot:controls-right>Right Controls</template>
      </a-action-bar>
    </div>
  `,
});
