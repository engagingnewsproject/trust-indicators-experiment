$(document).ready(function() {
    var closedElements = ['footnote', 'byline', 'author'];

    for(var i = 0; i < closedElements.length; i++) {
        console.log(closedElements[i]);
        // hide closedElements on load
        if($('.'+closedElements[i]+'__button').length) {
            $('.'+closedElements[i]+'__button').addClass(closedElements[i]+'--closed');
        }
    }


    // show footnote
    $('.footnote__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('footnote--closed')) {
            accordionOpen(this, 'footnote');
            $(this).html(svgClose());
        } else {
            accordionClosed(this, 'footnote');
            var footnoteId = $(this).data('footnote-id');
            $(this).html('<sup>'+footnoteId+'</sup>');
        }
    });

    // show byline
    $('.byline__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('byline--closed')) {
            accordionOpen(this, 'byline');
            $(this).html(svgClose());
        } else {
            accordionClosed(this, 'byline');
            $(this).text('Learn More');
        }
    });

    // show author
    $('.author__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('author--closed')) {
            accordionOpen(this, 'author');
            $('.author__name', this).append(svgClose());
        } else {
            accordionClosed(this, 'author');
            $('.author__name', this).children().last().remove();
        }
    });


    function svgClose() {
        return '<svg class="icon icon--close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg>';
    }

    function accordionClosed(e, classN) {
        $(e).addClass(classN+'--closed');
        $(e).removeClass(classN+'--open');
    }

    function accordionOpen(e, classN) {
        $(e).removeClass(classN+'--closed');
        $(e).addClass(classN+'--open');
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
