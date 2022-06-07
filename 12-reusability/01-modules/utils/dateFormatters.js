export function formatAsLocalDate(timestamp) {
  return new Date(timestamp).toLocaleDateString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatAsIsoDate(timestamp) {
  return new Date(timestamp).toISOString().substr(0, 10);
}
