require("dotenv").config();
var ComfyJS = require("comfy.js");
var commands = require("./commands/textCommands.js");

ComfyJS.onCommand = (user, command, message, flags, extra) => {
    let isValidCommand = false;

    commands.textCommands.forEach(function (elem, index) {
        if (elem.aliases.indexOf(command) > -1) {
            var transformedText = transformText(elem.text, message, flags, extra);
            console.log(transformedText);
            ComfyJS.Say(elem.text);
            isValidCommand = true;
        }
    });

    if (!isValidCommand) {
        ComfyJS.Say(`!${command} is not a known command. Type !help to see the available list of commands`);
    }
}

function transformText(text, message, flags, extra) {
    if (text.contains('{mentioned_user}')) {
        return text.replace('{mentioned_user}')
    }
    return text;
}

ComfyJS.onChat = (user, message, flags, self, extra) => {

}

ComfyJS.Init(process.env.TWITCHUSER, process.env.OAUTH, process.env.TWITCHCHANNEL);