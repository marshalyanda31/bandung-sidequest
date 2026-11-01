
const places = [
  { name: "Bubur DPR", category: "Breakfast · Food stop" },
  { name: "Tahura", category: "Nature · Walking around" },
  { name: "Masagi Coffee", category: "Coffee · Chill time" },
  { name: "Cakwe Gerlong", category: "Street food · Snack" },
  { name: "Bagelicious", category: "Food hunting" },
  { name: "Hidden Farm", category: "Cafe · Hangout" },
  { name: "Bubur Cihampelas", category: "Breakfast · Food stop" },
  { name: "Deli Bakes", category: "Bakery · Pastry" },
  { name: "Photobooth Braga", category: "Pictures · Memories" },
  { name: "Nasi Goreng bersama Marshal", category: "Food · Lunch together" },
  { name: "BMB Canteen", category: "Food stop" },
  { name: "Ayam Goreng Bengawan", category: "Food hunting" },
  { name: "Pastry Hunting Tegallega", category: "Sweet treats" }
];

const STORAGE_KEY = "bandung-sidequest-checked";

function openItinerary() {
  document.getElementById("invitation").classList.add("hidden");
  document.getElementById("itinerary").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPlaces() {
  const list = document.getElementById("placeList");
  const checked = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  list.innerHTML = "";

  places.forEach((place, index) => {
    const item = document.createElement("label");
    item.className = "place";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked.includes(index);

    if (checkbox.checked) {
      item.classList.add("done");
    }

    item.innerHTML = `
      <span class="place-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="place-info">
        <h3>${place.name}</h3>
        <p>${place.category}</p>
      </div>
    `;

    item.appendChild(checkbox);

    checkbox.addEventListener("change", () => {
      const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

      let updated;

      if (checkbox.checked) {
        updated = [...current, index];
      } else {
        updated = current.filter(id => id !== index);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      item.classList.toggle("done", checkbox.checked);
    });

    list.appendChild(item);
  });
}

renderPlaces();
