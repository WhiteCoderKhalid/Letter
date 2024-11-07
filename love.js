
$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        setTimeout(function() {
          $(".card").stop().animate(
            {
              top: 0,
            },
            "slow"
          );
        }, 5000); 
      });
  });

  