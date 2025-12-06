$(document).ready(function () {
  //sample responses
  const responses = [
    "Sure, I can help with that. Can you share a bit more detail?",
    "Got it. Let me quickly check this for you.",
    "Thanks for reaching out to Support!",
    "I understand. I’ll try to find the best way to assist.",
    "Noted. Is there anything else related to this issue?",
  ];

 
  $("#chatButton").click(function () {
    const $chatWindow = $("#chatWindow");
    $chatWindow.css("display", $chatWindow.is(":visible") ? "none" : "flex");
  });

  function sendMessage() {
    const msg = $("#chatInput").val().trim();
    if (!msg) return;

    $("#chatMessages").append(`
      <div class="user message">${msg}</div>
    `);

    $("#chatMessages").append(`
      <div class="agent message" style="font-size:11px; opacity:0.7; margin-top:-4px;">
        A copy of your message was forwarded to support email: hypercare@ourcompany.com
      </div>
    `);

    $("#chatInput").val("");
    $("#chatMessages").scrollTop($("#chatMessages")[0].scrollHeight);

    setTimeout(function () {
      $("#chatMessages").append(`
        <div class="agent message typing-indicator">
          <span></span><span></span><span></span>
        </div>
      `);

      $("#chatMessages").scrollTop($("#chatMessages")[0].scrollHeight);

      setTimeout(function () {
        $(".typing-indicator").remove();

        const reply = responses[Math.floor(Math.random() * responses.length)];
        $("#chatMessages").append(`
          <div class="agent message">${reply}</div>
        `);

        $("#chatMessages").scrollTop($("#chatMessages")[0].scrollHeight);
      }, 1500);
    }, 800);
  }

  $("#sendBtn").click(sendMessage);

  $("#chatInput").keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      sendMessage();
    }
  });
});

