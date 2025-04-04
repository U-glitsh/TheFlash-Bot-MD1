let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*عيب يبني*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🐧', key: m.key } })
  }

   if (/^عبيط|يا عبيط$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*انت ابوك علمك كدا فالبيت؟*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*-*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key } })
   }
    if (/^😂$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*تدوم ي قلبي*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
}
    if (/^كسمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*كسم مين يبن المتناكة*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
}

 if (/^يابوت|يا بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*نعم ي قلب البوت*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
 } 

   if (/^خخ$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*-*',m) //wm, null, [['Menu', '#menu']], m) botones :v
await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
   }

   if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'  *-*',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^بحبك|احبك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*انا اكتر ي قلبي*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^بوت زق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*-*', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^همممم/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*همم اي ي حبيب قلبي*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*-*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*-*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*Playing*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^صباح الخير$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*صباح النور*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `**`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
 } 
  
 if (/^اخرس|اسكت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اسكت انت*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `ـ`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اوي*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 } 
  
 if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته ♥*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 
 } 
     
 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*يعم ماشي*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^🐤$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐤🐤🐤🐤🐤`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^اه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*الــشــارع الــي وراه 😂💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حد ناداك؟ 🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `*الحمد لله و انت 🐧؟*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
} 

 if (/^تتجوزيني|تتجوزيني؟$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بــس يــعــم بــتــكــســف 😭💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 }
  
 } 
 return !0 } 
 export default handler
