export default {
  async fetch(request) {
    // Call the web service
    await fetch("https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=dcebb89225ed4cc399209c94b5e28e49&deviceNames=Pixel%206&text=Stop");

    // Redirect the user
    return new Response("Recording Stopped", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  },
};
