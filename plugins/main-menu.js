function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  const zack = 'https://files.catbox.moe/a23k6p.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `˼⚡˹↜ مـࢪحـبـا بـك/ي @${mentionId.split('@')[0]}
> ˼🪪˹↜ مــعــلــومــاتــك ↶
╮───────────────────⟢ـ
┆⚡↜ بـريـمـيـوم↞⌊ ${user.premiumTime > 0 ? 'مميز' : (isPrems ? 'ممـيز' : 'عادي') || 'عادي'} ⌉
┆⚜️↜ مـــســـتواك↞⌊ ${level} ⌉
┆💫↜ رتـبـتـك↞⌊ ${role} ⌉
┆🧰↜ الـخـبـرة↞⌊ ${exp} ⌉
┆💎↜ الـمـاس↞⌊ ${limit} ⌉
╯───────────────────⟢ـ
> ˼🤖˹↜ الــبــوت↶
╮───────────────────⟢ـ
┆⚙️ ↜اسـم الـبـوت↶﹝7rB AleX﹞
┆🪄 ↜الـمـطـور ↶﹝7rB AleX ＄＄＄ -﹞
┆📌 ↜الـتـشـغـيـل ↶﹝${uptime}﹞
┆🔖 ↜الــمــســتـخـدمـيـن ↶﹝${rtotalreg}﹞
╯───────────────────⟢ـ
> © 7rB 2025`,subtitle: "7rbAlex",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: 7rB } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'الـ قائمة',
                                            highlight_label: '7rB AleX -＄＄＄-',
                                            rows: [
                                                {
                                                    header: 'الـ قسم الاول',
                                                    title: 'قسم #الاعضاء',
                                                    description: '',
                                                    id: '.ق1'
                                                },
                                                {
                                                    header: 'الـ قسم التاني',
                                                    title: 'قسم #المشرفين',
                                                    description: '',
                                                    id: '.ق10'
                                                },
                                                {
                                                    header: 'الـ قسم التالت',
                                                    title: 'قسم #الدين',
                                                    description: '',
                                                    id: '.ق2'
                                                },
                                                {
                                                    header: 'الـ قسم الرابع',
                                                    title: 'قسم #المطور',
                                                    description: '',
                                                    id: '.ق3'
                                                },
                                                {
                                                    header: 'الـ قسم الخامس',
                                                    title: 'قسم #التنزيلات',
                                                    description: '',
                                                    id: '.ق4'
                                                },
                                                {
                                                    header: 'الـ قسم السادس',
                                                    title: 'قسم #الالعاب',
                                                    description: '',
                                                    id: '.ق5'
                                                },
                                                {
                                                    header: 'الـ قسم السابع',
                                                    title: 'قسم #التحويلات',
                                                    description: '',
                                                    id: '.ق6'
                                                },
                                                {
                                                    header: 'الـ قسم الثامن',
                                                    title: 'قسم #الذكاء الاصطناعي',
                                                    description: '',
                                                    id: '.ق7'
                                                },
                                                {
                                                    header: 'الـ قسم التاسع',
                                                    title: 'قسم #الدعم',
                                                    description: '',
                                                    id: '.ق8'
                                                },
                                                {
                                                    header: 'الـ قسم العاشر',
                                                    title: 'قسم #البحث',
                                                    description: '',
                                                    id: '.ق11'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈╎قـنـاة الــبــوت╎⌋","url":"https://whatsapp.com/channel/0029VaoOUTCA89MgywLh6s19","merchant_url":"https://whatsapp.com/channel/0029VaoOUTCA89MgywLh6s19"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['menu', 'مهام', 'اوامر','الاوامر','قائمة','القائمة']

export default handler;
