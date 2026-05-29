function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Semua field harus diisi!");
    return false;
  }
  alert("Pesan berhasil dikirim!");
  return true;
}
const searchInput = document.getElementById('mainSearch');
const resultsBox = document.getElementById('searchResults');

const siteData = [
    { title: "Home Page", link: "index.html" },
    { title: "About Ahmad", link: "about.html" },
    { title: "Web Design Services", link: "services.html" },
    { title: "My Portfolio Projects", link: "portfolio.html" },
    { title: "Contact Me", link: "contact.html" }
];

searchInput.addEventListener('input', (e) => {
    let v = e.target.value;
    if(v.length > 0) {
        resultsBox.style.display = 'block';
        // تصفية النتائج بناءً على ما يكتبه المستخدم
        let matches = siteData.filter(item => item.title.includes(v));
        
        resultsBox.innerHTML = matches.map(item => 
            `<div class="result-item" onclick="location.href='${item.link}'">${item.title}</div>`
        ).join('');
    } else {
        resultsBox.style.display = 'none';
    }
});