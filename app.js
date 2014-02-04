//User can add task to list-item
//User can click on task in list-item and mark complete
//User can click on task in list-item and remove task

$(function(){
  'use strict'
//User can add task to list-item
//User can click on task in list-item and mark complete
//User can click on task in list-item and remove task
  var input;
  var valid;
  var $inputBox = $('#input-box');
  var $orderList = $('ol');
  var $taskItems = $('li');
  var $buttons = $('.button');
  //Can I make these variables cleaner by pulling them from the HTML file?
  //Not sure how to select only part of the list item?
  var listItemOpen = ('<li><div class="task box-shadow">');
  var listItemClose = ('</div><div class="completed button hidden"><span class="symbol">&#10003;</span></div><div class="remove button hidden"><span class="symbol">&#10005;</span></div></li>');
  
  //Views
  //
  //Add input to list
  var appendList = function(){
    $orderList.append(listItemOpen + input + listItemClose);
  };
  
    //Reset buttons on all task items to hide
  var resetButtons = function(){
    $('li').children('.button').addClass("hidden");
  };
  
  //Show or hide buttons on sibling
  var toggleButtons = function(){
    $(this).siblings().toggleClass("hidden");
  };
  
  //Toggle completed effect (opacity)
  var toggleCompleted = function(){
    $(this).siblings('.task').toggleClass("completed-effect").toggleClass("box-shadow");
  };
  
  //Remove parent element
  var removeTask = function(){
    $(this).parent().remove();
  };
  
  
  //Controllers
  //
  //If valid, get input from text box
  var getInput = function(){
    if($inputBox.val()){
      input = $inputBox.val();
      $inputBox.val("");
      valid = true;
    } else{
      valid = false;
    }
  };
  
  //If valid, add input to list
  var addToList = function(){
    if (valid){
      appendList();
    }else{
      console.log('can\'t be blank');
    }
  };
  
  //When user clicks on task div
  //hide buttons on sibling tasks
  //show buttons
  $orderList.on('click', '.task', function(){
    resetButtons();
    toggleButtons.apply(this);
  });
  
  //When user clicks on completed button
  //Add completed effect to sibling task class
  $orderList.on('click', '.completed', toggleCompleted);
  
  //When user clicks remove button
  //Remove list element
  $orderList.on('click', '.remove', removeTask);
      
 
  $('submit').click(
    getInput,
    addToList
  );
  
  $('#wishlist-form').on('submit', function(e){
    e.preventDefault();
    getInput();
    addToList();
  });
});
