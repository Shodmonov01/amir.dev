



// NAVBAR
// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
let dropdownIsOpen = false;

// Handle dropdown menues
if (dropdowns.length) {
  // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
  // Instead use event delegation: https://javascript.info/event-delegation
  // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
  // But since we only have two dropdowns, no problem with that.
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      let target = document.querySelector(`#${event.target.dataset.dropdown}`);

      if (target) {
        if (target.classList.contains("show")) {
          target.classList.remove("show");
          dropdownIsOpen = false;
        } else {
          target.classList.add("show");
          dropdownIsOpen = true;
        }
      }
    });
  });
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener("mouseup", (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(
        `#${dropdownButton.dataset.dropdown}`
      );
      let targetIsDropdown = dropdown == event.target;

      if (dropdownButton == event.target) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
      }
    });
  }
});

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    let navbarMenu = document.querySelector(".navbar-menu");

    if (navbarMenu.style.display === "flex") {
      navbarMenu.style.display = "none";
      return;
    }

    navbarMenu.style.display = "flex";
  });
}

handleSmallScreens();


// ScrollTop

$(".about").click(function(){
  $(".scroll__container").scrollTop(1000);
  });

$(".portfolio").click(function(){
  $(".scroll__container").scrollTop(1500);
  });

$(".contact").click(function(){
   $(".scroll__container").scrollTop(2000);
   });
  



// Resume

(function() {
  $(".skills-prog li")
    .find(".skills-bar")
    .each(function(i) {
      $(this)
        .find(".bar")
        .delay(i * 150)
        .animate(
          {
            width:
              $(this)
                .parents()
                .attr("data-percent") + "%"
          },
          1000,
          "linear",
          function() {
            return $(this).css({
              "transition-duration": ".5s"
            });
          }
        );
    });

  $(".skills-soft li")
    .find("svg")
    .each(function(i) {
      var c, cbar, circle, percent, r;
      circle = $(this).children(".cbar");
      r = circle.attr("r");
      c = Math.PI * (r * 2);
      percent = $(this)
        .parent()
        .data("percent");
      cbar = (100 - percent) / 100 * c;
      circle.css({
        "stroke-dashoffset": c,
        "stroke-dasharray": c
      });
      circle.delay(i * 150).animate(
        {
          strokeDashoffset: cbar
        },
        1000,
        "linear",
        function() {
          return circle.css({
            "transition-duration": ".3s"
          });
        }
      );
      $(this)
        .siblings("small")
        .prop("Counter", 0)
        .delay(i * 150)
        .animate(
          {
            Counter: percent
          },
          {
            duration: 1000,
            step: function(now) {
              return $(this).text(Math.ceil(now) + "%");
            }
          }
        );
    });
}.call(this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixhQUExQixDQUF3QyxDQUFDLElBQXpDLENBQThDLFFBQUEsQ0FBQyxDQUFELENBQUE7SUFDNUMsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxNQUFiLENBQW9CLENBQUMsS0FBckIsQ0FBMkIsQ0FBQSxHQUFFLEdBQTdCLENBQWlDLENBQUMsT0FBbEMsQ0FBMEM7TUFDeEMsS0FBQSxFQUFPLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxPQUFSLENBQUEsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixjQUF2QixDQUFBLEdBQXlDO0lBRFIsQ0FBMUMsRUFFRyxJQUZILEVBRVMsUUFGVCxFQUVtQixRQUFBLENBQUEsQ0FBQTthQUNqQixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFZO1FBQUEscUJBQUEsRUFBdUI7TUFBdkIsQ0FBWjtJQURpQixDQUZuQjtFQUQ0QyxDQUE5Qzs7RUFNQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixLQUExQixDQUFnQyxDQUFDLElBQWpDLENBQXNDLFFBQUEsQ0FBQyxDQUFELENBQUE7QUFDcEMsUUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUE7SUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsT0FBakI7SUFDVCxDQUFBLEdBQUksTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaO0lBQ0osQ0FBQSxHQUFJLElBQUksQ0FBQyxFQUFMLEdBQVUsQ0FBQyxDQUFBLEdBQUksQ0FBTDtJQUNkLE9BQUEsR0FBVSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsTUFBUixDQUFBLENBQWdCLENBQUMsSUFBakIsQ0FBc0IsU0FBdEI7SUFDVixJQUFBLEdBQU8sQ0FBQyxDQUFDLEdBQUEsR0FBSSxPQUFMLENBQUEsR0FBYyxHQUFmLENBQUEsR0FBc0I7SUFDN0IsTUFBTSxDQUFDLEdBQVAsQ0FBVztNQUFBLG1CQUFBLEVBQXFCLENBQXJCO01BQXdCLGtCQUFBLEVBQW9CO0lBQTVDLENBQVg7SUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLENBQUEsR0FBRSxHQUFmLENBQW1CLENBQUMsT0FBcEIsQ0FBNEI7TUFDMUIsZ0JBQUEsRUFBa0I7SUFEUSxDQUE1QixFQUVHLElBRkgsRUFFUyxRQUZULEVBRW1CLFFBQUEsQ0FBQSxDQUFBO2FBQ2pCLE1BQU0sQ0FBQyxHQUFQLENBQVc7UUFBQSxxQkFBQSxFQUF1QjtNQUF2QixDQUFYO0lBRGlCLENBRm5CO0lBSUEsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsT0FBakIsQ0FBeUIsQ0FBQyxJQUExQixDQUErQixTQUEvQixFQUEwQyxDQUExQyxDQUE0QyxDQUFDLEtBQTdDLENBQW1ELENBQUEsR0FBRSxHQUFyRCxDQUF5RCxDQUFDLE9BQTFELENBQWtFO01BQ2hFLE9BQUEsRUFBUztJQUR1RCxDQUFsRSxFQUVHO01BQUEsUUFBQSxFQUFVLElBQVY7TUFBZ0IsSUFBQSxFQUFNLFFBQUEsQ0FBQyxHQUFELENBQUE7ZUFDdkIsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQVYsQ0FBQSxHQUFpQixHQUE5QjtNQUR1QjtJQUF0QixDQUZIO0VBWG9DLENBQXRDO0FBTkEiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcuc2tpbGxzLXByb2cgbGknKS5maW5kKCcuc2tpbGxzLWJhcicpLmVhY2ggKGkpIC0+XG4gICQodGhpcykuZmluZCgnLmJhcicpLmRlbGF5KGkqMTUwKS5hbmltYXRlIHtcbiAgICB3aWR0aDogJCh0aGlzKS5wYXJlbnRzKCkuYXR0cignZGF0YS1wZXJjZW50JykgKyAnJSdcbiAgfSwgMTAwMCwgJ2xpbmVhcicsIC0+XG4gICAgJCh0aGlzKS5jc3MgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnLjVzJ1xuICByZXR1cm5cbiQoJy5za2lsbHMtc29mdCBsaScpLmZpbmQoJ3N2ZycpLmVhY2ggKGkpIC0+XG4gIGNpcmNsZSA9ICQodGhpcykuY2hpbGRyZW4oJy5jYmFyJylcbiAgciA9IGNpcmNsZS5hdHRyKCdyJylcbiAgYyA9IE1hdGguUEkgKiAociAqIDIpXG4gIHBlcmNlbnQgPSAkKHRoaXMpLnBhcmVudCgpLmRhdGEgJ3BlcmNlbnQnXG4gIGNiYXIgPSAoKDEwMC1wZXJjZW50KS8xMDApICogY1xuICBjaXJjbGUuY3NzICdzdHJva2UtZGFzaG9mZnNldCc6IGMsICdzdHJva2UtZGFzaGFycmF5JzogY1xuICBjaXJjbGUuZGVsYXkoaSoxNTApLmFuaW1hdGUge1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IGNiYXJcbiAgfSwgMTAwMCwgJ2xpbmVhcicsIC0+XG4gICAgY2lyY2xlLmNzcyAndHJhbnNpdGlvbi1kdXJhdGlvbic6ICcuM3MnXG4gICQodGhpcykuc2libGluZ3MoJ3NtYWxsJykucHJvcCgnQ291bnRlcicsIDApLmRlbGF5KGkqMTUwKS5hbmltYXRlIHtcbiAgICBDb3VudGVyOiBwZXJjZW50XG4gIH0sIGR1cmF0aW9uOiAxMDAwLCBzdGVwOiAobm93KSAtPlxuICAgICQodGhpcykudGV4dCBNYXRoLmNlaWwobm93KSArICclJ1xuICByZXR1cm4iXX0=
//# sourceURL=coffeescript


// contact


