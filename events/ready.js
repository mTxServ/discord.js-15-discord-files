const Discord = require('discord.js')

module.exports = {
    run: (client) => {
        client.logger.log('info', `Bot identifié en tant que ${client.user.tag}! (${client.user.id})`);

        client.setTimeout(() => client.user.setActivity(`${client.guilds.cache.size} serveur(s)`, { type: 'LISTENING' }), 5000 * 60) // mise à jour du message de présence toutes les 5 minutes
    }
};
