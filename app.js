$(function() {
var input = $('input[type="email"]');
$(input).on('input', function(event) {
    var value = $(input).val();
if(value == 'google'){jQuery(input).val('yahoo');};
  });
});
