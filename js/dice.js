var attack_die = new Array();
var defend_die = new Array();


attack_die[0] = 'hit';
attack_die[1] = 'hit';
attack_die[2] = 'hit';
attack_die[3] = 'focus';
attack_die[4] = 'focus';
attack_die[5] = 'critical hit';
attack_die[6] = '[blank]';
attack_die[7] = '[blank]';

defend_die[0] = 'evade';
defend_die[1] = 'evade';
defend_die[2] = 'evade';
defend_die[3] = '[blank]';
defend_die[4] = 'focus';
defend_die[5] = 'focus';
defend_die[6] = '[blank]';
defend_die[7] = '[blank]';

$(function(){

$('.die').click(function(){
    
    //console.log(this);
    $(this).html('');
    if($(this).hasClass('defense')){
        var str = defend_die[Math.floor(Math.random()*defend_die.length)];
        //$(this).hide(1500).show(1500);

        $(this).fadeTo(100,0.1)
                .fadeTo(200,0.5)        
                .fadeTo(300,0.1)
                .fadeTo(400,0.7)
                .fadeTo(500,0.1)
                .fadeTo(600,1.0)
                .queue(function(n){
                    $(this).html(str);
                    n();
                });        
    } 
    
    
    if($(this).hasClass('offense')){
        var str = attack_die[Math.floor(Math.random()*attack_die.length)];
        
        $(this).fadeTo(100,0.1)
                .fadeTo(200,0.5)        
                .fadeTo(300,0.1)
                .fadeTo(400,0.7)
                .fadeTo(500,0.1)
                .fadeTo(600,1.0)
                .queue(function(n){
                    $(this).html(str);
                    n();
                });         
    }
    
});

/*
function reset_die(die_number){
    alert("die number");
}
*/

$('#reset_dice').click(function(){
    $('.die').html('[unrolled]');
    $('.die').fadeTo(200,0.5);
    $('input[type=text]').val('');
    $('input[type=checkbox]:checked').removeAttr('checked');
});

$(document).ready(function(){
    $('.die').html('[unrolled]');
    $('.die').fadeTo(200,0.5);    
});
});
