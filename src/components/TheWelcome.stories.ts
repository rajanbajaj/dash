import TheWelcome from "./TheWelcome.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "TheWelcome",
  component: TheWelcome,
} as Meta<typeof TheWelcome>;

export const Primary: StoryFn<typeof TheWelcome> = () => ({
  components: { TheWelcome },
  template: "<TheWelcome />",
});
