$(document).ready(function(){
  var input = $('.mess-input');
  var button = $('.mess-btn');
  var chat = $('.chat');


  var source = $("#message-template").html();

  var template = Handlebars.compile(source);

  button.click(function(){
    var message = input.val().trim();

    var data = {
      text: message,
      time: '15:15',
      userClass: 'sent'
    };

    var html = template(data);

    chat.append(html);

    input.val('');

    setTimeout(function(){
      var data = {
        text: 'Okey',
        time: '15:16',
        userClass: 'received'
      };

        var html = template(data);

        chat.append(html);
      }, 1000);
    })
  });
