const { WebhookClient, RichEmbed } = require('discord.js');
const { id, token2 } = require('../config.json');
const LogHook = new WebhookClient(id, token2);

class Logger {

    warn(bot, msg) {
        const embed = new RichEmbed()
            .setColor('#FF8000')
            .setTitle('Warnung...')
            .setDescription(msg);

        this._send(bot, embed);    
    }

    error(bot, msg) {
        const embed = new RichEmbed()
            .setColor('#FF0000')
            .setTitle('Fehler...')
            .setDescription(msg);

        this._send(bot, embed);    
    }

    info(bot, msg) {
        const embed = new RichEmbed()
            .setColor('#F7FE2E')
            .setTitle('Info...')
            .setDescription(msg);

        this._send(bot, embed);    
    }


    _send(bot, embed) {
        embed
        .setAuthor(bot.user.username, bot.user.avatarURL);
        LogHook.send(embed);
    }
}
    

module.exports = Logger;