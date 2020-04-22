import AModal from './';

export default { title: 'Modal' };

export const Modal = () => ({
  components: { AModal },
  template: `
    <a-modal id="example-modal" />
  `,
});
