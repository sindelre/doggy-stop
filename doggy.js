export default {
  async fetch(request) {
    // Call the web service
    await fetch("https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=dcebb89225ed4cc399209c94b5e28e49&deviceNames=Pixel%206&text=Record");

    // Wait for 10 seconds
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect the user
    return Response.redirect("https://doggy.wizman.net/cam", 302);
  }
};
