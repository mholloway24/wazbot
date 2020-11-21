
var textCommands = [
    {
        command: 'help',
        text: 'You can use the following commands in chat: !help !about !github !discord !so',
        aliases: ['help', 'commands']
    },
    {
        command: 'test',
        text: 'This is a test message',
        aliases: ['test', 'testing']
    },
    {
        command: 'so',
        text: 'Give {mentioned-user} a follow at https://twitch.tv/{mentioned-user}',
        aliases: ['so', 'shoutout'],
        emptyText: 'You forgot to add a user! So follow me!'
    },
    {
        command: 'github',
        text: 'You can see WazabyDev\'s github at https://github.com/mholloway24',
        aliases: ['github', 'gh']
    },
    {
        command: 'discord',
        text: 'Join our Discord server at https://discord.gg/Ba8NKM',
        aliases: ['discord']
    },
    {
        command: 'about',
        text: 'Wanna know about WazabyDev? Just ask.',
        aliases: ['about', 'who']
    }
];

exports.textCommands = textCommands;