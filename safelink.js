//safelink blogger di bagikan gratis oleh https://blog.choipanwendy.com versi 1.1
$(".wcauthor").click(function() {
    $(".safeWrap").fadeIn()
}), $(".wcSafeClose").click(function() {
    $(".safeWrap").fadeOut(), $("#generatelink").addClass("hidden"), $("#generateurl").val("")
});
