let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = '*<عشان تشوف الاوامر بتاعت البوت اكتب <.الاوامر*';
await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
    conn.sendFile(m.chat, 'https://files.catbox.moe/wpahb6.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^بوت$/i;
handler.command = new RegExp;

export default handler;
