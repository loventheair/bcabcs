$(".wcauthor").click(function() {
    $(".safeauthor").fadeIn()
}), $(".wcSafeClose").click(function() {
    $(".safeauthor").fadeOut(), $("#generatelink").addClass("hidden"), $("#generateurl").val("")
});
