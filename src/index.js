require("dotenv").config();
var ComfyJS = require("comfy.js");

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {    
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }
}

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
  if( flags.broadcaster && command === "test" ) {
    if( extra.sinceLastCommand.any < 100 ) {
      console.log(
        `The last '!test' command by any user was sent less than 100 ms ago`
      );            
    }

    if( extra.sinceLastCommand.user < 100 ) {
      console.log(
        `The last '!test' command by this specific user (as denoted by the 'user' parameter) was sent less than 100 ms ago`
      );            
    }
  }
}

ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );