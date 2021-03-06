(function ($) {
    $(document).ready(function () {
        window_w = $(window).width();
        window_h = $(window).height();
        window_s = $(window).scrollTop();
        mobilenav_screen_size = 820;
        $html = $('html');
        $body = $('body');
        if (history.pushState)
            var ionic_current_path = location.pathname;
        $(window).bind('resize load', function () {
            window_w = $(window).width();
            window_h = $(window).height();
            window_s = $(window).scrollTop();
        });
        $(window).scroll(function () {
            window_s = $(window).scrollTop();
        });
        function supportsTransitions() {
            var b = document.body || document.documentElement, s = b.style, p = 'transition';
            if (typeof s[p] == 'string') {
                return true;
            }
            var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (var i = 0; i < v.length; i++) {
                if (typeof s[v[i] + p] == 'string') {
                    return true;
                }
            }
            return false;
        }

        enableStickyHeader();
        enableHoverStickyHeader();
        enableMobileNav();
        enableFlexSlider();
        enableAccordions();
        enableTabs();
        enableProgressbars();
        enableCircularProgressbars();
        enableTooltips();
        enableAlertBox();
        enableFancyBox()
        enableCustomAudio();
        enableSearchBox();
        enableSearchPreBox();
        enableCustomInput();
        enableSliderAlternativeOverlay();
        enableGoogleMaps();
        enableDatePicker();
        enableBackToTop();
        enableNavigationButton();
        enableMasonryBlog();
        enableTimelineBlog();
        enableMixItUp();
        enableFullWidth();
        enableWOWAnimate();
        enableRecentProductRemove();
        enableShopRefine();
        enableOnePageScroll();
        enablePrettyPhoto();
        enableFitVids();
        enableSharrre();
        enableLoadMoreButton();
        enableTimelineLoadMore();
        enableWooCommerceAddToCart();
        enableWooCommerceLoadMore();
        enablePostLike();
        enableAjaxPageLoad();
        function reinitializeAllFeatures() {
            initMenuFeatures();
            enableFlexSlider();
            enableAccordions();
            enableTabs();
            animateProgressBars();
            initCircularProgressbars();
            enableTooltips();
            enableAlertBox();
            enableFancyBox()
            initCustomAudio();
            initSearchBox();
            initMarineHeader();
            enableCustomInput();
            sliderAlternativeOverlay();
            setTimeout(function () {
                enableGoogleMaps();
            }, 420);
            enableDatePicker();
            initMasonryBlog();
            setTimelineBlog();
            reinitializeMixItUp();
            setFullWidth();
            setTimeout(function () {
                enableWOWAnimate();
            }, 1200);
            enableRecentProductRemove();
            enableShopRefine();
            enableOnePageScroll();
            enablePrettyPhoto();
            enableFitVids();
            enableSharrre();
            enableLoadMoreButton();
            enableTimelineLoadMore();
            enableWooCommerceAddToCart();
            enableWooCommerceLoadMore();
            enablePostLike();
            initAjaxNav();
            setFullWidth();
            setTimeout(function () {
                setFullWidth();
            }, 400);
        }

        jQuery("html").addClass("no-fouc");
        $("html").show();
        function enableDatePicker() {
            $('.datepicker-button .datepicker-el').datepicker({
                onSelect: function () {
                    var datePicker = $(this);
                    var datePickerWrap = datePicker.parents('.date-picker');
                    var currentDate = datePicker.datepicker("getDate");
                    if (currentDate) {
                        var year = currentDate.getFullYear();
                        var month = currentDate.getMonth();
                        var day = currentDate.getDate();
                        datePickerWrap.find('.day').attr('value', day);
                        datePickerWrap.find('.month').attr('value', month);
                        datePickerWrap.find('.year').attr('value', year);
                        datePicker.fadeToggle(300);
                    }
                }
            });
            $('.datepicker-button .datepicker-icon').click(function () {
                $(this).parent().find('.datepicker-el').fadeToggle(300);
            });
        }

        function enableNavigationButton() {
            initNavigationButton();
            $(window).resize(function () {
                if (window_w < mobilenav_screen_size) {
                    $('.navigation-style2').removeClass('nav-active');
                }
            });
        }

        function initNavigationButton() {
            $('#nav-button').click(function () {
                $(this).parent().find('.navigation-style2').toggleClass('nav-active');
            });
        }

        function enableBackToTop() {
            $(window).scroll(function () {
                var offset = $(document).height() - window_h - 300;
                if ($('#footer').length)
                    offset = $('#footer').offset().top - window_h;
                if (window_s > offset && window_w > 767) {
                    $('#back-to-top').fadeIn(400);
                } else {
                    $('#back-to-top').fadeOut(400);
                }
            });
            $('#back-to-top a').click(function (e) {
                e.preventDefault();
                var duration = 1200;
                if (window_s < 400)
                    duration = 600;
                if (window_s = 0)
                    duration = 0;
                $('html, body').animate({scrollTop: 0 + 'px'}, {duration: duration, easing: 'easeInOutCubic'});
            });
        }

        function enableStickyHeader() {
            $(window).scroll(function () {
                window_s = $(this).scrollTop();
                window_w = $(this).width();
                if (window_s > 130 && window_w > 991) {
                    if ($('body').hasClass('headerstyle9') && !$('body').hasClass('sticky-header-on')) {
                        $('#header').hide();
                        setTimeout(function () {
                            $('#header').show();
                        }, 300);
                    }
                    $('#header').addClass('sticky-header');
                    $('body').addClass('sticky-header-on');
                } else {
                    $('#header').removeClass('sticky-header');
                    $('body').removeClass('sticky-header-on');
                }
            });
            initMarineHeader();
            $(window).bind('load resize', function () {
                initMarineHeader();
            });
        }

        function initMarineHeader() {
            if (window_w > parseInt(mobilenav_screen_size) && !$body.hasClass('headerstyle7') && !$body.hasClass('headerstyle8')) {
                var $header = $('#header'), header_h;
                if (!$header.hasClass('sticky-header')) {
                    header_h = $header.height();
                    $body.css('padding-top', header_h);
                } else {
                    $header.removeClass('sticky-header');
                    header_h = $header.height();
                    $body.css('padding-top', header_h);
                    $header.addClass('sticky-header');
                }
            } else {
                $body.css('padding-top', '');
            }
        }

        function enableHoverStickyHeader() {
            var header_hover = false;
            var button_hover = false;
            $('#header').hover(function () {
                header_hover = true;
            }, function () {
                header_hover = false;
                setTimeout(function () {
                    if (!button_hover && !header_hover)
                        $('#header').removeClass('sticky-header-visible');
                }, 600);
            });
            $('#sticky-header-hover-button .button-content').hover(function () {
                button_hover = true;
                $('#header').addClass('sticky-header-visible');
                setTimeout(function () {
                    if (!header_hover) {
                        $('#header').removeClass('sticky-header-visible');
                    }
                }, 1200);
            }, function () {
                button_hover = false;
            });
        }

        function enableStickyFooter() {
            initStickyFooter();
            $(window).bind('load resize', function () {
                if ($body.hasClass('sticky-footer-on'))
                    fixStickyFooter();
            });
        }

        function initStickyFooter() {
            $body.addClass('sticky-footer-on')
            if ($body.hasClass('sticky-footer-on')) {
                fixStickyFooter();
            }
        }

        function fixStickyFooter() {
            var footer = $('#footer');
            if (footer.length) {
                var footer_h = $('#footer').height();
                $body.css('padding-bottom', footer_h);
            }
        }

        function enableSearchBox() {
            initSearchBox();
            $(document).click(function (e) {
                if (!$('#search-box, #search-box *').is(e.target)) {
                    $('#search-box').removeClass('search-box-opened');
                }
            });
        };
        function initSearchBox() {
            $('#search-box>.icons').click(function () {
                $(this).parent().toggleClass('search-box-opened');
            });
        }

        function enableSearchPreBox() {
            initSearchBoxPre();
            $(document).click(function (e) {
                if (!$('#search-box-pre, #search-box-pre *').is(e.target)) {
                    $('#search-box-pre').removeClass('search-box-opened');
                }
            });
        };
        function initSearchBoxPre() {
            $('#search-box-pre>.icons').click(function () {
                $(this).parent().toggleClass('search-box-opened');
            });
        }

        function enableWOWAnimate() {
            var isMobileBrowser = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
            if (supportsTransitions() && !isMobileBrowser) {
                var off = window_h / 5;
                var wow = new WOW({offset: off});
                wow.init();
            }
        }

        function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function eraseCookie(name) {
            createCookie(name, "", -1);
        }

        function enableRecentProductRemove() {
            $('.remove-product-button').click(function (e) {
                e.preventDefault();
                var name = 'woocommerce_recently_viewed' + "=";
                var ca = document.cookie.split(';');
                recently_viewed = new Array();
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(name) == 0) {
                        recently_viewed = c.substring(name.length, c.length).split('%7C');
                    }
                }
                eraseCookie('woocommerce_recently_viewed');
                new_recently_viewed = new Array();
                if (recently_viewed instanceof Array) {
                    j = 0;
                    for (i = 0; i < recently_viewed.length; i++) {
                        if (recently_viewed[i] == $(this).data('id')) {
                            continue;
                        }
                        new_recently_viewed[j] = recently_viewed[i];
                        j++;
                    }
                }
                createCookie('woocommerce_recently_viewed', new_recently_viewed.join('|'));
                $(this).parents('.recently-viewed-product').fadeOut(300, function () {
                    $(this).remove();
                });
            });
            $('.clear-recent-products').click(function (e) {
                e.preventDefault();
                $('.recently-viewed-product').each(function () {
                    $(this).fadeOut(300, function () {
                        $(this).remove();
                    });
                });
                eraseCookie('woocommerce_recently_viewed');
            });
            $('.shopping-cart .remove-product').click(function (e) {
                e.preventDefault();
                $(this).parents('tr').fadeOut(300, function () {
                    $(this).remove();
                });
            });
        }

        function enableCustomInput() {
            if ($('.shopping-cart').length > 0) {
                $('input[type="number"]').each(function () {
                    $(this).wrap('<div class="numeric-input-holder"></div>');
                    $(this).parent().prepend('<div class="decrease-button"></div>');
                    $(this).parent().append('<div class="increase-button"></div>');
                    $(this).parent().find('.decrease-button').click(function () {
                        var value = parseInt($(this).parent().find('input[type="number"]').val());
                        value--;
                        $(this).parent().find('input[type="number"]').val(value);
                    });
                    $(this).parent().find('.increase-button').click(function () {
                        var value = parseInt($(this).parent().find('input[type="number"]').val());
                        value++;
                        $(this).parent().find('input[type="number"]').val(value);
                    });
                    $(this).keypress(function (e) {
                        var value = parseInt(String.fromCharCode(e.which));
                        if (isNaN(value)) {
                            e.preventDefault();
                        }
                    });
                })
            }
        }

        function enableShopRefine() {
            $('.shop-products-recommend').perfectScrollbar({
                wheelSpeed: 20,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollX: true
            });
            $('#reviews').perfectScrollbar({
                wheelSpeed: 20,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollX: true
            });
            if ($('.price_slider').length > 0) {
                var noUi_slider = $('.price_slider');
                var noUi_slider_parent = noUi_slider.parent();
                var noUi_min = parseInt($('#min_price').data('min'));
                var noUi_max = parseInt($('#max_price').data('max'));
                var noUi_min_start = parseInt($('#min_price').data('min'));
                var noUi_max_start = parseInt($('#max_price').data('max'));
                if (woocommerce_price_slider_params.currency_symbol)
                    var currency = woocommerce_price_slider_params.currency_symbol; else
                    var currency = '$';
                noUi_slider.noUiSlider({
                    start: [noUi_min_start, noUi_max_start],
                    range: {'min': [noUi_min], 'max': [noUi_max]},
                    serialization: {
                        lower: [$.Link({target: $('.price_slider_amount .price_label .from', noUi_slider_parent)})],
                        upper: [$.Link({target: $('.price_slider_amount .price_label .to', noUi_slider_parent)})],
                        format: {decimals: 0, mark: ',', prefix: currency}
                    }
                });
            }
            $('.sidebar .shop-widget').each(function () {
                $(this).not('.product-price-range').find('>ul').perfectScrollbar({
                    wheelSpeed: 20,
                    wheelPropagation: true,
                    minScrollbarLength: 20,
                    suppressScrollX: true
                });
                $(this).not('.opened').find('>ul,>form').hide();
                $(this).find('.arrow').click(function () {
                    if (!$(this).parents('.shop-widget').hasClass('opened')) {
                        $(this).parents('.shop-widget').addClass('opened').find('>ul,>form').slideDown(400, function () {
                            $(this).perfectScrollbar("update");
                        });
                    } else {
                        $(this).parents('.shop-widget').removeClass('opened').find('>ul,>form').slideUp(400);
                    }
                });
            });
        }

        function enableFlexSlider() {
            $('.main-flexslider').flexslider({animation: "slide", controlNav: false, prevText: "", nextText: ""});
            $('.shop-product-slider').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                prevText: "",
                nextText: "",
                smoothHeight: true
            });
            $('.portfolio-flexslider').flexslider({animation: "slide", controlNav: false, prevText: "", nextText: ""});
            $('.post-image-gallery:not(".slider-enabled")').flexslider({
                animation: "slide",
                controlNav: false,
                prevText: "",
                nextText: ""
            });
            $('.chefs-slider').flexslider({
                animation: "fade",
                animationSpeed: 0,
                slideshow: false,
                controlNav: false,
                prevText: "",
                nextText: ""
            });
            $('.food-menu-slider').flexslider({
                animation: "slide",
                animationSpeed: 0,
                smoothHeight: true,
                controlNav: false,
                slideshow: false,
                prevText: "",
                nextText: ""
            });
            $('.motors-slider').flexslider({
                animation: "slide",
                animationSpeed: 600,
                smoothHeight: true,
                controlNav: true,
                slideshow: false
            });
            $('.food-menu-full').each(function () {
                var slider = $(this).find('.food-menu-full-slider'), nav = $(this).find('.food-menu-nav .food-menu-nav-item');
                slider.flexslider({
                    animation: "slide",
                    animationSpeed: 0,
                    smoothHeight: true,
                    controlNav: true,
                    slideshow: false,
                    prevText: "",
                    nextText: "",
                    manualControls: nav
                });
            });
            $(window).on('load', function () {
                $('.tweets-flexslider').flexslider({
                    animation: "slide",
                    controlNav: false,
                    directionNav: false,
                    touch: true,
                    slideshowSpeed: 3000,
                    animationSpeed: 400,
                    prevText: "",
                    nextText: "",
                    start: function (slider) {
                        slider.find('.arrow-left').click(function () {
                            slider.flexAnimate(slider.getTarget("prev"));
                        });
                        slider.find('.arrow-right').click(function () {
                            slider.flexAnimate(slider.getTarget("next"));
                        });
                    }
                });
            });
            $('.products-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 70,
                itemMargin: 6,
                asNavFor: '.products-slider',
                start: function (slider) {
                    slider.find('.arrow-left').click(function () {
                        slider.flexAnimate(slider.getTarget("prev"));
                    });
                    slider.find('.arrow-right').click(function () {
                        slider.flexAnimate(slider.getTarget("next"));
                    });
                }
            });
            $('.products-slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                sync: ".products-carousel"
            });
            $('.flexslider-thumbnail-gallery').flexslider({
                animation: "fade",
                animationSpeed: 300,
                controlNav: "thumbnails",
                directionNav: false,
                start: function (slider) {
                    var $slider = slider;
                    $('.slides li', $slider).not('.clone').each(function (index, value) {
                        var tooltip = $(this).data('tooltip');
                        $slider.find('.flex-control-nav li').eq(index).attr('title', tooltip).tooltip({
                            placement: 'top',
                            animation: false
                        });
                        ;
                    });
                    $slider.find('.flex-control-nav li').hover(function () {
                        $('img', this).trigger('click');
                    });
                }
            });
            $('.testimonial-slider').flexslider({
                animation: "slide",
                animationSpeed: 0,
                smoothHeight: true,
                controlNav: "bullets",
                slideshow: false,
                directionNav: false
            });
            $(window).load(function () {
                $(window).trigger('resize');
            });
        }

        function enableAccordions() {
            $('.accordions').each(function () {
                $(this).find('.accordion-content').hide();
                if ($(this).find('.accordion:first-child').hasClass('accordion-active')) {
                    $(this).find('.accordion:first-child .accordion-content').show();
                }
                $(this).find('.accordion-header').click(function () {
                    if (!$(this).parent().hasClass('accordion-active')) {
                        $(this).parent().parent().find('.accordion-active').removeClass('accordion-active').find('.accordion-content').slideUp(300);
                        $(this).parent().addClass('accordion-active');
                        $(this).parent().find('.accordion-content').slideDown(300);
                    } else {
                        $(this).parent().removeClass('accordion-active');
                        $(this).parent().find('.accordion-content').slideUp(300);
                    }
                });
            });
        }

        function enableTabs() {
            $('.tabs').each(function () {
                $(this).find('.tab').hide();
                $(this).find('.tab:first-child').show();
                $(this).find('.tab-header ul li:first-child').addClass('active-tab');
                $(this).find('.tab-header li a').click(function (e) {
                    e.preventDefault();
                });
                $(this).find('.tab-header li').click(function () {
                    var target = $(this).find('a').attr('href');
                    $(this).parent().parent().parent().find('.tab').fadeOut(200);
                    $(this).parent().parent().parent().find(target).delay(200).fadeIn(200);
                    $(this).parent().find('.active-tab').removeClass('active-tab');
                    $(this).addClass('active-tab');
                });
            });
        }

        function enableMobileNav() {
            if ($('#sidemenu').length == 0) {
                var navigation = $('#main-nav');
                if (!navigation.length) {
                    navigation = $('#header div.menu>ul');
                }
            } else {
                var navigation = $('#side-nav>ul');
            }
            initMenuFeatures();
            $(window).resize(function () {
                if (window_w > parseInt(mobilenav_screen_size)) {
                    navigation.show().removeClass('nav-opened');
                } else {
                    navigation.hide().removeClass('nav-opened');
                }
            });
            fixMegaMenu();
            fixSidemenu();
            $(window).bind('load resize', function () {
                fixSidemenu();
                fixMegaMenu();
            });
        }

        function initMenuFeatures() {
            if ($('#sidemenu').length == 0) {
                var navigation = $('#main-nav');
                if (!navigation.length) {
                    navigation = $('#header div.menu>ul');
                }
            } else {
                var navigation = $('#side-nav>ul');
            }
            var sidemenu = $('#sidemenu');
            if (sidemenu.length) {
                var sidenav = sidemenu.find('#side-nav');
                sidenav.find('>ul li').hover(function () {
                    var li = $(this);
                    if (!li.parents('.mega-menu').length && window_w > parseInt(mobilenav_screen_size)) {
                        li.addClass('item-hovered');
                        li.find('>ul').slideDown(800, function () {
                            fixSidemenu('fade');
                        });
                    }
                }, function () {
                    var li = $(this);
                    if (!li.parents('.mega-menu').length) {
                        li.removeClass('item-hovered');
                        setTimeout(function () {
                            if (!li.hasClass('item-hovered') && window_w > parseInt(mobilenav_screen_size)) {
                                li.find('>ul').slideUp(800, function () {
                                    fixSidemenu('fade');
                                });
                            }
                        }, 1200);
                    }
                });
            }
            fixMegaMenu();
            fixSidemenu();
            $('li', navigation).each(function () {
                if ($(this).find('ul').length > 0) {
                    $(this).append('<div class="dropdown-button"></div>');
                }
            });
            $('.dropdown-button', navigation).click(function () {
                $(this).parent().toggleClass('dropdown-opened').find('>ul').slideToggle(300);
            });
            $('#main-nav-button').click(function () {
                if ($(navigation).hasClass('nav-opened')) {
                    $(navigation).slideUp(300).removeClass('nav-opened');
                } else {
                    $(navigation).slideDown(300).addClass('nav-opened');
                }
            });
            $('#sidemenu-button').click(function () {
                var sidemenu = $('#sidemenu');
                var wrapper = $('#sidemenu-wrapper');
                sidemenu.toggleClass('menu-opened');
                wrapper.addClass('menu-mouse-out');
                setTimeout(function () {
                    if (wrapper.hasClass('menu-mouse-out')) {
                        sidemenu.removeClass('menu-opened');
                    }
                }, 1000);
            });
            $('#sidemenu-wrapper').hover(function () {
                var wrapper = $(this);
                wrapper.addClass('menu-mouse-hover');
                wrapper.removeClass('menu-mouse-out');
            }, function () {
                var wrapper = $(this);
                wrapper.addClass('menu-mouse-out');
                wrapper.removeClass('menu-mouse-hover');
                if (wrapper.parent().hasClass('hidden-menu')) {
                    setTimeout(function () {
                        if (wrapper.hasClass('menu-mouse-out')) {
                            wrapper.parent().removeClass('menu-opened');
                        }
                    }, 600);
                }
            });
        }

        function fixSidemenu($animate) {
            var animation = 0;
            if ($animate == 'fade')animation = 300;
            var sidemenu = $('#sidemenu');
            if (sidemenu.length) {
                var sidenav = sidemenu.find('#side-nav');
                var sidetweets = sidemenu.find('.sidemenu-tweets');
                var sidefooter = sidemenu.find('.sidemenu-footer');
                var tweetsVisible = sidetweets.is(':visible');
                var footerVisible = sidefooter.is(':visible');
                var tAnimation = animation;
                var fAnimation = animation;
                if (!tweetsVisible)tAnimation = 0;
                if (!footerVisible)fAnimation = 0;
                sidetweets.show();
                sidefooter.show();
                if (sidetweets.length && sidefooter.length) {
                    if ((sidenav.position().top + sidenav.outerHeight()) > sidefooter.position().top) {
                        sidetweets.fadeOut(tAnimation);
                        sidefooter.fadeOut(fAnimation);
                    } else if ((sidetweets.position().top + sidetweets.outerHeight()) > sidefooter.position().top) {
                        sidetweets.fadeOut(tAnimation);
                        if (!footerVisible)
                            sidefooter.hide().fadeIn(300);
                    }
                } else if (sidetweets.length) {
                    if ((sidetweets.position().top + sidetweets.outerHeight()) > window_h) {
                        sidetweets.fadeOut(tAnimation);
                        if (!footerVisible)
                            sidefooter.hide().fadeIn(300);
                    }
                } else if (sidefooter.length) {
                    if ((sidenav.position().top + sidenav.outerHeight()) > sidefooter.position().top) {
                        sidefooter.fadeOut(fAnimation);
                        if (!tweetsVisible)
                            sidetweets.hide().fadeIn(300);
                    }
                } else {
                    if (!tweetsVisible)
                        sidetweets.hide().fadeIn(300);
                    if (!footerVisible)
                        sidefooter.hide().fadeIn(300);
                }
            }
        }

        function fixMegaMenu() {
            if ($('#header .mega-menu').length != 0) {
                $('#header .mega-menu').each(function () {
                    var el = $(this);
                    el.removeClass('mega-menu-too-big');
                    el.css('display', 'block');
                    var el_w = el.width();
                    var el_x = el.offset().left;
                    var container = $('#header .container');
                    var container_w = container.width();
                    var container_x = container.offset().left;
                    el.css('left', '').css('right', '').css('margin-left', '').css('display', '');
                    if (window_w > 768) {
                        if ((el_x + el_w) > (container_x + container_w))
                            el.css('right', 0).css('margin-left', '0px'); else if (el_x < container_x)
                            el.css('left', 0).css('margin-left', '0px');
                        if (el_w > container_w)
                            el.addClass('mega-menu-too-big');
                    }
                });
            }
        }

        function enableProgressbars() {
            $(window).bind('load resize scroll', function () {
                animateProgressBars();
            });
        }

        function animateProgressBars() {
            $('.progressbar').each(function () {
                var bar = $(this);
                var bar_y = $(bar).offset().top;
                if ((bar_y < (window_s + window_h)) && !$(bar).hasClass('progressbar-animating')) {
                    barStartAnimation(bar);
                    var other_bars = bar.parent().parent().find('.progressbar').not('.progressbar-animating');
                    other_bars.each(function () {
                        barStartAnimation($(this));
                    });
                }
            });
            function barStartAnimation(el) {
                var bar = el;
                var bar_progress = el.find('.progress-width');
                var bar_percent = el.find('.progress-percent');
                bar.addClass('progressbar-animating').addClass('progessbar-start');
                bar_percent.fadeIn(200);
                var percent = parseInt($(bar).attr('data-percent'));
                bar_progress.animate({width: percent + '%'}, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now, fx) {
                        bar_percent.text(parseInt(now) + '%').css('left', parseInt(now) + '%');
                    }
                });
            }
        }

        function enableCircularProgressbars() {
            initCircularProgressbars();
            $(window).bind('scroll load resize', function () {
                $('.circular-progressbar').each(function () {
                    var knob = $(this);
                    var knob_percent = knob.parent().find('.knob-percent .knob-number');
                    var value = knob.data('value');
                    var knob_y = knob.offset().top;
                    var knob_val = knob.data('value');
                    var knob_animated = knob.hasClass('knob-animated');
                    var viewport_offset = 0;
                    if ((window_s + window_h - viewport_offset) > knob_y && !knob_animated) {
                        knob.addClass('knob-animated');
                        $({startVal: 0}).animate({startVal: knob_val}, {
                            duration: 3000,
                            easing: 'linear',
                            step: function () {
                                knob.val(Math.ceil(this.startVal)).trigger('change');
                            }
                        });
                        var knob_percent_v = 0;
                        var knob_inc = Math.round(knob_val / 30);
                        var knob_interval = setInterval(function () {
                            knob_percent_v += knob_inc;
                            if (knob_percent_v >= knob_val) {
                                knob_percent_v = knob_val;
                                clearInterval(knob_interval);
                            }
                            knob_percent.html(knob_percent_v);
                        }, 100);
                    }
                });
            });
        }

        function initCircularProgressbars() {
            $('.circular-progressbar').each(function () {
                var knob = $(this);
                var value = knob.val();
                var knob_title = $(this).attr('data-title');
                knob.data('value', value);
                var text_color, text_color_style;
                if (knob.attr('data-textcolor')) {
                    text_color = knob.attr('data-textcolor');
                    text_color_style = 'style="color: ' + text_color + '"';
                }
                knob.knob({"min": 0, "max": value});
                knob.val(0).trigger('change');
                knob.after('<p class="knob-percent" ' + text_color_style + '><span class="knob-number">0</span>' + knob_title + '</p>');
            });
        }

        function enableMixItUp() {
            $('#projects-container').mixItUp();
            $('#sortable-shop-products').mixItUp();
            $('.faq-accordions').mixItUp();
            $('.projects-container').mixItUp({controls: {enable: false}});
            $('.projects-container').parent().find('.filter[data-filter="all"]').addClass('active');
            $('.projects-container').parent().find('.filter').click(function (e) {
                e.preventDefault();
                var cat = $(this).data('filter');
                $(this).parent().find('.active').removeClass('active');
                $(this).addClass('active');
                $(this).parent().parent().parent().find('.projects-container').mixItUp('filter', cat);
            });
        }

        function reinitializeMixItUp() {
            if ($('#projects-container').mixItUp('isLoaded'))
                $('#projects-container').mixItUp('destroy');
            if ($('#sortable-shop-products').mixItUp('isLoaded'))
                $('#sortable-shop-products').mixItUp('destroy');
            if ($('.faq-accordions').mixItUp('isLoaded'))
                $('.faq-accordions').mixItUp('destroy');
            if ($('.projects-container').mixItUp('isLoaded'))
                $('.projects-container').mixItUp('destroy');
            $('#projects-container').mixItUp();
            $('#sortable-shop-products').mixItUp();
            $('.faq-accordions').mixItUp();
            $('.projects-container').mixItUp({controls: {enable: false}});
            $('.projects-container').parent().find('.filter[data-filter="all"]').addClass('active');
            $('.projects-container').parent().find('.filter').click(function (e) {
                e.preventDefault();
                var cat = $(this).data('filter');
                $(this).parent().find('.active').removeClass('active');
                $(this).addClass('active');
                $(this).parent().parent().parent().find('.projects-container').mixItUp('filter', cat);
            });
        }

        function enableTooltips() {
            $('.hover-tooltip').tooltip();
            $('.tooltip-ontop').tooltip({placement: 'top'});
            $('.tooltip-onbottom').tooltip({placement: 'bottom'});
            $('.tooltip-onleft').tooltip({placement: 'left'});
            $('.tooltip-onright').tooltip({placement: 'right'});
        }

        function enableAlertBox() {
            $('.alert-box .close-button').click(function () {
                $(this).parent().slideUp(300);
            });
        }

        function enableFancyBox() {
            if ($('.fancybox').length > 0) {
                $(".fancybox").fancybox();
            }
        }

        function enableMasonryBlog() {
            var $container = $('.masonry-container');
            initMasonryBlog();
            $(window).load(function () {
                $container.masonry('reload');
            });
        }

        function initMasonryBlog() {
            var $container = $('.masonry-container');
            $container.masonry({itemSelector: '.masonry-box'});
        }

        function enableTimelineBlog() {
            $(window).bind('load resize', function () {
                setTimelineBlog();
            });
            var timelineInterval = setInterval(function () {
                $('.timeline-container .masonry-box').each(function () {
                    var el_x = $(this).offset().left;
                    if (parseInt($(this).attr('data-left')) != el_x) {
                        $(this).attr('data-left', el_x);
                        setTimelineItem($(this));
                    }
                });
            }, 100);
        }

        function setTimelineBlog() {
            $('.timeline-container').each(function () {
                if ($(this).hasClass('timeline-activated')) {
                    $(this).find('.masonry-box').each(function () {
                        setTimelineItem($(this));
                    });
                } else {
                    $(this).append('<div class="timeline-line"></div>');
                    $(this).addClass('timeline-activated');
                    $(this).find('.masonry-box').each(function () {
                        setTimelineItem($(this));
                    });
                }
            });
        }

        function setTimelineItem(element) {
            var item = element;
            var item_x = $(item).offset().left;
            var timeline_line_x = window_w / 2;
            if (item_x < timeline_line_x) {
                $(item).addClass('left-timeline-item');
                $(item).removeClass('right-timeline-item');
            } else {
                $(item).addClass('right-timeline-item');
                $(item).removeClass('left-timeline-item');
            }
            $('.left-timeline-item, .right-timeline-item').bind('moveend', function () {
                alert('a');
                setTimelineBlog();
            });
        }

        function enableOnePageScroll() {
            var navigation = $('#main-nav');
            if (!navigation.length) {
                navigation = $('#header div.menu>ul');
                if (!navigation.length) {
                    navigation = $('#side-nav');
                }
            }
            $("a[href*=#]", navigation).add('a[href*=#]', '#slider').click(function (e) {
                e.preventDefault();
                var target_hash = $(this).attr('href');
                var target = $(target_hash);
                if (target.length) {
                    var target_y = target.offset().top;
                    $('html, body').animate({scrollTop: target_y + 'px'}, {
                        duration: 1200, easing: 'easeInOutCubic', complete: function () {
                            if (history.pushState) {
                                history.pushState(null, null, target_hash);
                            }
                            else {
                                location.hash = target_hash;
                            }
                        }
                    });
                } else if (target == '#') {
                    $('html, body').animate({scrollTop: 0 + 'px'}, {duration: 1200, easing: 'easeInOutCubic'});
                }
            });
        }

        function enableCustomAudio() {
            $(document).mouseup(function () {
                $('.audio-progress').attr('data-mousedown', '');
                $('.audio-volume').attr('data-mousedown', '');
            });
            initCustomAudio();
        }

        function initCustomAudio() {
            $('audio').each(function () {
                var audio = $(this)[0];
                audio.volume = 0.5;
                $(this).wrap('<div class="audio-player"></div>');
                $(this).parent().append('<div class="audio-play-button"></div>');
                $(this).parent().append('<div class="audio-progress" data-mousedown=""><div class="audio-progress-bar"></div></div>');
                $('.audio-play-button').click(function () {
                    if ($(this).hasClass('pause')) {
                        $(this).parent().find('audio')[0].pause();
                        $(this).removeClass('pause');
                    } else {
                        $(this).parent().find('audio')[0].play();
                        $(this).addClass('pause');
                    }
                });
                $(this).bind('timeupdate', function () {
                    var track_length = $(this)[0].duration;
                    var secs = $(this)[0].currentTime;
                    var progress = (secs / track_length) * 100;
                    $(this).parent().find('.audio-progress-bar').css('width', progress + '%');
                    if (track_length == secs) {
                        $(this).parent().find('audio')[0].pause();
                        $(this).parent().find('.audio-play-button').removeClass('pause');
                    }
                });
                $('.audio-progress').click(function (e) {
                    var audio_x = $(this).offset().left;
                    var audio_w = $(this).width();
                    var mouse_x = e.pageX;
                    var progress = (mouse_x - audio_x) / audio_w * 100;
                    var track_length = $(this).parent().find('audio')[0].duration;
                    var update_time = track_length / (100 / progress);
                    $(this).parent().find('audio')[0].currentTime = update_time;
                });
                $('.audio-progress').mousedown(function () {
                    $(this).attr('data-mousedown', 'true');
                });
                $('.audio-progress').mousemove(function (e) {
                    if ($(this).attr('data-mousedown') == 'true') {
                        var audio_x = $(this).offset().left;
                        var audio_w = $(this).width();
                        var mouse_x = e.pageX;
                        var progress = (mouse_x - audio_x) / audio_w * 100;
                        var track_length = $(this).parent().find('audio')[0].duration;
                        var update_time = track_length / (100 / progress);
                        $(this).parent().find('audio')[0].currentTime = update_time;
                    }
                });
                if ($(this).hasClass('volume-on')) {
                    $(this).parent().addClass('volume-on');
                    $(this).parent().append('<div class="audio-volume"><div class="audio-volume-bar"></div></div>');
                    $('.audio-volume-bar').css('width', audio.volume * 100 + '%');
                    $('.audio-volume').click(function (e) {
                        var volume_x = $(this).offset().left;
                        var volume_w = $(this).width();
                        var mouse_x = e.pageX;
                        var new_volume = (mouse_x - volume_x) / volume_w;
                        $(this).find('.audio-volume-bar').css('width', new_volume * 100 + '%');
                        $(this).parent().find('audio')[0].volume = new_volume;
                    });
                    $('.audio-volume').mousedown(function () {
                        $(this).attr('data-mousedown', 'true');
                    });
                    $('.audio-volume').mousemove(function (e) {
                        if ($(this).attr('data-mousedown') == 'true') {
                            var volume_x = $(this).offset().left;
                            var volume_w = $(this).width();
                            var mouse_x = e.pageX;
                            var new_volume = (mouse_x - volume_x) / volume_w;
                            if (new_volume >= 0 && new_volume <= 1) {
                                $(this).find('.audio-volume-bar').css('width', new_volume * 100 + '%');
                                $(this).parent().find('audio')[0].volume = new_volume;
                            }
                        }
                    });
                }
            });
        }

        function enableSliderAlternativeOverlay() {
            sliderAlternativeOverlay();
            $(window).load(function () {
                sliderAlternativeOverlay();
            });
            $(window).resize(function () {
                sliderAlternativeOverlay();
            });
        }

        function sliderAlternativeOverlay() {
            $('.alternate-slider-bg').each(function () {
                if (window_w > 991) {
                    var el_h = $(this).innerHeight();
                    $(this).css('margin-top', -el_h + 'px');
                } else {
                    $(this).css('margin-top', 0);
                }
            });
        }

        function enableTimelineLoadMore() {
            $.each($('.timeline-row .masonry-container'), function () {
                currentMonth = $(this).find('.col-md-6').attr('data-month');
                currentYear = $(this).find('.col-md-6').attr('data-year');
            });
            $('#timeline-load-more').click(function (e) {
                $this = $(this);
                $this.html('Loading Posts...');
                $.ajax({
                    url: templateUrl + '/ajax/timeline.php',
                    type: 'GET',
                    data: 'offset=' + timelineOffsetNext + '&posts_per_page=' + timelinePerPage + '&month=' + currentMonth + '&year=' + currentYear,
                    success: function (data) {
                        if (data == 0) {
                            $('#timeline-load-more').hide();
                        } else {
                            $('.timeline-container-wrap').append(data);
                            $('.masonry-container .timeline-line').remove();
                            $('.masonry-container').append('<div class="timeline-line"></div>');
                            enableTimelineBlog();
                            $this.html('Load More<i class="icons icon-spinner"> </i>');
                        }
                        timelineOffsetNext += timelinePerPage;
                        var $container = $('.masonry-container').masonry({itemSelector: '.masonry-box'});
                        $container.masonry('reload');
                        masonryFix = setTimeout(function () {
                            $container.masonry('reload');
                        }, 500);
                        $container.on('layoutComplete', function () {
                            return true;
                        });
                    }
                })
                e.preventDefault();
            });
        }

        function enableWooCommerceLoadMore() {
            var newWCElements = {};
            var $new_wc_items = '';
            newWCElements.loadElem = function ($url) {
                $.ajax({
                    type: 'GET', async: false, url: $url, success: function (data, textStatus, XMLHttpRequest) {
                        $new_wc_items = $(data).find('#sortable-shop-products').html();
                        $next = $(data).find('#wc-load-more').attr('href');
                        if ($next) {
                            $('#wc-load-more').attr('href', $next);
                        } else {
                            $('#wc-load-more').slideUp();
                        }
                    }, error: function (MLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });
                return $new_wc_items;
            };
            $('#wc-load-more').click(function () {
                var $newEls = $(newWCElements.loadElem($(this).attr('href'))).hide();
                $('#sortable-shop-products').append($newEls);
                $('#sortable-shop-products').find('.product').slideDown();
                return false;
            });
            $('#checkout-submit').click(function (e) {
                e.preventDefault();
                $('#cart-form').submit();
            });
            $('.sc-open-video').click(function (e) {
                e.preventDefault();
                $popup = $(this).closest('.sc-videp-popup-wrapper').find('.sc-video-popup');
                var $autoplay = '';
                if ($popup.data('autoplay') && $popup.data('autoplay') == 'yes') {
                    if ($popup.data('url').indexOf('?') == -1) {
                        $autoplay += '?';
                    } else if ($popup.data('url').indexOf('&amp;') == -1) {
                        $autoplay += '&amp;';
                    } else {
                        $autoplay += '&';
                    }
                    $autoplay += 'autoplay=1';
                }
                console.dir($popup.data('autoplay'));
                console.dir($popup.data('url') + $autoplay);
                $popup.prepend('<iframe src="' + $popup.data('url') + $autoplay + '"></iframe>');
                $popup.fadeIn(400);
            });
            $('.sc-close-video').click(function (e) {
                e.preventDefault();
                $(this).closest('.sc-video-popup').find('iframe').remove();
                $(this).closest('.sc-video-popup').fadeOut(400);
            });
        }

        function enableWooCommerceAddToCart() {
            var addi = {};
            if (!$('#added_items').length)
                $('body').append('<div id="added_items"></div>')
            function if_added(item) {
                if (item.hasClass('added')) {
                    var product_id = item.attr('data-product_id');
                    clearInterval(addi[product_id]);
                    item.find('.loader-container').remove();
                    $('#added_items').prepend('<div id="' + product_id + '" class="added_item"><img src="' + item.parents('.product').find('.attachment-shop_catalog').attr('src') + '" alt=""/><p><b>"' + item.parents('.product').find('.product-title').html() + '"</b> was added to the cart. </p><div class="clear"></div></div>');
                    $('#' + product_id).animate({opacity: 1}, 500);
                    setTimeout(function () {
                        $('#' + product_id).animate({opacity: 0, marginTop: 20}, 500, function () {
                            $(this).remove()
                        });
                    }, 5000)
                }
            }

            $('.add_to_cart_button').each(function () {
                var add_btn = $(this);
                $(this).click(function () {
                    addi[$(this).attr('data-product_id')] = setInterval(function () {
                        if_added(add_btn)
                    }, 1000);
                    add_btn.append('<span class="loader-container"><span id="fountainG"><span id="fountainG_1" class="fountainG"></span><span id="fountainG_2" class="fountainG"></span><span id="fountainG_3" class="fountainG"></span><span id="fountainG_4" class="fountainG"></span><span id="fountainG_5" class="fountainG"></span><span id="fountainG_6" class="fountainG"></span><span id="fountainG_7" class="fountainG"></span><span id="fountainG_8" class="fountainG"></span></span></span>');
                });
            });
        }

        function enableLoadMoreButton() {
            $('#load-more').click(function (event) {
                event.preventDefault();
                $url = $(this).attr('href');
                $load_more_text = $(this).html();
                $(this).html($(this).data('loading'));
                $.ajax({
                    type: 'GET', url: $url, success: function (data, textStatus, XMLHttpRequest) {
                        var $new_items = $(data).find('#post-items').html();
                        var $next = $(data).find('#load-more').attr('href');
                        if ($next) {
                            $('#load-more').attr('href', $next);
                        } else {
                            $('#load-more').slideUp();
                        }
                        $('#post-items').append($new_items);
                        $(".format-video").fitVids();
                        $(".project-item").show();
                        $('.post-image-gallery:not(".slider-enabled")').flexslider({
                            animation: "slide",
                            controlNav: false,
                            prevText: "",
                            nextText: "",
                        });
                        if ($('.masonry-container').length > 0) {
                            $('.masonry-container').masonry('reload');
                            setTimeout(function () {
                                $('.masonry-container').masonry('reload');
                            }, 400);
                        }
                    }, complete: function () {
                        $('#load-more').html($load_more_text);
                    }, error: function (MLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });
            });
        }

        function enablePostLike() {
            $('.project-like').click(function () {
                $post_id = $(this).attr('data-post');
                if ($('.post-liked', this).length > 0 || document.cookie.indexOf('saved_post_like_' + $post_id) != -1) {
                    return;
                }
                $('.like-count', this).animate({opacity: 0}, 200, function () {
                    $(this).html(parseInt($(this).html()) + 1);
                    $(this).animate({opacity: 1}, 200);
                });
                $(this).addClass('post-liked');
                $current_post_like = $('.like-count', this);
                $.ajax({
                    type: 'GET',
                    url: ajaxurl,
                    data: {action: 'save_post_like', post_id: $post_id},
                    success: function (data, textStatus, XMLHttpRequest) {
                        $($current_post_like).html(data);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });
            });
        }

        function enableSharrre() {
            $('.sts-share').sharrre({
                share: {googlePlus: true, facebook: true, twitter: true},
                buttons: {googlePlus: {size: 'tall'}, facebook: {layout: 'box_count'}, twitter: {count: 'vertical'}},
                hover: function (api, options) {
                    $(api.element).find('.buttons').show();
                },
                hide: function (api, options) {
                    $(api.element).find('.buttons').hide();
                },
                url: 'http://www.paulund.co.uk/'
            });
        }

        function enableFitVids() {
            $(".format-video").fitVids();
        }

        function enablePrettyPhoto() {
            $("a.prettyPhoto").prettyPhoto();
        }

        function enableAjaxContactForm() {
        };
        if ($('.contact-form').length) {
            var messageDelay = 2000;
            $(init);
            function init() {
                $('.contact-form').submit(submitForm);
            };
            function submitForm() {
                var contactForm = $(this);
                if (!$('.name').val() || !$('.email').val() || !$('.msg').val()) {
                    $('.incompleteMessage').slideDown().delay(messageDelay).slideUp();
                } else {
                    $('.sendingMessage').slideDown();
                    $.ajax({
                        url: contactForm.attr('action') + "?ajax=true",
                        type: contactForm.attr('method'),
                        data: contactForm.serialize(),
                        success: submitFinished
                    });
                }
                ;
                return false;
            };
            function submitFinished(response) {
                response = $.trim(response);
                $('.sendingMessage').slideUp();
                if (response == "success") {
                    $('.successMessage').slideDown().delay(messageDelay).slideUp();
                    $('.name').val("");
                    $('.email').val("");
                    $('.msg').val("");
                } else {
                    $('.failureMessage').slideDown().delay(messageDelay).slideUp();
                }
            };
        }
        ;
        function loading() {
            $('.subscribe-form-result').html('Submitting...').slideDown();
        };
        function formResult(data) {
            $('.subscribe-form-result').html(data);
            $('.subscribe-form input').val('');
        };
        function onSubmit() {
            $('.subscribe-form').submit(function () {
                var action = $(this).attr('action');
                loading();
                $.ajax({
                    url: action,
                    type: 'POST',
                    data: {email: $('.subscribe-email').val()},
                    success: function (data) {
                        formResult(data);
                    },
                    error: function (data) {
                        formResult(data);
                    }
                });
                return false;
            });
        }

        onSubmit();
        if ($('.parallax-bg').length) {
            $(window).on('load', function () {
                $('.parallax-bg').scrolly({bgParallax: true});
            })
        }
        ;
        if ($('.latest-tweets').length) {
            $('.latest-tweets .tweets-container').twittie({
                username: 'google',
                dateFormat: '%B %d, %Y',
                template: '<div class="tweet-wrapper"><div class="tweet-wrapper-inner"><p class="tweet-content">{{tweet}}<span class="tweet-date">{{date}}</span></div></div>',
                count: 10,
                hideReplies: true,
                apiPath: 'php/twitter-feed/tweet.php'
            }, function () {
                $('.tweets-container').children('ul').addClass('slides');
            });
        }
        ;
        function enableGoogleMaps() {
            $('.sc-google-map').each(function () {
                var element = $(this), element_native = element.get(0), address = element.data('address'), zoom = element.data('zoom'), customMarker = element.data('custom-marker');
                grayscaleEffect = element.data('grayscale') == 'yes' ? true : false;
                zoom = zoom > 20 || zoom < 1 ? 14 : zoom;
                var geocoder = new google.maps.Geocoder(), mapOptions = {
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: new google.maps.LatLng(54.00, -3.00),
                    zoom: zoom
                }, map = new google.maps.Map(element_native, mapOptions);
                if (grayscaleEffect === true) {
                    var map_styles = [{featureType: "all", elementType: "all", stylers: [{saturation: -100}]}];
                    var mapType = new google.maps.StyledMapType(map_styles, {name: "Grayscale"});
                    map.mapTypes.set('grayscale_map', mapType);
                    map.setMapTypeId('grayscale_map');
                }
                geocoder.geocode({"address": address}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        result = results[0].geometry.location;
                        map.setCenter(result);
                        var markerOptions = {position: result, map: map, title: address}
                        if (customMarker != '') {
                            markerOptions.icon = customMarker;
                        }
                        var marker = new google.maps.Marker(markerOptions);
                    }
                });
            });
        }

        if ($('#wpgmappity-map-4').length) {
            function wpgmappity_maps_loaded4() {
                var latlng = new google.maps.LatLng(51.5466757, -0.20884019999994);
                var options = {
                    center: latlng,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    panControl: false,
                    zoom: 15
                };
                var wpgmappitymap4 = new google.maps.Map(document.getElementById('wpgmappity-map-4'), options);
                var point0 = new google.maps.LatLng(51.5466757, -0.2088402);
                var marker4_0 = new google.maps.Marker({
                    icon: 'img/Shape-158-copy-3.png',
                    position: point0,
                    map: wpgmappitymap4
                });
            }

            jQuery(window).load(function () {
                wpgmappity_maps_loaded4();
            });
        }
        ;
        if ($('#wpgmappity-map-1').length) {
            function wpgmappity_maps_loaded1() {
                var latlng = new google.maps.LatLng(51.5466757, -0.2088402);
                var options = {
                    center: latlng,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    panControl: false,
                    zoom: 16
                };
                var wpgmappitymap1 = new google.maps.Map(document.getElementById('wpgmappity-map-1'), options);
                var point0 = new google.maps.LatLng(51.5466757, -0.2088402);
                var marker1_0 = new google.maps.Marker({
                    icon: 'img/marker_red.png',
                    position: point0,
                    map: wpgmappitymap1
                });
            }

            jQuery(window).load(function () {
                wpgmappity_maps_loaded1();
            });
        }
        ;
        if ($('#wpgmappity-map-7').length) {
            function wpgmappity_maps_loaded7() {
                var latlng = new google.maps.LatLng(51.5466757, -0.2088402);
                var options = {
                    center: latlng,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    panControl: false,
                    zoom: 16
                };
                var wpgmappitymap7 = new google.maps.Map(document.getElementById('wpgmappity-map-7'), options);
                var point0 = new google.maps.LatLng(51.5466757, -0.2088402);
                var marker7_0 = new google.maps.Marker({
                    icon: 'img/foodmapmarker.png',
                    position: point0,
                    map: wpgmappitymap7
                });
            }

            jQuery(window).load(function () {
                wpgmappity_maps_loaded7();
            });
        }
        ;
        function enableAjaxPageLoad() {
            if ($body.hasClass('page_transitions_enabled')) {
                initAjaxNav();
                if (history.pushState) {
                    window.onpopstate = function () {
                        var target = location.pathname;
                        if (ionic_current_path != target) {
                            loadPageAJAX(target);
                        }
                        ionic_current_path = target;
                    }
                }
            }
        }

        function initAjaxNav() {
            if ($('#sidemenu').length > 0) {
                var $navigation = $('#side-nav');
            } else {
                var $navigation = $('#main-nav');
                if (!$navigation.length > 0) {
                    $navigation = $('#header div.menu>ul');
                }
            }
            if (history.pushState) {
                $navigation.find('a').not('a[href*=#]').click(function (e) {
                    e.preventDefault();
                    var target = $(this).attr('href');
                    if (document.URL != target) {
                        loadPageAJAX(target);
                        history.pushState(null, null, target);
                    }
                });
            }
        }

        function loadPageAJAX(target) {
            var target = target, scrollTop = $(document).scrollTop(), scrollDuration;
            ionic_current_path = target;
            if (scrollTop > 200)
                scrollDuration = 800; else if (scrollTop < 200 && scrollTop != 0)
                scrollDuration = 300; else if (scrollTop == 0)
                scrollDuration = 0;
            $('body, html').animate({scrollTop: 0}, scrollDuration);
            setTimeout(function () {
                $('.page-loadingstage').addClass('visible');
                setTimeout(function () {
                    $.ajax({
                        type: 'post', async: true, data: {}, url: target, success: function (response) {
                            $("body").attr("class", /body([^>]*)class=(["']+)([^"']*)(["']+)/gi.exec(response.substring(response.indexOf("<body"), response.indexOf("</body>") + 7))[3]);
                            var marineContent = $(response).filter('#marine-content-wrapper').html();
                            $('#marine-content-wrapper').html(marineContent);
                            document.title = $(response).filter('title').text();
                            $('style').remove();
                            $(response).filter('style').each(function () {
                                $('head').append($(this));
                            });
                            var wpAdminBar = $(response).filter('#wpadminbar').html();
                            if (wpAdminBar) {
                                $('#wpadminbar').html(wpAdminBar);
                            }
                            reinitializeAllFeatures();
                            setTimeout(function () {
                                $('.page-loadingstage').removeClass('visible');
                                $(window).trigger('load');
                                $(window).trigger('resize');
                            }, 1200);
                        }, error: function (MLHttpRequest, textStatus, errorThrown) {
                            window.location = target;
                        }
                    });
                }, 600);
            }, scrollDuration);
        }

        function enableFullWidth() {
            setFullWidth();
            $(window).bind("resize", function () {
                setFullWidth();
                setTimeout(function () {
                    setFullWidth();
                }, 400);
            });
        }

        function setFullWidth() {
            if (!$("body").hasClass("b960") && !$("body").hasClass("b1170")) {
                $(".full-width").each(function () {
                    var element = $(this);
                    element.css("margin-left", "");
                    element.css("padding-left", "0!important");
                    element.css("width", "");
                    var element_x = element.offset().left;
                    element.css("margin-left", -element_x + "px");
                    element.css("width", $(window).width() + "px");
                    element.css("padding-left", "");
                });
            }
        }
    });
})(jQuery);