export default function loadingToggle() {
  const loadingHTML = document.querySelector('.loading');
  loadingHTML?.toggleAttribute('hidden');
}