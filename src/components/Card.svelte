<script lang="ts">
    export let title: string
    export let theme: string
    export let url: string
</script>

<a href={`/project`} class="space-y-3">
    <img
      alt={'project.title'}
      style=''
      src="{url}"
      width={360}
      height={240}
      class=""
    />
    <div>
      <div class=" font-sans">{title}</div>
      <div class="text-neutral-500 text-sm">
        {theme}
      </div>
    </div>
  </a>