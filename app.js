$(function(){
  var input;
  
  //Get input from text box
  var getInput = function(){
    input = $('#input-box').val();
    $('#input-box').val("");
  };
  
  //Add input to list
  var addToList = function(){
    getInput();
    //Why does this work if input is blank with spaces
    if (input !== "" && input){
      $('ol').append('<li><div class="task">' + input + '</div><div class="completed-button">completed</div></li>');
    }else{
      console.log('can\'t be blank');
    }
  };
      
  //Add list-item to ordered list when user hits submit
  $('.submit').on('click', function(){
    addToList();
  });
  
  $('#input-box').keydown(function(e){
    if (e.which == 13){
      e.preventDefault();
      addToList();
    }
  });
  
  //Add box-shadow effect when user clicks task-box
  //Allow for remove of item
  $('ol').on('click', '.task', function(){
    $(this).toggle(function(){
      $(this).siblings().text('remove');
      $(this).siblings().removeClass('completed-button').removeClass('completed-effect');
      $(this).siblings().addClass('remove-button');
      $(this).addClass('box-shadow');
      $(this).siblings().addClass('box-shadow');
    }, function(){
      $(this).siblings().text('complete');
      $(this).siblings().addClass('completed-button');
      $(this).siblings().removeClass('remove-button');
      $(this).removeClass('box-shadow');
      $(this).siblings().removeClass('box-shadow');
    });
  });
  
  //When user clicks on .remove class, remove corresponding list item
  $("ol").on('click', '.remove-button', function(){
    $(this).parent().remove();
  });
  
  //Add transparent effect when user clicks complete
  //Allow for undo
  $('ol').on('click', '.completed-button', function(){
    $(this).toggle(function(){
      $(this).text('undo');
      $(this).parent().addClass('completed-effect');
    }, function(){
      $(this).text('complete');
      $(this).parent().removeClass('completed-effect');
    });
  });

});