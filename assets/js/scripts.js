$(document).ready(function() {

    // hide footnotes on load
    if($('.footnote__button').length) {
        $('.footnote__button').addClass('footnote--closed');
    }

    // show footnote
    $('.footnote__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('footnote--closed')) {
            footnoteOpen(this);
        } else {
            footnoteClosed(this);
        }
    });

    function svgClose() {
        return '<svg class="icon icon--close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg>';
    }

    function footnoteOpen(e) {
        $(e).removeClass('footnote--closed');
        $(e).addClass('footnote--open');
        $(e).html(svgClose());

    }

    function footnoteClosed(e) {
        $(e).addClass('footnote--closed');
        $(e).removeClass('footnote--open');

        var footnoteId = $(e).data('footnote-id');
        $(e).html('<sup>'+footnoteId+'</sup>');
    }

    // hide comments on page load
    if($('.comments-section').length) {
        $('.comments-section').hide();
    }

    $('.show-comments').click(function(e){
        e.preventDefault();
        $('.show-comments-wrap').remove();
        $('.comments-section').fadeIn();
        var label = $('#user-ip').attr('data-ip');
        // send to google
        ga('send','event','Comments', 'Show Comments', label);
    });






});
