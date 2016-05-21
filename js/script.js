/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document) {

    'use strict';

    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            jQuery('.views-row-1 .views-field-title a').hover(
                function() {
                    jQuery('.views-row-1 .views-field-title a .fa').css('color', '#f00');
                },
                function() {
                    jQuery('.views-row-1 .views-field-title a .fa').css('color', '#fff');
                }

            );

            jQuery('.views-row-2 .views-field-title a').hover(
                function() {
                    jQuery('.views-row-2 .views-field-title a .fa').css('color', '#f00');
                },
                function() {
                    jQuery('.views-row-2 .views-field-title a .fa').css('color', '#fff');
                }

            );

            jQuery('.views-row-3 .views-field-title a').hover(
                function() {
                    jQuery('.views-row-3 .views-field-title a .fa').css('color', '#f00');
                },
                function() {
                    jQuery('.views-row-3 .views-field-title a .fa').css('color', '#fff');
                }

            );

            jQuery('.description1').add('.description2').add('.description3').hide();
            jQuery('.churches img').click(function() {
                jQuery('.description1').slideToggle('slow');
            });
            jQuery('.leadership img').click(function() {
                jQuery('.description2').slideToggle('slow');
            });
            jQuery('.extra img').click(function() {
                jQuery('.description3').slideToggle('slow');
            });

            $('.bxslider').bxSlider({
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 425,
                auto: true,


            });


            $('.events_slider').bxSlider({
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 640,
                auto: true

            });


        }
    };

})(jQuery, Drupal, this, this.document);
