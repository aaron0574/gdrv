$(".access-input").keyup(function () {
  if (this.value.length == this.maxLength) {
    var $next = $(this).next('.access-input');
    if ($next.length)
      $(this).next('.access-input').focus();

      // redirect to dashboard if any numbers added
      if ($next.length == 0) {
        location.href = 'video.html';
      }
    else
      $(this).blur();
  }
});
