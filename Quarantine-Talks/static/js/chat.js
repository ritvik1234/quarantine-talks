var channel = "/globalChat";
var receivedMsg;
var live_user;
var msg_count = 0;
var socket = io.connect(window.location.protocol + '//' + document.domain + ':' + location.port + channel, {transports: ['websocket']});

socket.on('connect', function () {
  console.log("Connection established with server");
});

socket.on('disconnect', function(){
  console.log("chat disconnected");
});

socket.on('response', function(response){
  if(response.status == 'connected'){
    console.log("server connection verified");
    live_user = response.count;
    document.getElementById("head1").innerHTML = " Users Online : " + live_user.toString();
  } else{
    console.log("server connection verification failed");
  }
});

socket.on("message", function (message) {
  receivedMsg = message;
  msg_count = (msg_count + 1)%100;
  refreshMessages(message);
});

function refreshMessages(message) {
     var msgElement = document.getElementById(msg_count.toString());
     if(msgElement){
        msgElement.parentNode.removeChild(msgElement);
     }
      $(".media-list").append('<li class="media" id = ' + msg_count.toString() +'> <div class = "message-text">' + message.data.message + '</div>' + '<div class = "author-text"><small>' + ' - '+ message.data.author + '</small></div><hr/></li>');
      $container1 = $('.media-list');
      $container2 = $('.fixed-panel');
      $container2.animate({ scrollTop: $container1[0].scrollHeight }, "slow");
}

$(function () {
  if (typeof $.cookie("quarantine-talks-nickname") === 'undefined') {
    window.location = "/login"
  } else {
    $("#sendMessage").on("click", function () {
      sendMessage()
     });

    $('#messageText').keyup(function (e) {
      if (e.keyCode == 13) {
        sendMessage();
      }
    });
  }

  function sendMessage() {
    var message = $("#messageText").val();
    var author = $.cookie("quarantine-talks-nickname");
    socket.emit('message', { data: { message: message, author: author } });
    $("#messageText").val("");
  }
})
