let BASE_URL = "https://github.com/LXK9301/jd_scripts/blob/master/";
let END = ".js";

let jd_bean_change = "jd_bean_change";
let jd_bean_home = "jd_bean_home";
let jd_blueCoin = "jd_blueCoin";
let jd_bookshop = "jd_bookshop";
let jd_car = "jd_car";
let jd_car_exchange = "jd_car_exchange";
let jd_cash = "jd_cash";
let jd_club_lottery = "jd_club_lottery";
let jd_crazy_joy = "jd_crazy_joy";
let jd_crazy_joy_coin = "jd_crazy_joy_coin";
let jd_daily_bounds = "jd_daily_bounds";
let jd_daily_egg = "jd_daily_egg";
let jd_dreamFactory = "jd_dreamFactory";
let jd_family = "jd_family";
let jd_fruit = "jd_fruit";
let jd_health = "jd_health";
let jd_jdfactory = "jd_jdfactory";
let jd_jdzz = "jd_jdzz";
let jd_joy = "jd_joy";
let jd_joy_feedPets = "jd_joy_feedPets";
let jd_joy_feedPets2 = "jd_joy_feedPets2";
let jd_joy_reward = "jd_joy_reward";
let jd_joy_steal = "jd_joy_steal";
let jd_jxnc = "jd_jxnc";
let jd_kd = "jd_kd";
let jd_live = "jd_live";
let jd_lotteryMachine = "jd_lotteryMachine";
let jd_mh = "https://raw.githubusercontent.com/shylocks/Loon/main/jd_mh.js";
let jd_moneyTree = "jd_moneyTree";
let jd_necklace = "jd_necklace";
let jd_nh = "jd_nh";
let jd_paopao = "https://github.com/799953468/Quantumult-X/raw/master/Scripts/JD/jd_paopao.js";
let jd_pet = "jd_pet";
let jd_petPig ="jd_petPig";
let jd_plantBean = "jd_plantBean";
let jd_rankingList = " https://github.com/yangtingxiao/QuantumultX/raw/master/scripts/jd/jd_rankingList.js";
let jd_redPacket = "jd_redPacket";
let jd_get_share_code = "jd_get_share_code";
let jd_shop = "jd_shop";
let jd_small_home = "jd_small_home";
let jd_speed = "jd_speed";
let jd_superMarket = "jd_superMarket";
let jd_syj = "jd_syj";
let jd_unbind = "jd_unbind";
let jd_unsubscribe = "jd_unsubscribe";
let jx_cfd = "https://github.com/MoPoQAQ/Script/raw/main/Me/jx_cfd.js";
let jx_sign = "jx_sign";
let xmly_speed = "https://github.com/Zero-S1/xmly_speed/raw/master/xmly_speed.py";
export const urlMap = {
    'jd_bean_change': jd_bean_change,
    'jd_bean_home': jd_bean_home,
    'jd_blueCoin': jd_blueCoin,
    'jd_bookshop': jd_bookshop,
    'jd_car': jd_car,
    'jd_car_exchange': jd_car_exchange,
    'jd_cash': jd_cash,
    'jd_club_lottery': jd_club_lottery,
    'jd_crazy_joy': jd_crazy_joy,
    'jd_crazy_joy_coin': jd_crazy_joy_coin,
    'jd_daily_bounds': jd_daily_bounds,
    'jd_daily_egg': jd_daily_egg,
    'jd_dreamFactory': jd_dreamFactory,
    'jd_family': jd_family,
    'jd_fruit': jd_fruit,
    'jd_health': jd_health,
    'jd_jdfactory': jd_jdfactory,
    'jd_jdzz': jd_jdzz,
    'jd_joy': jd_joy,
    'jd_joy_feedPets': jd_joy_feedPets,
    'jd_joy_feedPets2': jd_joy_feedPets2,
    'jd_joy_reward': jd_joy_reward,
    'jd_joy_steal': jd_joy_steal,
    'jd_jxnc': jd_jxnc,
    'jd_kd': jd_kd,
    'jd_live': jd_live,
    'jd_lotteryMachine': jd_lotteryMachine,
    "jd_moneyTree":jd_moneyTree,
    "jd_necklace":jd_necklace,
    'jd_nh':jd_nh,
    'jd_pet':jd_pet,
    'jd_petPig':jd_petPig,
    'jd_plantBean':jd_plantBean,
    'jd_redPacket':jd_redPacket,
    'jd_get_share_code':jd_get_share_code,
    'jd_shop':jd_shop,
    'jd_small_home':jd_small_home,
    'jd_speed':jd_speed,
    'jd_superMarket':jd_superMarket,
    'jd_syj':jd_syj,
    'jd_unbind':jd_unbind,
    'jd_unsubscribe':jd_unsubscribe,
    'jx_sign':jx_sign,











};

export function urlMapData() {
    for (let key in urlMap) {
        urlMap[key] = BASE_URL + urlMap[key] + END;
    }
    urlMap['jd_mh'] = jd_mh;
    urlMap['jd_paopao']=jd_paopao;
    urlMap['jd_rankingList']=jd_rankingList;
    urlMap['jx_cfd'] = jx_cfd;
    urlMap['xmly_speed'] = xmly_speed;
    return urlMap;
}