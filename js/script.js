$(function () {

    hoverMouse (".menu-list-item", "menu-item-new")


    let imgCart = "<img  id='cart-img' src='img/icon-cart-new.svg' alt='Корзина'></img>";
    let newImgCart = "<img  id='cart-img' src='img/icon-cart.svg' alt='Корзина'></img>"
    $("#cart")
    .mouseover (function () {
        $("#cart") .html(imgCart);
    })
    .mouseout(function () {
        $("#cart") .html(newImgCart);
    })

    $("#booking")
    .mouseover (function () {
        $("#cart") .html(newImgCart);
    })


    hoverMouse ("#phone-number", "phone-number-new")

    hoverMouse (".buttons-restaurant", "buttons-restaurant-new")

    hoverMouse (".menu-button", "menu-button-new")

    $("#list-menu, #we, #information-button, .mobile-link-scroll") .on("click", function () {
        let href = $(this) .attr("href");
        $("html, body") .animate({
            scrollTop: $(href) .offset().top
        });
        return false;
    });


    $("#header-button-menu") 
    .click(function () { 
        $(this) .hide();
        $("#header-button-close") .show()
        $("#shading-container, #header-menu-mobile") .show();
        disableScroll ();   
    })

    $("#header-button-close")
    .click(function () {
        $(this) .hide();
        $("#header-button-menu") .show();
        $("#shading-container, #header-menu-mobile") .hide();
        enableScroll ();
    })

    $(".mobile-list-link")
    .click(function () {
        $("#header-button-close") .hide();
        $("#header-button-menu") .show();
        $("#shading-container, #header-menu-mobile") .hide();
        enableScroll ();
    })

    function hoverMouse (object, newClass) {
        $(object)
        .mouseover(function () {
            $(this) .addClass(newClass);
        })
        .mouseout(function () {
            $(this) .removeClass(newClass);
        })
    }  
    
    hoverMouse (".mobile-list-item a", "mobile-list-item-new");

    function disableScroll () {
        $("html, body") .css ("overflow", "hidden");
    }

    function enableScroll () {
        $("html, body") .css ("overflow", "visible");
    }

    $("#booking, #button-booking, #button-offer, .menu-button, .mobile-list-booking") .click(function () {
        $(".popup-container") .fadeIn(600, disableScroll ());
    })
    $(".popup-container") .click(function (event) {
        if (event.target == this) {
        $(this) .fadeOut(600, enableScroll ());
        }
    })

    hoverMouse (".button-slider", "button-slider-new");

    let foodsItems = $("#food-content") .children().length;
    let foodItem = 1;

    function thisHideNextShow (hide, show, object = ".") {
        object += show;
        $(object) 
        .removeClass(show) .addClass(hide) 
        .next() .removeClass(hide) .addClass(show);
    }

    function thisHidePrevShow (hide, show, object = ".") {
        object += show;
        $(object)
        .removeClass(show) .addClass( hide)
        .prev() .removeClass(hide) .addClass(show);
    }

    $(".food-button-right") .click(function () {
        thisHideNextShow("food-content-hide", "food-content-show");
        foodItem++;
        switch(foodItem) {
            case 2:
                $(".food-button-left") .removeAttr("disabled");
                break;
            case foodsItems:
                $(".food-button-right") .attr("disabled", "true");
                break;   
        }
    })

    $(".food-button-left") .click(function () {
        thisHidePrevShow("food-content-hide", "food-content-show");
        foodItem--;
        switch(foodItem) {
            case foodsItems - 1:
                $(".food-button-right") .removeAttr("disabled");
                break;
            case 1:
                $(".food-button-left") .attr("disabled", "true");
                break;   
        }
    })


    let menuItems = $("#menu-cards") .children().length;
    let menuItem = 1;

    if ($(window) .width() < 1020) {
        
        $(".menu-card-show") .first()
        .next() .removeClass("menu-card-show") .addClass("menu-card-hide")
        .next() .removeClass("menu-card-show") .addClass("menu-card-hide");

    }

    $(window).on('resize', function() {

        if ($(window).width() < 1020) {

            let numbersShowMenuCards = $(".menu-card-show").length;
            if (numbersShowMenuCards !== 1) {
                $(".menu-card-show") .first()
                .next() .removeClass("menu-card-show") .addClass("menu-card-hide")
                .next() .removeClass("menu-card-show") .addClass("menu-card-hide");
                switch (menuItem) {
                    case menuItems - 2:
                        $(".menu-button-right") .removeAttr("disabled");
                        break;
                }
            }

        } else {
            
            let numbersShowMenuCards = $(".menu-card-show").length;
            if (numbersShowMenuCards == 1) {
                if (menuItem % 3 == 0) {
                    $(".menu-card-show")
                    .prev() .removeClass("menu-card-hide") .addClass("menu-card-show")
                    .prev() .removeClass("menu-card-hide") .addClass("menu-card-show");
                    menuItem -= 2;
                } else if ((menuItem + 1) % 3 == 0) {
                    $(".menu-card-show")
                    .next () .removeClass("menu-card-hide") .addClass("menu-card-show")
                    .prev() .prev() .removeClass("menu-card-hide") .addClass("menu-card-show");
                    menuItem--;
                } else {
                    $(".menu-card-show") 
                    .next() .removeClass("menu-card-hide") .addClass("menu-card-show")
                    .next() .removeClass("menu-card-hide") .addClass("menu-card-show");
                }
                switch (menuItem) {
                    case menuItems - 2:  
                        $(".menu-button-right") .attr("disabled", "true");
                        break;
                    case 1:       
                        $(".menu-button-left") .attr("disabled", "true");   
                        break;
                }
            }     
            
        }
    });

    change3or1ItemsSliderMenu ();

    function change3or1ItemsSliderMenu () { 

        $(".menu-button-right") .click(function () {
            if ($(window) .width() > 1020) {

                if (menuItem < menuItems - 2) { 
                    $(".menu-card-show") .first()
                    .removeClass("menu-card-show") .addClass("menu-card-hide")
                    .next() .removeClass("menu-card-show") .addClass("menu-card-hide")
                    .next() .removeClass("menu-card-show") .addClass("menu-card-hide")
                    .next() .removeClass("menu-card-hide") .addClass("menu-card-show")
                    .next() .removeClass("menu-card-hide") .addClass("menu-card-show")
                    .next() .removeClass("menu-card-hide") .addClass("menu-card-show");
                    menuItem += 3;

                    if (menuItem > 3 && menuItem < 7) {
                        $(".menu-button-left") .removeAttr("disabled");
                    } else if (menuItem > menuItems - 3) {
                        $(".menu-button-right") .attr("disabled", "true");
                    }
                }
            } else {

                thisHideNextShow("menu-card-hide", "menu-card-show");
                menuItem++;
                switch(menuItem) {
                    case 2:
                        $(".menu-button-left") .removeAttr("disabled");
                        break;
                    case menuItems:
                        $(".menu-button-right") .attr("disabled", "true");
                        break;   
                }
            }
        })

        $(".menu-button-left") .click(function () {
            if ($(window) .width() > 1020) {

                if (menuItem > 1) {
                    $(".menu-card-show") .last()
                    .removeClass("menu-card-show") .addClass("menu-card-hide")
                    .prev() .removeClass("menu-card-show") .addClass("menu-card-hide")
                    .prev() .removeClass("menu-card-show") .addClass("menu-card-hide")
                    .prev() .removeClass("menu-card-hide") .addClass("menu-card-show")
                    .prev() .removeClass("menu-card-hide") .addClass("menu-card-show")
                    .prev() .removeClass("menu-card-hide") .addClass("menu-card-show");
                    menuItem -= 3;

                    if (menuItem < menuItems - 2 && menuItem > menuItems - 6) {
                        $(".menu-button-right") .removeAttr("disabled");
                    } else if (menuItem < 4) {
                        $(".menu-button-left") .attr("disabled", "true");
                    }
                }  
            }   else {

                thisHidePrevShow("menu-card-hide", "menu-card-show");
                menuItem--;
                switch(menuItem) {
                    case menuItems - 1:
                        $(".menu-button-right") .removeAttr("disabled");
                        break;
                    case 1:
                        $(".menu-button-left") .attr("disabled", "true");   
                }
            }
        })
    }


    let commentsItems = $("#comments-wrap") .children().length;
    let commentItem = 1;

    $(".comments-button-right") .click(function () {
        if (commentItem < commentsItems) {
            thisHideNextShow("comment-item-hide", "comment-item-show");
            commentItem++;
        }  
        switch (commentItem) {
            case 2:
                thisHideNextShow("comment-icon-passive", "comment-icon-active");
                $(".comments-button-left") .removeAttr("disabled");
                break;
            case commentsItems:
                thisHideNextShow("comment-icon-passive", "comment-icon-active");
                $(".comments-button-right") .attr("disabled", "true");
                break;
        }
    })

    $(".comments-button-left") .click(function () {
        if (commentItem > 1) {
            thisHidePrevShow("comment-item-hide", "comment-item-show");
            commentItem--;
        }
        switch (commentItem) {
            case commentsItems - 1:
                thisHidePrevShow("comment-icon-passive", "comment-icon-active");
                $(".comments-button-right") .removeAttr("disabled");
                break;
            case 1:
                thisHidePrevShow("comment-icon-passive", "comment-icon-active");
                $(".comments-button-left") .attr("disabled", "true");
                break;
        }
    })

})