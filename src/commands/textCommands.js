
var textCommands = [
    {
        command: 'help',
        text: 'You can use the following commands in chat: !test !so !help',
        aliases: ['help', 'commands']
    },
    {
        command: 'test',
        text: 'This is a test message',
        aliases: ['test', 'testing']
    },
    {
        command: 'so',
        text: 'Give @{user} a follow at https://twitch.tv/{user}',
        aliases: ['so', 'shoutout']
    }
];

exports.textCommands = textCommands;