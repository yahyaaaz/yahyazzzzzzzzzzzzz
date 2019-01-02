const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'yahya',
     details: `hello fucked world`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `hard HD`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: '2019',
        large_image: `377480353259978752`,
        large_text: `HAPPY NEW YEAR` }

  }
    });
});


client.login("MzI2NTI3Nzk4MTY2NTUyNTg2.Dw5h4w.Z0obuuMzTsyB8rkLMLCWuIsgrY4");
