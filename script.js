function showContent(index) {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach((section, i) => {
      if (i === index - 1) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
  
  
  // social media icon
  const github = document.querySelector("#github")
  github.addEventListener("click",() => {
    window.location="https://github.com/dilshand3"
  })
  
  const instagram = document.querySelector("#instagram")
  instagram.addEventListener("click",() => {
    window.location="https://www.instagram.com/dilshan.d3?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  }) 
  
  const linkedin = document.querySelector("#linkedin")
  linkedin.addEventListener("click",() => {
    window.location="www.linkedin.com/in/dilshand3"
  })