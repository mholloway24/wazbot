require("dotenv").config();
var ComfyJS = require("comfy.js");
var commands = require("./commands/textCommands.js");

ComfyJS.onCommand = (user, command, message, flags, extra) => {
    let isValidCommand = false;

    commands.textCommands.forEach(function (elem, index) {
        if (elem.aliases.indexOf(command) > -1) {
            var transformedText = elem.text;
            if (elem.text.indexOf("{mentioned-user}") > -1) {
                transformedText = elem.text.replace(/{mentioned-user}/g, message);
            }

            ComfyJS.Say(transformedText);
            isValidCommand = true;
        }
    });

    if (!isValidCommand) {
        ComfyJS.Say(`!${command} is not a known command. Type !help to see the available list of commands`);
    }
}

ComfyJS.onChat = (user, message, flags, self, extra) => {

}

ComfyJS.Init(process.env.TWITCHUSER, process.env.OAUTH, process.env.TWITCHCHANNEL);