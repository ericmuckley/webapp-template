<script>

    import { page } from '$app/stores';

    const ITEMS = [
        {
            url: "/",
            label: "HOME",
        },
        {
            url: "/about",
            label: "ABOUT",
        },
    ];

</script>

<nav class="bg-indigo-100">
    <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row">
            {#each ITEMS as item}
                <a
                    href="{item.url}"
                    class="hover:text-gray-600 hover:bg-indigo-200 text-gray-600 font-bold"
                >
                    <div class:acive={$page.route.id === item.url}>
                        <div class="py-2 px-8">
                            {item.label}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
        <div
            class="whitespace-nowrap text-gray-600 text-xl cursor-default font-bold mx-10"
        >
            MY APP
        </div>
    </div>
</nav>


<style lang="postcss">
    .acive {
        @apply text-gray-600 bg-white;
    }
</style>