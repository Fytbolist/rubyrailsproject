// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree
//= require 'icheck'

///open add todo
$(document).ready(function() {
     $('#create_div').hide();
     $('#shadow_overlay').css('display','none');
     $('#project_title').css('display','none');


///cloase add todo
     $("#add_new_todo").click(function (event) {
       console.log("onClickEvent() called")
        $('#create_div').show();
        $('#add_new_todo').toggle();
        $('#shadow_overlay').css('display','block');

        //turn off title field
        $('#project_title').css('display','none');
      //  reset_fields();
    });

     $('#hide_new_todo').click(function (event) {
       console.log("onClickEvent() called")
        $('#create_div').hide();
        $('#add_new_todo').show();
        $('#shadow_overlay').css('display','none');

    });