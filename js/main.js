$(document).ready(function() {

    $("#start").click(function(){
        $(".intro").fadeOut("fast");
        $(".container").fadeIn("slow");
    });

    $(".apple-1").mouseleave("webkitAnimationEnd", function(){
        $(this).removeClass("moving-apple");
    });

    $(".apple-1").mouseenter(function(){
        $(this).addClass("moving-apple");
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

        $(".apple").toggle("1000");
    });

    $(".back-1").mouseleave("webkitAnimationEnd", function(){
        $(this).removeClass("moving-back");
    });

    $(".back-1").mouseenter(function(){
        $(this).addClass("moving-back");
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

        $(".back").toggle("slide");
    });

    $(".natural-2").mouseleave("webkitAnimationEnd", function(){
        $(this).removeClass("moving-natural");
    });

    $(".natural-2").mouseenter(function(){
        $(this).addClass("moving-natural");
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

        $(".natural").toggle("slide");
    });

    $(".fruit-2").mouseleave("webkitAnimationEnd", function(){
        $(this).removeClass("moving-fruit");
    });

    $(".fruit-2").mouseenter(function(){
        $(this).addClass("moving-fruit");
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

        $(".fruit").toggle("slide");
    });

    $(".honey-2").mouseleave("webkitAnimationEnd", function(){
        $(this).removeClass("moving-honey");
    });

    $(".honey-2").mouseenter(function(){
        $(this).addClass("moving-honey");
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

        $(".honey").toggle("slide");
    });


    $(".gold-1").mouseleave("webkitAnimationEnd", function(){
        $(this).removeClass("moving-gold")
    });

    $(".gold-1").mouseenter(function(){
        $(this).addClass("moving-gold");
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

        $(".gold").toggle("slide");
    });

    $(".bagel-2").mouseleave("webkitAnimationEnd", function(){
        $(this).removeClass("moving-bagel");
    });

    $(".bagel-2").mouseenter(function(){
        $(this).addClass("moving-bagel");
    });

    $('.bagel-2').click(function() {
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

        $(".bagel").toggle("slide");
    });

    $(".coke-2, .coke-3").mouseleave("webkitAnimationEnd", function(){
        $(".coke-2").removeClass("moving-coke2");
        $(".coke-3").removeClass("moving-coke3");
    });

    $(".coke-2, .coke-3").mouseenter(function(){
        $(".coke-2").addClass("moving-coke2");
        $(".coke-3").addClass("moving-coke3");
    });

    $(".coke-2, .coke-3").click(function() {
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

        $(".coke").toggle("slide");
    });

});
