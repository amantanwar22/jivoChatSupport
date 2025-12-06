Support Chat Widget (JivoChat Integration)

This project integrates the official JivoChat widget to provide live support chat on the website.
JivoChat automatically switches between real-time chat and email forwarding depending on agent availability.
No backend server is required.

Features
1. Live Chat (When Agent is Online)

Visitors see a live chat window powered by JivoChat.

Messages appear instantly in the Jivo agent dashboard.

Supports typing indicators, read receipts, and operator responses.

2. Email Forwarding (When Agent is Offline)

If all agents are offline, Jivo automatically shows the offline contact form.

Messages submitted through this form are sent directly to the configured support email.

Useful for 24/7 monitoring of customer queries via inbox.

How to Configure Support Email

Follow these steps inside your JivoChat Dashboard:

1. Go to Channels

Log in to your JivoChat dashboard.

Navigate to Channels from the left sidebar.

2. Select Website Widget

Open your website widget settings.

3. Open Notifications

Inside the Website Widget, go to Notifications.

4. Configure Email Addresses

Add your support email under these two fields:

Email for Chat Logs and Notifications

Email for Offline Messages

5. Confirm the Email

JivoChat sends a confirmation link to your email.
Open your inbox and click Confirm.
Only after confirmation will JivoChat start forwarding messages.

After confirmation:

Offline messages → go to email

Missed chats → go to email

Chat transcripts → go to email

Integration Code

Add the JivoChat script to your index.html line 12:

<script src="//code.jivosite.com/widget/XXXXXXXXXX" async></script>


Replace XXXXXXXXXX with your real widget ID from Jivo.

This is the only code required.
JivoChat handles chat UI, communication, email routing, and presence detection.

How the System Works
When Agent is ONLINE

Live chat widget is active

User messages appear in the Jivo agent interface

Agents can reply in real-time

When Agent is OFFLINE

Offline form appears

User message is forwarded to the support email configured in Notifications

Additional Behavior

Missed chats get emailed automatically

Chat transcripts can be emailed automatically

No backend or SMTP server is required