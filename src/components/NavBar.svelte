<script lang="ts">
  import MenuBarsIcon from "../icons/nav/MenuBarsIcon.svelte";
  import CloseIcon from "../icons/nav/CloseIcon.svelte";

  type Link = {
    title: string;
    to: string;
  };

  const links: Link[] = [
    { title: "About me", to: "about" },
    { title: "Experience", to: "experience" },
    { title: "Projects", to: "projects" },
    { title: "Contact", to: "contact" },
  ];

  let isOpen = false;

  const handleToggleMenu = () => (isOpen = !isOpen);

  const handleDownloadResume = () => {
    console.log("Downloading epic resume");
  };
</script>

<nav class="fixed w-full overflow-hidden shadow-md">
  <!-- Desktop Menu -->
  <div
    class="flex justify-between bg-slate-100 bg-white/30 px-2 py-4 backdrop-blur-xl"
  >
    <img class="h-6 w-6" src="./favicon.svg" alt="astro-icon" />

    <button
      class="block transition-transform md:hidden"
      on:click={handleToggleMenu}
    >
      {#if isOpen}
        <CloseIcon />
      {:else}
        <MenuBarsIcon />
      {/if}
    </button>

    <!-- Desktop Right Content -->
    <div class="hidden gap-8 md:flex text-sm md:text-base">
      <!-- Links container -->
      <div class="flex flex-row items-center gap-6 text-right">
        {#each links as { title, to }}
          <a
            href={`#${to}`}
            class="hover:text-md font-iosevka transition hover:mb-1 hover:font-bold hover:text-accent-primary hover:underline"
          >
            {title}
          </a>
        {/each}
      </div>

      <!-- Resume Button -->
      <div
        class="box"
        on:click={handleDownloadResume}
        on:keypress={handleDownloadResume}
      >
        <slot />
      </div>
    </div>
  </div>

  <!-- Mobile Right Content -->
  {#if isOpen}
    <div
      class="flex h-screen justify-end bg-white bg-white/30 shadow-md backdrop-blur-xl transition duration-300 ease-in-out"
    >
      <!-- Links and Button Container -->
      <div class="h-screen w-2/3 bg-slate-100 pr-4 text-right sm:hidden flex flex-col gap-8">
        <!-- Links -->
        <div class="static right-0 top-0 z-10 mt-16 flex flex-col gap-4">
          {#each links as { title, to }}
            <a
              href={`#${to}`}
              class="text-md font-iosevka font-light transition hover:font-bold hover:text-accent-primary hover:underline sm:text-sm"
            >
              {title}
            </a>
          {/each}
        </div>

        <!-- Button Slot -->
        <div
          class="box"
          on:click={handleDownloadResume}
          on:keypress={handleDownloadResume}
        >
          <slot />
        </div>
      </div>
    </div>
  {/if}
</nav>
