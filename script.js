$(document).ready(function () {

  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $("#experiencelink").on("click", function () {
    callTheInterval();
  });

  $(window).scroll(function () {
    var top_of_element = $("#experience").offset().top;
    var bottom_of_element = $("#experience").offset().top + $("#experience").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      // the element is visible, do something
      callTheInterval();
    } else {
      // the element is not visible, do something else
      $(".skills").addClass("initialWidth");
    }

    // this part is for making sure you underline the active page
    // let pages = [
    //   { page: $("#home"), name: "home", number: $("#home").offset().top - $(this).scrollTop() + 0.5 },
    //   { page: $("#about"), name: "about", number: $("#about").offset().top - $(this).scrollTop() },
    //   { page: $("#portfolio"), name: "portfolio", number: $("#portfolio").offset().top - $(this).scrollTop() },
    //   { page: $("#experience"), name: "experience", number: $("#experience").offset().top - $(this).scrollTop() },
    //   { page: $("#studies"), name: "studies", number: $("#studies").offset().top - $(this).scrollTop() },
    //   { page: $("#contact"), name: "contact", number: $("#contact").offset().top - $(this).scrollTop() }
    // ];

    // setTimeout(
    //   function () {
    //     let closestPage = closestToZero(pages);
    //     if (closestPage) {
    //       $(".nav-link").removeClass('active');
    //       $("#" + closestPage.name + "link").addClass("active");
    //     }
    //   }, 100);

  });

  $("#my-form-button").on("click", function () {
    console.log("clicked");
    handleSubmit();
  });

});

function callTheInterval() {
  setTimeout(
    function () {
      //do something special
      let element = $(".initialWidth");
      $(element).removeClass("initialWidth");
    }, 100);
}

function closestToZero(pages) {
  if (!pages.length) {
    return null;
  }

  let closest = 0;
  let closestPage = null;

  for (let i = 0; i < pages.length; i++) {
    if (closest === 0 || pages[i].number === 0) {
      closest = pages[i].number;
      closestPage = pages[i];
    } else if (pages[i].number > 0 && pages[i].number <= Math.abs(closest)) {
      closest = pages[i].number;
      closestPage = pages[i];
    } else if (pages[i].number < 0 && - pages[i].number < Math.abs(closest)) {
      closest = pages[i].number;
      closestPage = pages[i];
    }
  }

  return closestPage;
}

async function handleSubmit() {
  let status = document.getElementById("my-form-status");
  let email = $("#email").val();
  let name = $("#name").val();
  let message = $("#message").val();
  $.ajax({
    url: "https://formspree.io/f/xbjbjger",
    method: "POST",
    dataType: "json",
    data: {
      name,
      email,
      message,
    },
    success: function (result) {
      console.log(result);
      status.innerHTML = "Thanks for your submission! I'll get back to you asap.";
    }
  });
  // e.preventDefault();
  // console.log(e.target);
  // var status = document.getElementById("my-form-status");
  // var data = new FormData(e.target);
  // $.ajax({
  //   type: "POST"
  //   , url: "https://formspree.io/f/xbjbjger"
  //   , data
  //   , contentType: 'application/json;'
  //   , success: function (result) {
  //     console.log(result);
  //     status.innerHTML = "Thanks for your submission!";
  //   }
  // });
}