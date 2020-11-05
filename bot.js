//======================================( مكتبات )============================================

const Discord = require("discord.js");
const request = require("request");

//======================================( البوتات )============================================

const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();

//======================================( التوكينات )============================================

client1.login(process.env.TOKEN1);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);
client8.login(process.env.TOKEN8);
client9.login(process.env.TOKEN9);
client10.login(process.env.TOKEN10);

//======================================( الاعدادات )============================================

const prefix = "YOUR PREFIX HERE";
const idMaster = "YOUR ID HERE";

//======================================( المتغيرات )===========================================

var names = [
'!                            𝑭𝑨𐂂',
'!   𝐑𝐘    |    𝚁𝙾𝚉𝙰  🍭.',
'.Fearłésš💜🎼',
'!   𝐑𝐘 | مشاعـل',
'!     𝐑𝐘 | AMAL',
'!    🅻🅽🅳 | Q8ردبول ♔',
'!     𝐃𝐍 |  MQ ⚔️',
'!                    𝓓𝓢 | 𝐁𝐎𝐍𝐎𝐔𝐅',
'!   𝐑𝐘 | offッفجر 💎',
'!   𝐑𝐘 | عوجان',
'!   𝐑𝐘 | Fawaz',
'!              𝐃𝐍𝐃𝐎𝐍💎✨',
'!                 𝑶𝑺  | 𝐘𝐚𝐬𝐦𝐢𝐧 ❧',
'!          𝑶𝑺  | 𝐉𝐎𝐉𝐎 ✵',
'𝐋𝐨𝐥𝐀¹',
'!          𝑶𝑺  | MESHALL',
'!        🆁🅼 | 𝐌𝐀𝐑𝐈𝐀',
'!           𝑶𝑺  | 𝐌𝐲𝐥𝐚★',
'!          𝑶𝑺  |  فودكهــ ♕',
'Мирокс..',
'-DAꓤKϟ',
	'ˣᴸ CrePz .',
	'ᵀᴷ Special',
	'!  𝐌agic ♤',
'p̷e̷c̷i̷a̷l̷i̷s̷t̷',
'WH | KISHO',
'!                      乄QR乄L7N'
	
];

var msg = [
		'اي حاجة يابني',
		'احلي مسا',
		'يا مساء العسل',
		'منور يا زوق',
		'حلاوتها ام حسن',
		'ايه يبني',
		'ايه يا حب',
		'اعتقد كله فل',
		'طب عايز ايه',
		'ولا حاجة يبني',
		'كنت عبقري وعملتها ها ايه كمان',
		'الحلو اللي بهدلته الايام',
		'هيييييييييي',
		'ويويويويويوي يا ولاااا',
		'احلا حاجة في الحشيش ده انه مفهوش بزر',
		'اللي جه نضمه و اللي راح كسمكه في الماء لن تعود',
		'اموت انا والعب في الترسنة',
		'احبك يا اهلي',
		'مين افسح التنين',
		'ياما نفسي الزهر يلعب واقابل واحدة مؤلعب',
		'اموت انا والعب في الترسنة',
		'الهيوخ هيوخ تحكم يا فجيتس',
		'طعم الجزر بعد الشيكولاته ماسخ مينفعش',
		'اهدي كدا وقومي اقلعي هخه',
		'شوفت الزمالك عملوا ايه',
		'ايه اللي عملوه يسطا',
		'بيقولوا بيعمل حاجات خرافية',
		'فاكس يا عم الاهلي فوق الجميع',
		'الاهلي ملف الكورة',
		'مليش في الكورة',
		'كفاية صداع'
	];

var avtars = [
  'https://cdn.discordapp.com/attachments/716393768873623572/742433532424749176/image2.jpg',
  'https://cdn.discordapp.com/attachments/717114741121876009/717117059573481482/ec29782c5019212a6a0a81e80651a364.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574640922296330/image0.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574641203445760/image1.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574640570105897/image1.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574640821501962/image2.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574641731796992/image4.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574642125930497/image5.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574643417907240/image8.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668574643740737549/image9.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881878350036992/image0.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881878790570034/image1.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881879117856769/image2.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881879469916220/image3.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881879730094100/image4.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881880019632129/image5.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881880321359882/image6.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668881881152094230/image8.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/668925609963159558/image0.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/669155752128282634/image4.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/669155752530804747/image5.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/671936010246160384/image1.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/671935742120951819/image1.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/671935741475160124/image0.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/671910853657886730/image5.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/671910852206788609/image1.jpg',
  'https://media.discordapp.net/attachments/654999835547795486/671910851938222090/image0.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671896884696186890/5d1c42a763260ad93b96fa28d4af39d0.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671909101504299009/image0.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671377825017888778/image6.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671377825823195146/image8.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671377824044679168/image3.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671377823801278464/image2.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671377823365333012/image1.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671377823096766484/image0.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671241308374827008/image3.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/671014973966647337/image9.jpg',
  'https://media.discordapp.net/attachments/654999489714847764/670667041228718084/image0.jpg',
  'https://media.discordapp.net/attachments/655053180874522627/671636565528674363/image0-2.jpg',
  'https://media.discordapp.net/attachments/664654742726639621/671566612951728149/image8.jpg',
  'https://media.discordapp.net/attachments/664654742726639621/667562034048663582/image6.jpg',
  'https://media.discordapp.net/attachments/664654742726639621/667562033880760320/image5.jpg',
  'https://media.discordapp.net/attachments/664654742726639621/667562033314791430/image4.jpg',
  'https://media.discordapp.net/attachments/664654742726639621/667562033088167992/image3.jpg',
  'https://media.discordapp.net/attachments/664654742726639621/667562032773464101/image2.jpg',
  'https://cdn.discordapp.com/attachments/716830596474601593/742428593778327600/image0.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428594269323384/image2.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428594541953094/image3.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428594961252442/image5.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428595309248732/image7.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428595603111977/image8.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428603014185031/image1.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428603215773777/image2.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/742428603756707860/image4.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/743857148026552440/e3f3e4bc3804755414bb75f0147b05ca.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/743857641289285683/73d72718ab3840c6ba2acb2f39936450.jpg',
  'https://media.discordapp.net/attachments/716830596474601593/718611550084137010/82946908_212252146583662_3717657410598094796_n.jpg',
  'https://media.discordapp.net/attachments/716392989340991559/742427873637564457/image3.jpg'
];

var games = [
	"Minecraft",
    "League of legends",
    "Fortnite",
    "VALORANT",
    'Apex Legends',
    'Rainbow Six Siege',
    'Badlion Client',
    'Overwatch',
    'Titanfall 2'
];

//=========================================( الزمن )=============================================

// الوقت
let second = 1000;
let minute = 60000;
let hour = minute*60;
let day = hour*24;

//=======================================( الدوال )==============================================

async function joinServer(invite, message) {
  await (require("request"))(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      headers: {
      authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        console.log(body);
         if (body.includes("Unknown Invite")) return console.log("[ERROR] - Unkown Invite.");
         if (body.includes("banned")) return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
        await message.author.send('دخلت السيرفر يا قلبي');
      }
    }
  );
};

async function addFriend(id, message) {
try {
  let user = await message.client.fetchUser(id);
  await (require("request"))(
  {
    url: `https://discordapp.com/api/v6/users/@me/relationships`,
    method: "POST",
    json: true,
    headers: {
      "Content-Type": "application/json",
      "authorization": message.client.token
    }, 
    body: {
      "username": user.username,
      "discriminator": parseInt(user.discriminator)
    }
  }, async (err, res, body) => {
      if (err) {
        await console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        await console.log(body? body.message : "No status message.");
        await console.log(`[INFO] - Done.`);
      }
  })
} catch(e) {
  console.log(`[ERROR] - ${e}`)
}
};

//======================================( التحكم في البوتات )====================================

// BOT 1
client1.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
  if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
    if (message.channel.guild) return;
    var text = message.content.split(' ').slice(0).join(' ');
    client1.users.get(`${idMaster}`).send(text);
    console.log(text);
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content === "help"){
    client1.users.get(`${idMaster}`)
.send({embed: new Discord.RichEmbed()
                .setTitle(`**\`HELP\`**`)
                .setColor("RANDOM")
                .addField("😍 Change Avatar", [`\`${prefix}setAvatar\``], true)
                .addField("🎲 Change NickName", [`\`${prefix}setNick\``], true)
                .addField("🔥 Spam", [`\`${prefix}spam\``], true)
                .addField("💫 Test", [`\`scan\``], true)
                .addField("️️♨️ Change Playing", [`\`${prefix}setPlaying\``], true)
                .addField("👑 Change Listening", [`\`${prefix}setListening\``], true)
                .addField("🥴 Change Streaming", [`\`${prefix}setStreaming\``], true)
                .addField("✨ Change Watching", [`\`${prefix}setWatching\``], true)
                .addField("😉 Change Status", [`\`${prefix}setStatus\``], true)
				.addField("🔥 stayVoice", [`\`${prefix}stayVoice\``], true)
				
            });    
};
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client1.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client1.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd1') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r1') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p1') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c1")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s1")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text).then(m => {m.delete(5000)});
  };
  if (message.content === 'scan') {
        message.react("1️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client1.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client1.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client1.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client1.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client1.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client1.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
	message.channel.send(`#credit`);
	}, 5*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
	}, 5*second);	
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client1.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
   if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  });

// BOT 2
client2.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
	if (message.channel.guild) return;
	var text = message.content.split(' ').slice(0).join(' ');
	client2.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (!idMaster.includes(message.author.id)) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client2.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client2.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd2') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r2') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p2') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c2")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("2️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client2.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client2.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client2.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client2.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client2.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client2.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 35*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 35*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client2.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  });

// BOT 3
client3.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
  if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
		var text = message.content.split(' ').slice(0).join(' ');
		client3.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client3.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client3.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd3') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r3') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p3') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c3")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s3")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("3️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client3.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client3.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client3.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client3.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client3.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client3.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 65*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 65*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client3.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  
});

// BOT 4
client4.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
		var text = message.content.split(' ').slice(0).join(' ');
		client4.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client4.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client4.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd4') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r4') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p4') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c4")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("4️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client4.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client4.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client4.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client4.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client4.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client4.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 95*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 95*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client4.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  
  });

// BOT 5
client5.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
		var text = message.content.split(' ').slice(0).join(' ');
		client5.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client5.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client5.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd5') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r5') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p5') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c5")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s5")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("5️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client5.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client5.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client5.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client5.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client5.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client5.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 125*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 125*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client5.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  });

// BOT 6
client6.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
	var text = message.content.split(' ').slice(0).join(' ');
	client6.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client6.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client6.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd6') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r6') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p6') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c6")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s6")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("6️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client6.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client6.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client6.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client6.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client6.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client6.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 155*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 155*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client6.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  });

// BOT 7
client7.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
		var text = message.content.split(' ').slice(0).join(' ');
		client7.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client7.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client7.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd7') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r7') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p7') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c7")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s7")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("7️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client7.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client7.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client7.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client7.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client7.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client7.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 185*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 185*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client7.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  });

// BOT 8
client8.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
		var text = message.content.split(' ').slice(0).join(' ');
		client8.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client8.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client8.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd8') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r8') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p8') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c8")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s8")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("8️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client8.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client8.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client8.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client8.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client8.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client8.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 215*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 215*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client8.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
  });

// BOT 9
client9.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
		var text = message.content.split(' ').slice(0).join(' ');
		client9.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client9.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client9.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd9') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r9') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p9') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("c9")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith("s9")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("9️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client9.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client9.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client9.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client9.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client9.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client9.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 245*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});	
    }, 245*second);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client2.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
});

// BOT 10
client10.on('message', message => {
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  };
  if(message.content.toLowerCase().includes("giveaway")) { 
  if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { 
      message.react("🎉") 
    } 
  }; 
    if (message.author.id == "282859044593598464" || message.author.id == "567703512763334685") {
		if (message.channel.guild) return;
		var text = message.content.split(' ').slice(0).join(' ');
		client10.users.get(`${idMaster}`).send(text);    
};
  if (message.author.id !== `${idMaster}`) return;
  if (message.content.startsWith(prefix + "setAvatar")) {
    let args = avtars[Math.floor(Math.random() * avtars.length)];
    client10.user.setAvatar(args)
  };
  if (message.content.startsWith(prefix + "setNick")) {
    let args = names[Math.floor(Math.random() * names.length)];
    let user = client10.user
    message.guild.member(user).setNickname(args)
  };
  if (message.content === 'd10') {
message.channel.send('#daily').then(m => {m.delete(5000)});
  };
  if (message.content === 'r10') {
    message.channel.send(`#rep <@${idMaster}>`).then(m => {m.delete(5000)});
  };
  if (message.content === 'p10') {
message.channel.send('#profile').then(m => {m.delete(5000)});
  };
  if (message.content.startsWith(prefix + "c10")) {
    var credit = message.content.split(' ').slice(1).join(' ');
    if (!credit) return message.channel.send('#credits').then(m => {m.delete(5000)});
    message.channel.send(`#credits <@${idMaster}> ${credit}`).then(m => {m.delete(5000)});
  };
  if (message.content.startsWith(prefix + "s10")) {
    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
  };
  if (message.content === 'scan') {
        message.react("10️⃣")
        message.react("☑️")
    };
  if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 25001; x++) {
        let send = msg[Math.floor(Math.random() * msg.length)];
        message.channel.send(`** ${send} **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      };
  if (!message.channel.guild || message.channel.guild){
  if (message.author.id !== `${idMaster}`) return;
  let argresult = message.content.split(` `).slice(1).join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    client10.user.setGame(argresult, "https://www.twitch.tv/dragoncommunitybot");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client10.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client10.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client10.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult) return client10.users.get(`${idMaster}`).send(
          "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :star: أختر أحد الحالات"
      );
    client10.user.setStatus(argresult);
  }
  };
	if (message.content === prefix + "c-all") {
	setTimeout(() => {
    message.channel.send(`#credit`).then(m => {m.delete(5000)});
    }, 275*second);
	setTimeout(() => {	
		client10.users.get(`${idMaster}`).send("**```fix\nخلاص كلنا عرضنا الرصيد تعالي شوف يا حب```**");
    }, 280*second);
	};
	if (message.content === prefix + "d-all") {
	setTimeout(() => {	
		message.channel.send(`#daily`).then(m => {m.delete(5000)});
    }, 275*second);
	setTimeout(() => {	
		client10.users.get(`${idMaster}`).send("**```fix\nيلا اعمل ديلي تاني خلصت ال 24 ساعة يا حب```**");
    }, 275*second+1*day);
	};
  if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  };
  if (message.content.startsWith(prefix + "stayVoice")) {
    var server = message.content.split(' ').slice(1)[0];
    var channel = message.content.split(' ').slice(2).join();
    if (!server && !channel) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    } else if (isNaN(server) && isNaN(channel)) {
      if (!message.member.voiceChannel) return;
      channel = message.member.voiceChannel.id;
      server = message.guild.id
    };
    console.log("Server : ",server," | Channel :",channel);
    let serverID = client2.guilds.get(server);
    let channelID = serverID.channels.get(channel);
  if(channelID.type === 'voice') {
    channelID.join();
  }
  };
  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  };
	});

//======================================( اللوج )============================================

client1.on("ready", function() {
  console.log(`Logged in as BOT 1 ☑️`);
  console.log("")
  setInterval(() => {
	client1.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client2.on("ready", function() {
  console.log(`Logged in as BOT 2 ☑️`);
  console.log("")
  setInterval(() => {
	client2.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client3.on("ready", function() {
  console.log(`Logged in as BOT 3 ☑️`);
  console.log("")
  setInterval(() => {
	client3.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client4.on("ready", function() {
  console.log(`Logged in as BOT 4 ☑️`);
  console.log("")
  setInterval(() => {
	client4.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client5.on("ready", function() {
  console.log(`Logged in as BOT 5 ☑️`);
  console.log("")
  setInterval(() => {
	client5.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client6.on("ready", function() {
  console.log(`Logged in as BOT 6 ☑️`);
  console.log("")
  setInterval(() => {
	client6.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client7.on("ready", function() {
  console.log(`Logged in as BOT 7 ☑️`);
  console.log("")
  setInterval(() => {
	client7.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client8.on("ready", function() {
  console.log(`Logged in as BOT 8 ☑️`);
  console.log("")
  setInterval(() => {
	client8.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
 });
client9.on("ready", function() {
  console.log(`Logged in as BOT 9 ☑️`);
  console.log("")
  setInterval(() => {
	client9.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});
client10.on("ready", function() {
  console.log(`Logged in as BOT 10 ☑️`);
  console.log("")
  setInterval(() => {
	client10.user.setActivity(games[Math.floor(Math.random() * games.length)], { type: "PLAYING" });
  }, minute*60);
});

//======================================( اللوج )============================================
