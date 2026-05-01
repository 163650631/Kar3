// =====================================================================
//  📝📝📝 配置区 - 所有需要修改的文字都在这里！ 📝📝📝
//  修改后保存，1-2分钟后刷新网站即可看到效果
// =====================================================================

// ---- 网站基础设置 ----
const SITE_CONFIG = {
    title: "机 密 资 料 库",
    subtitle: "[ 限制访问 ] [ 5级权限 ] [ 非法访问将追踪 ]"
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
    { id: "OC-001", name: "张三", desc: "薄雾街的守夜人" },
    { id: "OC-002", name: "李四", desc: "失踪的研究员" },
    { id: "OC-003", name: "王五", desc: "前公司员工" }
];

// ---- 组织档案列表 ----
const ORGS = [
    { id: "ORG-001", name: "薄雾街管理处", desc: "负责薄雾街日常事务" },
    { id: "ORG-002", name: "白雾研究所",   desc: "官方白雾研究机构" }
];
