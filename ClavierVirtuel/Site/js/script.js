/*function changementcapitale() {
    document.getElementsByClassName("maj").click(); // Click on the checkbox
  }
*/
 /* $(document).ready(function() { 
    $(".changementmaj").click(function() { 
        $(".Touche-on").removeClass("maj"); 
        $(".Touche-on").addClass("maj");
    }); 
    }); 

  $(document).ready(function() { 
    $(".light").click(function() { 
        $(".kbd-eteint").addClass("Touche-Light-Night");

    }); 
}); */

$(document).ready(function() {
    $(".changementcapitale").click(function () {
           $(".changementcapitale").removeClass("maj");
           // $(".tab").addClass("active"); // instead of this do the below 
           $(this).addClass("maj");   
    });
    });