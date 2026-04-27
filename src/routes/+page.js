import litterBaskets from '$lib/data/litterBaskets.json';
export function load() {
  return {
    showHeader: true,
    showFooter: true,
    litterBaskets,
  };
}
