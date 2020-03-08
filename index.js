const token = process.env.BOT_TOKEN;
const prefix = process.env.BOT_PREFIX;
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const ms = require("ms");
const fs = require("fs");


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online and protecting ${bot.guilds.size} servers!`);
  bot.user.setPresence({ status: 'online', game: { name: '?help for info' }});
  });

  bot.on("message", async message => {
      if (message.author.bot) return;
      if (message.isMentioned(bot.user)) {
         message.reply("Hello! I am an FAQ Bot, type ?help for more info");
  }
  });

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm")
     message.reply("I am an FAQ bot. DMing me is a work in progress");


  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}test`) {
    return message.channel.send("This is a test. I repeat, this is a test.");
  }

  if (cmd === `${prefix}links`) {
    let links = new Discord.RichEmbed()
      .setDescription("**Links**")
      .setColor("#148AFF")
      .addField("__**Applications**__", "Website: https://nmsassistant.com\nAndroid: https://play.google.com/store/apps/details?id=com.kurtlourens.no_mans_sky_recipes\niOS: https://apps.apple.com/us/app/id1480287625\nWebApp: https://app.nmsassistant.com\nDiscord Bot: Coming Soon")
      .addField("__**Social**__", "Reddit: https://www.reddit.com/r/AssistantforNMS\nTwitter: https://twitter.com/AssistantNMS\nInstagram: https://instagram.com/AssistantNMS\nFacebook: https://facebook.com/AssistantNMS\nSteam Community Page: https://steamcommunity.com/groups/AssistantNMS\nNoMansSky Social: https://nomanssky.social/AssistantNMS");

 return message.channel.send(links);
    }

  if (cmd === `${prefix}support`) {
    let support = new Discord.RichEmbed()
      .setDescription("**Assistant for NMS support links**")
      .setColor("#148AFF")
      .addField("__**Email**__", "You can email our support at support@nmsassistant.com, using the template found in ?supportticket")
      .addField("__**Website**__", "Our support website can be found at https://nmsassistant.freshdesk.com, or use the links in ?freshdesk and ?faq ");

    return message.channel.send(support)
        .then(msg => {
          message.channel.send("We hope to iron our all our major bugs ASAP. Let us know if you have any ideas, we’d love to hear from you!");
        });
  }

  if (cmd === `${prefix}faq`) {
    return message.channel.send("If you can’t find the answers you’re looking for here, try checking out our full FAQ on Freshdesk: https://nmsassistant.freshdesk.com/");
  }

  if (cmd === `${prefix}earnings`) {
    let earnings = new Discord.RichEmbed()
      .setDescription("**Links**")
      .setColor("#148AFF")
      .addField("How much can I earn with Salad?","https://salad.zendesk.com/hc/en-us/articles/360028553551-How-much-can-I-earn-with-Salad-")
      .addField("How can I earn more with Salad?", "https://salad.zendesk.com/hc/en-us/articles/360028257792-How-much-electricity-does-Salad-use-")
      .addField("How does Salad mine cryptocurrency?", "https://salad.zendesk.com/hc/en-us/articles/360028478512-How-can-I-earn-more-with-Salad-");

    return message.channel.send("The money you make with Salad is generated by using your GPU to mine Ethereum (cryptomining). This means that the more powerful Graphics Card you have, the better your earning rate will be. Salad will move away from cryptocurrency based earnings in the future, and transition into Data Processing and High Performance Computing tasks that will earn users much more money for the same processing power.")
      .then(msg => {
        message.channel.send(earnings);
      });
  }

  if (cmd === `${prefix}systemreqs`) {
    let systemreq = new Discord.RichEmbed()
      .setDescription("**System Requirements**")
      .setColor("#148AFF")
      .addField("__**OS REQUIREMENTS**__", "****")
      .addField("__**PHONE REQUIREMENTS**__", " ****")
      .addField("__**CONNECTIVITY**__", "**Working Internet Connection**");

    return message.channel.send(systemreq);
  }

  if (cmd === `${prefix}supportticket`) {
    let supportticket1 = ("To log your support issue and get our team working on it, please copy the format below, fill it in with your bug information, and send it to support@nmsassistant.com to generate a support ticket.");
    let supportticket2 = new Discord.RichEmbed()
      .setDescription("**Template for a Support Ticket**")
      .setColor("#148AFF")
      .addField("__**Description**__", "- OS\n- Phone\n- App Version")
      .addField("__**Actual Behavior**__", "*Example* \n There is a delay scrolling up the list than there is scrolling down")
      .addField("__**Expected Behavior (Optional)**__", "*Example*\nI should be able to scroll back up at the same rate and responsive that I scrolled down the list")
      .addField("__**Attachments**__", "*When applicable, attach the following:*\n- Logs\n- Video\n- Screenshots");

    return message.channel.send(supportticket1)
      .then(msg => {
        message.channel.send(supportticket2);
      });
  }

  if (cmd === `${prefix}findgpu`) {
    return message.channel.send("If you don’t know what GPU model you have, follow this easy process to find out:\n\n**1.** Search for “Device Manager” in your windows searchbar\n**2.** Open Device Manager (should be under Control Panel)\n**3.** Find the “Display Adapters” tab and double-click it\n**4.** 4. Your GPU model should be displayed there.");
  }

  if (cmd === `${prefix}help`) {
    let help = new Discord.RichEmbed()
      .setDescription("**List of Commands**")
      .setColor("#148AFF")
      .addField("__**?support**__", "View all of our support details, and the commands associated with them")
      .addField("__**?supportticket**__", "Find out the template to use when sending an email to our support")
      .addField("__**?systemreqs**__", "View what specs you need to use the iOS or Andriod app")
      .addField("__**?links**__", "View a list of all links related to the NMS Assistant")
      .addField("__**?translation**__", "Help with translating the app!")
      .addField("__**?faq**__", "Look for solutions to a problem you might have!")
      .addField("__**?guides**__", "Help create guides for the app!")
      .addField("__**?freshdesk**__", "Check out our support page!");

    return message.channel.send(help)
      .then(msg => {
        message.channel.send("Thank you for using Assistant for NMS!");
      })
  };

  if (cmd === `${prefix}logs`){
    message.channel.send("To find your Salad logs, first navigate to `%appdata%`. Then you want to go to `roaming` and then into the `Salad` folder. Your logs will be under the file `log.log` which looks like a .txt file!");
  }

  if (cmd === `${prefix}translation`){
    message.channel.send("If you are fluent in a language that isn't already implimented into the app, go to https://nmsassistant.com/tools/translate, or talk to @KhaozTopsy#7865 directly");
  }

  if (cmd === `${prefix}guides`){
    message.channel.send("If you would like to contribute your knowledge of NMS towards the app, head to https://nmsassistant.com/tools/guide and create a guide for us! If approved, this will then be featured in the guides section of the app");
  }

  if (cmd === `${prefix}no-earnings`){
    let noearningsEmbed = new Discord.RichEmbed()
    .setDescription("No Earnings")
    .setColor("##148AFF")
    .addField("If your app displays a zero earning rate there are several potential bugs you may be experiencing:", "1. Your Antivirus may be blocking Salad or ethminer.exe\n2. Your Graphics Card drivers may be outdated")
    .addField("These are fixable, and you can find solutions here:", "https://salad.zendesk.com/hc/en-us/categories/360001723991-Troubleshooting")
    .addField("However, if this does not solve your issue then Share Tracking is likely causing the irregularity in your earnings. For more info on share tracking and how it impacts Salad users, either type ?sharetracking or read this helpful guide:", "https://medium.com/@saladchefs/the-salad-guide-to-cryptocurrency-share-tracking-ce97763edf6");
    return message.channel.send(noearningsEmbed);
  }

  if (cmd === `${prefix}freshdesk`){
    let freshdeskEmbed = new Discord.RichEmbed()
    .setDescription("**Freshdesk Site**")
    .setColor("#148AFF")
    .addField("For help with bugs, please go to the Assistant for NMS site found here:", "**Click the new support ticket button, or read the knowledge base**\nhttps://nmsassistant.freshdesk.com")

    return message.channel.send(freshdeskEmbed);
      }
});

bot.login(botconfig.token);
