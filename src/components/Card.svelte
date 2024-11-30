<script lang="ts">
    export let title: string
    export let status: string
    export let updated: string
    let badgeColor: string
    switch (status) {
      case 'At Work': badgeColor = 'bg-violet-300'; break;
      case 'Is Working': badgeColor = 'bg-green-300'; break;
    }
</script>

<a href={`/project`} class=" border-gray-100 border-2 w-[20rem] h-[18rem] shadow-sm rounded-lg ">
    <img
      alt={'project.title'}
      style=''
      height={300} 
      src="https://media.gcflearnfree.org/content/55e073a97dd48174331f51a0_01_17_2014/lg5.jpg"
      class="rounded-lg  "
    />
    <div class=" w-full pl-[1rem] pt-[1rem] ">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M7 19h10q-.1-1.225-.75-2.25t-1.7-1.625l.95-1.7q.05-.1.025-.225t-.15-.175q-.1-.05-.213-.025t-.162.125l-.975 1.75q-.5-.2-1-.312T12 14.45t-1.025.113t-1 .312L9 13.125Q8.95 13 8.838 13t-.238.05l-.1.375l.95 1.7q-1.05.6-1.7 1.625T7 19m2.75-1.5q-.2 0-.35-.15T9.25 17t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m4.5 0q-.2 0-.35-.15t-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zm7-14q0 .425.288.713T14 9h4l-5-5z"/></svg>
        <h1 class="text-lg ml-[0.5rem]">{title}</h1>
      </div>
      <div class="flex text-sm">
        <h1 class="text-gray-400 ">Last updated {updated}</h1>
        <div class="ml-2 px-2 rounded-lg {badgeColor} ">{status}</div>
      </div>
    </div>
  </a>