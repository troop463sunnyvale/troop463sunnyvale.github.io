// find all img's in the class="pictures" tables and wrap them for use with prettyPhoto
$(function() {
  $('.pictures img, .side-picture img').each(function() {
    $(this).wrap('<a href="' + $(this).attr('src') + '" rel="gallery[pics]"></a>')
  });

  $("a[rel^='gallery']").prettyPhoto();
})
