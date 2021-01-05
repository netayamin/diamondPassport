document.addEventListener("DOMContentLoaded", function(event) {
   

   var pdf =  document.querySelector("#pdf_view");
   var pdfBtn = document.querySelector(".viewPDFfull");
   pdfBtn.addEventListener("click", ()=> {
      console.log(pdf.src);
      window.location = pdf.contentWindow.location.href   
   })

    const btns = document.querySelectorAll("#btns button")
    btns.forEach(btn => {
       btn.addEventListener("click", ()=>{
         btns.forEach(b => {
            b.classList.remove("activeBtn");
         })
          btn.classList.add("activeBtn");
       })
    });
    checkIfImageAvaiable()
});

 function checkIfImageAvaiable() { 
   const imgView = document.querySelector("#diamond_image");
   const videoView = document.querySelector("#video_view");
   const pdfView = document.querySelector('#pdf_view');
      var image = $("#diamond_image")
      var source = image.attr('src');

      //if no image show certificate first
      if( source == "" ) { 
         $('#image-btn').attr('disabled','disabled');
         imgView.hidden = true;
         videoView.hidden = true;
         pdfView.hidden = false;
         $("#pdf-btn").click();
      } else { 
         $('#image-btn').attr('disabled','false');
         imgView.hidden = false;
         videoView.hidden = true;
         pdfView.hidden = true;
         $("#image-btn").click();

      }
    }

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
         imgView.hidden = true;
         videoView.hidden = true;
         pdfView.hidden = false;
         break;
   }
 }
