<script lang="ts">
  import { fade } from 'svelte/transition'

  type Link = {
    title: string;
    to: string;
  };

  const links: Link[] = [
    { title: "Home", to: "landing" },
    { title: "About me", to: "about" },
    { title: "Experience", to: "experience" },
    { title: "Projects", to: "projects" },
    { title: "Contact", to: "contact" },
  ];

  let isOpen = false;

  const handleToggleMenu = () => (isOpen = !isOpen);

  const closeMenu = () => (isOpen = false);

  const handleDownloadResume = () => {
    console.log("Downloading epic resume");
  };
</script>

<nav class="fixed w-full overflow-hidden shadow-md">
  <!-- Desktop Menu -->
  <div
    class="z-50 flex justify-between bg-slate-100 bg-white/30 p-6 backdrop-blur-xl"
  >
    <a on:click={closeMenu} href="#landing">
      <img class="h-6 w-6" src="./favicon.svg" alt="astro-icon" />
    </a>

    <button
      class="grid place-items-center transition-transform md:hidden "
      on:click={handleToggleMenu}
    >
      {#if isOpen}
        <img
          class="h-6 w-6 text-black absolute"
          src="/assets/img/nav/close.svg"
          alt="close-icon"
        />
      {:else}
        <img
          class="h-6 w-6 text-black absolute"
          src="/assets/img/nav/menu_bars.svg"
          alt="menu-icon"
          transition:fade={{ duration: 100 }}
        />
      {/if}
    </button>

    <!-- Desktop Right Content -->
    <div class="hidden gap-8 text-sm md:flex md:text-base">
      <!-- Links container -->
      <div
        class="flex flex-row items-center gap-6 text-right text-foreground-primary"
      >
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
      class="flex h-screen justify-end bg-white bg-white/30 shadow-md backdrop-blur-xl transition duration-300 ease-in-out md:hidden"
      on:keydown={(e) =>  e.key === 'esc' && closeMenu }
      on:click|self={closeMenu}
    >
      <!-- Links and Button Container -->
      <div
        class="flex h-screen w-2/3 flex-col gap-8 bg-slate-100 pr-4 text-right md:hidden"
      >
        <!-- Links -->
        <div
          class="static right-0 top-0 z-10 mt-16 flex flex-col gap-4 text-foreground-primary"
        >
          {#each links as { title, to }}
            <a
              href={`#${to}`}
              class="text-md font-iosevka font-light transition hover:font-bold hover:text-accent-primary hover:underline md:text-xl"
              on:click={closeMenu}
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
