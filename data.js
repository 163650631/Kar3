// =====================================================================
//  📝📝📝 配置区 - 所有需要修改的文字都在这里！ 📝📝📝
//  修改后保存，1-2分钟后刷新网站即可看到效果
// =====================================================================

// ---- 网站基础设置 ----
const SITE_CONFIG = {
    title: "未开放的资料库",
    subtitle: "[ 限制访问 ] [ 误入请退出 ] [ 非法访问将追踪 ]"
};

// ---- 导航分区 ----
const NAV_SECTIONS = [
    { id: "history",   label: "历史资料" },
    { id: "fog",       label: "白雾" },
    { id: "residents", label: "居民档案" }
];

// ---- 帖子索引 ----
// 每个帖子: id, section(分区), title(标题), poster(发帖人), desc(简短描述),
//           file(正文文件路径, 放在posts/文件夹里)
const POSTS = [
    // ===== 历史资料 =====
    { id: "history1", section: "history", title: "遗失的历史", poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "history1.txt" },
    { id: "history2", section: "history", title: "薄雾街",     poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "history2.txt" },
    { id: "history3", section: "history", title: "博爱之城",   poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "history3.txt" },
    { id: "history4", section: "history", title: "公司部门",   poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "history4.txt" },

    // ===== 白雾 =====
    { id: "fog1", section: "fog", title: "雾中的世界",   poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "fog1.txt" },
    { id: "fog2", section: "fog", title: "对白雾的研究", poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "fog2.txt" },
    { id: "fog3", section: "fog", title: "恐雾症",       poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "fog3.txt" },
    { id: "fog4", section: "fog", title: "？？？",       poster: "[未知]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "fog4.txt" },

    // ===== 居民档案公告 =====
    { id: "announce1", section: "residents", title: "公告：档案格式与撰写规则", poster: "[管理员]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■", file: "announce1.txt" }
];

// ---- 居民档案OC列表 ----
// 格式: { id: "唯一编号", name: "OC名字", desc: "简短描述" }
const RESIDENTS = [
    { id: "001", name: "暂无", desc: "██" },
    { id: "002", name: "暂无", desc: "██" },
    { id: "003", name: "暂无", desc: "██" }
];

// ---- 组织档案列表 ----
const ORGS = [
    { id: "001", name: "暂无", desc: "███" },
    { id: "002", name: "暂无",   desc: "███" }
];
