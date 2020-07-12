require("dotenv").config();
var ComfyJS = require("comfy.js");
var commands = require("./commands/textCommands.js");

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {  
    let isValidCommand = false;

    commands.TextCommands.forEach(function(elem, index){
        console.log(index);
        console.log(elem);
        if(elem.command === command)
        {
            ComfyJS.Say(elem.text);
            isValidCommand = true;
        }
    });

    if(!isValidCommand)
    {
        ComfyJS.Say(`!${command} is not a known command. Type !help to see the available list of commands`);
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