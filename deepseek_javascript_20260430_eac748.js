// =====================================================================
//  📝📝📝 配置区 - 所有文字都在这里修改！ 📝📝📝
//  改完上传到GitHub，1-2分钟后刷新网站即可看到效果
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

// ---- 帖子数据 ----
// title=标题 | poster=发帖人 | desc=卡片简短描述 | content=正文HTML
const POSTS = [
    // ===== 分区1：历史资料 =====
    {
        id: "history1",
        section: "history",
        title: "遗失的历史",
        poster: "[匿名]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xA3F001] [密级:████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p style="color:#999;font-size:10px;margin-top:14px;">▮▮▮ [数据损坏] 0xBEEF ▮▮▮</p>
        `
    },
    {
        id: "history2",
        section: "history",
        title: "薄雾街",
        poster: "[匿名]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xB1F002] [密级:████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        `
    },
    {
        id: "history3",
        section: "history",
        title: "博爱之城",
        poster: "[匿名]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xC2A003] [密级:████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        `
    },
    {
        id: "history4",
        section: "history",
        title: "公司部门",
        poster: "[匿名]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xD3C004] [密级:████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        `
    },

    // ===== 分区2：白雾 =====
    {
        id: "fog1",
        section: "fog",
        title: "雾中的世界",
        poster: "[匿名]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xFOG001] [密级:████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p style="color:#999;font-size:10px;margin-top:14px;">▮▮▮ [感知过滤] 0xMIST ▮▮▮</p>
        `
    },
    {
        id: "fog2",
        section: "fog",
        title: "对白雾的研究",
        poster: "[匿名]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xFOG002] [密级:████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        `
    },
    {
        id: "fog3",
        section: "fog",
        title: "恐雾症",
        poster: "[匿名]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xFOG003] [密级:████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        `
    },
    {
        id: "fog4",
        section: "fog",
        title: "？？？",
        poster: "[未知]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0x????] [密级:████████]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p style="color:#999;font-size:10px;margin-top:14px;">▮▮▮ [数据严重损坏——恢复失败] ▮▮▮</p>
        `
    },

    // ===== 分区3：公告 =====
    {
        id: "announce1",
        section: "residents",
        title: "公告：档案格式与撰写规则",
        poster: "[管理员]",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        content: `
            <p style="color:#555;font-size:11px;margin-bottom:12px;">[文档: 0xADM001] [密级:内部]</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
            <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        `
    }
];

// ---- 居民档案OC列表 ----
// 💡 添加新OC：复制一行，改id和name，然后在下面POSTS_CONTENT_BY_ID加正文
const RESIDENTS = [
    { id: "oc_1", name: "OC-001" },
    { id: "oc_2", name: "OC-002" },
    { id: "oc_3", name: "OC-003" }
];

// ---- 组织档案列表 ----
// 💡 添加新组织：同上
const ORGS = [
    { id: "org_1", name: "ORG-001" },
    { id: "org_2", name: "ORG-002" }
];

// ---- OC和组织的帖子正文 ----
// 💡 在这里修改每个OC/组织的正文内容
const POSTS_CONTENT_BY_ID = {
    "oc_1": `
        <p style="color:#555;font-size:11px;margin-bottom:12px;">[档案编号: OC-001] [密级:████]</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
    `,
    "oc_2": `
        <p style="color:#555;font-size:11px;margin-bottom:12px;">[档案编号: OC-002] [密级:████]</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
    `,
    "oc_3": `
        <p style="color:#555;font-size:11px;margin-bottom:12px;">[档案编号: OC-003] [密级:████]</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
    `,
    "org_1": `
        <p style="color:#555;font-size:11px;margin-bottom:12px;">[档案编号: ORG-001] [密级:████]</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
    `,
    "org_2": `
        <p style="color:#555;font-size:11px;margin-bottom:12px;">[档案编号: ORG-002] [密级:████]</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
        <p class="placeholder-block" style="margin-bottom:10px;">■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>
    `
};