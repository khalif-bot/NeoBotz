/*
 - Creator Base Dika Ardnt
 - Created By Lexxy Official
 - Buy No Enc? Harga Murmer
 - Chat Wa : 082279915237
*/

const _0x5686f3=_0x1e23;(function(_0x38b71f,_0x5d11c6){const _0x42fdcc=_0x1e23,_0x54e177=_0x38b71f();while(!![]){try{const _0x2aa606=parseInt(_0x42fdcc(0x193))/0x1+-parseInt(_0x42fdcc(0x1ce))/0x2*(-parseInt(_0x42fdcc(0x1d5))/0x3)+-parseInt(_0x42fdcc(0x1bd))/0x4*(-parseInt(_0x42fdcc(0x170))/0x5)+parseInt(_0x42fdcc(0x157))/0x6*(-parseInt(_0x42fdcc(0x15c))/0x7)+parseInt(_0x42fdcc(0x17f))/0x8+parseInt(_0x42fdcc(0x1d9))/0x9*(-parseInt(_0x42fdcc(0x171))/0xa)+-parseInt(_0x42fdcc(0x1d3))/0xb*(-parseInt(_0x42fdcc(0x184))/0xc);if(_0x2aa606===_0x5d11c6)break;else _0x54e177['push'](_0x54e177['shift']());}catch(_0x442a68){_0x54e177['push'](_0x54e177['shift']());}}}(_0x16b9,0x90d8e),require(_0x5686f3(0x16f)));const {default:mansConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@adiwajshing/baileys'),{state,saveState}=useSingleFileAuthState('./'+sessionName+'.json'),pino=require(_0x5686f3(0x16c)),fs=require('fs'),chalk=require(_0x5686f3(0x1c0)),FileType=require(_0x5686f3(0x138)),path=require('path'),CFonts=require('cfonts'),{exec,spawn,execSync}=require(_0x5686f3(0x199)),moment=require(_0x5686f3(0x169)),PhoneNumber=require(_0x5686f3(0x194)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x5686f3(0x190)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x5686f3(0x1b9)),{color}=require('./baileys/color'),store=makeInMemoryStore({'logger':pino()[_0x5686f3(0x1ae)]({'level':_0x5686f3(0x1cb),'stream':_0x5686f3(0x1a2)})});async function startMans(){const _0xb69f25=_0x5686f3;console['clear'](),CFonts[_0xb69f25(0x1e7)](_0xb69f25(0x1cc),{'font':'block','align':'left','gradient':[_0xb69f25(0x136),'magenta']}),console[_0xb69f25(0x1de)]('=>\x20Source\x20Code\x20Version\x20NeoBotz\x20v1.0'),console['log']('=>\x20Author\x20By\x20Lexxy\x20Official');let {version:_0x3201e2,isLatest:_0x1d365b}=await fetchLatestBaileysVersion();const _0x41a171=mansConnect({'logger':pino({'level':_0xb69f25(0x1cb)}),'printQRInTerminal':!![],'browser':[_0xb69f25(0x17a),_0xb69f25(0x15d),_0xb69f25(0x160)],'auth':state,'version':_0x3201e2});return store['bind'](_0x41a171['ev']),_0x41a171['ev']['on']('messages.upsert',async _0x456f2e=>{const _0x24be59=_0xb69f25;try{mek=_0x456f2e['messages'][0x0];if(!mek[_0x24be59(0x144)])return;mek[_0x24be59(0x144)]=Object[_0x24be59(0x1ba)](mek['message'])[0x0]==='ephemeralMessage'?mek[_0x24be59(0x144)][_0x24be59(0x18e)][_0x24be59(0x144)]:mek[_0x24be59(0x144)];if(mek['key']&&mek['key']['remoteJid']===_0x24be59(0x17b))return;if(!_0x41a171[_0x24be59(0x187)]&&!mek[_0x24be59(0x16a)][_0x24be59(0x1c6)]&&_0x456f2e[_0x24be59(0x1bf)]===_0x24be59(0x135))return;if(mek['key']['id']['startsWith'](_0x24be59(0x1d0))&&mek[_0x24be59(0x16a)]['id'][_0x24be59(0x15f)]===0x10)return;m=smsg(_0x41a171,mek,store),require(_0x24be59(0x196))(_0x41a171,m,_0x456f2e,store);}catch(_0xc54444){console['log'](_0xc54444);}}),_0x41a171[_0xb69f25(0x1a3)]=(_0x119a5b,_0x3add0a=![])=>{const _0x56cfe6=_0xb69f25;id=_0x41a171[_0x56cfe6(0x1d8)](_0x119a5b),_0x3add0a=_0x41a171[_0x56cfe6(0x1bb)]||_0x3add0a;let _0x9b4f25;if(id[_0x56cfe6(0x177)](_0x56cfe6(0x1ac)))return new Promise(async _0x351ee3=>{const _0x4e5e76=_0x56cfe6;_0x9b4f25=store[_0x4e5e76(0x158)][id]||{};if(!(_0x9b4f25['name']||_0x9b4f25[_0x4e5e76(0x139)]))_0x9b4f25=_0x41a171[_0x4e5e76(0x17c)](id)||{};_0x351ee3(_0x9b4f25[_0x4e5e76(0x131)]||_0x9b4f25[_0x4e5e76(0x139)]||PhoneNumber('+'+id[_0x4e5e76(0x15b)](_0x4e5e76(0x176),''))['getNumber']('international'));});else _0x9b4f25=id===_0x56cfe6(0x1ad)?{'id':id,'name':_0x56cfe6(0x14b)}:id===_0x41a171[_0x56cfe6(0x1d8)](_0x41a171[_0x56cfe6(0x186)]['id'])?_0x41a171[_0x56cfe6(0x186)]:store[_0x56cfe6(0x158)][id]||{};return(_0x3add0a?'':_0x9b4f25[_0x56cfe6(0x131)])||_0x9b4f25[_0x56cfe6(0x139)]||_0x9b4f25[_0x56cfe6(0x13f)]||PhoneNumber('+'+_0x119a5b['replace'](_0x56cfe6(0x176),''))[_0x56cfe6(0x15a)]('international');},_0x41a171['ev']['on'](_0xb69f25(0x1a7),async _0x18c188=>{const _0x511893=_0xb69f25;try{ppgc=await _0x41a171[_0x511893(0x175)](_0x18c188[0x0]['id'],_0x511893(0x1d2));}catch{ppgc=_0x511893(0x1cd);}let _0x55e149={'url':ppgc};if(_0x18c188[0x0][_0x511893(0x1c9)]==!![])_0x41a171[_0x511893(0x18f)](_0x18c188[0x0]['id'],_0x511893(0x156),_0x511893(0x1e5),_0x55e149,[]);else{if(_0x18c188[0x0][_0x511893(0x1c9)]==![])_0x41a171[_0x511893(0x18f)](_0x18c188[0x0]['id'],_0x511893(0x149),_0x511893(0x1e5),_0x55e149,[]);else{if(_0x18c188[0x0][_0x511893(0x1d4)]==!![])_0x41a171[_0x511893(0x18f)](_0x18c188[0x0]['id'],_0x511893(0x12c),_0x511893(0x1e5),_0x55e149,[]);else _0x18c188[0x0]['restrict']==![]?_0x41a171[_0x511893(0x18f)](_0x18c188[0x0]['id'],'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aInfo\x20group\x20telah\x20dibuka,\x20Sekarang\x20peserta\x20dapat\x20mengedit\x20info\x20group\x20!','Group\x20Settings\x20Change\x20Message',_0x55e149,[]):_0x41a171[_0x511893(0x18f)](_0x18c188[0x0]['id'],_0x511893(0x1bc)+_0x18c188[0x0][_0x511893(0x139)]+'*','Group\x20Settings\x20Change\x20Message',_0x55e149,[]);}}}),_0x41a171['ev']['on'](_0xb69f25(0x1ab),async _0x4c2f3a=>{const _0xc654f5=_0xb69f25;console[_0xc654f5(0x1de)](_0x4c2f3a);if(!wlcm[_0xc654f5(0x168)](_0x4c2f3a['id']))return;try{let _0x4d2499=await _0x41a171[_0xc654f5(0x17c)](_0x4c2f3a['id']),_0x5c62ac=_0x4c2f3a[_0xc654f5(0x134)];for(let _0x1695eb of _0x5c62ac){try{ppuser=await _0x41a171[_0xc654f5(0x175)](_0x1695eb,'image');}catch{ppuser='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}try{ppgroup=await _0x41a171[_0xc654f5(0x175)](_0x4c2f3a['id'],_0xc654f5(0x1d2));}catch{ppgroup=_0xc654f5(0x166);}let _0x3e74ba=await _0x41a171['getName'](_0x1695eb);memb=_0x4d2499['participants'][_0xc654f5(0x15f)],WCome=await getBuffer(_0xc654f5(0x1e3)+encodeURIComponent(_0x3e74ba)+_0xc654f5(0x12f)+encodeURIComponent(_0x4d2499['subject'])+_0xc654f5(0x14f)+encodeURIComponent(ppgroup)+'&totalMem='+encodeURIComponent(memb)+'&pepeUser='+encodeURIComponent(ppuser)+_0xc654f5(0x1b8)),GBye=await getBuffer(_0xc654f5(0x1a5)+encodeURIComponent(_0x3e74ba)+_0xc654f5(0x12f)+encodeURIComponent(_0x4d2499[_0xc654f5(0x139)])+_0xc654f5(0x14f)+encodeURIComponent(ppgroup)+_0xc654f5(0x197)+encodeURIComponent(memb)+_0xc654f5(0x1b4)+encodeURIComponent(ppuser)+'&bege=https://telegra.ph/file/d561876a112fea9777677.jpg&apikey=hardianto');if(_0x4c2f3a[_0xc654f5(0x150)]==_0xc654f5(0x180))_0x41a171[_0xc654f5(0x154)](_0x4c2f3a['id'],{'image':{'url':_0xc654f5(0x13d)},'contextInfo':{'mentionedJid':[_0x1695eb]},'caption':_0xc654f5(0x147)+_0x1695eb['split']('@')[0x0]+'!!'});else _0x4c2f3a[_0xc654f5(0x150)]==_0xc654f5(0x151)&&_0x41a171[_0xc654f5(0x154)](_0x4c2f3a['id'],{'image':{'url':_0xc654f5(0x13d)},'contextInfo':{'mentionedJid':[_0x1695eb]},'caption':'@'+_0x1695eb[_0xc654f5(0x1b5)]('@')[0x0]+_0xc654f5(0x133)+_0x4d2499[_0xc654f5(0x139)]});}}catch(_0xd5f8af){console[_0xc654f5(0x1de)](_0xd5f8af);}}),_0x41a171[_0xb69f25(0x1d8)]=_0x28c2b=>{const _0x3abbb8=_0xb69f25;if(!_0x28c2b)return _0x28c2b;if(/:\d+@/gi[_0x3abbb8(0x13c)](_0x28c2b)){let _0x53d1fb=jidDecode(_0x28c2b)||{};return _0x53d1fb['user']&&_0x53d1fb[_0x3abbb8(0x1c2)]&&_0x53d1fb[_0x3abbb8(0x186)]+'@'+_0x53d1fb[_0x3abbb8(0x1c2)]||_0x28c2b;}else return _0x28c2b;},_0x41a171['ev']['on'](_0xb69f25(0x1a9),_0x48e37e=>{const _0x463731=_0xb69f25;for(let _0xa8b870 of _0x48e37e){let _0x787963=_0x41a171[_0x463731(0x1d8)](_0xa8b870['id']);if(store&&store[_0x463731(0x158)])store[_0x463731(0x158)][_0x787963]={'id':_0x787963,'name':_0xa8b870['notify']};}}),_0x41a171[_0xb69f25(0x188)]=async(_0x2d9677,_0x28214b,_0x2ab43f='',_0x28c416={})=>{const _0x1c9448=_0xb69f25;let _0x352a11=[];for(let _0x11f274 of _0x28214b){_0x352a11[_0x1c9448(0x19a)]({'displayName':await _0x41a171[_0x1c9448(0x1a3)](_0x11f274+_0x1c9448(0x176)),'vcard':_0x1c9448(0x1ca)+await _0x41a171[_0x1c9448(0x1a3)](_0x11f274+_0x1c9448(0x176))+_0x1c9448(0x16b)+await _0x41a171[_0x1c9448(0x1a3)](_0x11f274+_0x1c9448(0x176))+_0x1c9448(0x142)+_0x11f274+':'+_0x11f274+_0x1c9448(0x1a8)});}_0x41a171[_0x1c9448(0x154)](_0x2d9677,{'contacts':{'displayName':_0x352a11[_0x1c9448(0x15f)]+'\x20Kontak','contacts':_0x352a11},..._0x28c416},{'quoted':_0x2ab43f});},_0x41a171[_0xb69f25(0x19f)]=_0xcdcb=>{const _0x371a45=_0xb69f25;return _0x41a171[_0x371a45(0x13b)]({'tag':'iq','attrs':{'to':_0x371a45(0x176),'type':_0x371a45(0x148),'xmlns':_0x371a45(0x16e)},'content':[{'tag':_0x371a45(0x16e),'attrs':{},'content':Buffer[_0x371a45(0x1be)](_0xcdcb,'utf-8')}]}),_0xcdcb;},_0x41a171[_0xb69f25(0x187)]=!![],_0x41a171[_0xb69f25(0x183)]=_0x36daed=>smsg(_0x41a171,_0x36daed,store),_0x41a171['ev']['on']('connection.update',async _0x375f90=>{const _0x5456d9=_0xb69f25,{connection:_0x1782f0,lastDisconnect:_0xe49508}=_0x375f90;if(_0x1782f0==='close'){let _0x230419=_0xe49508[_0x5456d9(0x14d)]?_0xe49508?.[_0x5456d9(0x14d)]?.[_0x5456d9(0x19c)]['statusCode']:0x0;if(_0x230419===DisconnectReason[_0x5456d9(0x173)])console[_0x5456d9(0x1de)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),process[_0x5456d9(0x13e)]();else{if(_0x230419===DisconnectReason[_0x5456d9(0x1e4)])console[_0x5456d9(0x1de)]('Connection\x20closed,\x20reconnecting....'),startMans();else{if(_0x230419===DisconnectReason['connectionLost'])console['log']('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startMans();else{if(_0x230419===DisconnectReason[_0x5456d9(0x1d6)])console[_0x5456d9(0x1de)](_0x5456d9(0x130)),process[_0x5456d9(0x13e)]();else{if(_0x230419===DisconnectReason[_0x5456d9(0x181)])console[_0x5456d9(0x1de)](_0x5456d9(0x1df)),process['exit']();else{if(_0x230419===DisconnectReason[_0x5456d9(0x19d)])console[_0x5456d9(0x1de)](_0x5456d9(0x14e)),startMans();else _0x230419===DisconnectReason[_0x5456d9(0x164)]?(console[_0x5456d9(0x1de)](_0x5456d9(0x167)),startMans()):console[_0x5456d9(0x1de)](_0x5456d9(0x1a4)+_0x230419+'|'+_0x1782f0);}}}}}}console[_0x5456d9(0x1de)](_0x5456d9(0x1e0),_0x375f90);}),_0x41a171['ev']['on'](_0xb69f25(0x165),saveState),_0x41a171[_0xb69f25(0x18f)]=async(_0xc9ac0c,_0x23e6a5='',_0x378684='',_0x5e5c28,_0x365a3d=[],_0x2880eb,_0x42509b={})=>{const _0x2137cb=_0xb69f25;let _0x1fbc23=await prepareWAMessageMedia({'image':_0x5e5c28,'jpegThumbnail':_0x2880eb},{'upload':_0x41a171['waUploadToServer']});var _0x50cccd=generateWAMessageFromContent(m[_0x2137cb(0x15e)],proto['Message'][_0x2137cb(0x191)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x1fbc23[_0x2137cb(0x14c)],'hydratedContentText':_0x23e6a5,'hydratedFooterText':_0x378684,'hydratedButtons':_0x365a3d}}}),_0x42509b);_0x41a171[_0x2137cb(0x18c)](_0xc9ac0c,_0x50cccd[_0x2137cb(0x144)],{'messageId':_0x50cccd['key']['id']});},_0x41a171['sendButtonText']=(_0x2f2cef,_0x418684=[],_0xea62e5,_0x122893,_0x2fe7aa='',_0x120e50={})=>{let _0x168821={'text':_0xea62e5,'footer':_0x122893,'buttons':_0x418684,'headerType':0x2,..._0x120e50};_0x41a171['sendMessage'](_0x2f2cef,_0x168821,{'quoted':_0x2fe7aa,..._0x120e50});},_0x41a171[_0xb69f25(0x137)]=(_0x4f6089,_0x18ecb4,_0x1e4535='',_0x50b28e)=>_0x41a171[_0xb69f25(0x154)](_0x4f6089,{'text':_0x18ecb4,..._0x50b28e},{'quoted':_0x1e4535}),_0x41a171[_0xb69f25(0x1b2)]=async(_0x1f5ce5,_0x1c8d13,_0xcac1ff='',_0x16c1af='',_0x39bbe2)=>{const _0x202b1a=_0xb69f25;let _0x373932=Buffer['isBuffer'](_0x1c8d13)?_0x1c8d13:/^data:.*?\/.*?;base64,/i[_0x202b1a(0x13c)](_0x1c8d13)?Buffer['from'](_0x1c8d13[_0x202b1a(0x1b5)]`,`[0x1],_0x202b1a(0x1dd)):/^https?:\/\//[_0x202b1a(0x13c)](_0x1c8d13)?await await getBuffer(_0x1c8d13):fs[_0x202b1a(0x141)](_0x1c8d13)?fs[_0x202b1a(0x152)](_0x1c8d13):Buffer[_0x202b1a(0x159)](0x0);return await _0x41a171[_0x202b1a(0x154)](_0x1f5ce5,{'image':_0x373932,'caption':_0xcac1ff,..._0x39bbe2},{'quoted':_0x16c1af});},_0x41a171[_0xb69f25(0x1e1)]=async(_0x448e09,_0x583f7c,_0x4a320b='',_0x45f075='',_0x1fe3d8=![],_0x10eeff)=>{const _0xe00563=_0xb69f25;let _0xf1b55=Buffer[_0xe00563(0x1c5)](_0x583f7c)?_0x583f7c:/^data:.*?\/.*?;base64,/i[_0xe00563(0x13c)](_0x583f7c)?Buffer[_0xe00563(0x1be)](_0x583f7c[_0xe00563(0x1b5)]`,`[0x1],_0xe00563(0x1dd)):/^https?:\/\//[_0xe00563(0x13c)](_0x583f7c)?await await getBuffer(_0x583f7c):fs[_0xe00563(0x141)](_0x583f7c)?fs[_0xe00563(0x152)](_0x583f7c):Buffer['alloc'](0x0);return await _0x41a171['sendMessage'](_0x448e09,{'video':_0xf1b55,'caption':_0x4a320b,'gifPlayback':_0x1fe3d8,..._0x10eeff},{'quoted':_0x45f075});},_0x41a171[_0xb69f25(0x163)]=async(_0x4ec8ca,_0x5d5714,_0x119f91='',_0x105362=![],_0x43ea5b)=>{const _0x2daeaa=_0xb69f25;let _0xbd837e=Buffer[_0x2daeaa(0x1c5)](_0x5d5714)?_0x5d5714:/^data:.*?\/.*?;base64,/i[_0x2daeaa(0x13c)](_0x5d5714)?Buffer['from'](_0x5d5714['split']`,`[0x1],'base64'):/^https?:\/\//[_0x2daeaa(0x13c)](_0x5d5714)?await await getBuffer(_0x5d5714):fs[_0x2daeaa(0x141)](_0x5d5714)?fs['readFileSync'](_0x5d5714):Buffer[_0x2daeaa(0x159)](0x0);return await _0x41a171[_0x2daeaa(0x154)](_0x4ec8ca,{'audio':_0xbd837e,'ptt':_0x105362,..._0x43ea5b},{'quoted':_0x119f91});},_0x41a171[_0xb69f25(0x18b)]=async(_0x5504d1,_0x4dfb67,_0x69dbbc,_0x37573c={})=>_0x41a171[_0xb69f25(0x154)](_0x5504d1,{'text':_0x4dfb67,'contextInfo':{'mentionedJid':[..._0x4dfb67['matchAll'](/@(\d{0,16})/g)][_0xb69f25(0x1a6)](_0x379b59=>_0x379b59[0x1]+_0xb69f25(0x176))},..._0x37573c},{'quoted':_0x69dbbc}),_0x41a171['sendImageAsSticker']=async(_0x89ce57,_0x504123,_0x17fd6f,_0x21cc9f={})=>{const _0x50070b=_0xb69f25;let _0x121555=Buffer[_0x50070b(0x1c5)](_0x504123)?_0x504123:/^data:.*?\/.*?;base64,/i[_0x50070b(0x13c)](_0x504123)?Buffer[_0x50070b(0x1be)](_0x504123['split']`,`[0x1],_0x50070b(0x1dd)):/^https?:\/\//[_0x50070b(0x13c)](_0x504123)?await await getBuffer(_0x504123):fs[_0x50070b(0x141)](_0x504123)?fs[_0x50070b(0x152)](_0x504123):Buffer['alloc'](0x0),_0x27fa15;return _0x21cc9f&&(_0x21cc9f[_0x50070b(0x132)]||_0x21cc9f['author'])?_0x27fa15=await writeExifImg(_0x121555,_0x21cc9f):_0x27fa15=await imageToWebp(_0x121555),await _0x41a171[_0x50070b(0x154)](_0x89ce57,{'sticker':{'url':_0x27fa15},..._0x21cc9f},{'quoted':_0x17fd6f}),_0x27fa15;},_0x41a171[_0xb69f25(0x1a1)]=async(_0x25ada1,_0x20a365,_0x34944b,_0x3b9c14={})=>{const _0x5e8fed=_0xb69f25;let _0x42706e=Buffer['isBuffer'](_0x20a365)?_0x20a365:/^data:.*?\/.*?;base64,/i['test'](_0x20a365)?Buffer[_0x5e8fed(0x1be)](_0x20a365[_0x5e8fed(0x1b5)]`,`[0x1],_0x5e8fed(0x1dd)):/^https?:\/\//[_0x5e8fed(0x13c)](_0x20a365)?await await getBuffer(_0x20a365):fs[_0x5e8fed(0x141)](_0x20a365)?fs['readFileSync'](_0x20a365):Buffer[_0x5e8fed(0x159)](0x0),_0x3fde90;return _0x3b9c14&&(_0x3b9c14['packname']||_0x3b9c14[_0x5e8fed(0x185)])?_0x3fde90=await writeExifVid(_0x42706e,_0x3b9c14):_0x3fde90=await videoToWebp(_0x42706e),await _0x41a171[_0x5e8fed(0x154)](_0x25ada1,{'sticker':{'url':_0x3fde90},..._0x3b9c14},{'quoted':_0x34944b}),_0x3fde90;},_0x41a171['sendMedia']=async(_0xb76f9a,_0x52f929,_0x21d6a4='',_0x48056c='',_0x5a985b='',_0x4caf67={})=>{const _0x4b2406=_0xb69f25;let _0x1ab047=await _0x41a171[_0x4b2406(0x13a)](_0x52f929,!![]),{mime:_0x436015,ext:_0x43b436,res:_0x73fa98,data:_0x3d7f59,filename:_0x4a85ff}=_0x1ab047;if(_0x73fa98&&_0x73fa98[_0x4b2406(0x16e)]!==0xc8||file[_0x4b2406(0x15f)]<=0x10000)try{throw{'json':JSON[_0x4b2406(0x1c4)](file[_0x4b2406(0x19e)]())};}catch(_0x2cc2d2){if(_0x2cc2d2[_0x4b2406(0x1b1)])throw _0x2cc2d2['json'];}let _0x530a49='',_0x24e583=_0x436015,_0x13ff00=_0x4a85ff;if(_0x4caf67[_0x4b2406(0x1c7)])_0x530a49=_0x4b2406(0x1b0);if(_0x4caf67[_0x4b2406(0x1c3)]||/webp/[_0x4b2406(0x13c)](_0x436015)){let {writeExif:_0x3c9323}=require('./baileys/exif'),_0x84782={'mimetype':_0x436015,'data':_0x3d7f59};_0x13ff00=await _0x3c9323(_0x84782,{'packname':_0x4caf67[_0x4b2406(0x132)]?_0x4caf67[_0x4b2406(0x132)]:global['packname'],'author':_0x4caf67['author']?_0x4caf67['author']:global[_0x4b2406(0x185)],'categories':_0x4caf67['categories']?_0x4caf67[_0x4b2406(0x18d)]:[]}),await fs['promises'][_0x4b2406(0x1da)](_0x4a85ff),_0x530a49=_0x4b2406(0x17e),_0x24e583=_0x4b2406(0x146);}else{if(/image/[_0x4b2406(0x13c)](_0x436015))_0x530a49='image';else{if(/video/[_0x4b2406(0x13c)](_0x436015))_0x530a49=_0x4b2406(0x1b7);else{if(/audio/[_0x4b2406(0x13c)](_0x436015))_0x530a49=_0x4b2406(0x1af);else _0x530a49=_0x4b2406(0x1b0);}}}return await _0x41a171[_0x4b2406(0x154)](_0xb76f9a,{[_0x530a49]:{'url':_0x13ff00},'caption':_0x48056c,'mimetype':_0x24e583,'fileName':_0x21d6a4,..._0x4caf67},{'quoted':_0x5a985b,..._0x4caf67}),fs['promises'][_0x4b2406(0x1da)](_0x13ff00);},_0x41a171[_0xb69f25(0x174)]=async(_0x476eba,_0x53f628,_0x508165=!![])=>{const _0x4e5ab4=_0xb69f25;let _0x48cc0d=_0x476eba[_0x4e5ab4(0x1e6)]?_0x476eba[_0x4e5ab4(0x1e6)]:_0x476eba,_0x2d889d=(_0x476eba[_0x4e5ab4(0x1e6)]||_0x476eba)[_0x4e5ab4(0x1a0)]||'',_0x2f59db=_0x476eba[_0x4e5ab4(0x198)]?_0x476eba[_0x4e5ab4(0x198)][_0x4e5ab4(0x15b)](/Message/gi,''):_0x2d889d[_0x4e5ab4(0x1b5)]('/')[0x0];const _0x9e06f=await downloadContentFromMessage(_0x48cc0d,_0x2f59db);let _0x3d5166=Buffer[_0x4e5ab4(0x1be)]([]);for await(const _0x282f1e of _0x9e06f){_0x3d5166=Buffer['concat']([_0x3d5166,_0x282f1e]);}let _0xf783c2=await FileType[_0x4e5ab4(0x1d1)](_0x3d5166);return trueFileName=_0x508165?_0x53f628+'.'+_0xf783c2[_0x4e5ab4(0x1b3)]:_0x53f628,await fs[_0x4e5ab4(0x14a)](trueFileName,_0x3d5166),trueFileName;},_0x41a171[_0xb69f25(0x145)]=async _0x3e9b08=>{const _0x88b298=_0xb69f25;let _0x5009ef=(_0x3e9b08[_0x88b298(0x1e6)]||_0x3e9b08)[_0x88b298(0x1a0)]||'',_0x144df1=_0x3e9b08[_0x88b298(0x198)]?_0x3e9b08[_0x88b298(0x198)][_0x88b298(0x15b)](/Message/gi,''):_0x5009ef['split']('/')[0x0];const _0x392fcc=await downloadContentFromMessage(_0x3e9b08,_0x144df1);let _0x4985c7=Buffer['from']([]);for await(const _0xe90d5e of _0x392fcc){_0x4985c7=Buffer[_0x88b298(0x12d)]([_0x4985c7,_0xe90d5e]);}return _0x4985c7;},_0x41a171[_0xb69f25(0x179)]=async(_0x53ad34,_0x16d0b5,_0x328971=![],_0x4d6b5c={})=>{const _0x5863dc=_0xb69f25;let _0x5a08b9;_0x4d6b5c[_0x5863dc(0x1dc)]&&(_0x16d0b5[_0x5863dc(0x144)]=_0x16d0b5[_0x5863dc(0x144)]&&_0x16d0b5[_0x5863dc(0x144)][_0x5863dc(0x18e)]&&_0x16d0b5[_0x5863dc(0x144)]['ephemeralMessage']['message']?_0x16d0b5[_0x5863dc(0x144)][_0x5863dc(0x18e)][_0x5863dc(0x144)]:_0x16d0b5[_0x5863dc(0x144)]||undefined,_0x5a08b9=Object['keys'](_0x16d0b5[_0x5863dc(0x144)]['viewOnceMessage']['message'])[0x0],delete(_0x16d0b5[_0x5863dc(0x144)]&&_0x16d0b5[_0x5863dc(0x144)][_0x5863dc(0x1d7)]?_0x16d0b5[_0x5863dc(0x144)][_0x5863dc(0x1d7)]:_0x16d0b5[_0x5863dc(0x144)]||undefined),delete _0x16d0b5[_0x5863dc(0x144)][_0x5863dc(0x1e2)][_0x5863dc(0x144)][_0x5a08b9][_0x5863dc(0x12b)],_0x16d0b5['message']={..._0x16d0b5[_0x5863dc(0x144)][_0x5863dc(0x1e2)][_0x5863dc(0x144)]});let _0x369c75=Object[_0x5863dc(0x1ba)](_0x16d0b5['message'])[0x0],_0x265cf1=await generateForwardMessageContent(_0x16d0b5,_0x328971),_0x5f07c9=Object[_0x5863dc(0x1ba)](_0x265cf1)[0x0],_0x36f9a4={};if(_0x369c75!=_0x5863dc(0x1b6))_0x36f9a4=_0x16d0b5[_0x5863dc(0x144)][_0x369c75]['contextInfo'];_0x265cf1[_0x5f07c9][_0x5863dc(0x12a)]={..._0x36f9a4,..._0x265cf1[_0x5f07c9][_0x5863dc(0x12a)]};const _0x21904d=await generateWAMessageFromContent(_0x53ad34,_0x265cf1,_0x4d6b5c?{..._0x265cf1[_0x5f07c9],..._0x4d6b5c,..._0x4d6b5c['contextInfo']?{'contextInfo':{..._0x265cf1[_0x5f07c9][_0x5863dc(0x12a)],..._0x4d6b5c[_0x5863dc(0x12a)]}}:{}}:{});return await _0x41a171[_0x5863dc(0x18c)](_0x53ad34,_0x21904d['message'],{'messageId':_0x21904d[_0x5863dc(0x16a)]['id']}),_0x21904d;},_0x41a171[_0xb69f25(0x195)]=(_0x40eff6,_0x542bdd,_0x26b6a4='',_0x9d3ea9=_0x41a171[_0xb69f25(0x186)]['id'],_0x2be8c6={})=>{const _0x5b71d3=_0xb69f25;let _0xc513f4=Object[_0x5b71d3(0x1ba)](_0x542bdd['message'])[0x0],_0x580593=_0xc513f4==='ephemeralMessage';_0x580593&&(_0xc513f4=Object[_0x5b71d3(0x1ba)](_0x542bdd['message']['ephemeralMessage'][_0x5b71d3(0x144)])[0x0]);let _0x236d0d=_0x580593?_0x542bdd[_0x5b71d3(0x144)][_0x5b71d3(0x18e)][_0x5b71d3(0x144)]:_0x542bdd['message'],_0x69c4cf=_0x236d0d[_0xc513f4];if(typeof _0x69c4cf===_0x5b71d3(0x182))_0x236d0d[_0xc513f4]=_0x26b6a4||_0x69c4cf;else{if(_0x69c4cf[_0x5b71d3(0x162)])_0x69c4cf[_0x5b71d3(0x162)]=_0x26b6a4||_0x69c4cf[_0x5b71d3(0x162)];else{if(_0x69c4cf['text'])_0x69c4cf[_0x5b71d3(0x155)]=_0x26b6a4||_0x69c4cf['text'];}}if(typeof _0x69c4cf!==_0x5b71d3(0x182))_0x236d0d[_0xc513f4]={..._0x69c4cf,..._0x2be8c6};if(_0x542bdd[_0x5b71d3(0x16a)][_0x5b71d3(0x1c1)])_0x9d3ea9=_0x542bdd[_0x5b71d3(0x16a)][_0x5b71d3(0x1c1)]=_0x9d3ea9||_0x542bdd['key'][_0x5b71d3(0x1c1)];else{if(_0x542bdd['key'][_0x5b71d3(0x1c1)])_0x9d3ea9=_0x542bdd['key'][_0x5b71d3(0x1c1)]=_0x9d3ea9||_0x542bdd[_0x5b71d3(0x16a)]['participant'];}if(_0x542bdd['key'][_0x5b71d3(0x12e)][_0x5b71d3(0x168)](_0x5b71d3(0x176)))_0x9d3ea9=_0x9d3ea9||_0x542bdd[_0x5b71d3(0x16a)][_0x5b71d3(0x12e)];else{if(_0x542bdd[_0x5b71d3(0x16a)]['remoteJid'][_0x5b71d3(0x168)]('@broadcast'))_0x9d3ea9=_0x9d3ea9||_0x542bdd['key'][_0x5b71d3(0x12e)];}return _0x542bdd[_0x5b71d3(0x16a)]['remoteJid']=_0x40eff6,_0x542bdd['key'][_0x5b71d3(0x1c6)]=_0x9d3ea9===_0x41a171[_0x5b71d3(0x186)]['id'],proto[_0x5b71d3(0x143)][_0x5b71d3(0x191)](_0x542bdd);},_0x41a171[_0xb69f25(0x13a)]=async(_0x22be6c,_0x3fb956)=>{const _0x30d8e1=_0xb69f25;let _0x539c4e,_0x164296=Buffer['isBuffer'](_0x22be6c)?_0x22be6c:/^data:.*?\/.*?;base64,/i['test'](_0x22be6c)?Buffer[_0x30d8e1(0x1be)](_0x22be6c['split']`,`[0x1],_0x30d8e1(0x1dd)):/^https?:\/\//[_0x30d8e1(0x13c)](_0x22be6c)?await(_0x539c4e=await getBuffer(_0x22be6c)):fs['existsSync'](_0x22be6c)?(filename=_0x22be6c,fs[_0x30d8e1(0x152)](_0x22be6c)):typeof _0x22be6c===_0x30d8e1(0x182)?_0x22be6c:Buffer['alloc'](0x0),_0x2cd5fe=await FileType[_0x30d8e1(0x1d1)](_0x164296)||{'mime':'application/octet-stream','ext':_0x30d8e1(0x153)};filename=path[_0x30d8e1(0x1aa)](__filename,_0x30d8e1(0x161)+new Date()*0x1+'.'+_0x2cd5fe[_0x30d8e1(0x1b3)]);if(_0x164296&&_0x3fb956)fs['promises'][_0x30d8e1(0x19b)](filename,_0x164296);return{'res':_0x539c4e,'filename':filename,'size':await getSizeMedia(_0x164296),..._0x2cd5fe,'data':_0x164296};},_0x41a171[_0xb69f25(0x178)]=async(_0x13f3f0,_0x1c39ad,_0x25e339,_0xfbb07e={},_0xc5c0ac={})=>{const _0x3b6002=_0xb69f25;let _0x31584e=await _0x41a171[_0x3b6002(0x13a)](_0x1c39ad,!![]),{filename:_0x545d99,size:_0x421952,ext:_0x54d07a,mime:_0x33ed37,data:_0x101459}=_0x31584e,_0x2b5e91='',_0x4c4cfb=_0x33ed37,_0x2d6c9d=_0x545d99;if(_0xc5c0ac['asDocument'])_0x2b5e91='document';if(_0xc5c0ac[_0x3b6002(0x1c3)]||/webp/[_0x3b6002(0x13c)](_0x33ed37)){let {writeExif:_0x32c8c0}=require(_0x3b6002(0x192)),_0x30966b={'mimetype':_0x33ed37,'data':_0x101459};_0x2d6c9d=await _0x32c8c0(_0x30966b,{'packname':global[_0x3b6002(0x132)],'author':global['packname2'],'categories':_0xc5c0ac['categories']?_0xc5c0ac['categories']:[]}),await fs[_0x3b6002(0x172)][_0x3b6002(0x1da)](_0x545d99),_0x2b5e91=_0x3b6002(0x17e),_0x4c4cfb='image/webp';}else{if(/image/[_0x3b6002(0x13c)](_0x33ed37))_0x2b5e91=_0x3b6002(0x1d2);else{if(/video/[_0x3b6002(0x13c)](_0x33ed37))_0x2b5e91=_0x3b6002(0x1b7);else{if(/audio/[_0x3b6002(0x13c)](_0x33ed37))_0x2b5e91=_0x3b6002(0x1af);else _0x2b5e91='document';}}}return await _0x41a171['sendMessage'](_0x13f3f0,{[_0x2b5e91]:{'url':_0x2d6c9d},'mimetype':_0x4c4cfb,'fileName':_0x25e339,..._0xc5c0ac},{'quoted':_0xfbb07e,..._0xc5c0ac}),fs[_0x3b6002(0x172)][_0x3b6002(0x1da)](_0x2d6c9d);},_0x41a171[_0xb69f25(0x1c8)]=async _0x28f1e2=>{const _0x290486=_0xb69f25;return[..._0x28f1e2[_0x290486(0x140)](/@([0-9]{5,16}|0)/g)]['map'](_0x2cfcc6=>_0x2cfcc6[0x1]+'@s.whatsapp.net');},_0x41a171;}function _0x1e23(_0x6ebc13,_0x97e090){const _0x16b93e=_0x16b9();return _0x1e23=function(_0x1e23e1,_0x37c097){_0x1e23e1=_0x1e23e1-0x12a;let _0x592c0c=_0x16b93e[_0x1e23e1];return _0x592c0c;},_0x1e23(_0x6ebc13,_0x97e090);}startMans();let file=require[_0x5686f3(0x18a)](__filename);fs[_0x5686f3(0x17d)](file,()=>{const _0x3485d4=_0x5686f3;fs[_0x3485d4(0x1db)](file),console[_0x3485d4(0x1de)](chalk[_0x3485d4(0x1cf)](_0x3485d4(0x16d)+__filename)),delete require[_0x3485d4(0x189)][file],require(file);});function _0x16b9(){const _0x55d162=['length','1.0.0','../src/','caption','sendAudio','timedOut','creds.update','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','Connection\x20TimedOut,\x20Reconnecting...','includes','moment-timezone','key','\x0aFN:','pino','Update\x20','status','./settings/config','413745MvvGpx','7034110LSZhHC','promises','badSession','downloadAndSaveMediaMessage','profilePictureUrl','@s.whatsapp.net','endsWith','sendFile','copyNForward','LexxyBotMD','status@broadcast','groupMetadata','watchFile','sticker','2168HshgVD','add','loggedOut','string','serializeM','1191108EawJzY','author','user','public','sendContact','cache','resolve','sendTextWithMentions','relayMessage','categories','ephemeralMessage','send5ButImg','./baileys/exif','fromObject','./baileys/sticker.js','839197EWJLdr','awesome-phonenumber','cMod','./neobotz','&totalMem=','mtype','child_process','push','writeFile','output','restartRequired','toString','setStatus','mimetype','sendVideoAsSticker','store','getName','Unknown\x20DisconnectReason:\x20','https://hardianto.xyz/api/tools/leave?nama=','map','groups.update','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:pebrikito0@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://github.com/Lexxy24\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;Indonesia;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','contacts.update','join','group-participants.update','@g.us','0@s.whatsapp.net','child','audio','document','json','sendImage','ext','&pepeUser=','split','conversation','video','&bege=https://telegra.ph/file/d561876a112fea9777677.jpg&apikey=hardianto','./baileys/myfunc','keys','withoutContact','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20Subject\x20telah\x20diganti\x20menjadi\x20*','40KrGeYh','from','type','chalk','participant','server','asSticker','parse','isBuffer','fromMe','asDocument','parseMention','announce','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','silent','NEO','https://telegra.ph/file/3983c55ac7f3ebea225d3.jpg','8204SAtnIq','redBright','BAE5','fromBuffer','image','22peQvmf','restrict','411fIHpVY','connectionReplaced','ignore','decodeJid','9DRzzzQ','unlink','unwatchFile','readViewOnce','base64','log','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.','Connected...','sendVideo','viewOnceMessage','https://hardianto.xyz/api/tools/welcomer?nama=','connectionClosed','Group\x20Settings\x20Change\x20Message','msg','say','contextInfo','viewOnce','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aInfo\x20group\x20telah\x20dibatasi,\x20Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengedit\x20info\x20group\x20!','concat','remoteJid','&namaGb=','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','name','packname','\x20Leaving\x20To\x20','participants','notify','red','sendText','file-type','subject','getFile','query','test','https://telegra.ph/file/d561876a112fea9777677.jpg','exit','verifiedName','matchAll','existsSync','\x0aitem1.TEL;waid=','WebMessageInfo','message','downloadMediaMessage','image/webp','Hi\x20@','set','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20telah\x20dibuka\x20oleh\x20admin,\x20Sekarang\x20peserta\x20dapat\x20mengirim\x20pesan\x20!','writeFileSync','WhatsApp','imageMessage','error','Restart\x20Required,\x20Restarting...','&pepeGb=','action','remove','readFileSync','.bin','sendMessage','text','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20telah\x20ditutup\x20oleh\x20admin,\x20Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan\x20!','990QjzVUT','contacts','alloc','getNumber','replace','47971DhNuxj','Safari','chat'];_0x16b9=function(){return _0x55d162;};return _0x16b9();}