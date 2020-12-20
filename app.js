document.addEventListener("DOMContentLoaded", function(event) { 
    const btns = document.querySelectorAll("#btns button")
    btns.forEach(btn => {
       
       btn.addEventListener("click", ()=>{
         btns.forEach(b => {
            b.classList.remove("activeBtn");
         })
          btn.classList.add("activeBtn");
         
       })
    });
});

function switchView (param) { 
   const imgView = document.querySelector("#diamond_image");
   const videoView = document.querySelector("#video_view");
   const pdfView = document.querySelector('#pdf_view');

   switch (param.innerHTML) {
      case "Image":
         imgView.hidden = false;
         videoView.hidden = true;
         pdfView.hidden = true;
         break;
      case "Video":
         imgView.hidden = true;
         videoView.hidden = false;
         pdfView.hidden = true;
        

         break;
      case "Cartificate":
         imgView.hidden = true;
         videoView.hidden = true;
         pdfView.hidden = false;
         break;
      default:
         imgView.hidden = false;
         videoView.hidden = true;
         pdfView.hidden = true;
         break;
   }
 }
