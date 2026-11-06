// ==========================================================================
// 📝 《匆匆》综合练习题库 (questions.js) - 画线词醒目下划线修复版
// ==========================================================================

const PT = (pts) => `<span style="display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; font-weight:800; padding:0 5px; margin:0 3px; border-radius:4px;">[${pts}分]</span>`;

const QUOTE_BOX = (text) => `<div style="margin:6px 0 10px 0; padding:8px 12px; background:var(--notebook-bg); border-left:3px solid var(--primary-color); border-radius:4px; font-weight:600; font-size:14.5px; color:var(--text-color); line-height:1.65;">${text}</div>`;

const HL = (text) => `<u style="text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:4px; color:var(--primary-color); font-weight:800;">${text}</u>`;

// 甲组：现代文理解客观题（10分）
const quizDataList = [
    {
        id: 1,
        question: `${QUOTE_BOX("燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。")}作者在第1段开篇描写这些自然景物，主要用意是什么？`,
        options: [
            "A 赞美大自然万物充满勃勃生机。",
            "B 借自然界的循环反衬时光一去不返。",
            "C 交代文章写作的季节是在暮春时节。",
            "D 说明作者平生最喜爱观赏花鸟草木。"
        ],
        answer: "B",
        teacherAnalysis: "【表现手法与作用题】详见第1段。作者以燕子再来、杨柳再青、桃花再开的自然循环现象作为衬托（对比），强烈反衬出人类生命时光“一去不复返”的无奈。"
    },
    {
        id: 2,
        question: `${QUOTE_BOX("像针尖上一滴水滴在大海里，我的日子滴在时间的流里，没有声音，也没有影子。")}上面第2段中的句子采用了什么修辞手法？其作用是什么？`,
        options: [
            "A 比拟，为了描绘水滴落入大海时的优美姿态。",
            "B 夸张，为了说明作者度过的八千多日子非常漫长。",
            "C 比喻，为了突出个人时间在历史长河中渺小无痕。",
            "D 借代，为了强调大海的浩瀚与时间流逝的汹涌。"
        ],
        answer: "C",
        teacherAnalysis: "【修辞手法与作用题】详见第2段。作者将过去的“八千多个日子”比作“针尖上一滴水”，将“时间的流”比作“大海”，形象生动地写出了个人生命时光的微不足道与消逝无痕。"
    },
    {
        id: 3,
        question: "在第2段末尾，作者写自己“不禁头涔涔而泪潸潸了”，这表现了作者怎样的心情？",
        options: [
            "A 因身体虚弱而感到疲惫与痛苦。",
            "B 因时光飞逝无痕而惊慌与伤感。",
            "C 因遭到他人误解而愤怒与委屈。",
            "D 因找回逝去岁月而喜悦与激动。"
        ],
        answer: "B",
        teacherAnalysis: "【人物心情揣摩题】详见第2段。“头涔涔”指额头冒汗，“泪潸潸”指流泪不止。两个叠词连用，真切表达了作者猛然惊觉八千多个日子悄然溜走、毫无踪影时的惊慌、焦灼与伤感。"
    },
    {
        id: 4,
        question: "在第3段中，作者通过哪些日常生活的具体细节来表现时间无处不在地流逝？<br><span style='font-weight:500; font-size:14px; display:inline-block; margin-top:6px; line-height:1.7;'>I 洗手时，日子从水盆里过去<br>II 吃饭时，日子从饭碗里过去<br>III 读书时，日子从书页间过去<br>IV 默默时，便从凝然的双眼前过去</span>",
        options: [
            "A I、II 和 III",
            "B I、II 和 IV",
            "C I、III 和 IV",
            "D II、III 和 IV"
        ],
        answer: "B",
        teacherAnalysis: "【多项组合选择题】详见第3段。作者列举了“洗手的时候（水盆里）”、“吃饭的时候（饭碗里）”与“默默时（凝然的双眼前）”三个生活场景，并未提及“读书时从书页间过去”（排除 III）。"
    },
    {
        id: 5,
        question: `${QUOTE_BOX("天黑时，我躺在床上，他便伶伶俐俐地从我身上跨过，从我脚边飞去了。")}第3段中，作者用“伶伶俐俐”以及“跨过、飞去”来描写时间，采用了什么修辞手法？`,
        options: [
            "A 比拟，赋予时间以人的轻快动作，写出流逝的无情。",
            "B 排比，通过三个相同句式增强文章的抒情气势。",
            "C 反问，表达作者躺在床上无法挽留时间的绝望。",
            "D 婉曲，含蓄委婉地指出黑夜的时间比白天更短暂。"
        ],
        answer: "A",
        teacherAnalysis: "【修辞手法辨析题】详见第3段。作者把时间当成灵巧的人来写（“他便伶伶俐俐地……跨过……飞去了”），属于“比拟（拟人）”修辞，生动写出时间流逝的迅疾、轻巧与毫不留情。"
    },
    {
        id: 6,
        question: "梳理第3段中作者在一天之内感受时间流逝的脉络，按文章先后顺序排列。<br><span style='font-weight:500; font-size:14px; display:inline-block; margin-top:6px; line-height:1.7;'>I 掩面叹息新日闪过 &nbsp;&nbsp;&nbsp;&nbsp; II 早晨太阳悄悄挪移<br>III 躺在床上时间跨过 &nbsp;&nbsp;&nbsp;&nbsp; IV 伸手遮挽手边溜走</span>",
        options: [
            "A II → IV → III → I",
            "B II → III → IV → I",
            "C IV → II → III → I",
            "D I → II → IV → III"
        ],
        answer: "A",
        teacherAnalysis: "【内容脉络排序题】详见第3段。作者按一日时间推移叙写：早上起来太阳悄悄挪移（II）→ 洗手吃饭觉察匆匆，伸手遮挽时从手边过去（IV）→ 天黑躺在床上从身上跨过飞去（III）→ 次日睁眼掩着面叹息，新日子又在叹息里闪过（I）。"
    },
    {
        id: 7,
        question: `${QUOTE_BOX(`我赤裸裸来到这世界，转眼间也将${HL("赤裸裸")}地回去罢？但不能平的，为什么偏要白白走这一遭啊？`)}你如何理解第4段中第二个画线词“${HL("赤裸裸")}”的深层含义？`,
        options: [
            "A 离开人世时身上没有穿戴任何华丽的衣物。",
            "B 经历了漫长岁月，却没有留下任何生命痕迹与贡献。",
            "C 保持孩童般纯洁坦率的本性，不沾染世俗名利。",
            "D 家境十分贫寒，到了晚年依然没有积攒下钱财。"
        ],
        answer: "B",
        teacherAnalysis: "【词语深层含义题】详见第4段。第一个“赤裸裸”指婴儿降生时一无所有；第二个“赤裸裸”则紧承上文“我何曾留着像游丝样的痕迹呢”，指离开世界时未能留下任何功绩、作为或价值，表达不甘虚度此生的警醒。"
    },
    {
        id: 8,
        question: "根据全文内容，以下针对《匆匆》的赏析说明都是正确的，<strong>除了</strong>",
        options: [
            "A 全文紧扣“匆匆”二字，将抽象的时间化为具体可感的形象。",
            "B 第4段将过去的日子比作“轻烟”和“薄雾”，渲染时光易逝。",
            "C 作者在文中流露出时光飞逝的伤感，因此劝人及时行乐。",
            "D 第5段再次重复第1段的核心问句，构成首尾呼应的环形结构。"
        ],
        answer: "C",
        teacherAnalysis: "【细节与主旨排除题】详见第4段结尾“但不能平的，为什么偏要白白走这一遭啊？”。作者虽感叹时光匆匆，但绝非消极地“劝人及时行乐”，而是追问生命价值，勉励人们珍惜光阴、有所作为。"
    },
    {
        id: 9,
        question: "下面哪个熟语或名句最契合《匆匆》一文想要传达的惜时哲理？",
        options: [
            "A 一寸光阴一寸金，寸金难买寸光阴",
            "B 留得青山在，不怕没柴烧",
            "C 今朝有酒今朝醉，明日愁来明日愁",
            "D 路遥知马力，日久见人心"
        ],
        answer: "A",
        teacherAnalysis: "【熟语与主旨对应题】全文感叹时光一去不复返、呼吁莫要白白走这一遭，与“一寸光阴一寸金，寸金难买寸光阴”的惜时主旨完全吻合。"
    },
    {
        id: 10,
        question: "哪项是《匆匆》这篇文章最核心的中心思想？",
        options: [
            "A 描绘一年四季自然景物的更替，抒发对大自然的热爱。",
            "B 叙述日常生活中的起居琐事，感叹人生充满无奈与痛苦。",
            "C 感叹时光飞逝无痕，并在追问中警醒世人珍惜生命、莫虚度年华。",
            "D 探讨宇宙时间与空间运行的科学规律，启发读者探索未知。"
        ],
        answer: "C",
        teacherAnalysis: "【中心思想主旨题】综合第1段至第5段。作者通过对时光匆匆流逝的细腻描摹与反复追问，抒发了对年华易逝的痛惜，并传达出不甘虚度光阴、追求生命价值的深刻哲思。"
    }
];

// 乙组：现代文理解简答题（15分制 + 随文语文知识训练）
const essayDataList = [
    {
        id: 1,
        question: `（一）在第1段中，作者为什么不直接写时间的流逝，而是先写燕子、杨柳和桃花？这样写有什么作用？ <span style="color:var(--primary-color);">[4分]</span>`,
        sampleAnswer: `因为燕子去了能再来、杨柳枯了能再青、桃花谢了能再开，这些自然景物都具有失而复得（周而复始）的特点${PT(2)}。作者借大自然景物的循环往复作为衬托（或对比），强烈反衬出人类时光“一去不复返”的无奈与惋惜，增强了开篇的抒情感染力${PT(2)}。`,
        teacherAnalysis: "<strong>【表现手法与作用题】</strong>参照第1段。指出自然景物“循环往复”的特点（2分），点明“衬托/对比”手法及突出时光一去不返的作用（2分）。"
    },
    {
        id: 2,
        question: `${QUOTE_BOX("洗手的时候，日子从水盆里过去；吃饭的时候，日子从饭碗里过去；默默时，便从凝然的双眼前过去。")}（二）第3段中上面这句话采用了什么修辞手法？试分析其表达效果。 <span style="color:var(--primary-color);">[4分]</span>`,
        sampleAnswer: `采用了<strong>排比</strong>修辞手法${PT(1)}。作者通过三个结构相似的句式，将原本抽象看不见的时间具象化为洗手、吃饭、静默三个平凡的日常生活场景${PT(1)}，生动贴切地写出时间在不知不觉中悄然流逝、无处不在的特点${PT(1)}，增强了语言的节奏感与惜时的紧迫感${PT(1)}。`,
        teacherAnalysis: "<strong>【修辞手法与作用题】</strong>参照第3段。写出“排比”修辞（1分）+ 化抽象为日常细节（1分）+ 表现时间悄然流逝的特点与紧迫感（2分）。"
    },
    {
        id: 3,
        question: `（三）结合第4段，“我留着些什么痕迹呢？我何曾留着像游丝样的痕迹呢？”表达了作者怎样的思想感情？ <span style="color:var(--primary-color);">[3分]</span>`,
        sampleAnswer: `“游丝”极其纤细微小，作者感叹自己连游丝般微弱的生命痕迹都未曾留下${PT(1)}，深刻表达了作者自省过去八千多个日子碌碌无为、虚度年华的深深愧疚、惋惜与自责之情${PT(2)}。`,
        teacherAnalysis: "<strong>【作者思想感情题】</strong>参照第4段。解释“游丝痕迹”的表意（1分），点出作者自责、惋惜、不甘虚度的情感（2分）。"
    },
    {
        id: 4,
        question: `（四）作者在第4段末尾追问：“但不能平的，为什么偏要白白走这一遭啊？”在当今充满手机娱乐诱惑的时代，你会如何避免让自己的人生“白白走这一遭”？<span style="background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-left:4px;">KBAT</span> <span style="color:var(--primary-color);">[4分]</span>`,
        sampleAnswer: `我不会让自己沉迷于毫无意义的刷手机、打游戏或拖延之中，因为时间在洗手、吃饭、发呆的瞬间就会悄然溜走${PT(2)}。我会为自己设定清晰的学习与成长目标，珍惜每一天的点滴时间多阅读、多掌握实用技能，并尽己所能帮助他人，在有限的生命里留下充实而有价值的足迹${PT(2)}。`,
        teacherAnalysis: "<strong>【高阶思维 KBAT 应用与评价题】</strong>结合第3段、第4段主旨，联系个人日常生活谈如何防范虚度光阴（2分）及如何活出价值（2分），言之成理即可得分。"
    },
    {
        id: 5,
        question: `（五）<strong>【随文语文知识训练】</strong>阅读下面的句子，完成第 a 至 d 小题： <span style="color:var(--primary-color);">[附加4分]</span><br>` +
                  `<div style="font-weight:500; margin-top:8px; line-height:1.9;">` +
                  `a. “我的手确乎是${HL("渐渐")}空虚了。”——写出画线词语的<strong>词性</strong>。<br>` +
                  `b. “小屋里射进两三方斜斜的太阳。”——写出句中的一个<strong>偏正短语</strong>。<br>` +
                  `c. “去的<strong>尽管</strong>去了，来的<strong>尽管</strong>来着。”——写出上面句子的<strong>复句类型</strong>。<br>` +
                  `d. “但不能平的，为什么偏要白白走这一遭啊？”——写出上面句子所采用的<strong>修辞手法</strong>。` +
                  `</div>`,
        sampleAnswer: `a. 词性：<strong>副词</strong>${PT(1)}<br>` +
                      `b. 偏正短语：<strong>斜斜的太阳</strong>（或：两三方斜斜的太阳）${PT(1)}<br>` +
                      `c. 复句类型：<strong>并列复句</strong>（前后两分句分别说明“去的”与“来的”情况，地位平等）${PT(1)}<br>` +
                      `d. 修辞手法：<strong>反问</strong>${PT(1)}`,
        teacherAnalysis: "<strong>【语文基础知识题】</strong>对标马来西亚初中华文单元练习，考查副词、偏正短语、复句类型与反问修辞。"
    }
];
