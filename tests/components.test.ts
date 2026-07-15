import { mount, RouterLinkStub } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";
import EntryCard from "../src/components/EntryCard.vue";
import InstallAppButton from "../src/components/InstallAppButton.vue";
import SearchForm from "../src/components/SearchForm.vue";
import ShareActions from "../src/components/ShareActions.vue";
import { entries } from "../src/content/catalog";

afterEach(() => vi.restoreAllMocks());

describe("EntryCard", () => {
  it("renders localized copy and a stable entry destination", () => {
    const wrapper = mount(EntryCard, {
      props: { entry: entries[0], locale: "fr" },
      global: { stubs: { RouterLink: RouterLinkStub } },
    });

    expect(wrapper.text()).toContain(entries[0].translations.fr.title);
    expect(wrapper.findComponent(RouterLinkStub).props("to")).toBe(
      `/fr/etiquette/${entries[0].slug}`,
    );
  });
});

describe("ShareActions", () => {
  it("copies the current URL and announces success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    const wrapper = mount(ShareActions, {
      props: { locale: "en", title: "A considerate reminder" },
    });
    await wrapper.get("button").trigger("click");

    expect(writeText).toHaveBeenCalledWith(window.location.href);
    expect(wrapper.get('[role="status"]').text()).toBe("Link copied");
  });

  it("offers native sharing when the browser supports it", async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: share,
    });

    const wrapper = mount(ShareActions, {
      props: { locale: "en", title: "A considerate reminder" },
    });
    await wrapper.vm.$nextTick();

    const buttons = wrapper.findAll("button");
    expect(buttons).toHaveLength(2);
    await buttons[1].trigger("click");
    expect(share).toHaveBeenCalledWith(
      expect.objectContaining({ title: "A considerate reminder" }),
    );
  });
});

describe("SearchForm", () => {
  it("submits trimmed search text into the catalog URL", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: "/en/etiquette", component: { template: "<div />" } }],
    });
    const wrapper = mount(SearchForm, {
      props: { locale: "en" },
      global: { plugins: [router] },
    });

    await wrapper.get("input").setValue("  speakerphone  ");
    await wrapper.get("form").trigger("submit");
    await router.isReady();

    expect(router.currentRoute.value.fullPath).toBe(
      "/en/etiquette?q=speakerphone",
    );
  });
});

describe("InstallAppButton", () => {
  it("offers and invokes the captured browser install prompt", async () => {
    const prompt = vi.fn().mockResolvedValue(undefined);
    const event = new Event("beforeinstallprompt") as Event & {
      prompt: () => Promise<void>;
      userChoice: Promise<{ outcome: "accepted" }>;
    };
    event.prompt = prompt;
    event.userChoice = Promise.resolve({ outcome: "accepted" });

    const wrapper = mount(InstallAppButton, { props: { locale: "en" } });
    window.dispatchEvent(event);
    await wrapper.vm.$nextTick();
    await wrapper.get("button").trigger("click");

    expect(prompt).toHaveBeenCalledOnce();
  });
});
