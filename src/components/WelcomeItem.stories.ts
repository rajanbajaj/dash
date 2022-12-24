import WelcomeItem from "./WelcomeItem.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "WelcomeItem",
  component: WelcomeItem,
} as Meta<typeof WelcomeItem>;

export const Primary: StoryFn<typeof WelcomeItem> = () => ({
  components: { WelcomeItem },
  template: "<WelcomeItem />",
});
