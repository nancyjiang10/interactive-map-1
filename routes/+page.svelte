<script>
  import ArticleHeader from '$lib/components/Article/ArticleHeader.svelte';
  import Map from '$lib/components/Maps/Map.svelte';
  import MapLayer from '$lib/components/Maps/MapLayer.svelte';
  import Geocoder from '$lib/components/Maps/Geocoder.svelte';


  let { data } = $props();
  const litterBaskets = data.litterBaskets;
  console.log(litterBaskets);
  let longitude = $state(-74.0);
  let latitude = $state(40.7);
  let zoom = $state(9.5);
</script>

<div class="container">
  <ArticleHeader
    headline="All the Litter Baskets in New York City"
    byline="NYCity News Service"
    pubDate="2026-04-20"
  />

  <p>
    Explore litter basket locations across New York City and search for your
    neighborhood.
  </p>

   <p>
    Use the search bar to jump to an address, then click points on the map for
    details.
  </p>

  <Geocoder
    label="Find your neighborhood"
    placeholder="Enter an address in New York…"
    onresult={(result) => {
      longitude = result.lng;
      latitude = result.lat;
      zoom = 15;
    }}
  />

  <Map
    {longitude}
    {latitude}
    {zoom}
    height={600}
    theme="positron"
    credit="NYC OpenData / OpenStreetMap contributors"
    <!-- the MapLayer you added earlier stays as-is -->

  />
    <MapLayer
      id="litter-baskets"
      type="circle"
      data={litterBaskets}
      paint={{
        'circle-color': '#0033a1',
        'circle-radius': 5,
        'circle-stroke-color': '#1a1a1a',
        'circle-stroke-width': 1,
        'circle-opacity': 0.9,
      }}
      popup={(feature) => {
      const p = feature.properties;
      return `<strong>${p.species}</strong><br>${p.description}`;
    }}
    />
  </Map>
</div>