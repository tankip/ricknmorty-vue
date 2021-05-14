import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders 'Hello World' when component is mounted", () => {
    const msg = "Hello World";
    const wrapper = shallowMount(Home, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
