// Prikaz samo odabranog vendora
function showVendor(vendor) {
  const vendors = document.querySelectorAll('.vendor');
  vendors.forEach(v => {
    if (v.id === vendor) {
      v.classList.remove('hidden');
    } else {
      v.classList.add('hidden');
    }
  });
}

// Omogućava collapse / expand svake grupe komandi
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section.vendor h3');

  sections.forEach(header => {
    // Dodaj kursorsku indikaciju
    header.style.cursor = 'pointer';

    // Klikom na naslov sakrij/prikaži <pre> ispod
    header.addEventListener('click', () => {
      const pre = header.nextElementSibling;
      if (pre.style.display === 'none') {
        pre.style.display = 'block';
      } else {
        pre.style.display = 'none';
      }
    });
  });
});

 function copyToClipboard(preId) {
      const text = document.getElementById(preId).innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert("Alias-i kopirani u clipboard!");
      }).catch(err => {
        alert("Greška prilikom kopiranja: " + err);
      });
    }

    document.querySelectorAll('.tooltip').forEach(el => {
  const tooltip = el.querySelector('.tooltiptext');
  el.addEventListener('mousemove', e => {
    const padding = 10;
    let x = e.clientX + padding;
    let y = e.clientY + padding;

    // Ograničavanje da ne izlazi van ekrana
    const maxX = window.innerWidth - tooltip.offsetWidth - padding;
    const maxY = window.innerHeight - tooltip.offsetHeight - padding;

    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
  });
});
