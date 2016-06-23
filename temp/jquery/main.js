$(document).ready(function() {
  window.jquerytest = {
    init:function() {
      var selected;
      $('.L1 li').click(function(e){
        var listTwo = $('.L2')
        $(this).toggleClass("selected")
        selected = $(this).toggleClass("selected")
        if (selected.data('selected') == true) {
          selected.data('selected', false)
          listTwo.append(selected)
        } else {
          selected.data('selected', true)

        }
      })



      var btn = $('.btn')
      btn.click(moveIt)

        function moveIt(e){
        listTwo.append(listOne);
      }
    }
      }


  window.jquerytest.init();
});
