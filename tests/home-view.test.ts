import { createHead } from "@unhead/vue/client";
import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import EntryCard from "../src/components/EntryCard.vue";
import { entries } from "../src/content/catalog";
import HomeView from "../src/views/HomeView.vue";

function renderHome(catalog: typeof entries) {
  return shallowMount(HomeView, {
    props: { locale: "en", catalog },
    global: {
      plugins: [createHead()],
      stubs: { RouterLink: RouterLinkStub },
    },
  });
}

describe("HomeView content lifecycle", () => {
  it("renders a one-entry Markdown catalog without positional assumptions", () => {
    const wrapper = renderHome(entries.slice(0, 1));

    expect(wrapper.find(".hero-note").text()).toContain(
      entries[0].translations.en.takeaway,
    );
    expect(wrapper.findAllComponents(EntryCard)).toHaveLength(1);
  });

  it("keeps the homepage usable when no etiquette files remain", () => {
    const wrapper = renderHome([]);

    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find(".hero-note").exists()).toBe(false);
    expect(wrapper.findAllComponents(EntryCard)).toHaveLength(0);
  });
});
