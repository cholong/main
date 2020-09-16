$(document).ready(function() {

    $("#start").click(function(){
        $(".intro").fadeOut("fast");
        $(".container").fadeIn("slow");
    });

    $(".apple-1").mouseenter(function(){
        $(".back-1").css("animation-play-state", "paused");
        $(".natural-2").css("animation-play-state", "paused");
        $(".honey-2").css("animation-play-state", "paused");
        $(".fruit-2").css("animation-play-state", "paused");
        $(".gold-1").css("animation-play-state", "paused");
        $(".bagel-2").css("animation-play-state", "paused");
        $(".coke-2, .coke-3").css("animation-play-state", "paused");
    });

    $(".apple-1").mouseleave(function(){
        $(".back-1").css("animation-play-state", "running");
        $(".natural-2").css("animation-play-state", "running");
        $(".honey-2").css("animation-play-state", "running");
        $(".fruit-2").css("animation-play-state", "running");
        $(".gold-1").css("animation-play-state", "running");
        $(".bagel-2").css("animation-play-state", "running");
        $(".coke-2, .coke-3").css("animation-play-state", "running");
    });


    $(".apple-1").click(function() {
        $(this).toggleClass("center-apple");
        $(".back-1").toggleClass("animate-back");
        $(".natural-2").toggleClass("animate-natural2");
        $(".natural-1").toggleClass("animate-natural1");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".fruit-2").toggleClass("animate-fruit2");
        $(".honey-1").toggleClass("animate-honey1");
        $(".honey-2").toggleClass("animate-honey2");
        $(".gold-1").toggleClass("animate-gold1");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".bagel-2").toggleClass("animate-bagel2");
        $(".coke-2").toggleClass("animate-coke2");
        $(".coke-3").toggleClass("animate-coke3");
        $(".apple, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });

    var applea = ["Exercise", "Diet", "Personal Training", "Gym", "Squat", "Body Profile Photo"];
    var appleb = ["Sleeveless", "Bum", "Ass", "Apple Hip Filler", "Apple Hip Surgery"];
    var applec = ["Brazilian Wax", "Body Naked", "Breast", "Hips"];

    $("#button-apple").click(function() {
        $(".blank-applea").html(applea[Math.floor(Math.random() * applea.length)]);
        $(".blank-appleb").html(appleb[Math.floor(Math.random() * appleb.length)]);
        $(".blank-applec").html(applec[Math.floor(Math.random() * applec.length)]);
    });

    $(".back-1").mouseenter(function(){
        $(".apple-1").css("animation-play-state", "paused");
        $(".natural-2").css("animation-play-state", "paused");
        $(".honey-2").css("animation-play-state", "paused");
        $(".fruit-2").css("animation-play-state", "paused");
        $(".gold-1").css("animation-play-state", "paused");
        $(".bagel-2").css("animation-play-state", "paused");
        $(".coke-2, .coke-3").css("animation-play-state", "paused");
    });

    $(".back-1").mouseleave(function(){
        $(".apple-1").css("animation-play-state", "running");
        $(".natural-2").css("animation-play-state", "running");
        $(".honey-2").css("animation-play-state", "running");
        $(".fruit-2").css("animation-play-state", "running");
        $(".gold-1").css("animation-play-state", "running");
        $(".bagel-2").css("animation-play-state", "running");
        $(".coke-2, .coke-3").css("animation-play-state", "running");
    });

    $(".back-1").click(function() {
        $(this).toggleClass("center-back");
        $(".apple-1").toggleClass("animate-apple");
        $(".natural-1").toggleClass("animate-natural1");
        $(".natural-2").toggleClass("animate-natural2");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".fruit-2").toggleClass("animate-fruit2");
        $(".honey-1").toggleClass("animate-honey1");
        $(".honey-2").toggleClass("animate-honey2");
        $(".gold-1").toggleClass("animate-gold1");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".bagel-2").toggleClass("animate-bagel2");
        $(".coke-2").toggleClass("animate-coke2");
        $(".coke-3").toggleClass("animate-coke3");
        $(".back, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });

    var backa = ["Backside", "Hair", "Summer"];
    var backb = ["Style", "Hair-shop", "Exercise"];
    var backc = ["Photo", "Dyeing", "Instagram"];

    $("#button-back").click(function() {
        $(".blank-backa").html(backa[Math.floor(Math.random() * backa.length)]);
        $(".blank-backb").html(backb[Math.floor(Math.random() * backb.length)]);
        $(".blank-backc").html(backc[Math.floor(Math.random() * backc.length)]);
    });

    $(".natural-2").mouseenter(function(){
        $(".back-1").css("animation-play-state", "paused");
        $(".apple-1").css("animation-play-state", "paused");
        $(".honey-2").css("animation-play-state", "paused");
        $(".fruit-2").css("animation-play-state", "paused");
        $(".gold-1").css("animation-play-state", "paused");
        $(".bagel-2").css("animation-play-state", "paused");
        $(".coke-2, .coke-3").css("animation-play-state", "paused");
    });

    $(".natural-2").mouseleave(function(){
        $(".back-1").css("animation-play-state", "running");
        $(".apple-1").css("animation-play-state", "running");
        $(".honey-2").css("animation-play-state", "running");
        $(".fruit-2").css("animation-play-state", "running");
        $(".gold-1").css("animation-play-state", "running");
        $(".bagel-2").css("animation-play-state", "running");
        $(".coke-2, .coke-3").css("animation-play-state", "running");
    });

    $(".natural-2").click(function() {
        $(this).toggleClass("center-natural");
        $(".back-1").toggleClass("animate-back");
        $(".apple-1").toggleClass("animate-apple");
        $(".natural-1").toggleClass("animate-natural1");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".fruit-2").toggleClass("animate-fruit2");
        $(".honey-1").toggleClass("animate-honey1");
        $(".honey-2").toggleClass("animate-honey2");
        $(".gold-1").toggleClass("animate-gold1");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".bagel-2").toggleClass("animate-bagel2");
        $(".coke-2").toggleClass("animate-coke2");
        $(".coke-3").toggleClass("animate-coke3");
        $(".natural, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });

    var naturala = ["Plastic surgery", "Medical treatment", "Face", "Authentic"];
    var naturalb = ["Customer", "Small business for beauty treatment", "Natural Beauty Celebrity"];
    var naturalc = ["Reservation", "Natural Beauty Hospital", "Eyebrow Treatment"];

    $("#button-natural").click(function() {
        $(".blank-naturala").html(naturala[Math.floor(Math.random() * naturala.length)]);
        $(".blank-naturalb").html(naturalb[Math.floor(Math.random() * naturalb.length)]);
        $(".blank-naturalc").html(naturalc[Math.floor(Math.random() * naturalc.length)]);
    });


    $(".fruit-2").mouseenter(function(){
        $(".back-1").css("animation-play-state", "paused");
        $(".apple-1").css("animation-play-state", "paused");
        $(".honey-2").css("animation-play-state", "paused");
        $(".natural-2").css("animation-play-state", "paused");
        $(".gold-1").css("animation-play-state", "paused");
        $(".bagel-2").css("animation-play-state", "paused");
        $(".coke-2, .coke-3").css("animation-play-state", "paused");
    });

    $(".fruit-2").mouseleave(function(){
        $(".back-1").css("animation-play-state", "running");
        $(".apple-1").css("animation-play-state", "running");
        $(".honey-2").css("animation-play-state", "running");
        $(".natural-2").css("animation-play-state", "running");
        $(".gold-1").css("animation-play-state", "running");
        $(".bagel-2").css("animation-play-state", "running");
        $(".coke-2, .coke-3").css("animation-play-state", "running");
    });

    $(".fruit-2").click(function() {
        $(this).toggleClass("center-fruit");
        $(".back-1").toggleClass("animate-back");
        $(".apple-1").toggleClass("animate-apple");
        $(".natural-1").toggleClass("animate-natural1");
        $(".natural-2").toggleClass("animate-natural2");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".honey-1").toggleClass("animate-honey1");
        $(".honey-2").toggleClass("animate-honey2");
        $(".gold-1").toggleClass("animate-gold1");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".bagel-2").toggleClass("animate-bagel2");
        $(".coke-2").toggleClass("animate-coke2");
        $(".coke-3").toggleClass("animate-coke3");
        $(".fruit, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });

    $(".honey-2").mouseenter(function(){
        $(".back-1").css("animation-play-state", "paused");
        $(".apple-1").css("animation-play-state", "paused");
        $(".fruit-2").css("animation-play-state", "paused");
        $(".natural-2").css("animation-play-state", "paused");
        $(".gold-1").css("animation-play-state", "paused");
        $(".bagel-2").css("animation-play-state", "paused");
        $(".coke-2, .coke-3").css("animation-play-state", "paused");
    });

    $(".honey-2").mouseleave(function(){
        $(".back-1").css("animation-play-state", "running");
        $(".apple-1").css("animation-play-state", "running");
        $(".fruit-2").css("animation-play-state", "running");
        $(".natural-2").css("animation-play-state", "running");
        $(".gold-1").css("animation-play-state", "running");
        $(".bagel-2").css("animation-play-state", "running");
        $(".coke-2, .coke-3").css("animation-play-state", "running");
    });

    $('.honey-2').click(function() {
        $(this).toggleClass("center-honey");
        $(".back-1").toggleClass("animate-back");
        $(".apple-1").toggleClass("animate-apple");
        $(".natural-1").toggleClass("animate-natural1");
        $(".natural-2").toggleClass("animate-natural2");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".fruit-2").toggleClass("animate-fruit2");
        $(".honey-1").toggleClass("animate-honey1");
        $(".gold-1").toggleClass("animate-gold1");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".bagel-2").toggleClass("animate-bagel2");
        $(".coke-2").toggleClass("animate-coke2");
        $(".coke-3").toggleClass("animate-coke3");
        $(".honey, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });

    var honeya = ["Thigh", "School uniform", "Skirt"];
    var honeyb = ["Exposure", "Hot pants", "Body line"];
    var honeyc = ["Pants", "Belly Fat", "Anorexia"];

    $("#button-honey").click(function() {
        $(".blank-honeya").html(honeya[Math.floor(Math.random() * honeya.length)]);
        $(".blank-honeyb").html(honeyb[Math.floor(Math.random() * honeyb.length)]);
        $(".blank-honeyc").html(honeyc[Math.floor(Math.random() * honeyc.length)]);
    });


    $(".gold-1").mouseenter(function(){
        $(".back-1").css("animation-play-state", "paused");
        $(".apple-1").css("animation-play-state", "paused");
        $(".fruit-2").css("animation-play-state", "paused");
        $(".natural-2").css("animation-play-state", "paused");
        $(".honey-2").css("animation-play-state", "paused");
        $(".bagel-2").css("animation-play-state", "paused");
        $(".coke-2, .coke-3").css("animation-play-state", "paused");
    });

    $(".gold-1").mouseleave(function(){
        $(".back-1").css("animation-play-state", "running");
        $(".apple-1").css("animation-play-state", "running");
        $(".fruit-2").css("animation-play-state", "running");
        $(".natural-2").css("animation-play-state", "running");
        $(".honey-2").css("animation-play-state", "running");
        $(".bagel-2").css("animation-play-state", "running");
        $(".coke-2, .coke-3").css("animation-play-state", "running");
    });

    $('.gold-1').click(function() {
        $(this).toggleClass("center-gold");
        $(".back-1").toggleClass("animate-back");
        $(".apple-1").toggleClass("animate-apple");
        $(".natural-1").toggleClass("animate-natural1");
        $(".natural-2").toggleClass("animate-natural2");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".fruit-2").toggleClass("animate-fruit2");
        $(".honey-1").toggleClass("animate-honey1");
        $(".honey-2").toggleClass("animate-honey2");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".bagel-2").toggleClass("animate-bagel2");
        $(".coke-2").toggleClass("animate-coke2");
        $(".coke-3").toggleClass("animate-coke3");
        $(".gold, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });


    $(".bagel-2").mouseenter(function(){
        $(".back-1").css("animation-play-state", "paused");
        $(".apple-1").css("animation-play-state", "paused");
        $(".fruit-2").css("animation-play-state", "paused");
        $(".natural-2").css("animation-play-state", "paused");
        $(".gold-1").css("animation-play-state", "paused");
        $(".honey-2").css("animation-play-state", "paused");
        $(".coke-2, .coke-3").css("animation-play-state", "paused");
    });

    $(".bagel-2").mouseleave(function(){
        $(".back-1").css("animation-play-state", "running");
        $(".apple-1").css("animation-play-state", "running");
        $(".fruit-2").css("animation-play-state", "running");
        $(".natural-2").css("animation-play-state", "running");
        $(".gold-1").css("animation-play-state", "running");
        $(".honey-2").css("animation-play-state", "running");
        $(".coke-2, .coke-3").css("animation-play-state", "running");
    });

    $(".bagel-2").click(function() {
        $(this).toggleClass("center-bagel");
        $(".back-1").toggleClass("animate-back");
        $(".apple-1").toggleClass("animate-apple");
        $(".natural-1").toggleClass("animate-natural1");
        $(".natural-2").toggleClass("animate-natural2");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".fruit-2").toggleClass("animate-fruit2");
        $(".honey-1").toggleClass("animate-honey1");
        $(".honey-2").toggleClass("animate-honey2");
        $(".gold-1").toggleClass("animate-gold1");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".coke-2").toggleClass("animate-coke2");
        $(".coke-3").toggleClass("animate-coke3");
        $(".bagel, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });

    var bagela = ["Body Shape", "Review", "Cost"];
    var bagelb = ["Quality", "kawn-ack", "Guro", "Dating"];
    var bagelc = ["Call-girl", "Yangcheon", "Yongsan", "Guidance"];

    $("#button-bagel").click(function() {
        $(".blank-bagela").html(bagela[Math.floor(Math.random() * bagela.length)]);
        $(".blank-bagelb").html(bagelb[Math.floor(Math.random() * bagelb.length)]);
        $(".blank-bagelc").html(bagelc[Math.floor(Math.random() * bagelc.length)]);
    });

    $(".coke-2,.coke-3").mouseenter(function(){fruit
        $(".back-1").css("animation-play-state", "paused");
        $(".apple-1").css("animation-play-state", "paused");
        $(".fruit-2").css("animation-play-state", "paused");
        $(".natural-2").css("animation-play-state", "paused");
        $(".gold-1").css("animation-play-state", "paused");
        $(".bagel-2").css("animation-play-state", "paused");
        $(".honey-2").css("animation-play-state", "paused");
    });

    $(".coke-2,.coke-3").mouseleave(function(){
        $(".back-1").css("animation-play-state", "running");
        $(".apple-1").css("animation-play-state", "running");
        $(".fruit-2").css("animation-play-state", "running");
        $(".natural-2").css("animation-play-state", "running");
        $(".gold-1").css("animation-play-state", "running");
        $(".bagel-2").css("animation-play-state", "running");
        $(".honey-2").css("animation-play-state", "running");
    });

    $(".coke-2, coke-3").click(function() {
        $(".coke-2").toggleClass("center-coke2");
        $(".coke-3").toggleClass("center-coke3");
        $(".back-1").toggleClass("animate-back");
        $(".apple-1").toggleClass("animate-apple");
        $(".natural-1").toggleClass("animate-natural1");
        $(".natural-2").toggleClass("animate-natural2");
        $(".fruit-1").toggleClass("animate-fruit1");
        $(".fruit-2").toggleClass("animate-fruit2");
        $(".honey-1").toggleClass("animate-honey1");
        $(".honey-2").toggleClass("animate-honey2");
        $(".gold-1").toggleClass("animate-gold1");
        $(".gold-2").toggleClass("animate-gold2");
        $(".bagel-1").toggleClass("animate-bagel1");
        $(".bagel-2").toggleClass("animate-bagel2");
        $(".coke, .side-1, .side-2, .side-3, .side-4").fadeToggle(100);
    });

});
