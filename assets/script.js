$(".access-input").keyup(function () {
  if (this.value.length == this.maxLength) {
    var $next = $(this).next('.access-input');
    if ($next.length)
      $(this).next('.access-input').focus();
    else
      $(this).blur();
  }
});
