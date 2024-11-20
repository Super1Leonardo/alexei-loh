<script lang="ts">
    export let title: string
    export let theme: string
    export let url: string
</script>

<a href={`/project`} class=" border-gray-100 border-2 shadow-xl rounded-[36px] ">
    <img
      alt={'project.title'}
      style=''
      src="{url}"
      width={360}
      height={240}
      class="rounded-[34px]  "
    />
    <div class="px-6 pb-2 ">
      <div class=" font-sans">{title}</div>
      <div class="text-neutral-500 text-sm">
        {theme}
      </div>
    </div>
  </a>