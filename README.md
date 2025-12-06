Support Chat Widget

1. Trigger Point

The chat widget opens or closes when the floating chat button is clicked.

Defined at line 12 in app.js:

$("#chatButton").click(function () {
  const $chatWindow = $("#chatWindow");
  $chatWindow.css("display", $chatWindow.is(":visible") ? "none" : "flex");
});

2. Message Sending Flow

User messages are handled by the sendMessage() function at line 17 in app.js:

function sendMessage() {
  const msg = $("#chatInput").val().trim();
  if (!msg) return;

  $("#chatMessages").append(`
    <div class="user message">${msg}</div>
  `);
}


This function:

Retrieves the message from the input box

Appends it to the chat window

Clears the input

Scrolls to the latest message

3. Email Copy Simulation

Immediately after displaying the user's message, the widget shows a small note simulating that the message was forwarded to a support inbox.

Implemented at line 25 in app.js:

$("#chatMessages").append(`
  <div class="agent message" style="font-size:11px; opacity:0.7; margin-top:-4px;">
    A copy of your message was forwarded to support email: hypercare@ourcompany.com
  </div>
`);


Important:
This is a visual simulation only. No real email is sent.

4. Typing Indicator and Simulated Agent Reply

A typing indicator is displayed before the automated reply.

Typing indicator (line 35):

$("#chatMessages").append(`
  <div class="agent message typing-indicator">
    <span></span><span></span><span></span>
  </div>
`);


Simulated agent reply (line 46):

const reply = responses[Math.floor(Math.random() * responses.length)];
$("#chatMessages").append(`
  <div class="agent message">${reply}</div>
`);


The responses come from the predefined responses array at the top of the file.

5. Message Submission Triggers
Send Button

Defined at line 56:

$("#sendBtn").click(sendMessage);

Enter Key

Defined at line 58:

$("#chatInput").keypress(function (e) {
  if (e.which === 13) {
    e.preventDefault();
    sendMessage();
  }
});

Both methods call sendMessage().