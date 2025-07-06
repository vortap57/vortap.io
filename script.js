
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000);

  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("logo").src = data.logo;
      document.getElementById("name").textContent = data.nom;
      document.getElementById("intro").textContent = data.intro;

      const linksContainer = document.getElementById("links");
      data.liens.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.className = "link-button";
        a.target = "_blank";
        a.textContent = link.type;
        linksContainer.appendChild(a);
      });
    });
});
