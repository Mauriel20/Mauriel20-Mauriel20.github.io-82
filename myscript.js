 function myFunction1() {
            let element7 = document.getElementById("content1");
            element7.classList.toggle("dark-mode");

             let element8 = document.getElementById("drop");
            element8.classList.toggle("dark-mode");



            
            // let element2 = document.querySelectorAll('div.card');
            // for (let index = 0; index < element2.length; index++) {
            //     element2[index]["style"].color = "black";
            // }
           
            //  let element3 = document.getElementById("rowmagico");
            //     element3.classList.toggle("dark-mode");

            // let element4 = document.getElementById("fontsize");
            //     element4.classList.toggle("dark-mode-label");

            // let element5 = document.getElementById("label2");
            //     element5.classList.toggle("dark-mode-label");
          
     
            const switchButton = document.getElementById('switch');
            switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'

        }

           function outputbox01(vol) {
            document.querySelector('#fontsize').value = vol;
        }

        $("#fader").on("input change", function () {
            $('#texto1').css("font-size", $(this).val() + "px");
        });

$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

$(document).ready(function(){
$(document).keydown(function(event) {
    if (event.ctrlKey==true && (event.which == '107' || event.which == '109')) {
        alert('disabling zooming ! ');
        event.preventDefault();
     }
});
})
        
