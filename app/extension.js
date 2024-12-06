'use strict';
game.import("extension", function(lib, game, ui, get, ai, _status) {

  let layoutPath = lib.assetURL + 'extension/将灵重置版/';
  window.jl_config = { layoutPath };
  let loadCSS = false;
  let extensionName = 'extension_将灵重置版_';
  jl_config.extensionName = extensionName;
  const s_character = ['shenzhouyu', 'shenzhaoyun', 'shencaocao', 'zhugeguo', 'nianshou', 'caoying', 'lingju', 'xiaosha', 'huaman', 'wuliuqi', 'shenguanyu', 'guansuo', 'zhangqiying', 'caochun'];
  const a_character = ['diaochan', 'luxun', 'guojia', 'xiaoqiao', 'jiangwei', 'lvbu', 'zhugeliang', 'zhurong', 'zhoufei', 'xizhicai', 'sunshangxiang', 'menghuo', 'zhangxingcai', 'zhangfei'];
  const b_character = ['guanyinping', 'sundeng', 'caorui', 'guohuanghou', 'yuanshao', 'huaxiong', 'xunyou'];
  // this.c_character={'zhangyi':'张嶷','sunluban':'孙鲁班','guohuai':'郭淮'};
  // this.jl_config.jlname={

  jl_config.jlname = {
    "caochun": {
      "name": "曹纯",
      "des": "",
      "skill": {
        "【缮甲】": "▶每名角色的出牌阶段开始时，你有85%的概率可以摸2~4张牌，然后若此时是你的回合内，你可以视为使用一张【杀】，此【杀】不能被响应且伤害+1~2。（每轮限3次）",
        "【骁锐】": "▶当你对其他角色造成伤害时，你有90%的概率随机获得其1~4张牌且此伤害+1~4（每回合限触发4次）"
      }
    },
    "zhangqiying": {
      "name": "张琪瑛",
      "des": "",
      "skill": {
        "【法箓】": "▶结束阶段，你有89.2%的概率随机获得牌堆中四种花色的牌各一张。若你因此获得了点数相同的牌，你回复1点体力并对至多两名其他角色各造成1点伤害。",
        "【点化】": "▶准备阶段，你有89.2%的概率可以观看牌堆顶的四张牌，然后以任意顺序放回牌堆顶。",
        "【真仪】": "▶当你对其他角色造成伤害时，你有84.2%的概率令此伤害+1，然后随机获得其一张牌；当你受到其他角色造成的伤害时，你有84.2%的概率防止此伤害，然后你随机弃置伤害来源两张牌。（每个效果每回合各限触发2次）"
      }
    },
    "shenzhouyu": {
      "name": "神周瑜",
      "des": "周瑜(175年-210年)，字公瑾，庐江舒县人。东汉末年名将，洛阳令周异之子，堂祖父周景、堂叔周忠，都官至太尉。周瑜“性度恢廓”“实奇才也”，孙权称赞周瑜有“王佐之资”，范成大誉之为“世间豪杰英雄士，江左风流美丈夫”。",
      "skill": {
        "【业火】": "▶出牌阶段开始时，你有90%对至多两名角色造成2点火焰伤害。",
        "【琴音】": "▶结束阶段，你有90%的概率可以选择任意名角色分别失去或回复1点体力。"
      }
    },
    "shenzhaoyun": {
      "name": "神赵云",
      "des": "赵云（？－229年）,字子龙，常山真定(今河北省定南)人。自幼刚正雄壮，喜好练武，遇事善于思考。少年时期喜武但不逞强，有勇但不斗勇。曾先后在袁绍、公孙瓒帐下为将，后改投刘备，与刘备一见如故，倍受重用，从此追随刘备，直至病逝。",
      "skill": {
        "【绝境】": "▶准备阶段、结束阶段或当你进入或脱离濒死状态时，你有90%的概率摸二至四张牌并回复1点体力。",
        "【龙魂】": "▶你使用【杀】或【桃】时，有90%的概率此牌伤害或回复值+1~3，且你使用【闪】或【无懈可击】时，有90%概率获得当前回合角色至多两张牌。"
      }
    },
    "shenguanyu": {
      "name": "神关羽",
      "des": "",
      "skill": {
        "【武神】": "▶准备阶段，你有85%的概率视为对至多3名角色各使用一张【杀】。此【杀】每次对目标角色造成伤害后你摸一张牌。",
        "【武魂】": "▶你的回合外，与你距离1以内的角色受到伤害后，你有90%的概率获得1个“梦魇”标记。此回合结束时，若你有梦魇标记，你可令当前回合角色失去X点体力（X为“梦魇”标记数量且最多为5）。"
      }
    },
    "guansuo": {
      "name": "关索",
      "des": "",
      "skill": {
        "【撷芳】": "▶出牌阶段开始时，你有85%的概率获得以下效果：摸X张牌、此阶段计算与其他角色的距离-X、此阶段可以多使用X张【杀】，且【杀】的伤害+X（此阶段限触发2次），X为场上女性角色数+1。",
        "【征南】": "▶一名角色受到伤害后，若其体力值小于等于你，你有95%的概率摸1~3张牌，然后在“武圣”、“当先”、“制蛮”里选择并获得一个技能直到你的回合结束（每回合每名角色限触发一次），若未获得技能则你回复1点体力。"
      }
    },
    "zhangxingcai": {
      "name": "张星彩",
      "des": "",
      "skill": {
        "【甚贤】": "▶每名角色的回合限2次，当其他角色因弃置而失去基本牌后，你有85%的概率可以摸1~2张牌。",
        "【枪舞】": "▶出牌阶段开始时，你有95%的概率本回合出【杀】次数+2~3且使用【杀】无距离限制。"
      }
    },
    "zhangfei": {
      "name": "张飞",
      "des": "",
      "skill": {
        "【咆哮】": "▶你的出牌阶段开始时，有85%的概率多出1~5张【杀】，且无距离限制。",
        "【替身】": "▶你受到伤害时，你有70%的概率回复1点体力并摸三张牌（每轮限3次）。"
      }
    },
    "shencaocao": {
      "name": "神曹操",
      "des": "",
      "skill": {
        "【观沧海】": "▶当你受到伤害时，你可以获得令你受到伤害的牌，接着你观看牌堆顶x张牌（为场上角色数量且最少为4），你获得其中一半数量的牌（向下取整），并获得伤害来源的一张牌（若其没牌，则造成一点伤害）。",
        "【飞影】": "▶当其他玩家使用卡牌指定之后，若此牌只有一个目标，你可以改变此牌的目标。（每回合限2次，除无懈可击外）"
      }
    },
    "zhugeguo": {
      "name": "诸葛果",
      "des": "诸葛果为《历代神仙通鉴》中诸葛亮女儿的名字 传说是诸葛亮的女儿，容貌甚美，与人异焉 其出生时，野外仙气缥缈、白鹤环绕 生来天资聪慧，对道学由衷热爱 后最终修成仙道，羽化升天。",
      "skill": {
        "【祈禳】": "▶当你使用一张装备牌或每回合使用第一张基本牌时，你有95%的概率从牌堆或弃牌堆摸两至四张锦囊牌（每回合限触发2次，回合外限触发1次）。",
        "【羽化】": "▶结束阶段，你有95%的概率观看X张牌（X为你本回合使用的锦囊牌数且至少为4），然后保留其中至多三张牌，若花色均不同，则随机对一名敌方阵营的玩家造成1~2点伤害。"
      }
    },
    "lingju": {
      "name": "灵雎",
      "des": "灵雎，《铜雀台》中的角色，相传为吕布和貂蝉的女儿，被汉献帝掳走并训练为死士，被秘密送入宫中接近曹操，成为其“忘年红颜知己”。外表是柔弱的女子，实际上身怀致命的杀人绝技，等待时机给予曹操致命一击。",
      "skill": {
        "【竭缘】": "▶当你造成伤害时，有85%概率伤害+1~2；当你受到伤害时，有85%概率伤害-1~2。（每回合每项限触发1次）",
        "【焚心】": "▶一名角色进入濒死状态时，你有90%的概率摸三至五张牌并回复1~2点体力。（每回合限触发1次）"
      }
    },
    "xiaosha": {
      "name": "小杀",
      "des": "小杀，娇生惯养但是想独立的富家女孩，因为喜欢玩游戏，所以参加了三国杀组织的《三国之星》选秀比赛，一路靠着颜值和风风火火的爽快性格过关斩将吸粉无数，获得了冠军，成为了官方签约的形象代言人。",
      "skill": {
        "【瑰杀】": "▶出牌阶段开始时，你有95%的概率本回合出杀次数增加X次（X为此时你手牌中【杀】的数量），且使用【杀】时摸一张牌（每回合限触发3次）。",
        "【姝丽】": "▶当你造成伤害后，你有95%的概率获得弃牌堆一至三张【杀】，且这些【杀】本回合不计入手牌上限（每回合限触发3次）。"
      }
    },
    "caoying": {
      "name": "曹婴",
      "des": "曹婴作为曹操的孙女，文武双全，弓马娴熟，深得曹操兵道和攻心之术。诸葛亮北伐，以赵云为先锋作饵，实则图谋魏国凉州六郡。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。这是“常胜将军”赵云少有的败绩，曹婴因此成名。",
      "skill": {
        "【凌人】": "▶你使用【杀】或伤害类锦囊牌指定目标后，你有84.2%的几率选择其中一个目标是此牌对其伤害+1~2然后你摸1~3张牌，并且你获得“界奸雄”、“界行殇”直到你下回合开始。（每回合限触发2次）",
        "【伏间】": "▶你的回合开始时或结束时，你有89.2%的几率可以观看一名其他角色的手牌，然后你可以获得其中至多两张牌，若颜色相同，对其造成一点伤害。"
      }
    },
    "luxun": {
      "name": "陆逊",
      "des": "陆逊(183-245)，字伯言，本名陆仪，吴郡吴县华亭(今上海松江)人，孙策之婿，著名的军事家和政治家。“刘备天下称雄，一世所惮，陆逊春秋方壮，威名未著，摧而克之，罔不如志。予既奇逊之谋略，又叹权之识才，所以济大事也。”————《三国志·吴书·陆逊传》",
      "skill": {
        "【连营】": "▶当你失去最后手牌后，你有90%的概率可以令至多X名角色各摸1张牌和1-2张【杀】。（X为你失去的手牌数）",
        "【谦逊】": "▶当你成为其他角色使用的锦囊牌和【杀】的目标后，你有80%的概率可以摸2张牌。"
      }
    },
    "zhurong": {
      "name": "祝融",
      "des": "祝融夫人，《三国演义》中人物，不见于正史记载。小说中为南蛮王孟获之妻，带来洞主之姐，相传为火神祝融氏的后裔。有勇有谋，武艺高强，善使飞刀，百发百中，是《三国演义》中唯一正式上过战场的女子。在诸葛亮七擒七纵孟获之后，随孟获归顺蜀汉。",
      "skill": {
        "【烈刃】": "▶你的【杀】或【决斗】指定目标后，你有95%的概率获得该角色一张牌并摸一张牌。（每回合限触发3次）",
        "【巨象】": "▶其他角色使用的伤害类锦囊牌有80%的概率在结算完毕进入弃牌堆时你获得之并摸1~2张牌。（每回合限触发3次）"
      }
    },
    "xizhicai": {
      "name": "戏志才",
      "des": "戏志才（？—约196年），志才或为字，名不详，颍川郡（今河南省禹州市）人。东汉末年曹操帐下谋士。由荀彧推荐出山辅佐曹操，为人多谋略，受曹操器重甚。",
      "skill": {
        "【筹策】": "▶当你受到伤害后，你有85%的概率令一名角色摸两张牌，然后弃置一名角色至多两张牌。",
        "【先辅】": "▶结束阶段，你有80%的概率可以选择一名角色。直到你的下回合开始，该角色造成或受到伤害后，你回复1点体力并摸两张牌。（每回合限触发1次）"
      }
    },
    "guojia": {
      "name": "郭嘉",
      "des": "郭嘉（170年－207年），字奉孝，颍川阳翟（今河南禹州）人。曹操帐下著名谋士。原为袁绍部下，后转投曹操，为曹操统一中国北方立下了功勋，官至军师祭酒，封洧阳亭侯。在曹操征伐乌丸时病逝，年仅三十八岁。谥号贞侯。史书称“才策谋略，世之奇士”。",
      "skill": {
        "【遗计】": "▶当你受到1点伤害后，你有85%的概率可以摸3张牌，然后你可以将至多3张手牌交给一至三名其他角色。",
        "【天妒】": "▶当你的判定牌生效后，你有90%的概率获得此牌并从牌堆额外摸2张牌。"
      }
    },
    "menghuo": {
      "name": "孟获",
      "des": "孟获（生卒年不详），三国时期南中地区的首领，公元225年起兵反叛蜀汉，被诸葛亮率领大军擒拿后被赦免，遂降服，此后不再叛乱，后孟获随诸葛亮回到成都，担任御史中丞。",
      "skill": {
        "【再起】": "▶摸牌阶段，你有95%的概率亮出牌堆顶的牌，如果不是黑桃，你回复1点体力并获得此牌。",
        "【祸首】": "▶伤害类锦囊牌有80%的概率对你无效且你摸两张牌。（每回合限触发2次）"
      }
    },
    "nianshou": {
      "name": "年兽",
      "des": "",
      "skill": {
        "【反戈】": "▶当你受到伤害后，你有90%的概率摸两张牌，然后获得伤害来源一至两张牌，再对伤害来源造成1~2点伤害。",
        "【寻猎】": "▶一名角色的回合结束时，你有95%的概率选择一项：令其回复1点体力并摸两张牌；或对其造成1点伤害并随机弃置两张牌。（每轮限触发两次）"
      }
    },
    "jiangwei": {
      "name": "姜维",
      "des": "",
      "skill": {
        "【挑衅】": "▶出牌阶段开始时或结束时，你有69.2%的概率弃置至多两名其他角色各一张牌。",
        "【观星】": "▶准备阶段，你有74.2%的概率观看牌堆顶五张牌，然后以任意顺序放回牌堆顶或牌堆底。"
      }
    },
    "xiaoqiao": {
      "name": "小乔",
      "des": "",
      "skill": {
        "【天香】": "▶当你受到伤害时，你有89%的概率可以弃置一张手牌，防止此次伤害并选择一名其他角色，令其失去1点体力，然后其获得你弃置的牌（每回合限触发两次）",
        "【红颜】": "▶当你弃置手牌时，你有94%的概率摸2张牌（每回合限触发三次）"
      }
    },
    "diaochan": {
      "name": "貂蝉",
      "des": "",
      "skill": {
        "【闭月】": "▶结束阶段，你有83.2%的概率摸2~3张牌。",
        "【离间】": "▶出牌阶段开始时，你有48.2%的概率可以选择一名男性角色失去2点体力。"
      }
    },
    "huaman": {
      "name": "花鬘",
      "des": "",
      "skill": {
        "【蛮嗣】": "▶出牌阶段开始时，你有94.2%的概率可以选择至多三名其他角色，此阶段你对这些角色造成的伤害+1且你使用的【杀】、【决斗】、【火攻】可以额外选择其中一名角色为目标（每回合限触发2次）。",
        "【系力】": "▶其他角色于其回合内前两次造成伤害时，你有89.2%的概率可以和该角色各摸1~2张牌，然后此伤害+1。"
      }
    },
    "wuliuqi": {
      "name": "伍六七",
      "des": "",
      "skill": {
        "【飞剪】": "▶出牌阶段结束时，你有84.2%的概率可以弃置任意张装备牌（可以不弃），然后对任意名其他角色造成共计至多X+2点伤害值（X为你弃置的装备牌数），每名角色至多分配5点。",
        "【削发】": "▶你对一名其他角色造成伤害后，你有89.2%的概率可以令该角色随机弃置2~3张牌（每回合限触发2次）。"
      }
    },
    "lvbu": {
      "name": "吕布",
      "des": "",
      "skill": {
        "【无双】": "▶你使用的【杀】有84%的概率不能被抵消并无视防具，且在结算后将此【杀】收回并获得弃牌堆中一张【决斗】。（每回合限触发两次）",
        "【利驭】": "▶当你使用牌造成伤害后，你有84%的概率获得目标角色区域里一张牌并对其造成1点伤害。（每回合限触发3次）"
      }
    },
    "zhoufei": {
      "name": "周妃",
      "des": "",
      "skill": {
        "【良姻】": "▶当有牌移出游戏或从游戏外加入任意角色的手牌时，你有84%的概率可令一名角色摸一至三张牌（每回合限触发两次）。",
        "【箜声】": "▶准备阶段，你有84%的概率随机获得弃牌堆里的四张牌名不同的牌。结束阶段若这些牌还在手牌中则弃置。"
      }
    },
    "sunshangxiang": {
      "name": "孙尚香",
      "skill": {
        "【结姻】": "▶出牌阶段开始时，你有79%的概率令你和一名其他角色回复1点体力并摸1~2张牌。",
        "【枭姬】": "▶当你失去一张装备区里的牌时，你有84%的概率摸1~2张牌。（每轮限四次）"
      }
    },
    "zhugeliang": {
      "name": "诸葛亮",
      "skill": {
        "【火计】": "▶出牌阶段开始时，你有89%的概率可摸一张牌并可以视为使用一张【火攻】，且你可以获得此【火攻】你弃置的牌。",
        "【看破】": "▶其他角色使用的锦囊牌对你生效前，你有79%的概率可令此锦囊对你无效，然后摸一张牌（每回合限触发两次）。"
      }
    },
    "guanyinping": {
      "name": "关银屏",
      "skill": {
        "【雪恨】": "▶当你用红色牌造成伤害时，你有75%概率伤害+1并摸一张牌（每回合限一次）。"
      }
    },
    "sundeng": {
      "name": "孙登",
      "skill": {
        "【匡弼】": "▶回合开始时，你有60%概率获得弃牌堆的1~3张牌。"
      }
    },
    "caorui": {
      "name": "曹叡",
      "skill": {
        "【恢拓】": "▶受到伤害时，你有20%概率回复1体力并摸一张牌。"
      }
    },
    "guohuanghou": {
      "name": "郭皇后",
      "skill": {
        "【矫诏】": "▶出牌阶段开始时，你有74%概率从牌堆获得一张锦囊牌。"
      }
    },
    "yuanshao": {
      "name": "袁绍",
      "skill": {
        "【血裔】": "▶出牌阶段开始时，你有67.2%的概率本回合手牌上限+3，并可以额外使用一张【杀】。"
      }
    },
    "huaxiong": {
      "name": "华雄",
      "skill": {
        "【耀武】": "▶当你受到杀或者决斗伤害时，你有70%概率摸两张牌。"
      }
    },
    "xunyou": {
      "name": "荀攸",
      "skill": {
        "【智愚】": "▶当你受到伤害时，你有85%概率摸一张牌，伤害来源弃置一张牌。"
      }
    },
    "zhangyi": {
      "name": "张嶷",
      "skill": {
        "【矢志】": "▶出牌阶段开始时，你有40%概率本回合出【杀】+2。"
      }
    },
    "sunluban": {
      "name": "孙鲁班",
      "skill": {
        "【骄矜】": "▶受到其他角色的伤害时，你有20%概率令伤害-1。"
      }
    },
    "guohuai": {
      "name": "郭淮",
      "skill": {
        "【精策】": "▶回合结束时，若你手牌小于体力值，40%概率可以摸两张牌。"
      }
    }
  }
  // this.jl_valueres={
  let jl_valueres = {
    "caochun": { "gain": true, "sp": 0, "quality": "s" },
    "zhangqiying": { "gain": false, "sp": 0, "quality": "s" },
    "shenzhouyu": { "gain": false, "sp": 0, "quality": "s" },
    "shenzhaoyun": { "gain": false, "sp": 0, "quality": "s" },
    "shencaocao": { "gain": false, "sp": 0, "quality": "s" },
    "zhugeguo": { "gain": false, "sp": 0, "quality": "s" },
    "nianshou": { "gain": false, "sp": 0, "quality": "s" },
    "caoying": { "gain": false, "sp": 0, "quality": "s" },
    "lingju": { "gain": false, "sp": 0, "quality": "s" },
    "xiaosha": { "gain": false, "sp": 0, "quality": "s" },
    "huaman": { "gain": false, "sp": 0, "quality": "s" },
    "wuliuqi": { "gain": false, "sp": 0, "quality": "s" },
    "diaochan": { "gain": false, "sp": 0, "quality": "a" },
    "luxun": { "gain": false, "sp": 0, "quality": "a" },
    "guojia": { "gain": false, "sp": 0, "quality": "a" },
    "xiaoqiao": { "gain": false, "sp": 0, "quality": "a" },
    "jiangwei": { "gain": false, "sp": 0, "quality": "a" },
    "lvbu": { "gain": false, "sp": 0, "quality": "a" },
    "zhugeliang": { "gain": false, "sp": 0, "quality": "a" },
    "zhurong": { "gain": false, "sp": 0, "quality": "a" },
    "menghuo": { "gain": false, "sp": 0, "quality": "a" },
    "zhoufei": { "gain": false, "sp": 0, "quality": "a" },
    "xizhicai": { "gain": false, "sp": 0, "quality": "a" },
    "sunshangxiang": { "gain": false, "sp": 0, "quality": "a" },
    "guanyinping": { "gain": false, "sp": 0, "quality": "b" },
    "sundeng": { "gain": false, "sp": 0, "quality": "b" },
    "caorui": { "gain": false, "sp": 0, "quality": "b" },
    "guohuanghou": { "gain": false, "sp": 0, "quality": "b" },
    "yuanshao": { "gain": false, "sp": 0, "quality": "b" },
    "huaxiong": { "gain": false, "sp": 0, "quality": "b" },
    "xunyou": { "gain": false, "sp": 0, "quality": "b" },
    "zhangyi": { "gain": false, "sp": 0, "quality": "c" },
    "sunluban": { "gain": false, "sp": 0, "quality": "c" },
    "guohuai": { "gain": false, "sp": 0, "quality": "c" },
    "xiaotao": { "gain": false, "sp": 0, "quality": "a" },
    "guanyu": { "gain": false, "sp": 0, "quality": "a" },
    "guansuo": { "gain": false, "sp": 0, "quality": "s" },
    "shenguanyu": { "gain": false, "sp": 0, "quality": "s" },
    "zhangxingcai": { "gain": false, "sp": 0, "quality": "a" },
    "zhangfei": { "gain": false, "sp": 0, "quality": "a" },
  }
  if (!lib.config.jl_value) {
    game.saveConfig('jl_zsd', 5);
    game.saveConfig('jl_gjzsd', 5);
    game.saveConfig('jl_hljh', 5);
    game.saveConfig('jl_value', jl_valueres);
    game.saveConfig('jl_gmczjl', 0);
    game.saveConfig('jl_cheat', 0);
  }
  const config_jl_value = lib.config.jl_value;
  let config_jl_value_updated = false;
  for (const jlName in jl_valueres) {
    if (config_jl_value[jlName] === undefined) {
      config_jl_value[jlName] = jl_valueres[jlName];
      config_jl_value_updated = true;
    }
  }
  if (config_jl_value_updated === true) {
    game.saveConfig('jl_value', config_jl_value);
  }

  if (lib.config.jl_bugnum != 0) {
    game.saveConfig('jl_zsd', 15);
    game.saveConfig('jl_gjzsd', 10);
    game.saveConfig('jl_hljh', 15);
    game.saveConfig('jl_value', jl_valueres);
    game.saveConfig('jl_gmczjl', 0);
    game.saveConfig('jl_bugnum', 0);
    game.saveConfig('jl_gmlv', '0');
    lib.config.jl_value[s_character[4]]['gain'] = true;
    game.saveConfig('jl_value', lib.config.jl_value);
  }
  if (!lib.config.jl_value["zhangfei"]) {
    lib.config.jl_value["guansuo"] = { "gain": false, "sp": 0, "quality": "s" };
    lib.config.jl_value["shenguanyu"] = { "gain": false, "sp": 0, "quality": "s" };
    lib.config.jl_value["zhangxingcai"] = { "gain": false, "sp": 0, "quality": "a" };
    lib.config.jl_value["zhangfei"] = { "gain": false, "sp": 0, "quality": "a" };
    game.saveConfig('jl_value', lib.config.jl_value);
    game.saveConfig('jl_lingzhu', 0)
  }

  jl_config.damageAnimation = function(name, trigger, event) {
    var b = trigger.player.offsetTop;
    var c = trigger.source.offsetTop;
    var d = trigger.source.offsetHeight;
    var e = trigger.player.offsetLeft;
    var f = trigger.source.offsetLeft;
    var g = trigger.source.offsetWidth;
    var img = document.createElement("img");
    var src = jl_config['layoutPath'] + 'image/action/' + name + '3.gif';
    img.height = d;
    img.width = 0.75 * d;
    img.style.position = "absolute";
    img.style.top = "calc(" + (b) + "px)";
    img.style.zIndex = 99;
    img.src = src;
    if ((e + g) <= f) {
      img.style.left = "calc(" + (e + 0.8 * g) + "px)";

    } else {
      img.style.left = "calc(" + (e - 0.8 * g) + "px)";
      img.style.transform = "scaleX(-1)";
    }
    ui.arena.appendChild(img);
    game.pause();
    let t = setTimeout(function() {
      game.resume();
      ui.arena.removeChild(img);
    }, 830);
    setTimeout(function() {
      trigger.source.storage.playerAnimation = true;
    }, 3000);
    img.onerror = function() {
      clearTimeout(t);
      img.style.display = "none";
      game.resume();
      ui.arena.removeChild(img);
      event.finish();
    };
  }

  jl_config.setchuzhan = function(name) {
    let img = document.createElement("img");
    img.id = 'jl_gif';
    let src = jl_config['layoutPath'] + 'image/action/' + lib.config.jl_gmczjl + '1.gif';
    img.src = src;

    img.style.position = "absolute";
    img.style.bottom = "calc( 0% )";
    img.style.zIndex = 20;
    img.style.pointerEvents = "none";
    let d = game.me.offsetHeight;
    img.height = d;
    img.width = 0.75 * d;
    let f = game.me.offsetLeft;
    let g = game.me.offsetWidth;
    img.style.left = "calc(" + (f - g) + "px)";
    ui.arena.appendChild(img);
  }

  jl_config.settexiao = function() {
    if (lib.config.jl_juneichangzhu == 1 & lib.config.jl_gmczjl != 0 & lib.config.jl_gmczjl != 'shenlvbu') {
      let img = document.createElement("img");
      img.id = 'jl_texiao';
      if (lib.config.jl_value[lib.config.jl_gmczjl]['quality'] == 's') {
        let src = jl_config['layoutPath'] + 'image/img/skill1.gif';
        img.src = src;
      } else {
        let src = jl_config['layoutPath'] + 'image/img/skill2.gif'
        img.src = src;
      }

      img.onerror = function() {
        img.style.display = 'none';
      };
      img.style.position = "absolute";
      img.style.bottom = "calc( 0% )";
      img.style.zIndex = 20;
      let d = game.me.offsetHeight;
      img.height = d;
      img.width = 0.75 * d;
      let f = game.me.offsetLeft;
      let g = game.me.offsetWidth;
      img.style.pointerEvents = "none";
      img.style.left = "calc(" + (f - g) + "px)";
      ui.arena.appendChild(img);
      game.playThisAudio('effect/skill');
      if (lib.config.jl_value[lib.config.jl_gmczjl]['quality'] == 's') {
        setTimeout(() => {
          ui.arena.removeChild(img);
        }, 1600);
      } else {
        setTimeout(() => {
          ui.arena.removeChild(img);
        }, 1900);
      }
    }
  }
  jl_config.chooseButton = function(skills, player) {
    let num = game.players.length - 1;
    var event = _status.event;
    if (!event._result) event._result = {};
    event._result.skills = [];
    event._result.bool = false;
    var h3 = document.createElement('h3');
    var rSkill = event._result.skills;
    var dialog = ui.create.dialog('请为' + get.translation(player) + '选择将灵', '', 'hidden');
    event.dialog = dialog;
    var table = document.createElement('div');
    table.classList.add('add-setting');
    table.style.margin = '0';
    table.style.width = '100%';
    table.style.position = 'relative';
    for (var i = 0; i < skills.length; i++) {
      if (!lib.config.jl_value[skills[i].slice(3)]['gain']) continue;
      var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
      td.link = skills[i];
      table.appendChild(td);
      td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
      td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function() {
        h3.innerHTML = get.translation(this.link + '_info');
        if (_status.dragged) return;
        if (_status.justdragged) return;
        _status.tempNoButton = true;
        setTimeout(function() {
          _status.tempNoButton = false;
        }, 500);
        var link = this.link;
        if (!this.classList.contains('bluebg')) {
          if (rSkill.length >= 1) return;
          rSkill[0] = link;
          event._result.bool = true;
          this.classList.add('bluebg');
        } else {
          this.classList.remove('bluebg');
          rSkill.remove(link);
          event._result.bool = false;
        }
      });
    }
    dialog.content.appendChild(h3);
    dialog.content.appendChild(table);
    dialog.add('　　');
    dialog.open();
    event.control = ui.create.control('ok', function(link) {
      event.dialog.close();
      event.control.close();
      game.resume();
      _status.imchoosing = false;
    });
    for (var i = 0; i < event.dialog.buttons.length; i++) {
      event.dialog.buttons[i].classList.add('selectable');
    }
    game.pause();
    game.countChoose();
  };

  jl_config.gameOver = function() {
    var a1 = [0, 1].randomGet();
    var a2 = [0, 1, 2].randomGet();
    var a3 = [0, 1].randomGet();
    var lingzhu = Math.random();
    var a4 = lingzhu > 0.99 ? 1 : 0;
    var b1 = parseInt(lib.config.jl_hljh);
    var b2 = parseInt(lib.config.jl_zsd);
    var b3 = parseInt(lib.config.jl_gjzsd);
    var b4 = parseInt(lib.config.jl_lingzhu);
    var c1 = a1 + b1;
    var c2 = a2 + b2;
    var c3 = a3 + b3;
    var c4 = a4 + b4;
    game.saveConfig('jl_hljh', c1);
    game.saveConfig('jl_zsd', c2);
    game.saveConfig('jl_gjzsd', c3);
    game.saveConfig('jl_lingzhu', c4);

    let img_jl_jl1 = document.createElement("img");
    let img_jl_jl2 = document.createElement("img");
    let img_jl_jl3 = document.createElement("img");
    let img_jl_jl4 = document.createElement("img");
    let src1 = jl_config['layoutPath'] + 'image/img/' + 'hljh.png';
    let src2 = jl_config['layoutPath'] + 'image/img/' + 'zhuansheng1.png';
    let src3 = jl_config['layoutPath'] + 'image/img/' + 'zhuansheng2.png';
    let src4 = jl_config['layoutPath'] + 'image/img/' + 'lingzhu.png';
    img_jl_jl1.src = src1;
    img_jl_jl2.src = src2;
    img_jl_jl3.src = src3;
    img_jl_jl4.src = src4
    Object.assign(img_jl_jl1.style, {
      width: '50px',
      height: '50px',
    });
    Object.assign(img_jl_jl2.style, {
      width: '50px',
      height: '50px',
    });
    Object.assign(img_jl_jl3.style, {
      width: '50px',
      height: '50px',

    });
    Object.assign(img_jl_jl4.style, {
      width: '50px',
      height: '50px',
    });

    let jl_jl1 = document.createElement('div');
    let jl_jl2 = document.createElement('div');
    let jl_jl3 = document.createElement('div');
    let jl_jl4 = document.createElement('div');
    jl_jl1.appendChild(img_jl_jl1);
    jl_jl2.appendChild(img_jl_jl2);
    jl_jl3.appendChild(img_jl_jl3);
    jl_jl4.appendChild(img_jl_jl4);
    Object.assign(jl_jl1.style, {
      width: 'auto',
      height: 'auto',
      position: 'relative',
      intro: '唤灵宝箱',
    });
    Object.assign(jl_jl2.style, {
      width: 'auto',
      height: 'auto',
      position: 'relative'
    });
    Object.assign(jl_jl3.style, {
      width: 'auto',
      height: 'auto',
      position: 'relative'
    });
    Object.assign(jl_jl4.style, {
      width: 'auto',
      height: 'auto',
      position: 'relative'
    });

    let jl_jl1_text = document.createElement('div');
    let jl_jl2_text = document.createElement('div');
    let jl_jl3_text = document.createElement('div');
    let jl_jl4_text = document.createElement('div');
    jl_jl1.appendChild(jl_jl1_text);
    jl_jl2.appendChild(jl_jl2_text);
    jl_jl3.appendChild(jl_jl3_text);
    jl_jl4.appendChild(jl_jl4_text);

    Object.assign(jl_jl1_text.style, {
      bottom: '5px',
      right: '-5px',
      width: '16px',
      height: '16px',
      position: 'absolute'
    });
    Object.assign(jl_jl2_text.style, {
      bottom: '5px',
      right: '-5px',
      width: '16px',
      height: '16px',
      position: 'absolute'
    });
    Object.assign(jl_jl3_text.style, {
      bottom: '5px',
      right: '-5px',
      width: '16px',
      height: '16px',
      position: 'absolute'
    });
    Object.assign(jl_jl4_text.style, {
      bottom: '5px',
      right: '-5px',
      width: '16px',
      height: '16px',
      position: 'absolute'
    });

    if (_status.video) return;

    let gainedIDs = 1;
    setTimeout(() => {
      let winDialog = document.querySelector('.dialog > .content-container');
      if (!winDialog) {
        winDialog = ui.dialog;
        if (winDialog) {
          console.log(ui.dialog);
        } else {
          console.warn('no end game dialog found');
          return;
        }
      }
      console.log(winDialog);
      winDialog = winDialog.parentElement;
      winDialog.style.transform += 'translateX(-1em)';
      let node = document.createElement('div');
      node.classList.add('jlsgbujiang', 'dialog', 'withbg');
      winDialog.prepend(node);
      Object.assign(node.style, {
        bottom: '0',
        left: 'calc(100% + 5px)',
        textAlign: 'left',
        transition: 'all 0.5s cubic-bezier(0, 0, 0.2, 1)',
        transform: 'scale(1)',
        cursor: 'pointer',
        width: 'auto',
        height: 'auto',
        minWidth: '0',
        minHeight: '0',
      });
      {
        let text = document.createElement('div');
        node.appendChild(text);
        text.innerHTML = '战斗<br>奖励';
        Object.assign(text.style, {
          fontSize: '26px',
          fontFamily: 'STXinwei, xinwei',
          transition: 'opacity 0.5s cubic-bezier(0, 0, 0.2, 1)',
          position: 'relative',
          whiteSpace: 'nowrap',
        });
        node.addEventListener('click', e => {
          text.style.opacity = 0;
          node.style.minHeight = winDialog.offsetHeight + 'px';
          // node.style.maxHeight = winDialog.offsetHeight +'px';
          node.style.cursor = '';
          node.addEventListener('transitionend', e => {
            node.style.minWidth = '280px';
            winDialog.style.transition = 'all 0.5s cubic-bezier(0, 0, 0.2, 1) 0s';
            winDialog.style.transform = winDialog.style.transform.replace(/translateX\(\d+(px)?\)/, 'translateX(-140px)');
            node.addEventListener('transitionend', e2 => {
              if (e2 === e) return;

              if (a1 + a2 + a3 + a4 == 0) {
                text.innerText = '很遗憾没有收获';
                text.style.opacity = 1;
              } else {
                text.remove();

                jl_jl1_text.innerHTML = a1;
                jl_jl2_text.innerHTML = a2;
                jl_jl3_text.innerHTML = a3;
                jl_jl4_text.innerHTML = a4;

                if (a1 != 0) node.appendChild(jl_jl1);
                if (a2 != 0) node.appendChild(jl_jl2);
                if (a3 != 0) node.appendChild(jl_jl3);
                if (a4 != 0) node.appendChild(jl_jl4);
              }
            }, { once: true });
          }, { once: true });
        }, { once: true });
      }
    }, 800);
  };

  class jl {
    constructor() {
      ui.backgroundMusic.src = jl_config['layoutPath'] + 'audio/bgm/linanchuyu.mp3';
      this.jl_character = [];
      this.Image = ui.background.style.backgroundImage;
      this.manual = ui.create.div('.jl');
      this.menu = ui.create.div('.menu', this.manual);
      this.jl_baiyin = ui.create.div('.jl_baiyin', this.menu, '7290');
      this.jl_huangjin = ui.create.div('.jl_huangjin', this.menu, '3651');
      this.jl_jinhe = ui.create.div('.jl_jinhe', this.menu);
      this.jl_jinhe.id = 'jl_jinhe';
      this.jl_jinhe.innerHTML = lib.config.jl_hljh;
      this.mj = ui.create.div('.mj', this.manual);
      this.pattern = ui.create.div('.pattern', this.manual);
      this.pattern.id = ('pattern');
      this.close = ui.create.div('.close', this.menu);
      this.oldDialog = _status.event.dialog;
      this.dialog = ui.create.dialog();
      this.seename = ui.create.div('.name', this.manual);
      this.writename = ui.create.div('.writename', this.seename);
      this.jl_list = ui.create.div('.list', this.manual);
      this.bgchar = ui.create.div('.bgchar', this.manual);
      this.jlrank1 = ui.create.div('.jlrank1', this.bgchar, '全部');
      this.jlrank2 = ui.create.div('.jlrank2', this.bgchar, 'S级');
      this.jlrank3 = ui.create.div('.jlrank3', this.bgchar, 'A级');
      this.jlrank4 = ui.create.div('.jlrank4', this.bgchar, 'B级');
      this.jlrank5 = ui.create.div('.jlrank5', this.bgchar, 'C级');
      this.jlrank6 = ui.create.div('.jlrank6', this.bgchar, 'D级');
      this.jlrank7 = ui.create.div('.jlrank7', this.bgchar, 'E级');
      this.bgchar1 = ui.create.div('.bgchar1', this.bgchar);
      for (let i in jl_config.jlname) {
        if (lib.config.jl_value[i]) {
          if (lib.config.jl_value[i]['quality'] == 's') {
            let jl = ui.create.div('.jl_character', this.bgchar1);
            this.jl_character.push(jl);
            if (lib.config.jl_value[i]['gain']) {
              jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
            } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
            jl.dataset.jlname = i;
          }
        }
      }
      for (let i in jl_config.jlname) {
        if (lib.config.jl_value[i]) {
          if (lib.config.jl_value[i]['quality'] == 'a') {
            let jl = ui.create.div('.jl_character', this.bgchar1);
            this.jl_character.push(jl);
            if (lib.config.jl_value[i]['gain']) {
              jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
            } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
            jl.dataset.jlname = i;
          }
        }
      }
      for (let i in jl_config.jlname) {
        if (lib.config.jl_value[i]) {
          if (lib.config.jl_value[i]['quality'] == 'b') {
            let jl = ui.create.div('.jl_character', this.bgchar1);
            this.jl_character.push(jl);
            if (lib.config.jl_value[i]['gain']) {
              jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
            } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
            jl.dataset.jlname = i;
          }
        }
      }
      for (let i in jl_config.jlname) {
        if (lib.config.jl_value[i]) {
          if (lib.config.jl_value[i]['quality'] == 'c') {
            let jl = ui.create.div('.jl_character', this.bgchar1);
            this.jl_character.push(jl);
            if (lib.config.jl_value[i]['gain']) {
              jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
            } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
            jl.dataset.jlname = i;
          }
        }
      }
      for (let i of this.jl_character) {
        i.addEventListener('click', () => {
          let name = i.dataset.jlname;
          let tmp = '';
          game.playThisAudio('effect/click');
          for (let j in jl_config.jlname[name]['skill']) {
            tmp += j + jl_config.jlname[name]['skill'][j] + '<br><br>'
          }
          document.getElementById('jieshao').innerHTML = tmp;
          document.getElementById("pattern").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + name + '2.gif' + ')';
          this.detail.show();

          beizhan = (name);
          this.writename.innerHTML = jl_config.jlname[name]['name'];
          if (beizhan == lib.config.jl_gmczjl) {
            this.duigou1.show();
          } else {
            this.duigou1.hide();
          }
        })
      }

      this.createall = function() {
        for (let i of this.jl_character) {
          i.remove();
        }
        for (let i in jl_config.jlname) {
          if (lib.config.jl_value[i]) {
            if (lib.config.jl_value[i]['quality'] == 's') {
              let jl = ui.create.div('.jl_character', this.bgchar1);
              this.jl_character.push(jl);
              if (lib.config.jl_value[i]['gain']) {
                jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
              } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
              jl.dataset.jlname = i;
            }
          }
        }
        for (let i in jl_config.jlname) {
          if (lib.config.jl_value[i]) {
            if (lib.config.jl_value[i]['quality'] == 'a') {
              let jl = ui.create.div('.jl_character', this.bgchar1);
              this.jl_character.push(jl);
              if (lib.config.jl_value[i]['gain']) {
                jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
              } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
              jl.dataset.jlname = i;
            }
          }
        }
        for (let i in jl_config.jlname) {
          if (lib.config.jl_value[i]) {
            if (lib.config.jl_value[i]['quality'] == 'b') {
              let jl = ui.create.div('.jl_character', this.bgchar1);
              this.jl_character.push(jl);
              if (lib.config.jl_value[i]['gain']) {
                jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
              } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
              jl.dataset.jlname = i;
            }
          }
        }
        for (let i in jl_config.jlname) {
          if (lib.config.jl_value[i]) {
            if (lib.config.jl_value[i]['quality'] == 'c') {
              let jl = ui.create.div('.jl_character', this.bgchar1);
              this.jl_character.push(jl);
              if (lib.config.jl_value[i]['gain']) {
                jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
              } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
              jl.dataset.jlname = i;
            }
          }
        }
        for (let i of this.jl_character) {
          i.addEventListener('click', () => {
            game.playThisAudio('effect/click');
            let name = i.dataset.jlname;
            let tmp = '';
            for (let j in jl_config.jlname[name]['skill']) {
              tmp += j + jl_config.jlname[name]['skill'][j] + '<br><br>'
            }
            document.getElementById('jieshao').innerHTML = tmp;
            document.getElementById("pattern").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + name + '2.gif' + ')';
            this.detail.show();

            beizhan = (name);
            this.writename.innerHTML = jl_config.jlname[name]['name'];
            if (beizhan == lib.config.jl_gmczjl) {
              this.duigou1.show();
            } else {
              this.duigou1.hide();
            }
          })
        }
      }

      this.createjl = function(rank) {
        for (let i of this.jl_character) {
          i.remove();
        }
        for (let i in jl_config.jlname) {
          if (lib.config.jl_value[i]) {
            if (lib.config.jl_value[i]['quality'] == rank) {
              let jl = ui.create.div('.jl_character', this.bgchar1);
              this.jl_character.push(jl);
              if (lib.config.jl_value[i]['gain']) {
                jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/character/' + i + '.png' + ')'
              } else jl.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/silhouette/' + i + '.png' + ')';
              jl.dataset.jlname = i;
            }
          }
        }
        for (let i of this.jl_character) {
          i.addEventListener('click', () => {
            game.playThisAudio('effect/click');
            let name = i.dataset.jlname;
            let tmp = '';
            for (let j in jl_config.jlname[name]['skill']) {
              tmp += j + jl_config.jlname[name]['skill'][j] + '<br><br>'
            }
            document.getElementById('jieshao').innerHTML = tmp;
            document.getElementById("pattern").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + name + '2.gif' + ')';
            this.detail.show();

            beizhan = (name);
            this.writename.innerHTML = jl_config.jlname[name]['name'];
            if (beizhan == lib.config.jl_gmczjl) {
              this.duigou1.show();
            } else {
              this.duigou1.hide();
            }
          })
        }
      }

      this.jlrank1.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.createall();
      });
      this.jlrank2.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.createjl('s');
      });
      this.jlrank3.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.createjl('a');
      });
      this.jlrank4.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.createjl('b');
      });
      this.jlrank5.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.createjl('c');
      });
      this.show = ui.create.div('.show', this.manual);
      this.showtext = ui.create.div('.showtext', this.show, '唤灵台');
      this.show.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        new hl();
      });

      this.detail = ui.create.div('.detail', this.manual);
      this.detail.hide();
      this.jieshao = ui.create.div('.jieshao', this.detail);	//技能
      this.jieshao.id = ('jieshao');
      this.jineng = ui.create.div('.jineng', this.detail);//转生
      this.jineng.id = ('jineng');
      this.zhuansheng1 = ui.create.div('.zhuansheng1', this.jineng);
      this.zhuansheng1text = ui.create.div('.zhuansheng1text', this.jineng, '转生丹');
      this.zsd1 = ui.create.div('.zsd1', this.jineng, '(' + lib.config.jl_zsd + '/10)');
      this.button1 = ui.create.div('.button1', this.jineng, '转生');
      this.zhuansheng2 = ui.create.div('.zhuansheng2', this.jineng);
      this.zhuansheng2text = ui.create.div('.zhuansheng2text', this.jineng, '高级转生丹');
      this.zsd2 = ui.create.div('.zsd2', this.jineng, '(' + lib.config.jl_gjzsd + '/5)');
      this.button2 = ui.create.div('.button2', this.jineng, '转生');
      this.bottom = ui.create.div('.bottom', this.detail);
      this.fanhui = ui.create.div('.fanhui', this.bottom);
      this.shadow = ui.create.div('.shadow', this.manual);
      this.shadow.id = 'shadow';
      this.shadow.hide();
      this.tips = ui.create.div('.tips', this.manual);
      this.tips.hide();
      this.tipsword = ui.create.div('.tipsword', this.tips, '确定转生吗');
      this.queding1 = ui.create.div('.queding', this.tips);
      this.queding1.hide();
      this.queding2 = ui.create.div('.queding', this.tips);
      this.queding2.hide();
      this.quxiao = ui.create.div('.quxiao', this.tips);
      this.pmj = ui.create.div('.pmj', this.manual);
      this.pmj.id = ('pmj')
      this.qlin = ui.create.div('.qlin', this.pmj);
      this.ql = ui.create.div('.ql', this.pmj);
      this.bh = ui.create.div('.bh', this.pmj);
      this.zq = ui.create.div('.zq', this.pmj);
      this.xw = ui.create.div('.xw', this.pmj);
      this.likai = ui.create.div('.likai', this.pmj, "离开");
      this.jietuo = ui.create.div('.jietuo', this.pmj, "解脱");
      this.kaichangbai = ui.create.div('.kaichangbai', this.pmj, '这里 不是你该来的地方... ...');
      this.kaichangbai.id = ('kaichangbai');
      this.rukou = ui.create.div('.rukou', this.pmj);
      this.rukou.hide();
      this.pmj.hide();
      this.pmj2 = ui.create.div('.pmj', this.manual);
      this.pmj2.id = ('pmj2')
      this.pmj2.hide();
      this.kaichangbai2 = ui.create.div('.kaichangbai2', this.pmj2, '这是哪里？我怎么会在这儿？将灵和那股神秘的力量开始不稳定起来，再往前走可能会无法回头了... ...');
      this.kuaipao = ui.create.div('.likai', this.pmj2, "快跑");
      this.zhong = ui.create.div('.jietuo', this.pmj2, "向前");
      var beizhan = (lib.config.jl_gmczjl);
      this.jlset = ui.create.div('.jlset', this.manual);
      this.chuzhan = ui.create.div('.chuzhan', this.jlset, '设置出战');
      this.chuzhankuang = ui.create.div('.chuzhankuang', this.jlset);
      this.damagekuang = ui.create.div('.damagekuang', this.jlset);
      this.changzhukuang = ui.create.div('.changzhukuang', this.jlset);
      this.damage = ui.create.div('.damage', this.jlset, '攻击动画');
      this.changzhu = ui.create.div('.changzhu', this.jlset, '局内动画');
      this.changzhukuang.id = ('changzhukuang');
      this.duigou1 = ui.create.div('.duigou1', this.jlset);
      this.duigou2 = ui.create.div('.duigou2', this.jlset);
      this.duigou3 = ui.create.div('.duigou3', this.jlset);
      if (lib.config.jl_juneichangzhu != 1) {
        this.duigou2.hide();
      }
      if (lib.config.jl_gongji != 1) {
        this.duigou3.hide();
      }

      this.shadow1 = ui.create.div('.shadow1', this.shadow);
      this.shadow2 = ui.create.div('.shadow2', this.shadow);
      this.shadow3 = ui.create.div('.shadow3', this.shadow);
      this.shadow1.id = 'shadow1';
      this.shadow2.id = 'shadow2';
      this.shadow3.id = 'shadow3';
      this.shadow1.hide();
      this.shadow2.hide();
      this.shadow3.hide();

      this.button1.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        if (lib.config.jl_value[beizhan]['quality'] == 's') {
          this.buzu = ui.create.div('.buzu', this.manual, 'S级将灵无法转生')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else if (lib.config.jl_value[beizhan]['quality'] != 'c') {
          this.buzu = ui.create.div('.buzu', this.manual, 'C级将灵才可以普通转生')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else if (!lib.config.jl_value[beizhan]['gain']) {
          this.buzu = ui.create.div('.buzu', this.manual, '还未获得此将灵哦')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else if (lib.config.jl_zsd < 10) {
          this.buzu = ui.create.div('.buzu', this.manual, '物品不足')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else {
          this.shadow.show();
          this.tips.show();
          this.queding1.show();
        }
      });
      this.button2.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        if (lib.config.jl_value[beizhan]['quality'] == 's') {
          this.buzu = ui.create.div('.buzu', this.manual, 'S级将灵无法转生')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else if (lib.config.jl_value[beizhan]['quality'] == 'c') {
          this.buzu = ui.create.div('.buzu', this.manual, 'B级和A级将灵才可以高级转生')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else if (!lib.config.jl_value[beizhan]['gain']) {
          this.buzu = ui.create.div('.buzu', this.manual, '还未获得此将灵哦')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else if (lib.config.jl_gjzsd < 5) {
          this.buzu = ui.create.div('.buzu', this.manual, '物品不足')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        } else {
          this.shadow.show();
          this.tips.show();
          this.queding2.show();
        }
      });
      this.queding1.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        game.saveConfig('jl_zsd', lib.config.jl_zsd - 10);
        this.zsd1.innerHTML = '(' + lib.config.jl_zsd + '/10)';
        lib.config.jl_value[beizhan]['gain'] = false;
        lib.config.jl_zsd = lib.config.jl_zsd - 10;
        if (lib.config.jl_value[beizhan]['quality'] == 'c') {
          var name = b_character[Math.floor((Math.random() * b_character.length))];
          lib.config.jl_value[name]['gain'] = true;
          game.saveConfig('jl_value', lib.config.jl_value);
          game.saveConfig('jl_gmczjl', name);
        }
        this.tips.hide();
        this.shadow1.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + beizhan + '1.gif' + ')';
        this.shadow1.show();
        setTimeout(function() {
          game.playThisAudio('effect/zhuansheng');
          this.shadow1.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + name + '1.gif' + ')';
          this.shadow2.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/zhuansheng1.gif' + ')';
          this.shadow3.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward1.png' + ')';
          this.shadow2.show();
          this.shadow3.show();
        }, 500);
        setTimeout(function() {
          this.shadow3.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward2.png' + ')';
        }, 700);
        setTimeout(function() {
          this.shadow2.hide();
        }, 1000);
        setTimeout(function() {
          this.shadow3.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward2.png' + ')';
          this.shadow.addEventListener('click', () => {
            this.shadow1.hide();
            this.shadow3.hide();
            this.shadow.hide();
          });
        }, 1000);
      });

      this.queding2.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        game.saveConfig('jl_gjzsd', lib.config.jl_gjzsd - 5);
        this.zsd2.innerHTML = '(' + lib.config.jl_gjzsd + '/5)';
        lib.config.jl_value[beizhan]['gain'] = false;
        if (lib.config.jl_value[beizhan]['quality'] == 'b') {
          var name = a_character[Math.floor((Math.random() * a_character.length))];
          lib.config.jl_value[name]['gain'] = true;
          game.saveConfig('jl_value', lib.config.jl_value);
          game.saveConfig('jl_gmczjl', name);
        } else if (lib.config.jl_value[beizhan]['quality'] == 'a') {
          var name = a_character[Math.floor((Math.random() * a_character.length))];
          lib.config.jl_value[name]['gain'] = true;
          game.saveConfig('jl_value', lib.config.jl_value);
          game.saveConfig('jl_gmczjl', name);
        }

        this.tips.hide();
        this.shadow1.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + beizhan + '1.gif' + ')';
        this.shadow1.show();
        setTimeout(function() {
          game.playThisAudio('effect/zhuansheng');
          this.shadow1.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + name + '1.gif' + ')';
          this.shadow2.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/zhuansheng1.gif' + ')';
          this.shadow3.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward1.png' + ')';
          this.shadow2.show();
          this.shadow3.show();
        }, 500);
        setTimeout(function() {
          this.shadow3.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward2.png' + ')';
        }, 700);
        setTimeout(function() {
          this.shadow2.hide();
        }, 1000);
        setTimeout(function() {
          this.shadow3.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward2.png' + ')';
          this.shadow.addEventListener('click', () => {
            this.shadow1.hide();
            this.shadow3.hide();
            this.shadow.hide();
          });
        }, 1000);
      });

      this.quxiao.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.tips.hide();
        this.shadow.hide();
      });

      this.jl_list.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.detail.hide();
      });

      this.changzhukuang.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        if (lib.config.jl_juneichangzhu == 1) {
          game.saveConfig('jl_juneichangzhu', '0');
          this.duigou2.hide();
        } else {
          game.saveConfig('jl_juneichangzhu', '1');
          this.duigou2.show();
        }
      });

      this.damagekuang.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        if (lib.config.jl_gongji == 1) {
          game.saveConfig('jl_gongji', '0');
          this.duigou3.hide();
        } else {
          game.saveConfig('jl_gongji', '1');
          this.duigou3.show();
        }
      });

      this.chuzhankuang.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        if (beizhan == lib.config.jl_gmczjl) {
          this.duigou1.hide();
          game.saveConfig('jl_gmczjl', '0');
        } else if (lib.config.jl_value[beizhan]['gain']) {
          game.saveConfig('jl_gmczjl', beizhan);
          this.duigou1.show();
        } else {
          this.buzu = ui.create.div('.buzu', this.manual, '尚未获得此将灵')
          this.buzu.id = 'buzu';
          setTimeout(function() {
            this.buzu.remove();
          }, 800);
        }
      });

      this.fanhui.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.detail.hide();
      });

      this.mj.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        var a = lib.config.jl_gmczjl;
        if (a != 'shenlvbu') {
          this.pmj.show();
          this.detail.hide();
          this.menu.hide();
          this.mj.hide();
          this.pattern.hide();
          this.show.hide();
          this.seename.hide();
          this.bgchar.hide();
          this.bgchar1.hide();
          this.jlset.hide();
        }
      });

      this.likai.addEventListener('click', () => {
        this.pmj.hide();
        this.detail.hide();
        this.menu.show();
        this.mj.show();
        this.pattern.show();
        this.show.show();
        this.seename.show();
        this.bgchar.show();
        this.bgchar1.show();
        this.jlset.show();
      });

      this.jietuo.addEventListener('click', () => {
        document.getElementById("pmj").style.background = ""
        document.getElementById('pmj').style.backgroundColor = "black"
        document.getElementById('kaichangbai').innerHTML = '一切都已结束 你可以离开了... ...';
        game.saveConfig('jl_gmlv', '0');
        this.kaichangbai.show();

      });

      this.tishi = ui.create.div('.tishi', this.pmj);
      this.tishi.id = 'tishi';
      this.tishi.hide();
      this.qlin.addEventListener('click', () => {
        document.getElementById("pmj").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/qlin.jpg' + ')';
        this.kaichangbai.hide();
        this.rukou.show();
        var a = lib.config.jl_gmczjl;
        game.playThisAudio('effect/qlin');
        if (a != 'shenlvbu') {
          game.saveConfig('jl_gmlv', '5');
          document.getElementById('tishi').innerHTML = '获得麒麟之力';
          this.tishi.show();
          setTimeout(function() {
            this.tishi.hide();
          }, 800);
        }
      });

      this.ql.addEventListener('click', () => {
        document.getElementById("pmj").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/ql.jpg' + ')';
        this.kaichangbai.hide();
        this.rukou.hide();
        var a = lib.config.jl_gmczjl;
        game.playThisAudio('effect/ql');
        if (a != 'shenlvbu') {
          game.saveConfig('jl_gmlv', '4');
          document.getElementById('tishi').innerHTML = '获得青龙之力';
          this.tishi.show();
          setTimeout(function() {
            this.tishi.hide();
          }, 800);
        }
      });

      this.bh.addEventListener('click', () => {
        document.getElementById("pmj").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/bh.jpg' + ')';
        this.kaichangbai.hide();
        this.rukou.hide();
        var a = lib.config.jl_gmczjl;
        game.playThisAudio('effect/bh');
        if (a != 'shenlvbu') {
          game.saveConfig('jl_gmlv', '3');
          document.getElementById('tishi').innerHTML = '获得白虎之力';
          this.tishi.show();
          setTimeout(function() {
            this.tishi.hide();
          }, 800);
        }
      });

      this.zq.addEventListener('click', () => {
        document.getElementById("pmj").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/zq.jpg' + ')';
        this.kaichangbai.hide();
        this.rukou.hide();
        var a = lib.config.jl_gmczjl;
        game.playThisAudio('effect/zq');
        if (a != 'shenlvbu') {
          game.saveConfig('jl_gmlv', '2');
          document.getElementById('tishi').innerHTML = '获得朱雀之力';
          this.tishi.show();
          setTimeout(function() {
            this.tishi.hide();
          }, 800);
        }
      });

      this.xw.addEventListener('click', () => {
        document.getElementById("pmj").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/xw.jpg' + ')';
        this.rukou.hide();
        this.kaichangbai.hide();
        var a = lib.config.jl_gmczjl;
        game.playThisAudio('effect/xw');
        if (a != 'shenlvbu') {
          game.saveConfig('jl_gmlv', '1');
          document.getElementById('tishi').innerHTML = '获得玄武之力';
          this.tishi.show();
          setTimeout(function() {
            this.tishi.hide();
          }, 800);
        }
      });

      this.rukou.addEventListener('click', () => {
        this.pmj2.show();
        this.pmj.hide();
      });

      this.kuaipao.addEventListener('click', () => {
        this.pmj2.hide();
        this.pmj.show();
      });

      this.zhong.addEventListener('click', () => {
        document.getElementById("pmj2").style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/wszl.jpg)';
        this.kaichangbai2.hide();
        this.kuaipao.hide();
        this.zhong.hide();
        game.saveConfig('jl_gmlv', '0');
        game.saveConfig('jl_gmczjl', 'shenlvbu');
        ui.backgroundMusic.src = jl_config['layoutPath'] + 'audio/bgm/lingshan.mp3';
      });

      lib.cheat.i();
      if (!loadCSS) {
        lib.init.css(jl_config['layoutPath'], 'extension');
        loadCSS = true;
      }

      this.close.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.closeDialog()
      });

      ui.arena.hide();
      ui.system.hide();
      ui.menuContainer.hide();
      ui.window.appendChild(this.manual);
    }

    closeDialog() {
      if (!lib.config.dev) {
        delete window.cheat;
        delete window.game;
        delete window.ui;
        delete window.get;
        delete window.ai;
        delete window.lib;
        delete window._status;
      }
      this.manual.remove();
      ui.arena.show();
      ui.system.show();
      ui.menuContainer.show();
      ui.background.style.backgroundImage = this.Image;
      _status.event.dialog = this.oldDialog;
      if (_status.event.dialog) _status.event.dialog.show();
    }
  }

  class hl {
    constructor() {
      this.hl = ui.create.div('.hl');
      this.hl_top = ui.create.div('.hl_top', this.hl);
      this.hl_close = ui.create.div('.hl_close', this.hl_top);
      this.hl_baiyin = ui.create.div('.hl_baiyin', this.hl_top, '7290');
      this.hl_huangjin = ui.create.div('.hl_huangjin', this.hl_top, '3651');
      this.hl_jinhe = ui.create.div('.hl_jinhe', this.hl_top);
      this.hl_jinhe.innerHTML = lib.config.jl_hljh;
      this.hl_jinhe.id = 'hl_jinhe';
      this.hl_table = ui.create.div('.hl_table', this.hl);
      this.hl_use1 = ui.create.div('.hl_use1', this.hl_table, '消耗：&nbsp×1');
      this.hl_button1 = ui.create.div('.hl_button1', this.hl_table);
      this.hl_one = ui.create.div('.hl_one', this.hl_button1, '唤灵1次');
      this.hl_use2 = ui.create.div('.hl_use2', this.hl_table, '消耗：&nbsp×10');
      this.hl_button2 = ui.create.div('.hl_button2', this.hl_table);
      this.hl_ten = ui.create.div('.hl_ten', this.hl_button2, '唤灵10次');
      this.hl_shop = ui.create.div('.hl_shop', this.hl);
      this.hl_guashi = ui.create.div('.hl_guashi', this.hl);
      this.lantern2 = ui.create.div('.lanterns', this.hl);
      this.jl_recover = ui.create.div('.recover', this.hl);
      this.explanation = ui.create.div('.explanation', this.hl);
      this.explanation.hide();

      this.oldDialog = _status.event.dialog;
      this.dialog = ui.create.dialog();

      this.hl_button1.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        if (parseInt(lib.config.jl_hljh) > 0) {
          game.playThisAudio('effect/huanling');
          var name = s_character[Math.floor((Math.random() * s_character.length))];
          lib.config.jl_value[name]['sp'] = lib.config.jl_value[name]['sp'] + 1;
          game.saveConfig('jl_value', lib.config.jl_value);
          game.saveConfig('jl_hljh', parseInt(lib.config.jl_hljh - 1));
          this.hl_jinhe.innerHTML = lib.config.jl_hljh;
          const hl_reward = ui.create.div('.hl_reward', this.hl);
          this.stuff = ui.create.div('.stuff', hl_reward);
          this.daoju = ui.create.div('.daoju', this.stuff);
          this.daoju.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/sp/' + 'sp_' + name + '.png' + ')';
          hl_reward.addEventListener('click', () => hl_reward.remove());
        } else {
          this.tishis = ui.create.div('.tishi', this.hl, '唤灵宝箱不足');
          this.tishis.id = 'tishis';
          setTimeout(() => {
            this.tishis.remove();
          }, 800);
        }
      });

      this.hl_button2.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        if (parseInt(lib.config.jl_hljh) > 9) {
          game.saveConfig('jl_hljh', parseInt(lib.config.jl_hljh - 10));
          this.hl_jinhe.innerHTML = lib.config.jl_hljh;
          const hl_reward = ui.create.div('.hl_reward', this.hl);
          this.stuff = ui.create.div('.stuff', hl_reward);
          for (let i = 0; i < 10; i++) {
            game.playThisAudio('effect/huanling');
            var name = s_character[Math.floor((Math.random() * s_character.length))];
            lib.config.jl_value[name]['sp'] = lib.config.jl_value[name]['sp'] + 1;
            this.daoju = ui.create.div('.daoju', this.stuff);
            this.daoju.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/sp/' + 'sp_' + name + '.png' + ')';
          }
          hl_reward.addEventListener('click', () => hl_reward.remove());
          game.playThisAudio('effect/gongxi');
          game.saveConfig('jl_value', lib.config.jl_value);
        } else {
          this.tishis = ui.create.div('.tishi', this.hl, '唤灵宝箱不足');
          this.tishis.id = 'tishis';
          setTimeout(() => {
            this.tishis.remove();
          }, 800);
        }
      });

      this.hl_shop.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        new jlshop();
      });

      this.lantern2.addEventListener('dblclick', () => {
        game.playThisAudio('effect/click');
        this.tishis = ui.create.div('.tishi', this.hl, '作弊成功，获得唤灵锦盒*50、转生丹*50、高级转生丹*50');
        game.saveConfig('jl_zsd', parseInt(lib.config.jl_zsd + 50));
        game.saveConfig('jl_gjzsd', parseInt(lib.config.jl_gjzsd + 50));
        game.saveConfig('jl_hljh', parseInt(lib.config.jl_hljh + 50));
        game.saveConfig('jl_cheat', parseInt(lib.config.jl_cheat + 1));
        this.tishis.id = 'tishis';
        setTimeout(() => {
          this.tishis.remove();
        }, 1200);
      });

      this.jl_recover.addEventListener('click', () => {
        if (lib.config.jl_cheat != 0) {
          game.playThisAudio('effect/click');
          var hl_wait = 0;
          this.tishis = ui.create.div('.tishi', this.hl, '是否初始化数据，同意请双击，不同意5秒后自动消失');
          this.tishis.id = 'tishis';
          this.tishis.addEventListener('dblclick', () => {
            game.playThisAudio('effect/click');
            game.saveConfig('jl_value', jl_valueres);
            game.saveConfig('jl_zsd', 5);
            game.saveConfig('jl_gjzsd', 5);
            game.saveConfig('jl_hljh', 5);
            game.saveConfig('jl_gmczjl', 0);
            this.tishis.innerHTML = '数据初始化成功'
            game.saveConfig('jl_cheat', 0)
            setTimeout(() => {
              this.tishis.remove();
            }, 1200);
            hl_wait = 1;
          });
          setTimeout(() => {
            if (hl_wait == 0) {
              this.tishis.addEventListener('click', () => {
              });
              this.tishis.remove();
            }
          }, 5000);
        }
      });

      this.hl_guashi.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.explanation.show();
      });

      this.explanation.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.explanation.hide();
      });

      if (!loadCSS) {
        lib.init.css(jl_config['layoutPath'], 'extension');
        loadCSS = true;
      }

      this.hl_close.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.closeDialog()
      });
      ui.window.appendChild(this.hl);
    }

    closeDialog() {
      if (!lib.config.dev) {
        delete window.cheat;
        delete window.game;
        delete window.ui;
        delete window.get;
        delete window.ai;
        delete window.lib;
        delete window._status;
      }
      this.hl.remove();
      document.getElementById('jl_jinhe').innerHTML = lib.config.jl_hljh;
    }
  }

  class jlshop {
    constructor() {
      var commodity = ['caochun', 'zhangqiying', 'shenzhouyu', 'shenzhaoyun', 'shencaocao', 'zhugeguo', 'nianshou', 'caoying', 'lingju', 'xiaosha', 'huaman', 'wuliuqi', 'guansuo', 'shenguanyu', 'zhangyi', 'sunluban', 'guohuai'];
      var ccommodity = ['zhangyi', 'sunluban', 'guohuai']
      this.shop = ui.create.div('.shop');
      this.shop_top = ui.create.div('.shop_top', this.shop);
      this.shop_close = ui.create.div('.shop_close', this.shop_top);
      this.shop_baiyin = ui.create.div('.shop_baiyin', this.shop_top, '7290');
      this.shop_huangjin = ui.create.div('.shop_huangjin', this.shop_top, '3651');
      this.shop_jinhe = ui.create.div('.shop_jinhe', this.shop_top);
      this.shop_jinhe.id = 'shop_jinhe';
      this.shop_jinhe.innerHTML = lib.config.jl_lingzhu;
      this.region = ui.create.div('.region', this.shop);
      this.buy_button = [];
      this.shadowss = ui.create.div('.shadow', this.shop);
      this.shadowss.id = 'shadowss';
      this.shadowss.hide();
      this.shadow1ss = ui.create.div('.shadow1', this.shadowss);
      this.shadow2ss = ui.create.div('.shadow2', this.shadowss);
      this.shadow3ss = ui.create.div('.shadow3', this.shadowss);
      this.shadow1ss.id = 'shadow1ss';
      this.shadow2ss.id = 'shadow2ss';
      this.shadow3ss.id = 'shadow3ss';
      this.shadow1ss.hide();
      this.shadow2ss.hide();
      this.shadow3ss.hide();
      var numberid = [];
      var suojinumber = ['adasd', 'asdasdas', 'htfghfg', 'gdggd', 'tyjghy', 'dhiuiuius', 'aoaiuoiawjd', 'dancawajjawadwp', 'aiuaeihiusfse', 'oiauo', 'iuisodias', 'iuaefue', 'uivjnf', 'daoiuiwidi', 'icaiou', 'voiuooi', 'ouajkg', 'hvhjgb', 'dawhiwdh', 'utooiq'];
      for (var i = 0; i < commodity.length; i++) {
        this.sell = ui.create.div('.sell', this.region);
        let buy = ui.create.div('.buy', this.sell);
        if (ccommodity.contains(commodity[i])) {
          this.spnumber = ui.create.div('.spnumber', this.sell, '(' + lib.config.jl_hljh + '/1)')
          this.spnumber.id = suojinumber[i];
          numberid[i] = this.spnumber.id;
        } else {
          this.spnumber = ui.create.div('.spnumber', this.sell, '(' + lib.config.jl_value[commodity[i]]['sp'] + '/20)')
        }
        this.spnumber.id = suojinumber[i];
        numberid[i] = this.spnumber.id;
        let soul = ui.create.div('.soul', this.sell);
        soul.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/sp/' + 'sp_' + commodity[i] + '.png' + ')';
        this.buy_button.push(buy);
        buy.dataset.buyname = commodity[i];
        buy.dataset.buynumber = i;
      }
      for (let i of this.buy_button) {
        i.addEventListener('click', () => {
          game.playThisAudio('effect/click');
          if (!ccommodity.contains(i.dataset.buyname)) {
            if (lib.config.jl_value[i.dataset.buyname]['sp'] > 19) {
              lib.config.jl_value[i.dataset.buyname]['sp'] = lib.config.jl_value[i.dataset.buyname]['sp'] - 20;
              this.spnumber.innerHTML = '(' + lib.config.jl_value[i.dataset.buyname]['sp'] + '/20)';
              lib.config.jl_value[i.dataset.buyname]['gain'] = true;
              game.saveConfig('jl_value', lib.config.jl_value);
              document.getElementById(numberid[i.dataset.buynumber]).innerHTML = '(' + lib.config.jl_value[i.dataset.buyname]['sp'] + '/20)';

              game.playThisAudio('effect/zhuansheng');
              this.shadowss.show();
              this.shadow2ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/zhuansheng1.gif' + ')';
              this.shadow3ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward1.png' + ')';
              this.shadow2ss.show();
              this.shadow3ss.show();
              setTimeout(() => {
                this.shadow3ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward2.png' + ')';
              }, 300);
              setTimeout(() => {
                this.shadow1ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + i.dataset.buyname + '2.gif' + ')';

                this.shadow1ss.show();
                this.shadow2ss.hide();
                this.shadowss.addEventListener('click', () => {
                  this.shadowss.hide()
                });
              }, 500);

            } else if (parseInt(lib.config.jl_lingzhu) > 0) {
              this.duihuan = ui.create.div('.buzu', this.shop, '碎片不足，是否用传说灵韵石直接兑换？(双击确定)');
              this.duihuan.id = 'duihuan';
              this.duihuan.addEventListener('dblclick', () => {
                this.duihuan.remove();
                lib.config.jl_value[i.dataset.buyname]['gain'] = true;
                game.saveConfig('jl_value', lib.config.jl_value);
                game.saveConfig('jl_lingzhu', parseInt(lib.config.jl_lingzhu) - 1);
                this.shop_jinhe.innerHTML = lib.config.jl_lingzhu;

                game.playThisAudio('effect/zhuansheng');
                this.shadowss.show();
                this.shadow2ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/zhuansheng1.gif' + ')';
                this.shadow3ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward1.png' + ')';
                this.shadow2ss.show();
                this.shadow3ss.show();
                setTimeout(() => {
                  this.shadow3ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward2.png' + ')';
                }, 300);
                setTimeout(() => {
                  this.shadow1ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + i.dataset.buyname + '2.gif' + ')';

                  this.shadow1ss.show();
                  this.shadow2ss.hide();
                  this.shadowss.addEventListener('click', () => {
                    this.shadowss.hide()
                  });
                }, 500);
              });
              this.duihuan.addEventListener('click', () => {
                this.duihuan.remove()
              });
            } else {
              this.buzuss = ui.create.div('.buzu', this.shop, '道具不足');
              this.buzuss.id = 'buzuss';
              setTimeout(() => {
                this.buzuss.remove();
              }, 800);
            }
          } else {
            if (parseInt(lib.config.jl_hljh) > 0) {
              game.saveConfig('jl_hljh', parseInt(lib.config.jl_hljh - 1));
              this.shop_jinhe.innerHTML = lib.config.jl_lingzhu;
              document.getElementById(numberid[12]).innerHTML = '(' + lib.config.jl_hljh + '/1)';
              document.getElementById(numberid[11]).innerHTML = '(' + lib.config.jl_hljh + '/1)';
              document.getElementById(numberid[10]).innerHTML = '(' + lib.config.jl_hljh + '/1)';
              lib.config.jl_value[i.dataset.buyname]['gain'] = true;
              game.saveConfig('jl_value', lib.config.jl_value);
              this.shadowss.show();
              this.shadow1ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/action/' + i.dataset.buyname + '2.gif' + ')';
              this.shadow2ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/zhuansheng1.gif' + ')'
              this.shadow3ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward1.png' + ')';
              this.shadow1ss.show();
              this.shadow2ss.show();
              this.shadow3ss.show();
              game.playThisAudio('effect/zhuansheng');
              setTimeout(() => {
                this.shadow3ss.style.backgroundImage = 'url(' + jl_config['layoutPath'] + 'image/img/reward2.png' + ')';
                this.shadowss.addEventListener('click', () => {
                  this.shadowss.hide()
                });
                this.shadow2ss.hide();
              }, 300);
            } else {
              this.buzuss = ui.create.div('.buzu', this.shop, '道具不足');
              this.buzuss.id = 'buzuss';
              setTimeout(() => {
                this.buzuss.remove();
              }, 800);
            }
          }
        })
      }

      this.oldDialog = _status.event.dialog;
      this.dialog = ui.create.dialog();

      if (!loadCSS) {
        lib.init.css(jl_config['layoutPath'], 'extension');
        loadCSS = true;
      }

      this.shop_close.addEventListener('click', () => {
        game.playThisAudio('effect/click');
        this.closeDialog()
      });
      ui.window.appendChild(this.shop);
    }

    closeDialog() {
      if (!lib.config.dev) {
        delete window.cheat;
        delete window.game;
        delete window.ui;
        delete window.get;
        delete window.ai;
        delete window.lib;
        delete window._status;
      }
      this.shop.remove();
      document.getElementById('jl_jinhe').innerHTML = lib.config.jl_hljh;
      document.getElementById('hl_jinhe').innerHTML = lib.config.jl_hljh;
    }
  }

  return {
    name: "将灵重置版",
    content: function(config, pack) {
      let over = game.over;
      game.over = function() {
        over.apply(this, arguments);
        jl_config.gameOver();
      }

      if (lib.config[jl_config.extensionName + 'jl_gmjl'] != 'off' && lib.config.jl_gmczjl != undefined) {
        lib.skill._jl_gmjl = {
          trigger: {
            global: "gameStart",
          },
          priority: 9994,
          forced: true,
          filter: function(event, player) {
            return lib.skill._jl_gmjl.storage != true
          },
          content: function() {
            'step 0'
            let q = lib.config.jl_gmczjl;
            let jl_gmjl = lib.config[jl_config.extensionName + 'jl_gmjl'];
            let jl_add = lib.config[jl_config.extensionName + 'jl_add'];
            event.jl_gmjl = jl_gmjl;
            event.jl_add = jl_add;
            event.jl_num = 0;
            event.q = q;
            let jl_skill = [];
            for (let i in jl_config.jlname) {
              if (!lib.config.jl_value[i]['gain']) continue;
              jl_skill.push('jl_' + i);
            }
            event.jl_skill = jl_skill;
            lib.skill._jl_gmjl.storage = true;
            'step 1'
            if (event.jl_add == 'choose') {
              if (game.players[event.jl_num] == game.me) {
                game.me.addSkill('jl_' + lib.config.jl_gmczjl)
              } else if (event.jl_gmjl == 'all') {
                jl_config.chooseButton(event.jl_skill, game.players[event.jl_num])
              } else if (event.jl_gmjl == 'friends') {
                if (game.me.side != undefined) {
                  if (game.players[event.jl_num].side == game.me.side) {
                    jl_config.chooseButton(event.jl_skill, game.players[event.jl_num])
                  } else
                    event._result.bool = false;
                } else {
                  event.finish();
                }
              }
            } else {
              event.goto(3);
            }
            'step 2'
            if (event._result.bool) {
              let ski = event._result.skills;
              game.players[event.jl_num].addSkill(ski);
            }
            event.jl_num++;
            if (event.jl_num == game.players.length) {

              event.finish();
            } else {
              event.goto(1);
            }
            'step 3'
            let gameplayer = game.players;
            let friend = game.me.side;

            if (event.jl_gmjl == 'player') {
              player.addSkill('jl_' + event.q);
            }
            if (event.jl_gmjl == 'friends') {
              switch (event.jl_add) {
                case 'same': {
                  for (let i of gameplayer) {
                    if (i == game.me)
                      i.addSkill('jl_' + event.q);
                    if (i.side != undefined) {
                      if (i.side == friend)
                        i.addSkill('jl_' + event.q);
                    }
                  }
                  break;
                }
                case 'random': {
                  for (let i of gameplayer) {
                    if (i == game.me) {
                      i.addSkill('jl_' + event.q);
                      continue;
                    }
                    if (i.side != undefined) {
                      if (i.side == friend) {
                        i.addSkill(event.jl_skill.randomGet());
                      }
                    }
                  }
                  break;
                }
                // default: confirm('请检查其他人将灵设置')
              }
            }
            if (event.jl_gmjl == 'all') {
              switch (event.jl_add) {
                case 'same': {
                  for (let i of gameplayer) {
                    i.addSkill('jl_' + event.q);
                  }
                  break;
                }
                case 'random': {
                  for (let i of gameplayer) {
                    if (i == game.me) {
                      i.addSkill('jl_' + event.q);
                      continue;
                    }
                    i.addSkill(event.jl_skill.randomGet());
                  }
                  break;
                }
                // default: confirm('请检查其他人将灵设置')
              }
            }
          },
        };
      }
      if (lib.config.jl_gmlv != '0') {
        lib.skill._jl_gmlv = {
          trigger: {
            global: 'gameStart',
          },
          priority: 9998,
          forced: true,
          filter: function(event, player) {
            return lib.skill._jl_gmlv.storage != true && player == game.me;
          },
          content: function() {
            lib.skill._jl_gmlv.storage = true;
            var lv = lib.config.jl_gmlv;
            if (lv == '1') {
              player.storage.jl_dj = 1;
              player.markSkill('jl_dj');
            }
            if (lv == '2') {
              player.storage.jl_dj = 2;
              player.markSkill('jl_dj');
            }
            if (lv == '3') {
              player.storage.jl_dj = 3;
              player.markSkill('jl_dj');
            }
            if (lv == '4') {
              player.storage.jl_dj = 4;
              player.markSkill('jl_dj');
            }
            if (lv == '5') {
              player.storage.jl_dj = 5;
              player.markSkill('jl_dj');
            }
          },
        };
      }

      lib.skill._jl_lva = {
        trigger: {
          player: "phaseDrawBefore",
        },
        forced: true,
        filter: function(event, player) {
          return player.storage.jl_dj == 1;
        },
        content: function() {
          trigger.num++;
        },
      };

      lib.skill._jl_lvb = {
        trigger: {
          global: "gameStart",
        },
        forced: true,
        filter: function(event, player) {
          return player.storage.jl_dj == 2;
        },
        content: function() {
          player.draw();
          var card = get.cardPile(function(card) {
            return !player.hasCard(card) && get.type(card) == 'equip';
          });
          if (card && !lib.config.jl_lvat) {
            player.chooseUseTarget(card, 'nopopup');
          } else {
            if (card) player.chooseUseTarget(card, 'nopopup', true);
          }
        },
        group: "_jl_lvb_a",
        subSkill: {
          a: {
            trigger: {
              player: "phaseDrawBefore",
            },
            forced: true,
            filter: function(event, player) {
              return player.storage.jl_dj == 2;
            },
            content: function() {
              trigger.num++;
            },
          },
        },
      };

      lib.skill._jl_lvc = {
        trigger: {
          global: "gameStart",
        },
        mod: {
          cardUsable: function(card, player, num) {
            if (card.name == 'sha' && player.storage.jl_dj == 3) {
              return num + 1;
            }
          },
        },
        forced: true,
        filter: function(event, player) {
          return player.storage.jl_dj == 3;
        },
        content: function() {
          player.maxHp += 1;
          player.hp += 1;
          player.draw();
          var card = get.cardPile(function(card) {
            return !player.hasCard(card) && get.type(card) == 'equip';
          });
          if (card && !lib.config.jl_lvat) {
            player.chooseUseTarget(card, 'nopopup');
          } else {
            if (card) player.chooseUseTarget(card, 'nopopup', true);
          }
        },
        group: "_jl_lvc_a",
        subSkill: {
          a: {
            trigger: {
              player: "phaseDrawBefore",
            },
            forced: true,
            filter: function(event, player) {
              return player.storage.jl_dj == 3;
            },
            content: function() {
              trigger.num++;
            },
          },
        },
      };

      lib.skill._jl_lvd = {
        trigger: {
          global: "gameStart",
        },
        mod: {
          cardUsable: function(card, player, num) {
            if (card.name == 'sha' && player.storage.jl_dj == 4) {
              return num + 1;
            }
          },
        },
        forced: true,
        filter: function(event, player) {
          return player.storage.jl_dj == 4;
        },
        content: function() {
          player.maxHp += 1;
          player.hp += 1;
          player.draw(2);
          var card = get.cardPile(function(card) {
            return !player.hasCard(card) && get.type(card) == 'equip';
          });
          if (card && !lib.config.jl_lvat) {
            player.chooseUseTarget(card, 'nopopup');
          } else {
            if (card) player.chooseUseTarget(card, 'nopopup', true);
          }
        },
        group: "_jl_lvd_a",
        subSkill: {
          a: {
            trigger: {
              player: "phaseDrawBefore",
            },
            forced: true,
            filter: function(event, player) {
              return player.storage.jl_dj == 4;
            },
            content: function() {
              trigger.num += 2;
            },
          },
        },
      };

      lib.skill._jl_lve = {
        trigger: {
          global: "gameStart",
        },
        mod: {
          cardUsable: function(card, player, num) {
            if (card.name == 'sha' && player.storage.jl_dj == 5) {
              return num + 1;
            }
          },
          maxHandcard: function(player, num) {
            if (player.storage.jl_dj == 5) {
              return num + 1;
            }
          },
        },
        forced: true,
        filter: function(event, player) {
          return player.storage.jl_dj == 5;
        },
        content: function() {
          player.maxHp += 2;
          player.hp += 2;
          player.draw(2);
          var card = get.cardPile(function(card) {
            return !player.hasCard(card) && get.type(card) == 'equip';
          });
          if (card && !lib.config.jl_lvat) {
            player.chooseUseTarget(card, 'nopopup');
          } else {
            if (card) player.chooseUseTarget(card, 'nopopup', true);
          }
        },
        group: "_jl_lve_a",
        subSkill: {
          a: {
            trigger: {
              player: "phaseDrawBefore",
            },
            forced: true,
            filter: function(event, player) {
              return player.storage.jl_dj == 5;
            },
            content: function() {
              trigger.num += 2;
            },
          },
        },
      };

    },
    editable: false,
    precontent: function(config) {
      game.playThisAudio = function(filePathInAudioDir, audioType, playAudioCallback) {
        if (lib.config.background_speak) {
          game.playAudio('..', 'extension', '将灵重置版', 'audio', filePathInAudioDir);
        }
      };
      lib.skill._jl_hiddenskill = {
        trigger: {
          global: "gameStart",
          player: "enterGame",
        },
        forced: true,
        priority: 999,
        filter: function(event, player) {
          //return lib.config.jl_gmjl==true && player == game.me && lib.skill._jl_hiddenskill!=true;
          return player == game.me && lib.config.jl_hiddenskill == true;
        },
        content: function() {
          'step 0'
          lib.skill._jl_hiddenskill = true;
          let list = [];
          for (let i in lib.character) {
            if (lib.config.banned.contains(i)) continue;
            list.push(i);
          }
          let len = list.length;
          player.chooseButton([0, len]).set('createDialog', ['选择幻化的武将', [list, 'character']]);
          'step 1'
          if (result.bool) {
            if (result.links) {
              for (let i of result.links) {
                let skills = lib.character[i][3];
                for (let j = 0; j < skills.length; j++) {
                  player.addSkill(skills[j]);
                }
              }
            }
          }
        }
      }

      lib.skill._reward = {
        trigger: {
          global: "gameOver",
        },
        forced: true,
        priority: 8,
        content: function() {
          jl_config.gameOver();
        }

      }

      lib.skill._damageGif = {
        trigger: {
          global: "damageBefore",
        },

        filter: function(event, player) {
          return event.card && event.card.name == 'sha' && event.source;
        },
        forced: true,
        priority: 3,
        content: function() {
          if (trigger.source.storage.playerAnimation == undefined)
            trigger.source.storage.playerAnimation = true;
          if (lib.config.jl_gongji == 1 && trigger.source.storage.playerAnimation) {

            if (lib.config.jl_gmczjl === undefined && !jl_config.gongji_flag) {
              confirm("请出战将灵以显示攻击效果或关闭攻击效果");
              jl_config.gongji_flag = true;
            } else {
              trigger.source.storage.playerAnimation = false;
              let jl_skill = [];
              let hasjl = false;
              for (let i in jl_config.jlname)
                jl_skill.push('jl_' + i);
              jl_skill.forEach((value) => {
                if (trigger.source.hasSkill(value))
                  hasjl = value;
              })
              if (hasjl)
                jl_config.damageAnimation(hasjl.slice(3), trigger, event)
              else if (player == game.me && lib.config.jl_gmczjl != 'shenlvbu') {
                jl_config.damageAnimation(lib.config.jl_gmczjl, trigger, event);
              }
            }
          }
        },
      }
      lib.skill._jl_juneichang = {
        trigger: {
          global: "gameStart",
          player: "enterGame",
        },
        forced: true,
        priority: 8,
        filter: function(event, player) {
          return lib.skill._jl_juneichang.storage != true;
        },
        content: function() {
          lib.skill._jl_juneichang = true;
          if (lib.config.jl_juneichangzhu == 1 && lib.config.jl_gmczjl != 'shenlvbu') {
            if (lib.config.jl_gmczjl === undefined)
              confirm('请出战将灵以生效常驻将灵效果或关闭常驻将灵')
            else {
              jl_config.setchuzhan();
              jl_config.settexiao();
            }
          }
        }

      }
    },
    config: {
      "jl": {
        "name": "<b><p align=center><span style=\"font-size:18px\">【查看将灵】</span></b>",
        "clear": true,
        onclick: function() {
          new jl();
        },
      },
      "jl_version": {
        "name": "<b><span style='cursor: default'>补丁版本：补丁8</span></b>",
        "clear": true,
      },

      "jl_gmjl": {
        name: "将灵出战设置",
        intro: "选择将灵添加方式",
        init: 'player',
        item: {
          off: '关闭',
          player: '玩家将灵',
          friends: '友方将灵',
          all: '全体将灵'
        },
      },
      "jl_add": {
        name: "其他人将灵",
        intro: "选择将灵添加方式",
        init: 'same',
        item: {
          same: '与玩家相同',
          random: '随机',
          choose: '游戏开始时选择',
        },

      },
      "jl_hiddenskill": {
        name: '千机之灵',
        intro: '开启后会保存将灵当前位置。',
        init: true,
        onclick: function(item) {
          game.saveConfig('extension_将灵_jl_hiddenskill', item);
          game.saveConfig('jl_hiddenskill', item);
        },
      },

      "jl_liuyanaaa": {
        name: '<div class="hth_menu">▶新作者留言</div>',
        clear: true,
        onclick: function() {
          if (this.hth_more == undefined) {
            var more = ui.create.div('.hth_more',
              '<div style="border: 1px solid white;text-align:left"><font size=2px>' +
              'BUG反馈请加Q群 <font size=3px>738357530</font>。' +
              '<br>由于前作者断更，本人自行决定续更此扩展，欢迎进入Q群加入将灵扩展频道，以便第一时间获取更新动态。'
            );
            this.parentNode.insertBefore(more, this.nextSibling);
            this.hth_more = more;
            this.innerHTML = '<div class="hth_menu">▼新作者留言</div>';
          } else {
            this.parentNode.removeChild(this.hth_more);
            delete this.hth_more;
            this.innerHTML = '<div class="hth_menu">▶留言</div>';
          }
        },
      },

      "jl_tuig": {
        name: '<b><p align=center><span style=\"font-size:18px\">以下是之前版本的前辈留言</span></b>',
        clear: true,
        nopointer: true,
      },
      "jl_tuig_old": {
        name:'<div class="hth_menu">▶留言</div>',
        clear:true,
        onclick:function(){
          if(this.hth_more==undefined){
            var more=ui.create.div('.hth_more',
              '<div style="border: 1px solid white;text-align:left"><font size=2px>'+
              'bug反馈请加群591446936。'+
              '<br>本次更新受助太多，主程序部分和屯田一张桃2305334712这位大佬合力完成。还要感谢萝卜大佬，薯片，风雪迷漫，xiaoas , 呲牙哥 ,周子鱼，念安，星辰化梦，无中-无中，无中无中无中感谢大佬们。还有归心，黄老板，乌鸦，木木枭等大佬的帮助和意见，还有很多大佬的帮忙，在此深表感谢'+
              '<br>深表感谢，祝各位新年快乐，未来前程似锦。'
            );
            this.parentNode.insertBefore(more,this.nextSibling);
            this.hth_more=more;
            this.innerHTML='<div class="hth_menu">▼留言</div>';
          }
          else{
            this.parentNode.removeChild(this.hth_more);
            delete this.hth_more;
            this.innerHTML='<div class="hth_menu">▶留言</div>';
          };
        },
      },
      "jl_tuigsm": {
        name: '<div class="hth_menu">▶推广说明</div>',
        clear: true,
        onclick: function() {
          if (this.hth_more == undefined) {
            var more = ui.create.div('.hth_more',
              '<div style="border: 1px solid white;text-align:left"><font size=2px>' +
              '从1.4版本开始呢，该扩展失名都在独管' +
              '<br><font color="green">所以说不知道能不能替原作者继续做好，虽然也没征得他同意私自改动他的扩展，先说声对不起啦</font>' +
              '<br>反馈可私我Q：<font color="red">635865436</font>' +
              '<br>更新状态：持续更新中' +
              '<br><font color="red">我会把这种好作品会继续做下去的' +
              '<br>如果可以的话，也可以尝试游玩一下我的主扩展“失名见闻谭”，谢谢支持</div>');
            this.parentNode.insertBefore(more, this.nextSibling);
            this.hth_more = more;
            this.innerHTML = '<div class="hth_menu">▼推广说明</div>';
          } else {
            this.parentNode.removeChild(this.hth_more);
            delete this.hth_more;
            this.innerHTML = '<div class="hth_menu">▶推广说明</div>';
          }
        },
      },
    },
    help: {},
    package: {
      character: {
        character: {},
        translate: {},
      },
      card: {
        card: {},
        translate: {},
        list: [],
      },
      skill: {
        skill: {
          jl_dj: {
            marktext: "秘",
            intro: {
              name: "圣兽之力",
            },
          },
          jl_caochun: {
            charlotte: true,
            locked: true,
            group: [
              "jl_caochun_shanjia",
              "jl_caochun_xiaorui",
            ],
            subSkill: {
              shanjia: {
                name: '缮甲',
                audio: false,
                forced: false,
                locked: true,
                prompt2: '每名角色的出牌阶段开始时，你有85%的概率可以摸2~4张牌，然后若此时是你的回合内，你可以视为使用一张【杀】，此【杀】不能被响应且伤害+1~2。（每轮限3次）',
                trigger: {
                  global: "phaseUseBegin",
                },
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.85 && !player.hasSkill('jl_caochun_count3');
                },
                content: function(game, event, current) {
                  'step 0'
                  if (player.hasSkill('jl_caochun_count2')) player.addTempSkill('jl_caochun_count3', 'roundStart')
                  else if (player.hasSkill('jl_caochun_count1')) player.addTempSkill('jl_caochun_count2', 'roundStart')
                  else player.addTempSkill('jl_caochun_count1', 'roundStart');
                  'step 1'
                  game.playThisAudio('voice/' + event.name + '1');
                  var numa = [2, 3, 4].randomGet();
                  player.draw(numa);
                  'step 2'
                  if (event._trigger.player === player) {
                    player.chooseTarget(get.prompt("jl_caochun_shanjia"),"视为使用一张【杀】，此【杀】不能被响应且伤害+1~2",function(card,player,target){
                      if(player==target) return false;
                      return player.canUse({name:'sha'},target,false);
                    })
                  }
                  'step 3'
                  if(result.bool){
                    player.storage.shanjiaSha = true;
                    player.addTempSkill('jl_caochun_count4', {player:'shaEnd'})
                    player.logSkill('jl_caochun_shanjia',result.targets);
                    player.useCard({name:'sha',isCard:true},result.targets[0],false);
                    result.targets[0].addTempSkill('jl_caochun_count5', {player:'shaEnd'})
                  }
                  'step 4'
                  player.storage.shanjiaSha = false;
                },
              },
              xiaorui: {
                name: '骁锐',
                audio: false,
                forced: false,
                locked: true,
                prompt2: '当你对其他角色造成伤害时，你有90%的概率随机获得其1~4张牌且此伤害+1~4（每回合限触发4次）',
                trigger: {
                  source: "damageBefore",
                },
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.9 && !player.hasSkill('jl_caochun_count9');
                },
                content: function(game, event, current) {
                  'step 0'
                  if (player.hasSkill('jl_caochun_count8')) player.addTempSkill('jl_caochun_count9', 'phaseEnd')
                  else if (player.hasSkill('jl_caochun_count7')) player.addTempSkill('jl_caochun_count8', 'phaseEnd')
                  else if (player.hasSkill('jl_caochun_count6')) player.addTempSkill('jl_caochun_count7', 'phaseEnd')
                  else player.addTempSkill('jl_caochun_count6', 'phaseEnd');
                  'step 1'
                  if (trigger.player) {
                    game.playThisAudio('voice/' + event.name + '1');
                    const numb = [1, 2, 3, 4].randomGet();
                    player.line(trigger.player, 'gold');
                    let cardList = [];
                    while (cardList.length < numb && cardList.length < trigger.player.countCards('he')) {
                      const card = trigger.player.getCards('he').randomGet()
                      if (card && !cardList.includes(card)) {
                        cardList.push(card)
                      }
                    }
                    if(cardList.length>0){
                      player.gain(cardList,trigger.player,'giveAuto','bySelf');
                    }
                    player.line(trigger.player, 'fire');
                    const damage = [1, 2, 3, 4].randomGet();
                    trigger.num += damage;
                  }
                },
              },
              count1: {},
              count2: {},
              count3: {},
              count4: {
                audio: false,
                forced: true,
                locked: true,
                trigger: {
                  player: "useCard",
                },
                filter: function(event, player) {
                  return player.storage.shanjiaSha && get.name(event.card) === "sha";
                },
                content: function(game, event, current) {
                  trigger.directHit.addArray(game.filterPlayer(function(current){
                    return current !== player;
                  }));
                },
              },
              count5: {
                audio: false,
                charlotte: true,
                frequent: true,
                forced: true,
                trigger: {
                  player: "damageBefore",
                },
                filter: function(event, player) {
                  return event.source.storage.shanjiaSha;
                },
                content: function() {
                  var numb = [1, 2].randomGet();
                  trigger.num += numb;
                },
              },
              count6: {},
              count7: {},
              count8: {},
              count9: {},
            },
          },
          jl_zhangqiying: {
            charlotte: true,
            locked: true,
            group: [
              "jl_zhangqiying_falu",
              "jl_zhangqiying_dianhua",
              "jl_zhangqiying_zhenyi1",
              "jl_zhangqiying_zhenyi2"
            ],
            subSkill: {
              falu: {
                name: '法箓',
                audio: false,
                forced: false,
                locked: true,
                prompt2: '结束阶段，你有89.2%的概率随机获得牌堆中四种花色的牌各一张。若你因此获得了点数相同的牌，你回复1点体力并对至多两名其他角色各造成1点伤害。',
                trigger: {
                  player: "phaseJieshuBegin",
                },
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.892;
                },
                content: function(game, event, current) {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  event.list = [];
                  event.num = 0;
                  'step 1'
                  var card = get.cardPile(function(card) {
                    if (event.list.contains(card)) return false;
                    for (let j = 0; j < event.list.length; j++) {
                      if (card.suit == event.list[j].suit) return false;
                    }
                    return true;
                  });
                  if (card) event.list.push(card);
                  event.num++;
                  'step 2'
                  if (event.num < 4) event.goto(1);
                  'step 3'
                  if (!player.storage.jl_zhoufei_kongshengBegin) player.storage.jl_zhoufei_kongshengBegin = [];
                  let numOfCards = new Set();
                  for (let i = 0; i < 4; i++) {
                    player.storage.jl_zhoufei_kongshengBegin[i] = event.list[i];
                    numOfCards.add(get.number(event.list[i]));
                  }
                  player.gain(event.list, 'gain2');
                  if (numOfCards.size < 4) {
                    player.recover();
                  } else event.finish();
                  'step 4'
                  player.chooseTarget('选择至多两名其他角色各造成1点伤害', [1, 2], function(player, target) {
                    return player != target;
                  })
                  'step 5'
                  if (result.bool) {
                    result.targets.sortBySeat();
                    let targets = result.targets;
                    for (const target of targets) {
                      player.line(target, 'fire');
                      target.damage();
                    }
                  }
                },
              },
              dianhua: {
                name: '点化',
                audio: false,
                forced: false,
                locked: true,
                prompt2: '准备阶段，你有89.2%的概率可以观看牌堆顶的四张牌，然后以任意顺序放回牌堆顶。',
                trigger: {
                  player: "phaseZhunbeiBegin",
                },
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.892;
                },
                content: function() {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player.isUnderControl()) {
                    game.modeSwapPlayer(player);
                  }
                  var num = 4;
                  var cards = get.cards(num);
                  event.cards = cards;
                  var switchToAuto = function() {
                    _status.imchoosing = false;
                    if (event.dialog) event.dialog.close();
                    if (event.control) event.control.close();
                    var top = [];
                    var judges = player.getCards('j');
                    var stopped = false;
                    if (!player.hasWuxie()) {
                      for (var i = 0; i < judges.length; i++) {
                        var judge = get.judge(judges[i]);
                        cards.sort(function(a, b) {
                          return judge(b) - judge(a);
                        });
                        if (judge(cards[0]) < 0) {
                          stopped = true;
                          break;
                        } else {
                          top.unshift(cards.shift());
                        }
                      }
                    }
                    var bottom;
                    if (!stopped) {
                      cards.sort(function(a, b) {
                        return get.value(b, player) - get.value(a, player);
                      });
                      while (cards.length) {
                        if (get.value(cards[0], player) <= 5) break;
                        top.unshift(cards.shift());
                      }
                    }
                    bottom = cards;
                    for (var i = 0; i < top.length; i++) {
                      ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                    }
                    for (i = 0; i < bottom.length; i++) {
                      ui.cardPile.appendChild(bottom[i]);
                    }
                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                    game.delay(2);
                  };
                  var chooseButton = function(online, player, cards) {
                    var event = _status.event;
                    player = player || event.player;
                    cards = cards || event.cards;
                    event.top = [];
                    event.bottom = [];
                    event.status = true;
                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）', cards);
                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                      event.dialog.buttons[i].classList.add('pointerdiv');
                    }
                    event.switchToAuto = function() {
                      event._result = 'ai';
                      event.dialog.close();
                      event.control.close();
                      _status.imchoosing = false;
                    },
                      event.control = ui.create.control('ok', function(link) {
                        var event = _status.event;
                        if (link == 'ok') {
                          if (online) {
                            event._result = {
                              top: [],
                              bottom: []
                            }
                            for (var i = 0; i < event.top.length; i++) {
                              event._result.top.push(event.top[i].link);
                            }
                            for (var i = 0; i < event.bottom.length; i++) {
                              event._result.bottom.push(event.bottom[i].link);
                            }
                          } else {
                            var i;
                            for (i = 0; i < event.top.length; i++) {
                              ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                            }
                            for (i = 0; i < event.bottom.length; i++) {
                              ui.cardPile.appendChild(event.bottom[i].link);
                            }
                            for (i = 0; i < event.dialog.buttons.length; i++) {
                              if (event.dialog.buttons[i].classList.contains('glow') == false &&
                                event.dialog.buttons[i].classList.contains('target') == false)
                                ui.cardPile.appendChild(event.dialog.buttons[i].link);
                            }
                            player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                            game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                          }
                          event.dialog.close();
                          event.control.close();
                          game.resume();
                          _status.imchoosing = false;
                        }
                      })
                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                      event.dialog.buttons[i].classList.add('selectable');
                    }
                    event.custom.replace.button = function(link) {
                      var event = _status.event;
                      if (link.classList.contains('target')) {
                        link.classList.remove('target');
                        event.top.remove(link);
                      } else if (link.classList.contains('glow')) {
                        link.classList.remove('glow');
                        event.bottom.remove(link);
                      } else if (event.status) {
                        link.classList.add('target');
                        event.top.unshift(link);
                      } else {
                        link.classList.add('glow');
                        event.bottom.push(link);
                      }
                    }
                    event.custom.replace.window = function() {
                      for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                        _status.event.dialog.buttons[i].classList.remove('target');
                        _status.event.dialog.buttons[i].classList.remove('glow');
                        _status.event.top.length = 0;
                        _status.event.bottom.length = 0;
                      }
                    }
                    game.pause();
                    game.countChoose();

                  };
                  event.switchToAuto = switchToAuto;

                  if (event.isMine()) {
                    chooseButton();
                    event.finish();
                  } else if (event.isOnline()) {
                    event.player.send(chooseButton, true, event.player, event.cards);
                    event.player.wait();
                    game.pause();
                  } else {
                    event.switchToAuto();
                    event.finish();
                  }
                  'step 1'
                  if (event.result == 'ai' || !event.result) {
                    event.switchToAuto();
                  } else {
                    var top = event.result.top || [];
                    var bottom = event.result.bottom || [];
                    for (var i = 0; i < top.length; i++) {
                      ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                    }
                    for (i = 0; i < bottom.length; i++) {
                      ui.cardPile.appendChild(bottom[i]);
                    }
                    for (i = 0; i < event.cards.length; i++) {
                      if (!top.contains(event.cards[i]) && !bottom.contains(event.cards[i])) {
                        ui.cardPile.appendChild(event.cards[i]);
                      }
                    }
                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                    game.updateRoundNumber();
                    game.delay(2);
                  }
                },
              },
              zhenyi1: {
                name: '真仪',
                audio: false,
                forced: false,
                locked: true,
                prompt2: '令此伤害+1，然后随机获得其一张牌',
                trigger: {
                  source: "damageBegin1",
                },
                filter: function(trigger, player) {
                  var numa = Math.random();
                  return numa < 0.842 && trigger.player != player && !player.hasSkill('jl_zhangqiying_count2');
                },
                content: function() {
                  game.playThisAudio('voice/jl_zhangqiying_zhenyi1');
                  if (player.hasSkill('jl_zhangqiying_count1')) player.addTempSkill('jl_zhangqiying_count2', 'phaseZhunbeiBegin')
                  else player.addTempSkill('jl_zhangqiying_count1', 'phaseZhunbeiBegin');
                  trigger.num = trigger.num + 1;
                  player.line(trigger.player, 'gold');
                  var card = trigger.player.getCards('he').randomGet();
                  player.gain(card, trigger.player, 'giveAuto', 'bySelf');
                },
              },
              zhenyi2: {
                name: '真仪',
                audio: false,
                forced: false,
                locked: true,
                prompt2: '防止此伤害，然后随机弃置其两张牌',
                trigger: {
                  player: "damageBegin3",
                },
                filter: function(trigger, player) {
                  var numa = Math.random();
                  return numa < 0.842 && trigger.source != player && !player.hasSkill('jl_zhangqiying_count4');
                },
                content: function(event) {
                  game.playThisAudio('voice/jl_zhangqiying_zhenyi1');
                  if (player.hasSkill('jl_zhangqiying_count3')) player.addTempSkill('jl_zhangqiying_count4', 'phaseZhunbeiBegin')
                  else player.addTempSkill('jl_zhangqiying_count3', 'phaseZhunbeiBegin');
                  trigger.num = 0;
                  var cards = trigger.source.getCards('he').randomGets(2);
                  player.line(trigger.source, 'fire');
                  trigger.source.discard(cards);
                },
              },
              count1: {},
              count2: {},
              count3: {},
              count4: {},
            },

          },
          jl_guansuo: {
            charlotte: true,
            locked: true,
            group: ["jl_guansuo_zhengnan", "jl_guansuo_xiefang"],
            subSkill: {
              xiefang: {
                name: '撷芳',
                forced: false,
                locked: true,
                prompt2: '摸X张牌、此阶段计算与其他角色的距离-X、此阶段可以多使用X张【杀】，且【杀】的伤害+X（此阶段限触发2次），X为场上女性角色数+1。',
                trigger: {
                  player: "phaseUseBegin",
                },
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                content: function(game, event, current) {
                  var x = game.countPlayer(function(current) {
                    return current.hasSex('female');
                  });
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.draw(x + 1)
                  player.storage.jl_guansuo_buff1 = x + 1;
                  player.addTempSkill('jl_guansuo_buff1');
                  player.addTempSkill('jl_guansuo_buff2');
                },
                ai: {
                  threaten: 2.5,
                  order: 6,
                  result: {
                    player: function(game, event) {
                      var x = game.countPlayer(function(current) {
                        return current.hasSex('female');
                      });
                      return 1.5 * (x + 1);
                    }
                  }
                }
              },
              zhengnan: {
                name: '征南',
                trigger: {
                  global: ['damageAfter', 'phaseEnd']
                },
                filter: function(event, player) {
                  if (!event.num) {
                    if (player.storage.xinzhengnan) player.storage.xinzhengnan = [];
                    return false
                  } else {
                    var numa = Math.random();
                    if (numa > 0.95 || event.player.hp > player.hp) return false;
                    return !player.storage.xinzhengnan || !player.storage.xinzhengnan.contains(event.player);
                  }

                },
                content: function() {
                  'step 0'
                  if (!player.storage.xinzhengnan) player.storage.xinzhengnan = [];
                  player.storage.xinzhengnan.add(trigger.player);
                  player.storage.xinzhengnan.sortBySeat();
                  player.markSkill('xinzhengnan');
                  var list = [];
                  if (!player.hasSkill('new_rewusheng')) {
                    list.push('new_rewusheng');
                  }
                  if (!player.hasSkill('xindangxian')) {
                    list.push('xindangxian');
                  }
                  if (!player.hasSkill('rezhiman')) {
                    list.push('rezhiman');
                  }
                  list.push('cancel2')
                  if (list.length) {
                    event.list = list;
                  } else {
                    player.draw([1, 2, 3].randomGet());
                    player.recover();
                    event.finish();
                  }
                  'step 1'
                  if (event.list.length == 1) event._result = { control: event.list[0] };
                  else player.chooseControl(event.list).set('prompt', '征南：选择获得下列技能中的一个').set('ai', function() {
                    if (event.list.contains('xindangxian')) return 'xindangxian';
                    return 0;
                  });
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  'step 2'
                  if (result.control == 'cancel2') {
                    player.draw([1, 2, 3].randomGet());
                    player.recover();
                    event.finish();
                  } else {
                    if (result.control == 'xindangxian') {
                      player.storage.xinfuli = true
                    }
                    player.draw([1, 2, 3].randomGet());
                    player.addTempSkill(result.control, { player: 'phaseEnd' })
                    player.popup(result.control);
                    game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                  }
                },
                ai: {
                  threaten: 6.5,
                  order: 6,
                  result: {
                    player: function(game, event) {
                      return 5;
                    }
                  }
                },
                intro: {
                  content: '已因$发动过技能',
                },
                derivation: ['new_rewusheng', 'xindangxian', 'rezhiman'],
              },
              buff1: {
                name: '撷芳',
                mark: true,
                locked: true,
                marktext: '撷芳',
                onremove: true,
                intro: { content: '与其他角色的距离-$、多使用$张【杀】。' },
                mod: {
                  globalFrom: function(from, to, distance) {
                    return distance - 1 - game.countPlayer(function(current) {
                      return current.hasSex('female');
                    });
                  },
                  cardUsable: function(card, player, num) {
                    if (card.name == 'sha') {
                      return num + 1 + game.countPlayer(function(current) {
                        return current.hasSex('female');
                      });
                    }
                  },
                }
              },
              buff2: {
                usable: 2,
                name: '撷芳',
                locked: true,
                forced: false,
                prompt2: '是否令此伤害+X,X为场上的女性角色。',
                trigger: { source: 'damageBegin' },
                content: function(event) {
                  var numb = game.countPlayer(function(current) {
                    return current.hasSex('female');
                  });
                  trigger.num = trigger.num + numb + 1;
                },
                ai: {
                  threaten: 1,
                  order: 6,
                  result: {
                    player: function(game, event) {
                      var x = game.countPlayer(function(current) {
                        return current.hasSex('female');
                      });
                      return 2 * (x + 1);
                    }
                  }
                }
              },
            },

          },
          jl_zhangxingcai: {
            charlotte: true,
            locked: true,
            group: ["jl_zhangxingcai_shenxian", "jl_zhangxingcai_qiangwu"],
            subSkill: {
              shenxian: {
                name: '甚贤',
                forced: false,
                usable: 2,
                prompt2: '摸1~2张牌(每回合限2次)',
                trigger: { global: 'loseAfter' },
                filter: function(event, player) {
                  if (event.type != 'discard' || event.player == player || _status.currentPhase == player) return false;
                  var numa = Math.random();
                  return numa < 0.85;
                },
                content: function() {
                  "step 0"
                  if (trigger.delay == false) game.delay();
                  "step 1"
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.draw([2, 1].randomGet());
                },
                ai: {
                  threaten: 2.5,
                  order: 6,
                  result: {
                    player: function() {
                      return 1.5;
                    }
                  }
                }
              },
              qiangwu: {
                name: '枪舞',
                direct: false,
                prompt2: "本回合内使用【杀】的次数上限+2~3，且使用【杀】无距离限制。",
                trigger: { player: "phaseUseBegin" },
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.95;
                },
                content: function() {
                  "step 0"
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.addTempSkill('jl_zhangxingcai_buff');
                  player.storage.jl_zhangxingcai_buff = [2, 3].randomGet();
                },
                ai: {
                  threaten: 1,
                  order: 6,
                  result: {
                    player: function() {
                      return 2;
                    }
                  }
                },
              },

              buff: {
                mark: true,
                marktext: '舞',
                locked: true,
                onremove: true,
                intro: {
                  name: '枪舞',
                  content: '本回合内使用【杀】的次数上限+#，且使用【杀】无距离限制。',
                },
                mod: {
                  cardUsable: function(card, player, num) {
                    if (card.name == 'sha') {
                      return num + player.storage.jl_zhangxingcai_buff;
                    }
                  },
                  targetInRange: function(card, player) {
                    if (card.name == 'sha') return true;
                  },
                },
              },

            }

          },
          jl_zhangfei: {
            charlotte: true,
            locked: true,
            group: ["jl_zhangfei_paoxiao", "jl_zhangfei_tishen"],
            subSkill: {
              tishen: {
                name: '替身',
                forced: false,
                prompt2: '是否回复1体力并摸3张牌？（每轮限3次）',
                trigger: { player: 'damageAfter' },
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.70;
                },
                content: function() {
                  "step 0"
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.recover();
                  player.draw(3);
                },
                ai: {
                  threaten: 2,
                  order: 6,
                  result: {
                    player: function() {
                      return 3.5;
                    }
                  }
                }
              },
              paoxiao: {
                name: '咆哮',
                direct: false,
                prompt2: '令本回合出【杀】次数+1~5张牌，且无距离限制？',
                trigger: { player: "phaseUseBegin" },
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                content: function() {
                  "step 0"
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.addTempSkill('jl_zhangfei_buff');
                  player.storage.jl_zhangfei_buff = [1, 2, 3, 4, 5].randomGet();
                },
                ai: {
                  threaten: 1.2,
                  order: 6,
                  result: {
                    player: function() {
                      return 2;
                    }
                  }
                },
              },

              buff: {
                mark: true,
                marktext: '咆',
                locked: true,
                onremove: true,
                intro: {
                  name: '咆哮',
                  content: '本回合内使用【杀】的次数上限+#，且使用【杀】无距离限制。',
                },
                mod: {
                  cardUsable: function(card, player, num) {
                    if (card.name == 'sha') {
                      return num + player.storage.jl_zhangfei_buff;
                    }
                  },
                  targetInRange: function(card, player) {
                    if (card.name == 'sha') return true;
                  },
                },
              },

            }

          },
          jl_shenguanyu: {
            charlotte: true,
            locked: true,
            group: ["jl_shenguanyu_wushen1", "jl_shenguanyu_wushen2", "jl_shenguanyu_wuhun1", "jl_shenguanyu_wuhun2"],
            subSkill: {
              wushen1: {
                name: '武神',
                forced: false,
                direct: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                content: function(player, event) {
                  'step 0'
                  player.chooseTarget(get.prompt('武神'), [1, 3]).set('ai', function(target) {
                    var att = get.attitude(_status.event.player, target);
                    if (att <= 0) return Math.max(att * (target.hp - 6), att * (-1))
                    else return -1;
                  });
                  'step 1'
                  if (result.targets) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    result.targets.sortBySeat();
                    for (var i = 0; i < result.targets.length; i++) {
                      player.useCard({ name: 'sha', isCard: true }, result.targets[i], false)
                    }
                  }
                  event.finish();
                },
                ai: {
                  threaten: 3,
                  order: 6,
                  result: {
                    target: function() {
                      return -1;
                    },
                  }
                }
              },
              wushen2: {
                //name:'武神',
                forced: true,
                locked: true,
                preHidden: true,
                trigger: { source: "damageAfter" },
                filter: function(event) {
                  return event.getParent().getParent().getParent().name == 'jl_shenguanyu_wushen1';
                },
                content: function() {
                  player.draw()
                }
              },
              //if(game.hasPlayer2(function(current){return current.getHistory('damage',function(event){console.log(event);console.log(event.getParent());console.log(event.getParent().getParent());console.log(event.getParent().getParent().getParent());return event.getParent().getParent().getParent().name=='jl_shenguanyu_wushen1';}).length>0})) player.draw();
              wuhun1: {
                name: '武魂',
                forced: true,
                preHidden: true,
                trigger: { global: "damageAfter" },
                filter: function(event, player, current) {
                  var numa = Math.random();
                  if (numa > 0.90) return false
                  return get.distance(player, event.player) <= 1 && _status.currentPhase != player && player.countMark('jl_shenguanyu_jlwuhun') < 5;
                },
                content: function(event, card) {
                  'step 0'
                  player.addMark('jl_shenguanyu_jlwuhun', 1);
                }
              },
              wuhun2: {
                name: '武魂',
                forced: false,
                locked: true,
                preHidden: true,
                trigger: { global: "phaseEnd" },
                prompt2: '是否弃置全部梦魇标记，并令当前回合角色失去等量体力？',
                filter: function(event, player) {
                  return player.countMark('jl_shenguanyu_jlwuhun') > 0 && _status.currentPhase != player;
                },
                content: function(event, card, player) {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  _status.currentPhase.loseHp(player.countMark('jl_shenguanyu_jlwuhun'));
                  player.removeMark('jl_shenguanyu_jlwuhun', player.countMark('jl_shenguanyu_jlwuhun'));
                },
                ai: {
                  threaten: 2.5,
                  order: 6,
                  result: {
                    target: function(game, event) {
                      var att = get.attitude(_status.currentPhase, player);
                      return -2 * (player.countMark('jl_shenguanyu_jlwuhun'));
                    }
                  }
                }
              },
              jlwuhun: {
                marktext: "魇",
                mark: true,
                intro: {
                  name: '梦魇',
                  content: "mark",
                },
                locked: true,
              },
            }

          },
          jl_wuliuqi: {
            charlotte: true,
            locked: true,
            group: ["jl_wuliuqi_feijian", "jl_wuliuqi_xuefa"],
            subSkill: {
              feijian: {
                name: '飞剪',
                trigger: { player: 'phaseUseEnd' },
                locked: true,
                prompt2: '弃置任意张装备牌（可以不弃），然后对任意名其他角色造成共计至多X+2点伤害值（X为你弃置的装备牌数），每名角色至多分配5点。',
                filter: function() {
                  return Math.random() < 0.85;
                },
                check: function() {
                  return true;
                },
                content: function() {
                  'step 0'
                  player.chooseToDiscard([1, Infinity], get.prompt2('jl_wuliuqi_feijian'), function(card) {
                    return get.type2(card) == 'equip';
                  }, 'he').set('ai', function(card) {
                    return 9 - get.value(card);
                  });
                  'step 1'
                  event.targets = [];
                  event.targets.push(player);
                  if (result.cards) {
                    event.feijian = result.cards.length + 2;
                  } else
                    event.feijian = 2;
                  'step 2'
                  player.chooseTarget('选择一名角色造成伤害', function(card, player, target) {
                    return !event.targets.contains(target);
                  }).set('ai', function(event, target) {
                    return get.attitude(event.player, target) <= 0;
                  })
                  'step 3'
                  if (!result.bool)
                    event.finish();
                  event.target = result.targets[0];
                  event.targets.push(result.targets[0]);
                  let btn = [];
                  let damagenum = Math.min(event.feijian, 5);
                  for (let i = 1; i <= damagenum; i++)
                    btn.push(i + '');
                  btn.push('cancel2');
                  player.chooseControl(btn).set('ai', function() {
                    let nm = event.feijian > event.target.hp ? event.target.hp : event.feijian;
                    nm = Math.min(nm, 5);
                    return nm + '';
                  })
                  'step 4'
                  if (result.control != 'cancel2') {
                    event.target.damage(parseInt(result.control), player);
                    event.feijian -= parseInt(result.control);
                    if (event.feijian == 0) event.finish();
                    event.goto(2)
                  } else
                    event.finish();
                },
              },
              xuefa: {
                name: '削发',
                locked: true,
                usable: 2,
                prompt2: '你对一名其他角色造成伤害后，你有89.2%的概率可以令该角色随机弃置2~3张牌（每回合限触发2次）。',
                trigger: { source: 'damageEnd' },
                filter: function(event, player) {
                  if (!event.player.isAlive()) return false;
                  if (event.player == player) return false;
                  return Math.random() < 0.9;
                },
                content: function(event) {
                  let n = [2, 3].randomGet();
                  game.playThisAudio('voice/' + event.name + '1')
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  let cards = trigger.player.getCards('he').randomGets(n);
                  trigger.player.discard(cards);
                },
                check: function(trigger, player) {
                  if (get.attitude(player, trigger.player) <= 0)
                    return true;
                  return false;
                },
              },
            },
          },

          jl_huaman: {
            charlotte: true,
            locked: true,
            group: ["jl_huaman_mansi1", "jl_huaman_mansi2", "jl_huaman_mansi3", "jl_huaman_xili", "jl_huaman_xili1"],
            subSkill: {
              mansi_mark: {
                name: '蛮嗣',
                mark: true,
                marktext: "蛮",
                locked: true,
                intro: {
                  name: '蛮嗣'
                },
                onremove: true,
              },
              mansi1: {
                name: '蛮嗣',
                locked: true,
                direct: true,
                prompt2: '选择至多三名其他角色，此阶段你对这些角色造成的伤害+1且你使用的【杀】、【决斗】、【火攻】可以额外选择其中一名角色为目标（每回合限触发2次）。',
                filter: function() {
                  if (game.players.length < 2) return false;
                  return Math.random() < 0.95;
                },
                trigger: { player: 'phaseUseBegin' },
                content: function() {
                  'step 0'
                  player.chooseTarget([1, 3], get.prompt('jl_huaman_mansi1'), function(card, player, target) {
                    return player != target;
                  }).set('ai', function(target) {
                    return get.attitude(player, target) <= 0;
                  });
                  'step 1'
                  if (result.targets) {
                    for (let i of result.targets)
                      i.addTempSkill('jl_huaman_mansi_mark', 'phaseUseAfter');
                  }
                },
              },
              mansi2: {
                name: '蛮嗣',
                locked: true,
                direct: true,
                filter: function(event, player) {
                  if (!player.isPhaseUsing()) return false;
                  if (!['sha', 'juedou', 'huogong'].contains(event.card.name)) return false;
                  let t = 0, p = 0;
                  game.players.forEach((value) => {
                    if (value.hasSkill('jl_huaman_mansi_mark'))
                      t++;
                  })
                  if (t == 0) return false;
                  event.targets.forEach((value) => {
                    if (value.hasSkill('jl_huaman_mansi_mark'))
                      p++;
                  })
                  if (t - p < 1) return false;
                  return true;
                },
                usable: 2,
                trigger: { player: 'useCard' },
                content: function(event) {
                  'step 0'
                  player.chooseTarget('选择额外目标', function(card, player, target) {
                    return target.hasSkill('jl_huaman_mansi_mark') && !trigger.targets.contains(target) && lib.filter.targetEnabled2(event._trigger.card, player, target);
                  }).set('ai', function(target) {
                    if (event._trigger.card.name != 'juedou')
                      return true;
                    if (target.countCards('h') < 4 || player.countCards('h', { name: 'sha' }) > 1)
                      return true;

                    return false;
                  });
                  'step 1'
                  if (result.targets) {
                    player.logSkill('jl_huaman_mansi1');
                    game.playThisAudio('voice/' + event.name + '1')
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    trigger.targets.addArray(result.targets);
                  } else {
                    player.storage.counttrigger.jl_huaman_mansi2--;
                    event.finish();
                  }
                },
              },
              mansi3: {
                name: '蛮嗣',
                locked: true,
                direct: true,
                trigger: { source: 'damageBegin' },
                filter: function(event, player) {
                  return player.isPhaseUsing() && event.player.hasSkill('jl_huaman_mansi_mark');
                },
                content: function() {
                  trigger.num++;
                }
              },
              xili: {
                name: '系力',
                locked: true,
                usable: 2,
                prompt2: '和伤害来源各摸1~2张牌，然后此伤害+1。',
                trigger: { global: 'damageBegin' },
                filter: function(event, player) {
                  if (!event.source) return false;
                  if (_status.currentPhase == event.source && event.source != player) {
                    player.storage.jl_huaman_xili++;
                    if (Math.random() < 0.90 && player.storage.jl_huaman_xili < 3)
                      return true;
                  }
                  return false;
                },
                content: function(event) {
                  let n = [1, 2].randomGet();
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  trigger.source.draw(n);
                  player.draw(n);
                  trigger.num++;
                },
                check: function(event, player) {
                  if (get.attitude(player, event.player) <= 0 && player != event.player)
                    return true;
                  return false;
                },
              },
              xili1: {
                trigger: { global: ['phaseBefore', 'phaseAfter'] },
                locked: true,
                direct: true,
                init: function(player) {
                  player.storage.jl_huaman_xili = 0;
                },
                content: function() {
                  player.storage.jl_huaman_xili = 0;
                }
              }
            },
          },

          jl_lingju: {
            charlotte: true,
            locked: true,
            group: ["jl_lingju_jieyuan1", "jl_lingju_jieyuan2", "jl_lingju_fenxin"],
            subSkill: {
              jieyuan1: {
                name: '竭缘',
                forced: false,
                locked: true,
                usable: 1,
                prompt2: '令受到的伤害-1~2',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                trigger: { player: 'damageBegin4' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = [1, 2].randomGet();
                  trigger.num = trigger.num - numb;
                },
              },
              jieyuan2: {
                name: '竭缘',
                forced: false,
                locked: true,
                prompt2: '令造成的伤害+1~2',
                usable: 1,
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                trigger: { source: 'damageBegin1' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = [1, 2].randomGet();
                  trigger.num = trigger.num + numb;
                },
                check: function(event, player) {
                  return (get.attitude(_status.event.player, event.target) <= 0);
                },
              },
              fenxin: {
                name: '焚心',
                forced: false,
                locked: true,
                usable: 1,
                prompt2: '摸3~5张牌并回复1~2点体力',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.90;
                },
                trigger: { global: 'dying' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = [3, 5].randomGet();
                  var numc = [1, 2].randomGet();
                  player.draw(numb);
                  player.recover(numc);
                },
              },
            },
          },

          jl_zhugeguo: {
            charlotte: true,
            locked: true,
            group: ['jl_zhugeguo_qirang', 'jl_zhugeguo_count', 'jl_zhugeguo_yuhua'],
            subSkill: {
              qirang: {
                name: '祈禳',
                forced: false,
                locked: true,
                usable: 2,
                prompt2: '获得2~4张锦囊牌',
                filter: function(event, player, name) {
                  var numa = Math.random();
                  if (numa >= 0.95) return false;
                  if (get.type(event.card) == 'trick') return false;
                  var history = player.getHistory('useCard', function(evt) {
                    return get.type(event.card) == 'basic';
                  });
                  if (get.type(event.card) == 'basic') return history.length == 1 && history[0] == event;
                  if (get.type(event.card) == 'equip') return true;
                },
                trigger: { player: ['useCard'] },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var i = 0;
                  var list = [];
                  var numb = [2, 3, 4].randomGet();
                  while (i++ < numb) {
                    var card = get.cardPile2(function(card) {
                      if (get.type(card) != 'trick') return false;
                      if (!list.contains(card)) return true;
                    });
                    if (card) list.push(card)
                    else {
                      var card = get.discardPile(function(card) {
                        if (get.type(card) != 'trick') return false;
                        if (!list.contains(card)) return true;
                      });
                      if (card) list.push(card);
                    }
                  }
                  event.list = list;
                  player.gain(event.list, 'gain2');
                  if (_status.currentPhase != player) player.getStat().skill.jl_zhugeguo_qirang++;
                },
              },
              count: {
                forced: true,
                locked: true,
                popup: false,
                filter: function(event) {
                  return get.type(event.card, 'trick') == 'trick';
                },
                trigger: { player: 'useCardAfter' },
                content: function() {
                  player.getHistory('custom').push({ count: true });
                },
              },
              yuhua: {
                name: '羽化',
                forced: false,
                locked: true,
                prompt2: function(event, player) {
                  var numb = player.getHistory('custom', function(evt) {
                    return evt.count == true;
                  }).length;
                  var numc;
                  if (numb > 4) numc = numb
                  else numc = 4;
                  return '观看牌堆顶' + numc + '张牌，并保留其中3张';
                },
                trigger: { player: 'phaseJieshuBegin' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  'step 0'
                  var numb = player.getHistory('custom', function(evt) {
                    return evt.count == true;
                  }).length;
                  var numc;
                  if (numb > 4) numc = numb
                  else numc = 4;
                  event.list = [];
                  event.cards = get.cards(numc);
                  'step 1'
                  player.chooseCardButton(3, true, event.cards, '请选择要保留的三张牌，然后若这三张牌花色均不同，你随机对与你阵营不同的一名其他角色造成1-2点伤害。').set('ai', function(button) {
                    return 100 - get.value(button.link);
                  });
                  'step 2'
                  if (result.bool) {
                    event.list = result.links.slice(0);
                    var list = event.list
                    player.gain(list, 'draw');
                    for (var i = 0; i < list.length; i++) {
                      event.cards.remove(list[i]);
                    }
                  }
                  for (var i = 0; i < event.cards.length; i++) {
                    ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
                  }
                  'step 3'
                  var suita = get.suit(event.list[0]);
                  var suitb = get.suit(event.list[1]);
                  var suitc = get.suit(event.list[2]);
                  if (suita != suitb && suita != suitc && suitb != suitc) {
                    player.chooseBool('是否随机对与你阵营不同的一名其他角色造成1-2点伤害')
                  } else event.finish();
                  'step 4'
                  if (result.bool) {
                    var target = game.filterPlayer(function(current) {
                      return !player.getFriends().contains(current) && current != player;
                    }).randomGet();
                    const numd = [1, 2].randomGet();
                    if (target) {
                      player.line(target, 'fire');
                      target.damage(numd, 'nocard');
                    }
                  }
                },
              },
            },
          },

          jl_shenzhouyu: {
            charlotte: true,
            locked: true,
            group: ['jl_shenzhouyu_yeyan', 'jl_shenzhouyu_qinyin'],
            subSkill: {
              yeyan: {
                name: '业炎',
                forced: false,
                locked: true,
                direct: true,
                preHidden: true,
                prompt2: '对至多两名角色各造成两点伤害',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.90;
                },
                trigger: { player: 'phaseUseBegin' },
                content: function() {
                  'step 0'
                  player.chooseTarget(get.prompt('jl_shenzhouyu_yeyan'), [1, 2]).set('ai', function(target) {
                    var att = get.attitude(_status.event.player, target);
                    if (att <= 0) return Math.max(att * (target.hp - 6), att * (-1))
                    else return -1;
                  });
                  'step 1'
                  if (result.targets) {
                    result.targets.sortBySeat();
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    player.logSkill('jl_shenzhouyu_yeyan', result.targets);
                    player.line(result.targets, 'fire');
                    for (var i = 0; i < result.targets.length; i++) {
                      result.targets[i].damage(2, 'fire', 'nocard');
                    }
                  }
                },
              },
              qinyin: {
                name: '琴音',
                forced: false,
                locked: true,
                direct: true,
                preHidden: true,
                prompt2: '选择两名角色各回复或失去一点体力',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.90;
                },
                trigger: { player: 'phaseJieshuBegin' },
                content: function() {
                  'step 0'
                  event.num = 0;
                  event.targets = [];
                  'step 1'
                  player.chooseTarget(get.prompt('jl_shenzhouyu_qinyin'), [1, Infinity]).set('ai', function(target) {
                    var att2 = get.attitude(_status.event.player, target);
                    if (att2 <= 0) return Math.max(5.5 + att2 * target.hp, 1)
                    else if (att2 > 0 && target.maxHp > target.hp) return Math.max(4 - att2 * target.hp, 1);
                    else return -1;
                  });
                  'step 2'
                  if (result.bool) {
                    result.targets.sortBySeat();
                    game.playThisAudio('voice/' + event.name + [1, 2, 3].randomGet());
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    player.logSkill('jl_shenzhouyu_qinyin', result.targets);
                    var targets = result.targets;
                    event.targets = targets;
                  } else event.finish();
                  'step 3'
                  if (event.num < targets.length) {
                    player.chooseControl('回复体力', '失去体力', 'cancel2').set('prompt', '目标角色：' + get.translation(targets[event.num])).set('ai', function() {
                      var att = get.attitude(_status.event.player, targets[event.num]);
                      if (att <= 0) return '失去体力'
                      else if (att > 0) return '回复体力';
                    });
                  } else event.finish();
                  'step 4'
                  if (result.control == '回复体力') {
                    player.line(targets[event.num], 'green');
                    targets[event.num].recover();
                    event.num++
                  }
                  if (result.control == '失去体力') {
                    player.line(targets[event.num], 'fire');
                    targets[event.num].loseHp();
                    event.num++
                  }
                  if (result.control == 'cancel2') {
                    event.num++;
                    event.goto(3);
                  }
                  'step 5'
                  event.goto(3);
                },
              },
            },
          },

          jl_shenzhaoyun: {
            charlotte: true,
            locked: true,
            group: ['jl_shenzhaoyun_juejing', 'jl_shenzhaoyun_longhun1', 'jl_shenzhaoyun_longhun2'],
            subSkill: {
              juejing: {
                name: '绝境',
                forced: false,
                locked: true,
                usable: 3,
                prompt2: '摸2~4张牌并回复1点体力',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.80;
                },
                trigger: { player: ['phaseZhunbeiBegin', 'dying', 'dyingAfter', 'phaseJieshuBegin'] },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = [2, 3, 4].randomGet();
                  player.draw(numb);
                  player.recover();
                },
              },
              longhun1: {
                name: '龙魂',
                forced: false,
                locked: true,
                prompt2: '获得当前回合角色至多两张牌',
                filter: function(event) {
                  var numa = Math.random();
                  if (numa >= 0.90) return false;
                  var card = event.card;
                  return card.name == 'shan' || card.name == 'wuxie';
                },
                trigger: { player: 'useCard' },
                content: function() {
                  game.playThisAudio('voice/jl_shenzhaoyun_longhun1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.line(_status.currentPhase, 'gold');
                  player.logSkill('jl_shenzhaoyun_longhun1', _status.currentPhase);//ppppppppppppppppppppppppppppppppppp
                  player.gainPlayerCard(_status.currentPhase, 'he', [1, 2]);
                },
                check: function(event, player) {
                  return (get.attitude(player, _status.currentPhase) <= 0);
                },
              },
              longhun2: {
                name: '龙魂',
                forced: false,
                locked: true,
                prompt2: '令此牌基数+1~3',
                filter: function(event) {
                  var numa = Math.random();
                  if (numa >= 0.90) return false;
                  var card = event.card;
                  return card.name == 'sha' || card.name == 'tao';
                },
                trigger: { player: 'useCard' },
                content: function() {
                  game.playThisAudio('voice/jl_shenzhaoyun_longhun1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = [1, 2, 3].randomGet();
                  trigger.baseDamage += numb;
                },
                check: function(event, player, card) {
                  if (event.card.name == 'sha') return (get.attitude(player, event.target) <= 0);
                  if (event.card.name == 'tao') return true;
                },
              },
            },
          },

          jl_nianshou: {
            charlotte: true,
            locked: true,
            group: ['jl_nianshou_fange', 'jl_nianshou_xunlie'],
            subSkill: {
              fange: {
                name: '反戈',
                audio:false,
                forced: false,
                locked: true,
                prompt2: '摸2张牌，获得伤害来源1~2张牌，再对伤害来源造成1点伤害。',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.90;
                },
                trigger: { player: 'damageEnd' },
                logTarget: 'source',
                content: function() {
                  player.draw(2);
                  if (trigger.source) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    var numb = [1, 2].randomGet();
                    player.line(trigger.source, 'gold');
                    player.gainPlayerCard('选择获得其至多' + numb + '张牌', trigger.source, 'he', [1, numb]);
                    player.line(trigger.source, 'fire');
                    const damage = [1, 2].randomGet();
                    trigger.source.damage(damage,'nocard');
                  }
                },
                check: function(event, player) {
                  return (get.attitude(player, event.source) <= 0);
                },
                ai: {
                  maixie_defend: true,
                  expose: 0.4
                },
              },
              xunlie: {
                name: '寻猎',
                audio:false,
                forced: false,
                locked: true,
                prompt2: '选择令当前回合角色回复1点体力并摸两张牌；或对其造成1点伤害并随机弃置两张牌',
                trigger: { global: 'phaseJieshuBegin' },
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.90 && event.player.isAlive() && !player.hasSkill('jl_nianshou_count2');
                },
                content: function() {
                  'step 0'
                  player.chooseControl('选项一', '选项二', 'cancel2').set('prompt', '选项一：令其回复1点体力并摸两张牌；选项二：对其造成1点伤害并随机弃置两张牌').set('ai', function() {
                    if (get.attitude(player, trigger.player) < 0) return '选项二';
                    if (get.attitude(player, trigger.player) > 0) return '选项一';
                  });
                  'step 1'
                  if (result.control == '选项一') {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    if (player.hasSkill('jl_nianshou_count1')) player.addTempSkill('jl_nianshou_count2', 'roundStart')
                    else player.addTempSkill('jl_nianshou_count1', 'roundStart');
                    player.line(trigger.player, 'green');
                    trigger.player.recover();
                    player.line(trigger.player, 'green');
                    trigger.player.draw(2);
                  }
                  if (result.control == '选项二') {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    if (player.hasSkill('jl_nianshou_count1')) player.addTempSkill('jl_nianshou_count2', 'roundStart')
                    else player.addTempSkill('jl_nianshou_count1', 'roundStart');
                    player.line(trigger.player, 'fire');
                    trigger.player.damage('nocard');
                    var cards = trigger.player.getCards('he').randomGets(2);
                    player.line(trigger.player, 'fire');
                    trigger.player.discard(cards);
                  }
                  if (result.control == 'cancel2') event.finish();
                },
                check: function(event, player) {
                  return (get.attitude(player, _status.currentPhase) != 0);
                },
              },
              count1: {},
              count2: {},
            },
          },

          jl_xiaosha: {
            charlotte: true,
            locked: true,
            group: ['jl_xiaosha_guisha', 'jl_xiaosha_shuli'],
            subSkill: {
              guisha: {
                name: '瑰杀',
                forced: false,
                locked: true,
                prompt2: '本回合出杀次数增加X次，且使用【杀】时摸一张牌',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.95;
                },
                trigger: { player: 'phaseUseBegin' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = player.countCards('h', function(card) {
                    return card.name == 'sha';
                  });
                  player.addTempSkill('jl_xiaosha_gui');
                  player.addTempSkill('jl_xiaosha_sha');
                  player.addMark('jl_xiaosha_gui', numb, false);
                },
              },
              gui: {
                mark: true,
                marktext: '瑰',
                locked: true,
                onremove: true,
                intro: {
                  name: '瑰杀',
                  content: '本回合内使用【杀】的次数上限+#，且使用【杀】时摸一牌（限三次）。',
                },
                mod: {
                  cardUsable: function(card, player, num) {
                    if (card.name == 'sha') {
                      return num + player.countMark('jl_xiaosha_gui');
                    }
                  },
                },
              },
              sha: {
                forced: true,
                locked: true,
                usable: 3,
                trigger: { player: 'useCard' },
                filter: function(event, player) {
                  return event.card.name == 'sha';
                },
                content: function() {
                  player.draw();
                },
              },
              shuli: {
                name: '姝丽',
                forced: false,
                locked: true,
                usable: 3,
                prompt2: '获得1~3张杀，且这些【杀】本回合不计入手牌上限',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.95;
                },
                trigger: { source: 'damageSource' },
                group: ['jl_xiaosha_shu'],
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var i = 0;
                  var list = [];
                  var numb = [1, 2, 3].randomGet();
                  while (i++ < numb) {
                    var card = get.discardPile(function(card) {
                      if (card.name != 'sha') return false;
                      if (!list.contains(card)) return true;
                    });
                    if (card) list.push(card)
                    else {
                      var card = get.cardPile2(function(card) {
                        if (card.name != 'sha') return false;
                        if (!list.contains(card)) return true;
                      });
                      if (card) list.push(card);
                    }
                  }
                  event.list = list;
                  player.gain(event.list, 'gain2');
                  if (!player.storage.shuli) player.storage.shuli = [];
                  for (var i = 0; i < event.list.length; i++) {
                    player.storage.shuli.add(event.list[i]);
                  }
                  player.addTempSkill('jl_xiaosha_li', 'phaseDiscardAfter');
                  player.addTempSkill('jl_xiaosha_shu', 'phaseJieshuBegin');
                },
              },
              shu: {
                forced: true,
                locked: true,
                trigger: { player: 'phaseJieshuBegin' },
                priority: 10,
                content: function() {
                  player.storage.shuli = [];
                },
              },
              li: {
                locked: true,
                mod: {
                  ignoredHandcard: function(card, player) {
                    if (player.storage.shuli && player.storage.shuli.contains(card)) {
                      return true;
                    }
                  },
                  cardDiscardable: function(card, player, name) {
                    if (name == 'phaseDiscard' && player.storage.shuli && player.storage.shuli.contains(card)) {
                      return false;
                    }
                  },
                },
              },
            },
          },

          jl_xiaotao: {
            charlotte: true,
            locked: true,
            group: ['jl_xiaotao_taoyan', 'jl_xiaotao_yanli'],
            subSkill: {
              taoyan: {
                name: '桃宴',
                audio: 'ext:将灵:2',
                forced: false,
                locked: true,
                prompt2: '选择至多两名角色各获得一张【桃】并摸1~3张牌',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                trigger: { player: 'phaseBegin' },
                content: function() {
                  'step 0'
                  event.num = 0
                  player.chooseTarget(get.prompt('jl_xiaotao_taoyan'), '选择至多两名角色', [1, 2]).set('ai', function(target) {
                    var att = get.attitude(_status.event.player, target);
                    return Math.max(att * (10 - target.hp), att * 5);
                  });
                  'step 1'
                  if (result.targets) {
                    result.targets.sortBySeat();
                    event.targets = result.targets;
                  } else event.finish();
                  'step 2'
                  var card = get.cardPile2(function(card) {
                    if (card.name == 'tao') return true;
                  });
                  player.line(event.targets[event.num], 'pink');
                  player.logSkill('jl_xiaotao_taoyan', event.targets[event.num]);
                  if (card) event.targets[event.num].gain(card, 'gain2');
                  'step 3'
                  var numb = [1, 2, 3].randomGet();
                  event.targets[event.num].draw(numb);
                  event.num++;
                  'step 4'
                  if (event.num < event.targets.length) event.goto(2);
                },
                ai: {
                  threaten: 1.5
                },
              },
              yanli: {
                name: '妍丽',
                audio: 'ext:将灵:2',
                forced: false,
                locked: true,
                prompt2: '令濒死角色回复两点体力并摸1~2张牌',
                filter: function(event, player) {
                  var numa = Math.random();
                  return player != _status.currentPhase && !player.hasSkill('jl_xiaotao_count2') && numa < 0.90;
                },
                trigger: { global: 'dying' },
                content: function() {
                  if (player.hasSkill('jl_xiaotao_count1')) player.addTempSkill('jl_xiaotao_count2', 'roundStart')
                  else player.addTempSkill('jl_xiaotao_count1', 'roundStart');
                  var numb = [1, 2].randomGet();
                  player.line(trigger.player, 'pink');
                  player.logSkill('jl_xiaotao_yanli', trigger.player);
                  trigger.player.recover(2);
                  trigger.player.draw(numb);
                },
                check: function(event, player) {
                  return (get.attitude(player, event.player) > 0);
                },
                ai: {
                  threaten: 1.5
                },
              },
              count1: {},
              count2: {},
            },
          },

          jl_guanyu: {
            charlotte: true,
            locked: true,
            group: ['jl_guanyu_wusheng', 'jl_guanyu_yijue'],
            subSkill: {
              wusheng: {
                name: '武圣',
                forced: false,
                locked: true,
                prompt2: '令此【杀】伤害基数+1~2',
                filter: function(event, player) {
                  var numa = Math.random();
                  var card = event.card;
                  return card.name == 'sha' && numa < 0.90 && player.isPhaseUsing();
                },
                trigger: { player: 'useCard' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = [1, 2].randomGet();
                  trigger.baseDamage += numb;
                },
                check: function(event, player) {
                  return (get.attitude(player, event.target) <= 0);
                },
              },
              yijue: {
                name: '义绝',
                forced: false,
                locked: true,
                prompt2: '令下一张【杀】无距离限制且不计次数，并无视目标角色的防具以及其非锁定技失效直到回合结束',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.70;
                },
                trigger: { player: 'phaseUseBegin' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.addTempSkill('jl_guanyu_buff');
                },
              },
              buff: {
                forced: true,
                locked: true,
                mod: {
                  targetInRange: function(card, player) {
                    if (card.name == 'sha') return true;
                  },
                },
                shaRelated: true,
                trigger: { player: 'useCardToPlayered' },
                filter: function(event, player) {
                  return event.card.name == 'sha';
                },
                logTarget: 'target',
                content: function() {
                  'step 0'
                  player.logSkill('jl_guanyu_yijue', trigger.target);
                  if (!trigger.target.hasSkill('fengyin')) {
                    trigger.target.addTempSkill('fengyin');
                  }
                  if (!trigger.target.hasSkill('ol_wuqian_targeted')) {
                    trigger.target.addTempSkill('ol_wuqian_targeted');
                  }
                  player.getStat().card.sha--
                  'step 1'
                  player.removeSkill('jl_guanyu_buff');
                },
              },
            },
          },

          jl_diaochan: {
            charlotte: true,
            locked: true,
            group: ['jl_diaochan_biyue', 'jl_diaochan_lijian'],
            subSkill: {
              biyue: {
                name: '闭月',
                forced: false,
                locked: true,
                prompt2: '摸2~3张牌',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.95;
                },
                trigger: { player: 'phaseJieshuBegin' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var numb = [2, 3].randomGet();
                  player.draw(numb);
                },
              },
              lijian: {
                name: '离间',
                forced: false,
                locked: true,
                direct: true,
                preHidden: true,
                prompt2: '令一名男性角色失去2点体力',
                filter: function(event, player) {
                  var num = game.countPlayer(function(current) {
                    return current != player && current.sex == 'male';
                  });
                  var numa = Math.random();

                  return numa < 0.65 && num > 0;
                },
                trigger: { player: 'phaseUseBegin' },
                content: function() {
                  'step 0'
                  player.chooseTarget(function(card, player, current) {
                    return current != player && current.hasSex('male');
                  }, '选择一名男性角色').set('ai', function(target) {
                    var att = get.attitude(_status.event.player, target);
                    if (att <= 0) return Math.max(att * (target.hp - 10), att * (-6))
                    else return -1;
                  });
                  'step 1'
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    player.line(result.targets[0], 'red');
                    player.logSkill('jl_diaochan_lijian', result.targets[0]);
                    result.targets[0].loseHp(2);
                  } else event.finish();
                },
              },
            },
          },

          jl_guojia: {
            charlotte: true,
            locked: true,
            group: ['jl_guojia_yiji', 'jl_guojia_tiandu'],
            subSkill: {
              yiji: {
                name: '遗计',
                forced: false,
                locked: true,
                prompt2: '摸3张牌，将至多3张手牌交给一至三名其他角色',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                trigger: { player: 'damageEnd' },
                content: function() {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  event.count = 1;
                  'step 1'
                  player.draw(3);
                  event.given = 0;
                  'step 2'
                  player.chooseCardTarget({
                    filterCard: true,
                    selectCard: [1, 3 - event.given],
                    filterTarget: function(card, player, target) {
                      return player != target && target != event.temp;
                    },
                    prompt: '请选择要送人的卡牌'
                  });
                  "step 3"
                  if (result.bool) {
                    player.line(result.targets, 'green');
                    result.targets[0].gain(result.cards, player, 'giveAuto');
                    event.given += result.cards.length;
                    if (event.given < 3) {
                      event.temp = result.targets[0];
                      event.goto(2);
                    } else if (event.count < trigger.num) {
                      delete event.temp;
                      event.count++;
                      player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                    } else event.finish();
                  } else if (event.count < trigger.num) {
                    delete event.temp;
                    event.count++;
                    player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                  } else event.finish();
                  "step 4"
                  if (result.bool) {
                    player.logSkill(event.name);
                    event.goto(1);
                  }
                },
              },
              tiandu: {
                name: '天妒',
                forced: false,
                locked: true,
                prompt2: '获得判定牌并摸2牌',
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.90 && get.position(event.result.card, true) == 'o';
                },
                trigger: { player: 'judgeEnd' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.gain(trigger.result.card, 'gain2');
                  player.draw(2);
                }
              },
            },
          },

          jl_luxun: {
            charlotte: true,
            locked: true,
            group: ['jl_luxun_lianying', 'jl_luxun_qianxun'],
            subSkill: {
              lianying: {
                name: '连营',
                forced: false,
                locked: true,
                prompt2: function(event, player) {
                  var num = event.hs.length;
                  return '令至多' + num + '名角色各摸1张牌和1-2张【杀】';
                },
                filter: function(event, player) {
                  if (player.countCards('h')) return false;
                  var numa = Math.random();
                  return event.hs && event.hs.length && numa < 0.90;
                },
                trigger: { player: 'loseAfter' },
                content: function() {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  event.num = 0;
                  var numb = trigger.hs.length;
                  player.chooseTarget('选择发动连营的目标', [1, numb]).set('ai', function(target) {
                    return get.attitude(_status.event.player, target);
                  }).set('ai', function(target) {
                    return get.attitude(_status.event.player, target);
                  });
                  'step 1'
                  if (result.targets) {
                    result.targets.sortBySeat();
                    event.targets = result.targets;
                  } else event.finish();
                  'step 2'
                  player.line(event.targets[event.num], 'green');
                  player.logSkill('jl_luxun_lianying', event.targets[event.num]);
                  event.targets[event.num].draw();
                  'step 3'
                  var numc = [1, 2].randomGet();
                  var list = [];
                  for (var i = 0; i < numc; i++) {
                    var card = get.cardPile2(function(card) {
                      if (card.name != 'sha') return false;
                      if (!list.contains(card)) return true;
                    });
                    if (card) list.push(card);
                  }
                  event.targets[event.num].gain(list, 'gain2');
                  event.num++;
                  'step 4'
                  if (event.num < event.targets.length) event.goto(2);
                },
              },
              qianxun: {
                name: '谦逊',
                forced: false,
                locked: true,
                prompt2: '摸两张牌',
                filter: function(event, player) {
                  var numa = Math.random();
                  return (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.player != player && numa < 0.80;
                },
                trigger: { target: 'useCardToTargeted' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.draw(2);
                },
              },
            },
          },

          jl_jiangwei: {
            charlotte: true,
            locked: true,
            group: ['jl_jiangwei_tiaoxin', 'jl_jiangwei_guanxing'],
            subSkill: {
              tiaoxin: {
                name: '挑衅',
                forced: false,
                locked: true,
                direct: true,
                preHidden: true,
                prompt2: '弃置至多两名其他角色各一张牌',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.70;
                },
                trigger: { player: ['phaseUseBegin', 'phaseUseEnd'] },
                content: function() {
                  'step 0'
                  player.chooseTarget(get.prompt('jl_jiangwei_tiaoxin'), '选择至多两名其他角色', [1, 2], function(card, player, target) {
                    return target != player && target.countDiscardableCards(player, 'hej') > 0;
                  }).set('ai', function(target) {
                    return -get.attitude(_status.event.player, target);
                  });
                  'step 1'
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    result.targets.sortBySeat();
                    event.targets = result.targets;
                    player.line(result.targets, 'gold');
                    player.logSkill('jl_jiangwei_tiaoxin', result.targets);
                  } else event.finish();
                  'step 2'
                  event.current = targets.shift();
                  player.discardPlayerCard(event.current, 'he', true)
                  if (targets.length) event.redo();
                },
              },
              guanxing: {
                name: '观星',
                forced: false,
                locked: true,
                prompt2: '观看牌堆顶五张牌，然后以任意顺序放回牌堆顶或牌堆底',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.80;
                },
                trigger: { player: 'phaseZhunbeiBegin' },
                content: function() {
                  'step 0'
                  if (player.isUnderControl()) {
                    game.modeSwapPlayer(player);
                  }
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var num = 5;
                  var cards = get.cards(num);
                  event.cards = cards;
                  var switchToAuto = function() {
                    _status.imchoosing = false;
                    if (event.dialog) event.dialog.close();
                    if (event.control) event.control.close();
                    var top = [];
                    var judges = player.getCards('j');
                    var stopped = false;
                    if (!player.hasWuxie()) {
                      for (var i = 0; i < judges.length; i++) {
                        var judge = get.judge(judges[i]);
                        cards.sort(function(a, b) {
                          return judge(b) - judge(a);
                        });
                        if (judge(cards[0]) < 0) {
                          stopped = true;
                          break;
                        } else {
                          top.unshift(cards.shift());
                        }
                      }
                    }
                    var bottom;
                    if (!stopped) {
                      cards.sort(function(a, b) {
                        return get.value(b, player) - get.value(a, player);
                      });
                      while (cards.length) {
                        if (get.value(cards[0], player) <= 5) break;
                        top.unshift(cards.shift());
                      }
                    }
                    bottom = cards;
                    for (var i = 0; i < top.length; i++) {
                      ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                    }
                    for (i = 0; i < bottom.length; i++) {
                      ui.cardPile.appendChild(bottom[i]);
                    }
                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                    game.delay(2);
                  };
                  var chooseButton = function(online, player, cards) {
                    var event = _status.event;
                    player = player || event.player;
                    cards = cards || event.cards;
                    event.top = [];
                    event.bottom = [];
                    event.status = true;
                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）', cards);
                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                      event.dialog.buttons[i].classList.add('pointerdiv');
                    }
                    event.switchToAuto = function() {
                      event._result = 'ai';
                      event.dialog.close();
                      event.control.close();
                      _status.imchoosing = false;
                    },
                      event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function(link) {
                        var event = _status.event;
                        if (link == 'ok') {
                          if (online) {
                            event._result = {
                              top: [],
                              bottom: []
                            }
                            for (var i = 0; i < event.top.length; i++) {
                              event._result.top.push(event.top[i].link);
                            }
                            for (var i = 0; i < event.bottom.length; i++) {
                              event._result.bottom.push(event.bottom[i].link);
                            }
                          } else {
                            var i;
                            for (i = 0; i < event.top.length; i++) {
                              ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                            }
                            for (i = 0; i < event.bottom.length; i++) {
                              ui.cardPile.appendChild(event.bottom[i].link);
                            }
                            for (i = 0; i < event.dialog.buttons.length; i++) {
                              if (event.dialog.buttons[i].classList.contains('glow') == false &&
                                event.dialog.buttons[i].classList.contains('target') == false)
                                ui.cardPile.appendChild(event.dialog.buttons[i].link);
                            }
                            player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                            game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                          }
                          event.dialog.close();
                          event.control.close();
                          game.resume();
                          _status.imchoosing = false;
                        } else if (link == 'pileTop') {
                          event.status = true;
                          event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                        } else {
                          event.status = false;
                          event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                        }
                      })
                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                      event.dialog.buttons[i].classList.add('selectable');
                    }
                    event.custom.replace.button = function(link) {
                      var event = _status.event;
                      if (link.classList.contains('target')) {
                        link.classList.remove('target');
                        event.top.remove(link);
                      } else if (link.classList.contains('glow')) {
                        link.classList.remove('glow');
                        event.bottom.remove(link);
                      } else if (event.status) {
                        link.classList.add('target');
                        event.top.unshift(link);
                      } else {
                        link.classList.add('glow');
                        event.bottom.push(link);
                      }
                    }
                    event.custom.replace.window = function() {
                      for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                        _status.event.dialog.buttons[i].classList.remove('target');
                        _status.event.dialog.buttons[i].classList.remove('glow');
                        _status.event.top.length = 0;
                        _status.event.bottom.length = 0;
                      }
                    }
                    game.pause();
                    game.countChoose();

                  };
                  event.switchToAuto = switchToAuto;

                  if (event.isMine()) {
                    chooseButton();
                    event.finish();
                  } else if (event.isOnline()) {
                    event.player.send(chooseButton, true, event.player, event.cards);
                    event.player.wait();
                    game.pause();
                  } else {
                    event.switchToAuto();
                    event.finish();
                  }
                  'step 1'
                  if (event.result == 'ai' || !event.result) {
                    event.switchToAuto();
                  } else {
                    var top = event.result.top || [];
                    var bottom = event.result.bottom || [];
                    for (var i = 0; i < top.length; i++) {
                      ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                    }
                    for (i = 0; i < bottom.length; i++) {
                      ui.cardPile.appendChild(bottom[i]);
                    }
                    for (i = 0; i < event.cards.length; i++) {
                      if (!top.contains(event.cards[i]) && !bottom.contains(event.cards[i])) {
                        ui.cardPile.appendChild(event.cards[i]);
                      }
                    }
                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                    game.updateRoundNumber();
                    game.delay(2);
                  }
                },
              },
            },
          },

          jl_zhurong: {
            charlotte: true,
            locked: true,
            group: ['jl_zhurong_lieren', 'jl_zhurong_juxiang'],
            subSkill: {
              lieren: {
                name: '烈刃',
                usable: 3,
                forced: false,
                locked: true,
                prompt2: '获得对方一张牌，并摸一张牌',
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.95 && (event.card.name == 'sha' || event.card.name == 'juedou') && event.target.countCards('he') > 0;
                },
                trigger: { player: 'useCardToPlayered' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.gainPlayerCard(trigger.target, true, 'he');
                  player.draw();
                },
              },
              juxiang: {
                name: '巨象',
                forced: false,
                locked: true,
                usable: 3,
                prompt2: function(event, player) {
                  var name = get.translation(event.card.name);
                  return '获得【' + name + '】并摸1~2张牌';
                },
                filter: function(event, player) {
                  var numa = Math.random();
                  return (numa < 0.80 &&
                    get.tag(event.card, 'damage') && get.type(event.card) == 'trick' &&
                    !player.hasSkill('jl_zhurong_count2') &&
                    event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o');
                },
                trigger: { global: 'useCardAfter' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  if (player.hasSkill('jl_zhurong_count1')) player.addTempSkill('jl_zhurong_count2', 'roundStart')
                  else player.addTempSkill('jl_zhurong_count1', 'roundStart');
                  player.gain(trigger.cards, 'gain2');
                  player.draw([1, 2].randomGet());
                },
              },
              count1: {},
              count2: {},
            },
          },

          jl_lvbu: {
            charlotte: true,
            locked: true,
            group: ['jl_lvbu_wushuang', 'jl_lvbu_liyu'],
            subSkill: {
              wushuang: {
                name: '无双',
                forced: false,
                locked: true,
                prompt2: '令此杀不能被抵消且无视防具，且结算完成后有80%的概率回收此【杀】并获得一张决斗',
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.80 && event.card.name == 'sha';
                },
                shaRelated: true,
                trigger: { player: 'useCardToPlayered' },
                logTarget: 'target',
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  trigger.getParent().directHit.push(trigger.target);
                  trigger.target.addTempSkill('qinggang2');
                  trigger.target.storage.qinggang2.add(trigger.card);
                  player.addTempSkill('jl_lvbu_buff');
                },
              },
              buff: {
                name: '无双',
                forced: true,
                locked: true,
                filter: function(event, player) {
                  var numa = Math.random();
                  return (numa < 0.80 &&
                    event.card.name == 'sha' &&
                    get.itemtype(event.cards) == 'cards' &&
                    get.position(event.cards[0], true) == 'o');
                },
                priority: 9,
                trigger: { player: 'useCardAfter' },
                content: function() {
                  'step 0'
                  player.gain(trigger.cards, 'gain2');
                  var cardx = get.discardPile(function(card) {
                    if (card.name == 'juedou') return true;
                  });
                  if (cardx) player.gain(cardx, 'gain2');
                  'step 1'
                  player.removeSkill('jl_lvbu_buff');
                },
              },
              liyu: {
                name: '利驭',
                forced: false,
                locked: true,
                usable: 2,
                prompt2: '获得目标角色区域内一张牌，并对其造成一点伤害',
                trigger: { source: 'damageSource' },
                filter: function(event, player) {
                  if (event._notrigger.contains(event.player)) return false;
                  var numa = Math.random();
                  return (numa < 0.80 &&
                    event.player != player && event.player.isAlive() &&
                    event.player.countGainableCards(player, 'hej') > 0);
                },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.gainPlayerCard(get.prompt('jl_lvbu_liyu', trigger.player), trigger.player, 'hej', 'visibleMove').player.line(trigger.targets, 'red');
                  trigger.player.damage('nocard');
                },
              },
            },
          },

          jl_xizhicai: {
            charlotte: true,
            locked: true,
            group: ['jl_xizhicai_chouce', 'jl_xizhicai_add', 'jl_xizhicai_clear', 'jl_xizhicai_xianfu'],
            subSkill: {
              chouce: {
                name: '筹策',
                forced: false,
                locked: true,
                prompt2: '选择一名角色令其摸两张牌，再选择一名角色弃置其至多两张牌',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                trigger: { player: 'damageEnd' },
                content: function() {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.chooseTarget('选择一名角色令其摸两张牌').set('ai', function(target) {
                    return get.attitude(_status.event.player, target);
                  });
                  'step 1'
                  if (result.bool) {
                    player.line(result.targets, 'green');
                    result.targets[0].draw(2);
                  }
                  'step 2'
                  player.chooseTarget('选择一名角色弃置其至多两张牌').set('ai', function(target) {
                    return -get.attitude(_status.event.player, target);
                  });
                  'step 3'
                  if (result.bool) {
                    player.line(result.targets, 'fire');
                    player.discardPlayerCard(result.targets[0], 'he', [1, 2]);
                  }
                },
              },
              add: {
                name: '先辅',
                forced: false,
                locked: true,
                prompt2: '选择一名角色，直到你的下回合开始，该角色造成或受到伤害后，你回复1点体力并摸两张牌',
                filter: function() {
                  var numa = Math.random();
                  return numa < 0.80;
                },
                trigger: { player: 'phaseJieshuBegin' },
                content: function() {
                  'step 0'
                  player.chooseTarget('请选择【先辅】的目标').set('ai', function(target) {
                    var num = 1 + Math.random();
                    if (get.attitude(_status.event.player, target) > 0) {
                      num += 0.5;
                    }
                    return num;
                  });
                  'step 1'
                  if (result.bool) {
                    var target = result.targets[0];
                    if (!player.storage.jl_xizhicai_xianfu) player.storage.jl_xizhicai_xianfu = [];
                    player.storage.jl_xizhicai_xianfu.push(target);
                    player.line(target, 'water');
                    target.markSkill('jl_xizhicai_mark');
                    if (!target.storage.jl_xizhicai_mark) target.storage.jl_xizhicai_mark = [];
                    target.storage.jl_xizhicai_mark.add(player);
                  }
                },
              },
              clear: {
                trigger: {
                  global: 'dieBegin',
                  player: 'phaseBegin',
                },
                silent: true,
                forced: true,
                locked: true,
                filter: function(event, player) {
                  if (event.player != player) return false;
                  return player.storage.jl_xizhicai_xianfu;
                },
                content: function() {
                  'step 0'
                  var target = player.storage.jl_xizhicai_xianfu[0];
                  target.unmarkSkill('jl_xizhicai_mark');
                  'step 1'
                  delete player.storage.jl_xizhicai_xianfu;
                },
              },
              mark: {
                marktext: '辅',
                intro: {
                  name: '先辅',
                  content: '当你受到或造成伤害后，$可以摸两张牌并回复1点体力',
                },
              },
              xianfu: {
                name: '先辅',
                forced: false,
                locked: true,
                prompt2: '回复1点体力并摸两张牌',
                charlotte: true,
                usable: 1,
                filter: function(event, player) {
                  if (!player.storage.jl_xizhicai_xianfu || event.num <= 0) return false;
                  if (player.storage.jl_xizhicai_xianfu.contains(event.player) || player.storage.jl_xizhicai_xianfu.contains(event.source)) return true;
                },
                trigger: { global: 'damageEnd' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.recover();
                  player.draw(2);
                },
              },
            },
          },

          jl_xiaoqiao: {
            charlotte: true,
            locked: true,
            group: ['jl_xiaoqiao_tianxiang', 'jl_xiaoqiao_hongyan'],
            subSkill: {
              tianxiang: {
                name: '天香',
                forced: false,
                locked: true,
                direct: true,
                preHidden: true,
                usable: 2,
                prompt2: '弃置一张手牌防止此伤害，然后令一名其他角色失去1点体力并获得你弃置的牌',
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.85 && player.countCards('h') > 0 && event.num > 0;
                },
                trigger: { player: 'damageBegin4' },
                content: function() {
                  'step 0'
                  player.chooseCardTarget({
                    filterCard: function(card, player) {
                      return lib.filter.cardDiscardable(card, player);
                    },
                    filterTarget: function(card, player, target) {
                      return player != target;
                    },
                    prompt: get.prompt('弃置一张手牌并选择一名角色'),
                    ai1: function(card) {
                      return 10 - get.value(card);
                    },
                    ai2: function(target) {
                      return -get.attitude(_status.event.player, target);
                    },
                  });
                  'step 1'
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    player.discard(result.cards);
                    var target = result.targets[0];
                    player.line(target, 'fire');
                    player.logSkill(event.name, target);
                    trigger.cancel();
                    event.target = target;
                    event.card = result.cards[0];
                  } else {
                    event.finish();
                  }
                  'step 2'
                  event.related = event.target.loseHp();
                  'step 3'
                  if (event.related.cancelled || target.isDead()) return;
                  if (card.isInPile()) target.gain(card, 'gain2');
                },
              },
              hongyan: {
                name: '红颜',
                forced: false,
                locked: true,
                usable: 3,
                prompt2: '摸二张牌',
                filter: function(event, player) {
                  if (event.type != 'discard') return false;
                  if (!event.hs) return false;
                  var numa = Math.random();
                  return numa < 0.90;
                },
                trigger: { player: 'loseAfter' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.draw(2);
                },
              },
            },
          },

          jl_menghuo: {
            charlotte: true,
            locked: true,
            group: ['jl_menghuo_zaiqi', 'jl_menghuo_huoshou'],
            subSkill: {
              zaiqi: {
                name: '再起',
                forced: false,
                locked: true,
                prompt2: '亮出牌堆顶一张牌，如果不是黑桃，你回复1点体力并获得此牌。',
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.95;
                },
                trigger: { player: 'phaseDrawBegin1' },
                content: function() {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  event.card = get.cards(1);
                  game.cardsGotoOrdering(event.card);
                  player.showCards(event.card);
                  'step 1'
                  if (get.suit(event.card[0]) != 'spade') {
                    player.recover();
                    player.gain(event.card[0], 'gain2');
                  } else event.finish();
                },
              },
              huoshou: {
                name: '祸首',
                forced: false,
                locked: true,
                usable: 2,
                prompt2: '此牌对你无效，然后你摸两张牌',
                filter: function(event, player) {
                  var numa = Math.random();
                  return get.tag(event.card, 'damage') && get.type(event.card) == 'trick' && numa < 0.80;
                },
                trigger: { target: 'useCardToTargeted' },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  trigger.getParent().excluded.add(player);
                  player.draw(2);
                },
              },
            },
          },

          jl_zhoufei: {
            charlotte: true,
            locked: true,
            group: ['jl_zhoufei_liangyin', 'jl_zhoufei_kongshengBegin', 'jl_zhoufei_kongshengEnd'],
            subSkill: {
              liangyin: {
                name: '良姻',
                forced: false,
                locked: true,
                direct: true,
                preHidden: true,
                usable: 2,
                prompt2: '令一名角色摸1~3张牌。',
                filter: function(event, player) {
                  var numa = Math.random();
                  if (numa >= 0.85) return false;
                  if (event.name == 'lose' && event.toStorage) return true;
                  if (event.name == 'gain' && event.fromStorage) return true;
                  return false;
                },
                trigger: {
                  global: ['gainAfter', 'loseAfter', 'addCardToStorage'],
                },
                content: function() {
                  'step 0'
                  player.chooseTarget('选择一名角色').set('ai', function(target) {
                    return get.attitude(player, target);
                  });
                  'step 1'
                  if (result.targets) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    var numb = [1, 2, 3].randomGet();
                    player.line(result.targets);
                    result.targets[0].draw(numb);
                  }
                },
              },
              kongshengBegin: {
                name: '箜声',
                forced: false,
                locked: true,
                prompt2: '随机获得弃牌堆中四张牌名不同的牌,回合结束时弃置这些牌',
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.85;
                },
                trigger: { player: 'phaseZhunbeiBegin' },
                content: function() {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  event.list = [];
                  event.num = 0;
                  'step 1'
                  var card = get.discardPile(function(card) {
                    if (event.list.contains(card)) return false;
                    for (var j = 0; j < event.list.length; j++) {
                      if (card.name == event.list[j].name) return false;
                    }
                    return true;
                  });
                  if (card) event.list.push(card);
                  event.num++;
                  'step 2'
                  if (event.num < 4) event.goto(1);
                  'step 3'
                  if (!player.storage.jl_zhoufei_kongshengBegin) player.storage.jl_zhoufei_kongshengBegin = [];
                  for (var i = 0; i < 4; i++) {
                    player.storage.jl_zhoufei_kongshengBegin[i] = event.list[i];
                  }
                  player.gain(event.list, 'gain2');
                },
              },
              kongshengEnd: {
                name: '箜声',
                forced: true,
                locked: true,
                filter: function(event, player) {
                  if (!player.storage.jl_zhoufei_kongshengBegin) return false;
                  return true;
                },
                trigger: { player: 'phaseJieshuBegin' },
                content: function() {
                  'step 0'
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  var cards = player.getCards('h');
                  var list = player.storage.jl_zhoufei_kongshengBegin;
                  event.list = [];
                  game.log(list.length);
                  for (var i = 0; i < 4; i++) {
                    if (cards.contains(list[i])) event.list.push(list[i]);
                  }
                  'step 1'
                  player.discard(event.list);
                  'step 2'
                  delete player.storage.jl_zhoufei_kongshengBegin;
                },
              },
            },
          },

          jl_caoying: {
            charlotte: true,
            locked: true,
            group: ["jl_caoying_lingren", "jl_caoying_fujian", "jl_caoying_lingrena"],
            subSkill: {
              lingren: {
                name: '凌人',
                usable: 2,
                trigger: {
                  player: "useCardToPlayered",
                },
                check: function(event, player) {
                  return 1;
                },
                filter: function(event, player) {

                  if (event.getParent().triggeredTargets3.length > 1) return false;
                  //if(!player.isPhaseUsing()) return false;
                  if (!['basic', 'trick'].contains(get.type(event.card))) return false;
                  if (Math.random() > 0.85) return false;
                  if (get.tag(event.card, 'damage')) return true;
                  return false;
                },

                direct: true,
                preHidden: true,

                content: function(event, player) {
                  "step 0"
                  player.chooseTarget('是否发动【凌人】？', function(event, player, target) {
                    return trigger.targets.contains(target);
                  }).set('ai', function(target) {
                    return get.attitude(player, target) <= 0;
                  }).set('prompt2', '你使用【杀】或伤害类锦囊牌指定目标后，你选择其中一个目标令此牌对其伤害+1~2然后你摸1~3张牌，并且你获得“界奸雄”、“界行殇”直到你下回合开始。（每回合限触发2次）')

                  "step 1"
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    event.target = result.targets[0];
                    player.logSkill('jl_caoying_lingren', event.target)
                    event.target.addTempSkill("jl_caoyingewss", {
                      player: "damageAfter",
                      global: "useCardAfter"
                    });
                  } else {
                    player.storage.counttrigger.jl_caoying_lingren--;
                    event.finish();
                  }
                  "step 2"
                  var numb = [1, 2, 3].randomGet();
                  player.draw(numb);
                  player.addTempSkill('lingren_jianxiong', { player: "phaseBegin" });
                  player.addTempSkill('lingren_xingshang', { player: "phaseBegin" });
                },
              },
              lingrena: {
                popup: false,
                trigger: {
                  player: "useCardAfter",
                },
                frequent: true,
                content: function() {
                  game.countPlayer(function(current) {
                    if (current.hasSkill('jl_caoyingewss')) {
                      current.removeSkill('jl_caoyingewss');
                    }
                  });
                },
              },
              fujian: {
                name: '伏间',
                trigger: {
                  player: ["phaseBegin", "phaseJieshuBegin"],
                },
                filter: function(event, player) {
                  if (Math.random() > 0.9) return false;
                  var num = game.countPlayer(function(current) {
                    return current != player && current.countCards('h') > 0;
                  });
                  if (num > 0) return true;
                  return false;
                },
                check: function(event, player) {
                  var num1 = game.countPlayer(function(current) {
                    return get.attitude(player, current) <= 0;
                  });
                  if (num1 > 0) return true;
                  return false;
                },
                direct: true,
                preHidden: true,
                content: function() {
                  "step 0"
                  player.chooseTarget('是否发动【伏间】？', function(card, player, target) {
                    return player != target && target.countCards('h') > 0;
                  }).set('ai', function(target) {
                    return get.attitude(player, target) <= 0;
                  }).set('prompt2', '你的回合开始时或结束时，你可以观看一名其他角色的手牌，然后你可以获得其中至多两张牌，若颜色相同，对其造成一点伤害。')
                  "step 1"
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    t = result.targets[0];
                    let fujian1 = t.getCards();
                    event.tmp = [];
                    if (!event.choosefujian) {
                      let set = { 'spade': 0, 'heart': 0, 'diamond': 0, 'club': 0 };
                      let fujiancard = { 'spade': [], 'heart': [], 'diamond': [], 'club': [] };
                      let set1 = [];
                      let color = '';
                      for (let item of fujian1) {
                        color = get.color(item);
                        set[color]++;
                        tmp = fujiancard[color]
                        fujiancard[color] = event.tmp.push(item);
                      }
                      for (let i in set) {
                        if (set[i] > 1) {
                          set1.push(fujiancard[i]);
                        }
                      }
                      if (set1.length) {
                        event.choosefujian = set1.randomGet();
                      }

                    }
                    player.chooseCardButton('选择' + get.translation(t) + '的1~2张手牌并获得之，若颜色相同则' + get.translation(t) + '受到一点伤害', t.getCards('h'), [1, 2]).set('ai', function(card) {
                      if (event.choosefujian) {
                        return event.choosefujian.contains(card);
                      }
                      return true;
                    });
                  } else {
                    event.finish();
                  }
                  "step 2"
                  if (result.bool) {
                    player.logSkill(event.name, t);
                    game.log(player, '获得了', t, result.links.length, '张牌');
                    var color = [];
                    result.links.forEach((item) => {
                      if (!color.contains(get.color(item)))
                        color.push(get.color(item));
                    })
                    player.gain(result.links, 'gain2', 'giveAuto');
                    if (color.length == 1)
                      t.damage();
                  }

                }
              },
            },
          },

          jl_caoyingewss: {
            charlotte: true,
            trigger: {
              player: "damageBefore",
            },
            frequent: true,
            forced: true,
            content: function() {
              var numb = [1, 2].randomGet();
              trigger.num += numb;
            },
          },

          jl_shencaocao: {
            charlotte: true,
            locked: true,
            group: ["jl_shencaocao_guancanghai", "jl_shencaocao_feiying"],
            subSkill: {
              guancanghai: {
                trigger: {
                  player: "damageEnd",
                },
                content: function() {
                  "step 0"
                  player.gain(trigger.cards);
                  var c = [];
                  for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                    c.push(ui.cardPile.childNodes[i]);
                  }
                  var x = game.countPlayer();
                  if (x > 4) {
                    var y = x;
                  } else {
                    var y = 4;
                  }
                  var z = Math.floor(y / 2);
                  player.chooseCardButton('观沧海：可以获得其中' + z + '张', z, c.slice(0, y)).ai = function(button) {
                    return true;
                  };
                  "step 1"
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + [1].randomGet());
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    for (var i = 0; i < result.links.length; i++) {
                      player.gain(result.links[i]);
                    }
                  }
                  "step 2"
                  if (trigger.source.countCards('he') > 0) {
                    player.gainPlayerCard('he', trigger.source);
                  } else {
                    trigger.source.damage();
                  }
                },
              },
              feiying: {
                trigger: {
                  global: "useCardToBefore",
                },
                usable: 2,
                direct: true,
                preHidden: true,
                prompt: "当其他玩家使用卡牌指定之后，若此牌只有一个目标，你可以改变此牌的目标（每回合限2次）(除无懈可击外)",
                filter: function(event, player) {
                  if (event.card.name == 'wuxie') return false;
                  if (event.targets.length != 1) return false;
                  if (event.player == player) return false;
                  return true;
                },
                check: function(event, player) {
                  return get.attitude(player, event.player) <= 0;
                },
                content: function() {
                  "step 0"
                  player.chooseTarget('请选择此' + get.translation(trigger.card.name) + '牌指定的目标', 1, true).set('ai', function(target) {
                    if (trigger.card.name == 'wuzhong') return get.attitude(player, target) > 0;
                    if (get.type(trigger.card) == 'equip') return get.attitude(player, target) > 0;
                    if (trigger.card.name == 'lebu') return get.attitude(player, target) <= 0;
                    if (trigger.card.name == 'bingliang') return get.attitude(player, target) <= 0;
                    if (trigger.card.name == 'sha') return get.attitude(player, target) <= 0;
                    if (trigger.card.name == 'tao') return get.attitude(player, target) > 0;
                    return get.attitude(player, target) <= 0;
                  });
                  "step 1"
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + [1].randomGet());
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    trigger.target = result.targets[0];
                    player.line(result.targets[0], 'green');
                    game.log(player, '将', trigger.card.name, '此牌目标改为', result.targets[0]);
                  } else {
                    player.getStat().skill.jl_shencaocao_feiying--;
                  }
                },
              },
            },
          },

          jl_shenlvbu: {
            charlotte: true,
            locked: true,
            marktext: '蚩',
            mark: true,
            intro: {
              name: '无上之力',
            },
            group: ["jl_shenlvbu_hupo", "jl_shenlvbu_zhanshen", "jl_shenlvbu_wq_b", "jl_shenlvbu_shennu"],
            subSkill: {
              hupo: {
                name: "虎魄",
                locked: true,
                mod: {
                  cardUsable: function(card, player, num) {
                    if (card.name == 'sha') return num + Infinity;
                  },
                  selectTarget: function(card, player, range) {
                    if (card.name == 'sha') range[1] += Infinity;
                  },
                },
                trigger: {
                  player: "useCard",
                },
                priority: 1,
                frequent: true,
                filter: function(event, player) {
                  return event.card && event.card.name == 'sha';
                },
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                },
              },
              zhanshen: {
                enable: "phaseUse",
                usable: 1,
                name: "战神",
                direct: true,
                preHidden: true,
                content: function() {
                  "step 0"
                  player.chooseTarget(get.prompt('指定任意数量目标，直到目标的回合结束前所有技能失效。使用后本回合你的攻击无视其防具且你造成的伤害+1。'), [1, Infinity], function(card, player, target) {
                    return target != player;
                  }).set('ai', function(target) {
                    return get.attitude(player, target) <= 0;
                  });
                  "step 1"

                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + [1, 2].randomGet());
                    for (var i = 0; i < result.targets.length; i++)
                      result.targets[i].addTempSkill('jl_shenlvbu_wq_a', { player: 'phaseAfter' });
                    player.logSkill('jl_shenlvbu_zhanshen', result.targets);
                    player.addTempSkill('qinggang2');
                  } else {
                    player.getStat().skill.jl_shenlvbu_zhanshen = 0;
                  }

                },
                derivation: ['qinggang2'],
                ai: {
                  order: 18,
                  result: {//主动技的收益，返回值只能是1个数字
                    player: 4,
                    target: -4,
                  },
                },
              },
              wq_a: {
                init: function(player, skill) {
                  var skills = player.getSkills(true, false);
                  var str = [];
                  str[0] = "jl_shenlvbu_wq_a"
                  for (var i = 0; i < skills.length; i++) {
                    var str2 = skills[i]
                    if (str2 == str) {
                      skills.splice(i--, 1);
                    }
                  }
                  player.disableSkill(skill, skills);
                },
                onremove: function(player, skill) {
                  player.enableSkill(skill);
                },
                locked: true,
                charlotte: true,
                mark: true,
                marktext: "慑",
                intro: {
                  name: "震慑万物",
                  content: function(storage, player, skill) {
                    var list = [];
                    for (var i in player.disabledSkills) {
                      if (player.disabledSkills[i].contains(skill)) {
                        list.push(i)
                      }
                    }
                    if (list.length) {
                      var str = '失效技能：';
                      for (var i = 0; i < list.length; i++) {
                        if (lib.translate[list[i] + '_info']) {
                          str += get.translation(list[i]) + '、';
                        }
                      }
                      return str.slice(0, str.length - 1);
                    }
                  },
                },
                ai: {
                  "unequip2": true,
                },
              },
              wq_b: {
                trigger: { source: "damageBegin", },
                frequent: true,
                filter: function(event, player) {
                  return event.source && event.source == player && event.player.hasSkill('jl_shenlvbu_wq_a')
                },
                content: function() {
                  trigger.num++
                },

              },
              shennu: {
                trigger: {
                  player: "phaseJieshu",
                },
                name: "神怒",
                direct: true,
                preHidden: true,
                check: function(player) {
                  return true;
                },
                content: function() {
                  "step 0"
                  player.chooseTarget(get.prompt('指定任意数量目标，按指定的顺序，所有目标依次弃置所有牌，之后造成1点伤害。'), [1, Infinity], function(card, player, target) {
                    return target != player;
                  }).set('ai', function(target) {
                    return get.attitude(player, target) <= 0;
                  });
                  "step 1"
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + [1, 2].randomGet());
                    for (var i = 0; i < result.targets.length; i++) {
                      result.targets[i].discard(result.targets[i].getCards('he'));
                    }
                    for (var i = 0; i < result.targets.length; i++) {
                      result.targets[i].damage();
                    }
                  }
                },
              },
            },
          },
          jl_zhugeliang: {
            charlotte: true,
            locked: true,
            group: ["jl_zhugeliang_huoji", "jl_zhugeliang_kanpo"],
            subSkill: {
              huoji: {
                trigger: {
                  player: "phaseUseBegin",
                },
                frequent: true,
                filter: function() {
                  return Math.random() <= 0.85
                },
                content: function() {
                  'step 0'
                  player.draw();
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  'step 1'
                  player.chooseUseTarget({ name: 'huogong' }, '是否视为使用一张【火攻】？');
                  'step 2'
                  var cards = [];
                  player.getHistory('lose', function(evt) {
                    if (evt.type == 'discard' && evt.getParent(4).card && evt.getParent(4).card.name == 'huogong' && evt.getParent(6).name == event.name) cards.addArray(evt.cards);
                  });
                  if (cards.length) {
                    player.gain(cards, 'gain2')
                  }
                }

              },
              kanpo: {
                trigger: {
                  target: "useCardToBegin",
                },
                check: function(evt, player) {
                  return get.effect(player, evt.card, evt.player, player) < 0;
                },
                filter: function(event, player) {
                  if (Math.random() > 0.75) return false;
                  if (event.card && get.type(event.card, 'trick') == 'trick' && event.player != player) return true;
                },
                usable: 2,
                content: function() {
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  trigger.cancel();
                  player.draw('nodelay');
                },

              }
            }
          },
          jl_sunshangxiang: {
            charlotte: true,
            locked: true,
            group: ["jl_sunshangxiang_jieyin", "jl_sunshangxiang_xiaoji"],
            subSkill: {
              jieyin: {
                trigger: {
                  player: 'phaseUseBegin',
                },
                frequent: true,
                filter: function(event, player) {
                  var numa = Math.random();
                  return numa < 0.752;
                },
                content: function() {
                  'step 0'
                  player.chooseTarget(function(player, target) {
                    return player != target;
                  }).set(ai, function(target) {
                    return get.attitude(_status.event.player, target) > 0;
                  }).set('prompt', '请选择【结姻】的目标');
                  'step 1'
                  if (result.bool) {
                    game.playThisAudio('voice/' + event.name + '1');
                    if (player == game.me) {
                      jl_config.settexiao();
                    }
                    var num = [1, 2].randomGet();
                    player.recover();
                    result.targets[0].recover();
                    player.draw(num);
                    result.targets[0].draw(num);
                  }
                },
              },
              xiaoji: {
                trigger: {
                  player: "loseAfter",
                  global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter"],
                },
                frequent: true,
                usable: 4,
                filter: function(event, player) {
                  var evt = event.getl(player);
                  var numa = Math.random();
                  if (numa > 80.2) return false;
                  return evt && evt.player == player && evt.es && evt.es.length > 0;
                },
                content: function() {
                  "step 0"
                  event.count = trigger.getl(player).es.length;
                  "step 1"
                  event.count--;
                  game.playThisAudio('voice/' + event.name + '1');
                  if (player == game.me) {
                    jl_config.settexiao();
                  }
                  player.draw(2);
                  "step 2"
                  if (event.count > 0) {
                    player.chooseBool(get.prompt2('jl_ssx_xiaoji')).set('frequentSkill', 'jl_ssx_xiaoji').ai = lib.filter.all;
                  }
                  "step 3"
                  if (result.bool) {
                    player.logSkill('jl_ssx_xiaoji');
                    event.goto(1);
                  }
                },
                ai: {
                  noe: true,
                  reverseEquip: true,
                  effect: {
                    target: function(card, player, target, current) {
                      if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                    },
                  },
                },
              },
            },
          },
          jl_guanyinping: {
            charlotte: true,
            name: '雪恨',
            forced: false,
            locked: true,
            usable: 1,
            prompt: '是否发动【雪恨】？',
            prompt2: '伤害+1并摸一张牌',
            filter: function(event, player) {
              var numa = Math.random();
              if (numa > 0.75) return false;
              return event.card && get.color(event.card) == 'red';
            },
            trigger: {
              source: 'damageBegin',
            },
            content: function() {
              game.playThisAudio('voice/jl_guanyinping_xuehen1');
              trigger.num++;
              player.draw();
              if (player == game.me) {
                jl_config.settexiao();
              }

            },
          },
          jl_sundeng: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【匡弼】？',
            prompt2: '获得弃牌堆的1~3张牌',
            trigger: {
              player: "phaseZhunbeiBegin",
            },
            filter: function(event, player) {
              var numa = Math.random();
              return numa < 0.6;
            },
            frequent: true,
            content: function() {
              'step 0'
              game.playThisAudio('voice/jl_sundeng_kuangbi1');
              var num = [1, 2, 3].randomGet();
              'step 1'

              var card = get.cardPile('discardPile');
              if (card) {
                player.gain(card, "draw", "log");
                if (player == game.me) {
                  jl_config.settexiao();
                }
                game.playThisAudio('voice/jl_sundeng_kuangbi1');
                num--;
              } else {
                game.log('弃牌堆没牌!')
                event.finish();
              }

              'step 2'
              if (num > 0) event.goto(1);
            }
          },
          jl_caorui: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【恢拓】？',
            prompt2: '回复1体力并摸一张牌',
            trigger: {
              player: "damageEnd",
            },
            filter: function(event, player) {
              var numa = Math.random();
              return numa < 0.2;
            },
            direct: true,
            content: function() {
              game.playThisAudio('voice/jl_caorui_huituo1');
              player.draw();
              player.recover();
              if (player == game.me) {
                jl_config.settexiao();
              }
            },
            ai: {
              maixie: true,
              "maixie_hp": true,
            },
          },
          jl_guohuanghou: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【矫诏】？',
            prompt2: '从牌堆获得一张锦囊牌',
            trigger: {
              player: 'phaseUseBegin',
            },
            filter: function(event, player) {
              var numa = Math.random();
              return numa < 0.74;
            },
            content: function() {
              var card = get.cardPile(function(card) {
                return get.type(card) == 'trick' || get.type(card) == 'delay';
              });
              if (card) {
                game.playThisAudio('voice/jl_guohuanggou_jiaozhao1');
                if (player == game.me) {
                  jl_config.settexiao();
                }
                player.gain(card, 'gain2', 'log');
              } else {
                player.chat('无牌可得了吗');
                game.log('但是牌堆里面已经没有锦囊牌了!');

              }
            },
          },
          jl_yuanshao: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【血裔】？',
            prompt2: '本回合手牌上限+3，并可以额外使用一张【杀】',
            trigger: {
              player: "phaseUseBegin",
            },
            frequent: true,
            filter: function() {
              return Math.random() <= 0.68
            },
            content: function() {
              player.addTempSkill(event.name + '_x');
              game.playThisAudio('voice/jl_yuanshao_xueyi1');
              if (player == game.me) {
                jl_config.settexiao();
              }
            },
            subSkill: {
              x: {
                mark: true,
                intro: {
                  content: "手牌上限+3，可额外使用一张【杀】。",
                },
                mod: {
                  cardUsable: function(card, player, num) {
                    if (card.name == 'sha') return num + 1;
                  },
                  maxHandcard: function(player, num) {
                    return num + 3;
                  },
                },
              },
            },
          },
          jl_huaxiong: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【耀武】？',
            prompt2: '摸两张牌',
            trigger: {
              player: 'damageAfter',
            },
            filter: function(event, player) {
              var numa = Math.random();
              if (numa > 0.7) return false;
              return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
            },
            content: function() {
              player.draw(2);
              if (player == game.me) {
                jl_config.settexiao();
              }
              game.playThisAudio('voice/jl_huaxiong_yaowu1');
            }
          },
          jl_xunyou: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【智愚】？',
            prompt2: '摸一张牌，伤害来源弃置一张牌',
            trigger: {
              player: "damageEnd",
            },
            filter: function(event, player) {
              if (!trigger.player) return false;
              var numa = Math.random();
              return event.source && numa < 0.85;
            },
            frequent: true,
            content: function() {
              "step 0"
              player.draw();
              game.playThisAudio('voice/jl_xunyou_zhiyu1');
              if (player == game.me) {
                jl_config.settexiao();
              }
              "step 1"
              trigger.source.chooseToDiscard(true);
            },
          },
          jl_zhangyi: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【失志】？',
            prompt2: '令本回合出【杀】次数+2？',
            trigger: {
              player: 'phaseUseBegin',
            },
            filter: function(event, player) {
              var numa = Math.random();
              return numa < 0.4;
            },
            // forced:true,
            content: function() {
              game.playThisAudio('voice/jl_zhangyi_shizhi1');
              if (player == game.me) {
                jl_config.settexiao();
              }
              player.addTempSkill('jl_zhangyi_buff', { player: 'phaseUseAfter' });//

            },
            subSkill: {
              buff: {
                mod: {
                  cardUsable: function(card, player, num) {
                    if (card.name == 'sha') return num + 2;
                  },
                },
                sub: true,
              },
            },
          },
          jl_sunluban: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【骄矜】？',
            prompt2: '令此次伤害-1',
            trigger: {
              player: "damageBegin3",
            },
            filter: function(event, player) {
              var numa = Math.random();
              if (numa > 0.2) return false;
              return event.source && event.source != player;
            },
            direct: true,
            content: function() {
              game.playThisAudio('voice/jl_sunluban_jiaoyin1');
              if (player == game.me) {
                jl_config.settexiao();
              }
              trigger.num--;
            },
          },
          jl_guohuai: {
            charlotte: true,
            forced: false,
            locked: true,
            prompt: '是否发动【精策】？',
            prompt2: '摸两张牌',
            trigger: {
              player: "phaseJieshuBegin",
            },
            frequent: true,
            filter: function(event, player) {
              var numa = Math.random();
              return numa < 0.4;
            },
            content: function(player) {
              if (player == game.me) {
                jl_config.settexiao();

              }
              game.playThisAudio('voice/jl_guohuai_jingce1');
              player.draw(2);
            },
          },
        },
        translate: {
          "jl_dj": "将灵等阶",
          "jl_dj_info": "",

          "jl_caochun": "曹纯",
          "jl_zhangqiying": "张琪瑛",
          "jl_guansuo": "关索",
          "jl_shenguanyu": "神关羽",
          "jl_zhangfei": "张飞",
          "jl_zhangxingcai": "张星彩",
          "jl_lingju": "灵雎",
          "jl_wuliuqi": "伍六七",
          "jl_zhugeguo": "诸葛果",
          "jl_shenzhouyu": "神周瑜",
          "jl_shenzhaoyun": "神赵云",
          "jl_nianshou": "年兽",
          "jl_xiaosha": "小杀",
          "jl_guanyu": "关羽",
          "jl_diaochan": "貂蝉",
          "jl_guojia": "郭嘉",
          "jl_luxun": "陆逊",
          "jl_jiangwei": "姜维",
          "jl_zhurong": "祝融",
          "jl_xizhicai": "戏志才",
          "jl_xiaoqiao": "小乔",
          "jl_lvbu": "吕布",
          "jl_menghuo": "孟获",
          "jl_zhoufei": "周妃",
          "jl_caoying": "曹婴",
          "jl_huaman": "花鬘",
          "jl_shencaocao": "神曹操",
          "jl_xiaotao": '小桃',
          "jl_sunshangxiang": '孙尚香',
          "jl_zhugeliang": '诸葛亮',
          'jl_guanyinping': '关银屏',
          'jl_sundeng': '孙登',
          'jl_caorui': '曹叡',
          'jl_guohuanghou': '郭皇后',
          'jl_yuanshao': '袁绍',
          'jl_huaxiong': '华雄',
          'jl_xunyou': '荀攸',
          'jl_zhangyi': '张嶷',
          'jl_sunluban': '孙鲁班',
          'jl_guohuai': '郭淮',

          "jl_caochun_info": '将灵曹纯，拥有技能【<span style="color:#9933ff"><abbr title="缮甲：▶每名角色的出牌阶段开始时，你有85%的概率可以摸2~4张牌，然后若此时是你的回合内，你可以视为使用一张【杀】，此【杀】不能被响应且伤害+1~2。（每轮限3次）"><ins>缮甲</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="骁锐：▶当你对其他角色造成伤害时，你有90%的概率随机获得其1~4张牌且此伤害+1~4（每回合限触发4次）"><ins>骁锐</ins></abbr></span>】',
          "jl_zhangqiying_info": '将灵张琪瑛，拥有技能【<span style="color:#9933ff"><abbr title="法箓：▶结束阶段，你有89.2%的概率随机获得牌堆中四种花色的牌各一张。若你因此获得了点数相同的牌，你回复1点体力并对至多两名其他角色各造成1点伤害。"><ins>法箓</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="点化：▶准备阶段，你有89.2%的概率可以观看牌堆顶的四张牌，然后以任意顺序放回牌堆顶。"><ins>点化</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="真仪：▶当你对其他角色造成伤害时，你有84.2%的概率令此伤害+1，然后随机获得其一张牌；当你受到其他角色造成的伤害时，你有84.2%的概率防止此伤害，然后你随机弃置伤害来源两张牌。（每个效果每回合各限触发2次）"><ins>真仪</ins></abbr></span>】',
          "jl_zhangfei_info": '将灵张飞，拥有技能【<span style="color:#9933ff"><abbr title="咆哮：▶你的出牌阶段开始时，有85%的概率多出1~5张【杀】，且无距离限制。"><ins>咆哮</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="替身：▶你受到伤害时，你有70%的概率回复1点体力并摸三张牌（每轮限3次）。"><ins>替身</ins></abbr></span>】',
          "jl_shenguanyu_info": '将灵神关羽，拥有技能【<span style="color:#9933ff"><abbr title="武神：▶准备阶段，你有85%的概率视为对至多3名角色各使用一张【杀】。此【杀】每次对目标角色造成伤害后你摸一张牌。"><ins>武神</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="武魂：▶你的回合外，与你距离1以内的角色受到伤害后，你有90%的概率获得1个“梦魇”标记。此回合结束时，若你有梦魇标记，你可令当前回合角色失去X点体力（X为“梦魇”标记数量且最多为5）。"><ins>武魂</ins></abbr></span>】',
          "jl_zhangxingcai_info": '将灵张星彩，拥有技能【<span style="color:#9933ff"><abbr title="甚贤：▶每名角色的回合限2次，当其他角色因弃置而失去基本牌后，你有85%的概率可以摸1~2张牌。"><ins>甚贤</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="枪舞：出牌阶段开始时，你有95%的概率本回合出【杀】次数+2~3且使用【杀】无距离限制。"><ins>枪舞</ins></abbr></span>】',
          "jl_guansuo_info": '将灵关索，拥有技能【<span style="color:#9933ff"><abbr title="征南：一名角色受到伤害后，若其体力值小于等于你，你有95%的概率摸1~3张牌，然后在“武圣”、“当先”、“制蛮”里选择并获得一个技能直到你的回合结束（每回合每名角色限触发一次），若未获得技能则你回复1点体力。"><ins>征南</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="撷芳：出牌阶段开始时，你有85%的概率获得以下效果：摸X张牌、此阶段计算与其他角色的距离-X、此阶段可以多使用X张【杀】，且【杀】的伤害+X（此阶段限触发2次），X为场上女性角色数+1。"><ins>撷芳</ins></abbr></span>】',
          "jl_wuliuqi_info": '将灵伍六七，拥有技能【<span style="color:#9933ff"><abbr title="飞剪：出牌阶段结束时，你有84.2%的概率可以弃置任意张装备牌（可以不弃），然后对任意名其他角色造成共计至多X+2点伤害值（X为你弃置的装备牌数），每名角色至多分配5点。"><ins>飞剪</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="削发：你对一名其他角色造成伤害后，你有89.2%的概率可以令该角色随机弃置2~3张牌（每回合限触发2次）。"><ins>削发</ins></abbr></span>】',
          "jl_xiaotao_info": '将灵小桃，拥有技能【<span style="color:#9933ff"><abbr title="桃宴：回合开始时，你有85%的概率令至多两名角色从牌堆获得一张【桃】并摸一至三张牌。"><ins>桃宴</ins></abbr></span>】、【<span style="color:#9933ff"><abbr title="妍丽：你的回合外，当有角色进入濒死状态时，你有90%的概率可以令其回复2点体力并摸一至两张牌（每轮限触发2次）。"><ins>妍丽</ins></abbr></span>】',
          "jl_shencaocao_info": "将灵神曹操，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"观沧海：当你受到伤害时，你可以获得令你受到伤害的牌，接着你观看牌堆顶x张牌（为场上角色数量且最少为4），你获得其中一半数量的牌（向下取整），并获得伤害来源的一张牌（若其没牌，则造成一点伤害）。\"><ins>观沧海</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"飞影：当其他玩家使用卡牌指定之后，若此牌只有一个目标，你可以改变此牌的目标（每回合限2次，除无懈可击外）\"><ins>飞影</ins></abbr></span>】",
          "jl_lingju_info": "将灵灵雎，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"竭缘：当你造成伤害时，有85%概率伤害+1~2；当你受到伤害时，有85%概率伤害-1~2。（每回合每项限触发1次）。\"><ins>竭缘</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"焚心：一名角色进入濒死状态时，你有90%的概率摸三至五张牌并回复1~2点体力。（每回合限触发1次）。\"><ins>焚心</ins></abbr></span>】",
          "jl_zhugeguo_info": "将灵诸葛果，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"祈禳：当你使用一张装备牌或每回合使用第一张基本牌时，你有75-95%的概率从牌堆或弃牌堆摸两至四张锦囊牌（每回合限触发2次，回合外限触发1次）。\"><ins>祈禳</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"羽化：结束阶段，你有95%的概率观看X张牌（X为你本回合使用的锦囊牌数且至少为4），然后保留其中至多三张牌，若花色均不同，则随机对一名敌方阵营的玩家造成1~2点伤害。\"><ins>羽化</ins></abbr></span>】",
          "jl_shenzhouyu_info": "将灵神周瑜，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"业火：出牌阶段开始时，你有90%对之多两名角色造成2点火焰伤害。\"><ins>业火</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"琴音：结束阶段，你有90%的概率可以选择任意名角色分别失去或回复1点体力。\"><ins>琴音</ins></abbr></span>】",
          "jl_shenzhaoyun_info": "将灵神赵云，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"绝境：准备阶段、结束阶段或当你进入或脱离濒死状态时，你有90%的概率摸二至四张牌并回复1点体力。\"><ins>绝境</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"龙魂：你使用【杀】或【桃】时，有90%的概率此牌伤害或回复值+1~3，且你使用【闪】或【无懈可击】时，有90%概率获得当前回合角色至多两张牌。\"><ins>龙魂</ins></abbr></span>】",
          "jl_nianshou_info": "将灵年兽，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"反戈：当你受到伤害后，你有90%的概率摸两张牌，然后获得伤害来源一至两张牌，再对伤害来源造成1点伤害。\"><ins>反戈</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"寻猎：一名已受伤的其他角色回合结束时，你有90%的概率选择一项：令其回复1点体力并摸两张牌；或对其造成1点伤害并随机弃置两张牌。（每轮限触发2次）\"><ins>寻猎</ins></abbr></span>】",
          "jl_xiaosha_info": "将灵小杀，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"瑰杀：出牌阶段开始时，你有95%的概率本回合出杀次数增加X次（X为此时你手牌中【杀】的数量），且使用【杀】时摸一张牌（每回合限触发3次）。\"><ins>瑰杀</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"姝丽：当你造成伤害后，你有95%的概率获得弃牌堆一至三张【杀】，且这些【杀】本回合不计入手牌上限（每回合限触发3次）。\"><ins>姝丽</ins></abbr></span>】",
          "jl_guanyu_info": "将灵关羽，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"武圣：出牌阶段，你的【杀】造成伤害时，有70-90%的概率伤害+1或2点。\"><ins>武圣</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"义绝：出牌阶段开始时，你有75%的概率下一张【杀】无距离限制且不计次数，并无视目标角色的防具以及其非锁定技失效直到回合结束。\"><ins>义绝</ins></abbr></span>】",
          "jl_diaochan_info": "将灵貂蝉，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"闭月：结束阶段，你有95%的概率摸2~3张牌。\"><ins>闭月</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"离间：出牌阶段开始时，你有65%的概率可以选择一名男性角色失去2点体力。\"><ins>离间</ins></abbr></span>】",
          "jl_guojia_info": "将灵郭嘉，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"遗计：当你受到1点伤害后，你有85%的概率可以摸3张牌，然后你可以将至多3张手牌交给一至三名其他角色。\"><ins>遗计</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"天妒：当你的判定牌生效后，你有90%的概率获得此牌并从牌堆额外摸2张牌。\"><ins>天妒</ins></abbr></span>】",
          "jl_luxun_info": "将灵陆逊，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"连营：当你失去最后手牌后，你有90%的概率可以令至多X名角色各摸1张牌和1-2张【杀】。（X为你失去的手牌数）。\"><ins>连营</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"谦逊：当你成为其他角色使用的锦囊牌和【杀】的目标后，你有80%的概率可以摸2张牌。\"><ins>谦逊</ins></abbr></span>】",
          "jl_jiangwei_info": "将灵姜维，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"挑衅：出牌阶段开始时或结束时，你有70%的概率弃置至多两名其他角色各一张牌。\"><ins>挑衅</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"观星：准备阶段，你有80%的概率观看牌堆顶五张牌，然后以任意顺序放回牌堆顶或牌堆底。\"><ins>观星</ins></abbr></span>】",
          "jl_zhurong_info": "将灵祝融，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"烈刃：你的【杀】或【决斗】指定目标后，你有95%的概率获得该角色一张牌并摸一张牌。（每回合限触发3次）。\"><ins>烈刃</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"巨象：其他角色使用的伤害类锦囊牌有80%的概率在结算完毕进入弃牌堆时你获得之并摸一张牌。（每回合限触发3次）\"><ins>巨象</ins></abbr></span>】",
          "jl_xizhicai_info": "将灵戏志才，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"筹策：当你受到伤害后，你有85%的概率令一名角色摸两张牌，然后弃置一名角色至多两张牌。\"><ins>筹策</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"先辅：结束阶段，你有80%的概率可以选择一名角色。直到你的下回合开始，该角色造成或受到伤害后，你回复1点体力并摸两张牌。（每回合限触发1次）。\"><ins>先辅</ins></abbr></span>】",
          "jl_xiaoqiao_info": "将灵小乔，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"天香：当你受到伤害时，你有85%的概率可以弃置一张手牌，防止此次伤害并选择一名其他角色，令其失去1点体力，然后其获得你弃置的牌。（每回合限触发2次）。\"><ins>天香</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"红颜：当你弃置手牌时，你有90%的概率摸2张牌。（每回合限触发3次）\"><ins>红颜</ins></abbr></span>】",
          "jl_lvbu_info": "将灵吕布，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"无双：你使用的【杀】有80%的概率不能被抵消并无视防具，且有80%的概率在结算后将此【杀】收回并获得弃牌堆中一张【决斗】。\"><ins>无双</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"利驭：当你造成伤害后，你有80%的概率获得目标角色区域里一张牌并对其造成1点伤害。（每回合限触发2次）\"><ins>利驭</ins></abbr></span>】",
          "jl_menghuo_info": "将灵孟获，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"再起：摸牌阶段，你有95%的概率亮出牌堆顶的牌，如果不是黑桃，你回复1点体力并获得此牌。\"><ins>再起</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"祸首：伤害类锦囊牌有80%的概率对你无效且你摸两张牌。（每回合限触发2次）。\"><ins>祸首</ins></abbr></span>】",
          "jl_zhoufei_info": "将灵周妃，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"良姻：当有牌移出游戏或从游戏外加入任意角色的手牌时，你有85%的概率可令一名角色摸1~3张牌（每回合限触发2次）。\"><ins>良姻</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"箜声：准备阶段，你有85%的概率随机获得弃牌堆里的四张牌名不同的牌。结束阶段若这些牌还在手牌中则弃置。\"><ins>箜声</ins></abbr></span>】",
          "jl_caoying_info": "将灵曹婴，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"凌人：你使用【杀】或伤害类锦囊牌指定目标后，你选择其中一个目标是此牌对其伤害+1~2然后你摸1~3张牌，并且你获得“界奸雄”、“界行殇”直到你下回合开始。（每回合限触发2次）\"><ins>凌人</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"伏间：你的回合开始时或结束时，你可以观看一名其他角色的手牌，然后你可以获得其中至多两张牌，若颜色相同，对其造成一点伤害。\"><ins>伏间</ins></abbr></span>】",
          "jl_huaman_info": "将灵花鬘，拥有技能【<span style=\"color:#9933ff\"><abbr title=\"蛮嗣：出牌阶段开始时，你有94.2%的概率可以选择至多三名其他角色，此阶段你对这些角色造成的伤害+1且你使用的【杀】、【决斗】、【火攻】可以额外选择其中一名角色为目标（每回合限触发2次）。\"><ins>蛮嗣</ins></abbr></span>】、【<span style=\"color:#9933ff\"><abbr title=\"系力：其他角色于其回合内前两次造成伤害时，你有89.2%的概率可以和该角色各摸1~2张牌，然后此伤害+1。\"><ins>系力</ins></abbr></span>】",
          "jl_caoyingewss": "额外伤害",
          "jl_caoyingewss_info": "",
        },
      },
      intro: "",
      author: "",
      diskURL: "",
      forumURL: "",
      version: "1.0.0",
    },
    files: {
      "character": [],
      "card": [],
      "skill": []
    }
  }
})
