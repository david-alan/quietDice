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
$(document).on('click','.die',function(){
     //if the corresponding checkbox is checked, prevent changing the die
	var die_id = this.id.substr(4);
	var checkbox_id = 'check_box_' + die_id;

	if($('#' + checkbox_id).prop('checked')){ //disable those dice who have the checked boxes
		return;
	} else { //check the box to disable re-rolling unintentionally
		$('#' + checkbox_id).prop('checked',true);
	}

 
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
    var die_qty = $('#number_of_dice').val();

    $('.die').html('[unrolled]');
    $('.die').fadeTo(200,0.5);
    $('input[type=text]').val('');
    $('input[type=checkbox]:checked').removeAttr('checked');
    
    //reset the value after clearing it (b/c we cleared all text boxes)
    $('#number_of_dice').val(die_qty);
});

$(document).ready(function(){
    $('.die').html('[unrolled]');
    $('.die').fadeTo(200,0.5);    
});


$('#number_of_dice').change(function(){
	var adjusted_qty_of_dice = $('#number_of_dice').val();

	//delete all existing dice
	$('.die').remove();
	$('.die_check_box_div').remove();
	$('.die_txt_modifier_div').remove();

	//create enough dice
	for(var i=1;i<=adjusted_qty_of_dice;i++){
		$('.offense_txt_modifier').append('<div class="text_box die_txt_modifier_div"><input type="text" id="text_box_'+ i + '" class="die_txt_modifier"></div>');
		$('.offense_dice').append('<div class="die offense" id="die_'+ i +'"></div>');
		$('.offense_checkbox').append('<div class="check_box die_check_box_div"><input type="checkbox" id="check_box_'+ i+'"></div>');
		$('.defense_txt_modifier').append('<div class="text_box die_txt_modifier_div"><input type="text" id="text_box_'+ (i+adjusted_qty_of_dice) + '" class="die_txt_modifier"></div>');
		$('.defense_dice').append('<div class="die defense" id="die_'+ (i + adjusted_qty_of_dice) +'"></div>');
		$('.defense_checkbox').append('<div class="check_box die_check_box_div"><input type="checkbox" id="check_box_'+ (i + adjusted_qty_of_dice) +'"></div>');
	}
    $('.die').html('[unrolled]');
    $('.die').fadeTo(200,0.5);    
});



//$('.die_txt_modifier').change(function(){

});

$(function(){
	$('.die_txt_modifier').change(function(){
		var v = $(this).val();
		var dice_id = this.id.substr(9); //get the id of the dice from the string (text_box_4 returns 4)
		$('#die_' + dice_id).html(v);
	});
});
