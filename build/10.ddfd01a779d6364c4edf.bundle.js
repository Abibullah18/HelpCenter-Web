(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{493:function(e,a,n){"use strict";n.d(a,"b",(function(){return m})),n.d(a,"a",(function(){return s})),n.d(a,"e",(function(){return u})),n.d(a,"g",(function(){return d})),n.d(a,"f",(function(){return v})),n.d(a,"c",(function(){return p})),n.d(a,"d",(function(){return b}));var t=n(56),o=n.n(t),r=n(1),i=n(78),c=n(55),l="https://hichy-api.hnhlabs.technology",m=function(e){return function(a,n){a({type:r.p}),o.a.post("".concat(l,"/company"),e,Object(c.a)(n)).then((function(e){a({type:r.q,payload:e.data}),a(Object(i.b)("Company created successfully",200,"success"))})).catch((function(e){a({type:r.o,payload:e}),a(Object(i.b)(e.response.data.msg,e.response.status,"error"))}))}},s=function(e){return function(a){a({type:r.s}),o.a.post("".concat(l,"/company/create/companyUser"),e).then((function(e){a({type:r.t,payload:e.data}),a(Object(i.b)("User created successfully",200,"success",2e3,"top-right"))})).catch((function(e){a({type:r.r,payload:e}),400===e.response.status&&a(Object(i.b)(e.response.data.message,e.response.status,"error"))}))}},u=function(){return function(e){e({type:r.Ib}),o.a.get("".concat(l,"/company")).then((function(a){e({type:r.Jb,payload:a.data})})).catch((function(a){e({type:r.Hb,payload:a}),e(Object(i.b)("An error occured",400,"error"))}))}},d=function(e){return function(a,n){a({type:r.Ib}),o.a.get("".concat(l,"/company/orgCompany/").concat(e||"all"),Object(c.a)(n)).then((function(e){a({type:r.Jb,payload:e.data})})).catch((function(e){a({type:r.Hb,payload:e}),a(Object(i.b)("An error occured",400,"error"))}))}},v=function(e){return function(a){a({type:r.Kb}),o.a.get("".concat(l,"/company/list/companyUsers/").concat(e||"all")).then((function(e){a({type:r.Mb,payload:e.data})})).catch((function(e){a({type:r.Lb,payload:e}),400===e.response.status&&a(Object(i.b)(e.response.data.error,e.response.status,"error"))}))}},p=function(e){return function(a){a({type:r.Z}),o.a.delete("".concat(l,"/company/").concat(e)).then((function(n){a({type:r.ab,payload:e})})).catch((function(e){a({type:r.Y,payload:e}),a(Object(i.b)(e.response.data.msg,e.response.status,"error"))}))}},b=function(e){return function(a){a({type:r.cb}),o.a.delete("".concat(l,"/company/user/").concat(e)).then((function(n){a({type:r.db,payload:e})})).catch((function(e){a({type:r.bb,payload:e}),a(Object(i.b)(e.response.data.message,e.response.status,"error"))}))}}},632:function(e,a,n){"use strict";n.d(a,"g",(function(){return m})),n.d(a,"h",(function(){return s})),n.d(a,"f",(function(){return u})),n.d(a,"a",(function(){return d})),n.d(a,"e",(function(){return v})),n.d(a,"b",(function(){return p})),n.d(a,"d",(function(){return b})),n.d(a,"c",(function(){return N}));var t=n(56),o=n.n(t),r=n(1),i=n(78),c=n(55),l="https://hichy-api.hnhlabs.technology",m=function(e){return function(a,n){a({type:r.Ob}),o.a.get("".concat(l,"/contacts/").concat(e||"all"),Object(c.a)(n)).then((function(e){a({type:r.Pb,payload:e.data})})).catch((function(e){a({type:r.Nb,payload:e}),a(Object(i.b)("An error occured",400,"error"))}))}},s=function(e){return function(a,n){a({type:r.Ob}),o.a.get("".concat(l,"/contacts/organization/").concat(e||"all"),Object(c.a)(n)).then((function(e){a({type:r.Pb,payload:e.data})})).catch((function(e){a({type:r.Nb,payload:e}),a(Object(i.b)("An error occured",400,"error"))}))}},u=function(e){return function(a,n){a({type:r.Ob}),o.a.get("".concat(l,"/contacts/organization/").concat(e||"all"),Object(c.a)(n)).then((function(e){a({type:r.Pb,payload:e.data})})).catch((function(e){a({type:r.Nb,payload:e}),a(Object(i.b)("An error occured",400,"error"))}))}},d=function(e){return function(a,n){a({type:r.v}),o.a.post("".concat(l,"/contacts"),e,Object(c.a)(n)).then((function(n){a({type:r.w,payload:n.data,body:e}),a(Object(i.b)("Contact created successfully",200,"success",2e3,"top-right"))})).catch((function(e){a({type:r.u,payload:e}),a(Object(i.b)(e.response.data.message,e.response.status,"error"))}))}},v=function(e){return function(a){a({type:r.g}),o.a.delete("".concat(l,"/contacts/").concat(e)).then((function(n){a({type:r.h,payload:e})})).catch((function(e){a({type:r.f,payload:e}),a(Object(i.b)(e.response.data.msg,e.response.status,"error"))}))}},p=function(e){return function(a){a({type:"ASSIGN_AGENTS_TO_TICKET_BEGIN"}),o.a.put("".concat(l,"/ticket/assign/").concat(e.ticketNo),e).then((function(e){a({type:"ASSIGN_AGENTS_TO_TICKET_SUCCESS"})})).catch((function(e){a({type:"ASSIGN_AGENTS_TO_TICKET_FAILED",payload:e}),a(Object(i.b)(e.response.data.msg,e.response.status,"error"))}))}},b=function(e){return function(a,n){a({type:"CHANGE_TICKET_STATUS_BEGIN"}),o.a.put("".concat(l,"/ticket/changeStatus/").concat(e.ticketNo),e,Object(c.a)(n)).then((function(n){a({type:"CHANGE_TICKET_STATUS_SUCCESS",payload:e}),"Escalated"===e.status?a(Object(i.b)("Ticket Escalated ",200,"success",2e3,"top-right")):a(Object(i.b)("Ticket Updated ",200,"success",2e3,"top-right"))})).catch((function(e){a({type:"CHANGE_TICKET_STATUS_FAILED",payload:e}),a(Object(i.b)(e.response.data.msg,e.response.status,"error"))}))}},N=function(e){return function(a){a({type:"CHANGE_TICKET_PRIORITY_BEGIN"}),o.a.put("".concat(l,"/ticket/changePriority/").concat(e.ticketNo),e).then((function(n){a({type:"CHANGE_TICKET_PRIORITY_SUCCESS",payload:e})})).catch((function(e){a({type:"CHANGE_TICKET_PRIORITY_FAILED",payload:e}),a(Object(i.b)(e.response.data.msg,e.response.status,"error"))}))}}},635:function(e,a,n){"use strict";var t=n(0),o=n(202);a.a=Object(o.a)(t.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},636:function(e,a,n){"use strict";var t=n(2),o=n(7),r=n(8),i=n.n(r),c=n(0),l=n.n(c),m=n(12),s=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,c=e.noGutters,d=e.as,v=void 0===d?"div":d,p=Object(o.a)(e,s),b=Object(m.a)(n,"row"),N=b+"-cols",h=[];return u.forEach((function(e){var a,n=p[e];delete p[e];var t="xs"!==e?"-"+e:"";null!=(a=null!=n&&"object"==typeof n?n.cols:n)&&h.push(""+N+t+"-"+a)})),l.a.createElement(v,Object(t.a)({ref:a},p,{className:i.a.apply(void 0,[r,b,c&&"no-gutters"].concat(h))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},638:function(e,a,n){"use strict";var t=n(2),o=n(7),r=n(8),i=n.n(r),c=n(0),l=n.n(c),m=n(12),s=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,c=e.as,d=void 0===c?"div":c,v=Object(o.a)(e,s),p=Object(m.a)(n,"col"),b=[],N=[];return u.forEach((function(e){var a,n,t,o=v[e];if(delete v[e],"object"==typeof o&&null!=o){var r=o.span;a=void 0===r||r,n=o.offset,t=o.order}else a=o;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+p+i:""+p+i+"-"+a),null!=t&&N.push("order"+i+"-"+t),null!=n&&N.push("offset"+i+"-"+n)})),b.length||b.push(p),l.a.createElement(d,Object(t.a)({},v,{ref:a,className:i.a.apply(void 0,[r].concat(b,N))}))}));d.displayName="Col",a.a=d},714:function(e){e.exports=JSON.parse("{}")},715:function(e){e.exports=JSON.parse('{"data":[{"label":"Alaska Standard Time(GMT-9)","value":"Alaska Standard Time(GMT-9)"},{"label":"Alaska Daylight Time(GMT-8)","value":"Alaska Daylight Time(GMT-8)"},{"label":"Aleutian-Hawaii (GMT-10)","value":"Aleutian-Hawaii (GMT-10)"},{"label":"Atlantic Standard Time (GMT-4)","value":"Atlantic Standard Time (GMT-4)"},{"label":"Atlantic Daylight Time (GMT-3)","value":"Atlantic Daylight Time (GMT-3)"},{"label":"Azores (GMT-1)","value":"Azores (GMT-1)"},{"label":"Baku (GMT +4)","value":"Baku (GMT +4)"},{"label":"Bangkok (GMT +7)","value":"Bangkok (GMT +7)"},{"label":"Brazilia (GMT-3)","value":"Brazilia (GMT-3)"},{"label":"Central Standard Time (GMT-6)","value":"Central Standard Time (GMT-6)"},{"label":"Central Daylight Time (GMT-5)","value":"Central Daylight Time (GMT-5)"},{"label":"Dhakar (GMT +6)","value":"Dhakar (GMT +6)"},{"label":"Eastern Standard Time (GMT-5)","value":"Eastern Standard Time (GMT-5)"},{"label":"Eniwetok (GMT-12)","value":"Eniwetok (GMT-12)"},{"label":"Fiji (GMT +12)","value":"Fiji (GMT +12)"},{"label":"Greenwich Mean Time (GMT)","value":"Greenwich Mean Time (GMT)"},{"label":"Hawaii-Aleutian (GMT-10)","value":"Hawaii-Aleutian (GMT-10)"},{"label":"Hong Kong (GMT +8)","value":"Hong Kong (GMT +8)"},{"label":"Israel (GMT +2)","value":"Israel (GMT +2)"},{"label":"London (GMT)","value":"London (GMT)"},{"label":"Magadan (GMT +11)","value":"Magadan (GMT +11)"},{"label":"Mid-Atlantic (GMT-2)","value":"Mid-Atlantic (GMT-2)"},{"label":"Moscow (GMT +3)","value":"Moscow (GMT +3)"},{"label":"Mountain Standard Time (GMT-7)","value":"Mountain Standard Time (GMT-7)"},{"label":"Mountain Daylight Time (GMT-6)","value":"Mountain Daylight Time (GMT-6)"},{"label":"New Delhi (GMT +5)","value":"New Delhi (GMT +5)"},{"label":"New York (GMT -5 EST)","value":"New York (GMT -5 EST)"},{"label":"Pacific Standard Time (GMT-8)","value":"Pacific Standard Time (GMT-8)"},{"label":"Pacific Daylight Time (GMT-7)","value":"Pacific Daylight Time (GMT-7)"},{"label":"Rome (GMT +1)","value":"Rome (GMT +1)"},{"label":"Samoa (GMT-11)","value":"Samoa (GMT-11)"},{"label":"San Francisco (GMT -8 PST)","value":"San Francisco (GMT -8 PST)"},{"label":"Sydney (GMT +10)","value":"Sydney (GMT +10)"},{"label":"Tokyo (GMT +9)","value":"Tokyo (GMT +9)"},{"label":"Wellington (GMT +12)","value":"Wellington (GMT +12)"}]}')},716:function(e){e.exports=JSON.parse('[{"code":"ab","name":"Abkhaz","nativeName":"аҧсуа"},{"code":"aa","name":"Afar","nativeName":"Afaraf"},{"code":"af","name":"Afrikaans","nativeName":"Afrikaans"},{"code":"ak","name":"Akan","nativeName":"Akan"},{"code":"sq","name":"Albanian","nativeName":"Shqip"},{"code":"am","name":"Amharic","nativeName":"አማርኛ"},{"code":"ar","name":"Arabic","nativeName":"العربية"},{"code":"an","name":"Aragonese","nativeName":"Aragonés"},{"code":"hy","name":"Armenian","nativeName":"Հայերեն"},{"code":"as","name":"Assamese","nativeName":"অসমীয়া"},{"code":"av","name":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},{"code":"ae","name":"Avestan","nativeName":"avesta"},{"code":"ay","name":"Aymara","nativeName":"aymar aru"},{"code":"az","name":"Azerbaijani","nativeName":"azərbaycan dili"},{"code":"bm","name":"Bambara","nativeName":"bamanankan"},{"code":"ba","name":"Bashkir","nativeName":"башҡорт теле"},{"code":"eu","name":"Basque","nativeName":"euskara, euskera"},{"code":"be","name":"Belarusian","nativeName":"Беларуская"},{"code":"bn","name":"Bengali","nativeName":"বাংলা"},{"code":"bh","name":"Bihari","nativeName":"भोजपुरी"},{"code":"bi","name":"Bislama","nativeName":"Bislama"},{"code":"bs","name":"Bosnian","nativeName":"bosanski jezik"},{"code":"br","name":"Breton","nativeName":"brezhoneg"},{"code":"bg","name":"Bulgarian","nativeName":"български език"},{"code":"my","name":"Burmese","nativeName":"ဗမာစာ"},{"code":"ca","name":"Catalan; Valencian","nativeName":"Català"},{"code":"ch","name":"Chamorro","nativeName":"Chamoru"},{"code":"ce","name":"Chechen","nativeName":"нохчийн мотт"},{"code":"ny","name":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},{"code":"zh","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},{"code":"cv","name":"Chuvash","nativeName":"чӑваш чӗлхи"},{"code":"kw","name":"Cornish","nativeName":"Kernewek"},{"code":"co","name":"Corsican","nativeName":"corsu, lingua corsa"},{"code":"cr","name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},{"code":"hr","name":"Croatian","nativeName":"hrvatski"},{"code":"cs","name":"Czech","nativeName":"česky, čeština"},{"code":"da","name":"Danish","nativeName":"dansk"},{"code":"dv","name":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},{"code":"nl","name":"Dutch","nativeName":"Nederlands, Vlaams"},{"code":"en","name":"English","nativeName":"English"},{"code":"eo","name":"Esperanto","nativeName":"Esperanto"},{"code":"et","name":"Estonian","nativeName":"eesti, eesti keel"},{"code":"ee","name":"Ewe","nativeName":"Eʋegbe"},{"code":"fo","name":"Faroese","nativeName":"føroyskt"},{"code":"fj","name":"Fijian","nativeName":"vosa Vakaviti"},{"code":"fi","name":"Finnish","nativeName":"suomi, suomen kieli"},{"code":"fr","name":"French","nativeName":"français, langue française"},{"code":"ff","name":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},{"code":"gl","name":"Galician","nativeName":"Galego"},{"code":"ka","name":"Georgian","nativeName":"ქართული"},{"code":"de","name":"German","nativeName":"Deutsch"},{"code":"el","name":"Greek, Modern","nativeName":"Ελληνικά"},{"code":"gn","name":"Guaraní","nativeName":"Avañeẽ"},{"code":"gu","name":"Gujarati","nativeName":"ગુજરાતી"},{"code":"ht","name":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},{"code":"ha","name":"Hausa","nativeName":"Hausa, هَوُسَ"},{"code":"he","name":"Hebrew (modern)","nativeName":"עברית"},{"code":"hz","name":"Herero","nativeName":"Otjiherero"},{"code":"hi","name":"Hindi","nativeName":"हिन्दी, हिंदी"},{"code":"ho","name":"Hiri Motu","nativeName":"Hiri Motu"},{"code":"hu","name":"Hungarian","nativeName":"Magyar"},{"code":"ia","name":"Interlingua","nativeName":"Interlingua"},{"code":"id","name":"Indonesian","nativeName":"Bahasa Indonesia"},{"code":"ie","name":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},{"code":"ga","name":"Irish","nativeName":"Gaeilge"},{"code":"ig","name":"Igbo","nativeName":"Asụsụ Igbo"},{"code":"ik","name":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},{"code":"io","name":"Ido","nativeName":"Ido"},{"code":"is","name":"Icelandic","nativeName":"Íslenska"},{"code":"it","name":"Italian","nativeName":"Italiano"},{"code":"iu","name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},{"code":"ja","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},{"code":"jv","name":"Javanese","nativeName":"basa Jawa"},{"code":"kl","name":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},{"code":"kn","name":"Kannada","nativeName":"ಕನ್ನಡ"},{"code":"kr","name":"Kanuri","nativeName":"Kanuri"},{"code":"ks","name":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},{"code":"kk","name":"Kazakh","nativeName":"Қазақ тілі"},{"code":"km","name":"Khmer","nativeName":"ភាសាខ្មែរ"},{"code":"ki","name":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},{"code":"rw","name":"Kinyarwanda","nativeName":"Ikinyarwanda"},{"code":"ky","name":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},{"code":"kv","name":"Komi","nativeName":"коми кыв"},{"code":"kg","name":"Kongo","nativeName":"KiKongo"},{"code":"ko","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},{"code":"ku","name":"Kurdish","nativeName":"Kurdî, كوردی‎"},{"code":"kj","name":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},{"code":"la","name":"Latin","nativeName":"latine, lingua latina"},{"code":"lb","name":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},{"code":"lg","name":"Luganda","nativeName":"Luganda"},{"code":"li","name":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},{"code":"ln","name":"Lingala","nativeName":"Lingála"},{"code":"lo","name":"Lao","nativeName":"ພາສາລາວ"},{"code":"lt","name":"Lithuanian","nativeName":"lietuvių kalba"},{"code":"lu","name":"Luba-Katanga","nativeName":""},{"code":"lv","name":"Latvian","nativeName":"latviešu valoda"},{"code":"gv","name":"Manx","nativeName":"Gaelg, Gailck"},{"code":"mk","name":"Macedonian","nativeName":"македонски јазик"},{"code":"mg","name":"Malagasy","nativeName":"Malagasy fiteny"},{"code":"ms","name":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},{"code":"ml","name":"Malayalam","nativeName":"മലയാളം"},{"code":"mt","name":"Maltese","nativeName":"Malti"},{"code":"mi","name":"Māori","nativeName":"te reo Māori"},{"code":"mr","name":"Marathi (Marāṭhī)","nativeName":"मराठी"},{"code":"mh","name":"Marshallese","nativeName":"Kajin M̧ajeļ"},{"code":"mn","name":"Mongolian","nativeName":"монгол"},{"code":"na","name":"Nauru","nativeName":"Ekakairũ Naoero"},{"code":"nv","name":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},{"code":"nb","name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},{"code":"nd","name":"North Ndebele","nativeName":"isiNdebele"},{"code":"ne","name":"Nepali","nativeName":"नेपाली"},{"code":"ng","name":"Ndonga","nativeName":"Owambo"},{"code":"nn","name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},{"code":"no","name":"Norwegian","nativeName":"Norsk"},{"code":"ii","name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},{"code":"nr","name":"South Ndebele","nativeName":"isiNdebele"},{"code":"oc","name":"Occitan","nativeName":"Occitan"},{"code":"oj","name":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},{"code":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","nativeName":"ѩзыкъ словѣньскъ"},{"code":"om","name":"Oromo","nativeName":"Afaan Oromoo"},{"code":"or","name":"Oriya","nativeName":"ଓଡ଼ିଆ"},{"code":"os","name":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},{"code":"pa","name":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},{"code":"pi","name":"Pāli","nativeName":"पाऴि"},{"code":"fa","name":"Persian","nativeName":"فارسی"},{"code":"pl","name":"Polish","nativeName":"polski"},{"code":"ps","name":"Pashto, Pushto","nativeName":"پښتو"},{"code":"pt","name":"Portuguese","nativeName":"Português"},{"code":"qu","name":"Quechua","nativeName":"Runa Simi, Kichwa"},{"code":"rm","name":"Romansh","nativeName":"rumantsch grischun"},{"code":"rn","name":"Kirundi","nativeName":"kiRundi"},{"code":"ro","name":"Romanian, Moldavian, Moldovan","nativeName":"română"},{"code":"ru","name":"Russian","nativeName":"русский язык"},{"code":"sa","name":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},{"code":"sc","name":"Sardinian","nativeName":"sardu"},{"code":"sd","name":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},{"code":"se","name":"Northern Sami","nativeName":"Davvisámegiella"},{"code":"sm","name":"Samoan","nativeName":"gagana faa Samoa"},{"code":"sg","name":"Sango","nativeName":"yângâ tî sängö"},{"code":"sr","name":"Serbian","nativeName":"српски језик"},{"code":"gd","name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},{"code":"sn","name":"Shona","nativeName":"chiShona"},{"code":"si","name":"Sinhala, Sinhalese","nativeName":"සිංහල"},{"code":"sk","name":"Slovak","nativeName":"slovenčina"},{"code":"sl","name":"Slovene","nativeName":"slovenščina"},{"code":"so","name":"Somali","nativeName":"Soomaaliga, af Soomaali"},{"code":"st","name":"Southern Sotho","nativeName":"Sesotho"},{"code":"es","name":"Spanish; Castilian","nativeName":"español, castellano"},{"code":"su","name":"Sundanese","nativeName":"Basa Sunda"},{"code":"sw","name":"Swahili","nativeName":"Kiswahili"},{"code":"ss","name":"Swati","nativeName":"SiSwati"},{"code":"sv","name":"Swedish","nativeName":"svenska"},{"code":"ta","name":"Tamil","nativeName":"தமிழ்"},{"code":"te","name":"Telugu","nativeName":"తెలుగు"},{"code":"tg","name":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},{"code":"th","name":"Thai","nativeName":"ไทย"},{"code":"ti","name":"Tigrinya","nativeName":"ትግርኛ"},{"code":"bo","name":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},{"code":"tk","name":"Turkmen","nativeName":"Türkmen, Түркмен"},{"code":"tl","name":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},{"code":"tn","name":"Tswana","nativeName":"Setswana"},{"code":"to","name":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},{"code":"tr","name":"Turkish","nativeName":"Türkçe"},{"code":"ts","name":"Tsonga","nativeName":"Xitsonga"},{"code":"tt","name":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},{"code":"tw","name":"Twi","nativeName":"Twi"},{"code":"ty","name":"Tahitian","nativeName":"Reo Tahiti"},{"code":"ug","name":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},{"code":"uk","name":"Ukrainian","nativeName":"українська"},{"code":"ur","name":"Urdu","nativeName":"اردو"},{"code":"uz","name":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},{"code":"ve","name":"Venda","nativeName":"Tshivenḓa"},{"code":"vi","name":"Vietnamese","nativeName":"Tiếng Việt"},{"code":"vo","name":"Volapük","nativeName":"Volapük"},{"code":"wa","name":"Walloon","nativeName":"Walon"},{"code":"cy","name":"Welsh","nativeName":"Cymraeg"},{"code":"wo","name":"Wolof","nativeName":"Wollof"},{"code":"fy","name":"Western Frisian","nativeName":"Frysk"},{"code":"xh","name":"Xhosa","nativeName":"isiXhosa"},{"code":"yi","name":"Yiddish","nativeName":"ייִדיש"},{"code":"yo","name":"Yoruba","nativeName":"Yorùbá"},{"code":"za","name":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}]')},742:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(41),i=n(127),c=n(149),l=n(726),m=n(725),s=n(636),u=n(638),d=n(629),v=function(e){var a={};return e.name&&""!==e.name.trim()||(a.name="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.phone&&""!==e.phone.trim()||(a.phone="Required"),e.address&&""!==e.address.trim()||(a.address="Required"),e.timeZone||(a.timeZone="Required"),e.language||(a.language="Required"),e.password&&""!==e.password.trim()||(a.password="Required"),e.cpassword&&""!==e.cpassword.trim()?e.cpassword!==e.password&&(a.cpassword="Passwords donot match"):a.cpassword="Required",a},p=n(632),b=n(493),N=(n(714),n(715)),h=n(716);n(232);function f(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?f(Object(n),!0).forEach((function(a){g(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function g(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var E=function(e){var a=e.input,n=e.options,t=e.label,r=e.meta,i=r.touched,c=r.error,l=r.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," ",t," "),o.a.createElement(d.a,T({},a,{onChange:function(e){return a.onChange(e)},onBlur:function(){return a.onBlur(a.value)},options:n})),i&&(c&&o.a.createElement("span",{className:"text-danger"},c)||l&&o.a.createElement("span",{className:"text-danger"},l)))},k=function(e){var a=e.input,n=e.label,r=e.placeholder,i=e.meta,c=i.touched,l=i.error,m=i.warning;return o.a.createElement(t.Fragment,null,o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"form-label"},n),o.a.createElement("textarea",T({},a,{className:"input-field-area",placeholder:r,rows:"5",cols:"40"})),c&&(l&&o.a.createElement("span",{className:"text-danger"},l)||m&&o.a.createElement("span",{className:"text-danger"},m))))},M=function(e){var a=e.input,n=e.label,t=e.type,r=e.placeholder,i=e.meta,c=i.touched,l=i.error,m=i.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"form-label"},n),o.a.createElement("div",{className:"input-holder"},o.a.createElement("input",T({className:"form-control"},a,{placeholder:r,type:t})),c&&(l&&o.a.createElement("span",{className:"text-danger"},l)||m&&o.a.createElement("span",{className:"text-warning"},m))))};function S(e){Object(t.useEffect)((function(){e.getCompanies()}),[]);var a=e.handleSubmit,n=e.submitting,r=e.companyList,i=(r.map((function(e){return{label:e.name,value:e._id}})),h.map((function(e){return{label:e.nativeName,value:e.name}})));return o.a.createElement("form",{onSubmit:a((function(a){return function(a){var n=e.addContact,t=e.handleModal,o=e.organization,r=y(y({},a),{},{timeZone:a.timeZone.label,language:a.language.value,organization:o});t(!1),n(r)}(a)}))},o.a.createElement("div",{className:"cc-body"},o.a.createElement("div",{className:"alert alert-success"},"When someone reaches out to you, they become a con tact in your account. You can create companies and associate contacts with them."),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"name",type:"text",component:M,label:"Full Name",placeholder:"Enter the name of this person"})),o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"email",type:"text",component:M,label:"Email",placeholder:"Enter an email address"}))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"phone",type:"text",component:M,label:"Work Phone",placeholder:"Enter an phone number"})),o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"type",type:"text",component:M,label:"Agent Type",placeholder:"Eg : Manager"}))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"timeZone",label:"Timezone",component:E,className:"custom-selectbox",options:N.data})),o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"language",component:E,label:"Language",className:"custom-selectbox",options:i}))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"password",type:"password",component:M,label:"Password",placeholder:"Enter Password"})),o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"cpassword",type:"password",component:M,label:"Confirm Password",placeholder:"Confirm Password"}))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(l.a,{name:"address",label:"Address",component:k,placeholder:"Enter your address here"})))),o.a.createElement("div",{className:"cc-footer"},o.a.createElement("div",{className:"btn-row"},o.a.createElement("button",{type:"submit",disabled:n,className:"btn btn-create"},"create"))))}S=Object(m.a)({form:"ContactForm",validate:v})(S);var G={addContact:p.a,getCompanies:b.e},w=Object(r.b)((function(e){return{companyList:e.company.companyList?e.company.companyList:[],organization:e.auth.userDetails?e.auth.userDetails.organizationId:""}}),G)(S),O=n(631),j=n(635),A=n(150);function C(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,o,r=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(r.push(t.value),!a||r.length!==a);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return r}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return I(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=e[n];return t}function P(){return(P=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function K(e){var a=e.columns,n=e.data,t=Object(O.useTable)({columns:a,data:n}),r=t.getTableProps,i=t.getTableBodyProps,c=t.rows,l=t.prepareRow;return o.a.createElement("table",P({cellSpacing:"0",cellPadding:"0"},r(),{className:"table"}),o.a.createElement("thead",{className:"t-head"},o.a.createElement("tr",{className:"table-row"},o.a.createElement("th",{className:"table-headline"}," Name "),o.a.createElement("th",{className:"table-headline"}," Email   "),o.a.createElement("th",{className:"table-headline"}," Type   "),o.a.createElement("th",{className:"table-headline"}," Phone    "),o.a.createElement("th",{className:"table-headline"}," Actions   "))),o.a.createElement("tbody",P({className:"t-body"},i()),c.length>0?c.map((function(e,a){return l(e),o.a.createElement("tr",P({className:"table-row",key:a},e.getRowProps()),e.cells.map((function(e,a){return o.a.createElement("td",P({className:"table-data",key:a},e.getCellProps()),e.render("Cell"))})))})):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"container"}," No results "))))}var z={deleteContact:p.e},L=Object(r.b)((function(e){return{}}),z)((function(e){var a=e.items,n=e.deleteContact,r=e.isLoading,i=C(Object(t.useState)(10),2),c=i[0],l=(i[1],C(Object(t.useState)(0),2)),m=l[0],s=l[1],u=C(Object(t.useState)(1),2),d=u[0],v=u[1],p=C(Object(t.useState)([]),2),b=p[0],N=p[1],h=C(Object(t.useState)(1),2),f=h[0],y=h[1];Object(t.useEffect)((function(){N(a),y(Math.ceil(a.length/c))}),[c,a]);var g=o.a.useMemo((function(){return[{Header:"All organizations",columns:[{Header:"Name",accessor:"fullName",filterable:!0},{Header:"Email",accessor:"email",filterable:!0},{Header:"User",accessor:"type",filterable:!0},{Header:"Phone",accessor:"phone",filterable:!0},{Header:"Actions",accessor:"_id",Cell:function(e){var a=e.cell.value;return o.a.createElement("div",{className:"action--tray"},o.a.createElement("button",{className:"icon__delete",onClick:function(){return n(a)}}," ",o.a.createElement(j.a,null)))},filterable:!0}]}]}),[]),T=o.a.useMemo((function(){return b.slice(m,d*c)}),[c,d,m,b]);return o.a.createElement(t.Fragment,null,o.a.createElement("div",{className:"table-container"},r?o.a.createElement(o.a.Fragment,null," ",o.a.createElement(A.a,null)," "):o.a.createElement(K,{columns:g,data:T,deleteContact:n}),o.a.createElement("div",{className:"page-nav-bar"},o.a.createElement("div",{className:"page__counter"},o.a.createElement("div",{className:"btn-page-label"},d," / ",f),o.a.createElement("button",{className:"btn btn-left",disabled:1===d,onClick:function(){d>=2&&(s(m-c),v(d-1))}}," ",o.a.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})),o.a.createElement("button",{className:"btn btn-right",disabled:d===f,onClick:function(){d<f&&(s(m+c),v(d+1))}}," ",o.a.createElement("i",{className:"fa fa-angle-right","aria-hidden":"true"}))))))}));function _(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,o,r=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(r.push(t.value),!a||r.length!==a);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return r}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return D(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=e[n];return t}var x={getCompanyContacts:p.f,deleteContact:p.e};a.default=Object(r.b)((function(e){return{isLoading:e.company.isLoading,dataList:e.contacts.contactList?e.contacts.contactList:[],companyId:e.auth.userDetails?e.auth.userDetails.companyId:"",organizationId:e.auth.userDetails?e.auth.userDetails.organizationId:""}}),x)((function(e){var a=_(Object(t.useState)(!1),2),n=a[0],r=a[1];Object(t.useEffect)((function(){e.getCompanyContacts(e.organizationId)}),[e.organizationId]);var l=function(e){r(e)},m=e.dataList,s=e.isLoading;return o.a.createElement(i.a,{headerTitle:"Agents",isBottom:!0,createBtnLabel:"Create Agent",onClick:function(){return l(!0)}},o.a.createElement(c.a,{title:"Create Agent User",modal:n,setModal:function(e){return l(e)}},o.a.createElement(w,{handleModal:l})),o.a.createElement(L,{noItemMessage:"No agents are created yet",items:m,limit:10,isLoading:s}))}))}}]);