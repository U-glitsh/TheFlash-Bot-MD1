let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*نعم ي عيوني*`;
await conn.sendMessage(m.chat, { react: { text: '🙌', key: m.key } })
    conn.sendFile(m.chat, 'https://files.catbox.moe/wpahb6.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^حرب$/i;
handler.command = new RegExp;

export default handler;
