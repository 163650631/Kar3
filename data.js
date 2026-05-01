// =====================================================================
//  📝📝📝 数据配置区 - 日常修改这个文件就够了 📝📝📝
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

// =====================================================================
// 📌 帖子目录
// - 每篇帖子有: id, section(分区), title(标题), poster(发帖人), 
//   time(时间), desc(摘要-帖子卡片上的简短描述),
//   contentUrl(正文txt文件路径) 或 content(直接写正文)
// =====================================================================
const POSTS = [

    // ===== 分区1：历史资料 =====
    {
        id: "history1",
        section: "history",
        title: "遗失的历史",
        poster: "[匿名]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/history1.txt"
    },
    {
        id: "history2",
        section: "history",
        title: "薄雾街",
        poster: "[匿名]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/history2.txt"
    },
    {
        id: "history3",
        section: "history",
        title: "博爱之城",
        poster: "[匿名]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/history3.txt"
    },
    {
        id: "history4",
        section: "history",
        title: "公司部门",
        poster: "[匿名]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/history4.txt"
    },

    // ===== 分区2：白雾 =====
    {
        id: "fog1",
        section: "fog",
        title: "雾中的世界",
        poster: "[匿名]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/fog1.txt"
    },
    {
        id: "fog2",
        section: "fog",
        title: "对白雾的研究",
        poster: "[匿名]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/fog2.txt"
    },
    {
        id: "fog3",
        section: "fog",
        title: "恐雾症",
        poster: "[匿名]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/fog3.txt"
    },
    {
        id: "fog4",
        section: "fog",
        title: "？？？",
        poster: "[未知]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/fog4.txt"
    },

    // ===== 分区3：公告帖子 =====
    {
        id: "announce1",
        section: "residents",
        title: "公告：档案格式与撰写规则",
        poster: "[管理员]",
        time: "████-██-██",
        desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■",
        contentUrl: "posts/announce1.txt"
    },

    // ===== 居民档案入口（子列表） =====
    {
        id: "sublist_residents",
        section: "residents",
        title: "居民档案",
        poster: "[档案管理员]",
        time: "████-██-██",
        desc: "点击展开已收录的居民档案列表 [+]",
        isSublistEntry: true,
        sublistId: "sublist-residents",
        listType: "residents"
    },

    // ===== 组织档案入口（子列表） =====
    {
        id: "sublist_orgs",
        section: "residents",
        title: "已收录组织档案",
        poster: "[档案管理员]",
        time: "████-██-██",
        desc: "点击展开已收录的组织档案列表 [+]",
        isSublistEntry: true,
        sublistId: "sublist-orgs",
        listType: "orgs"
    }
];

// =====================================================================
// 📌 OC列表 - 从 lists/residents.txt 加载
//     如果加载失败，用这里的备用数据
//     格式: { id: "oc_1", name: "OC-001", contentUrl: "posts/oc_1.txt" }
// =====================================================================
let RESIDENTS = [
    { id: "oc_1", name: "OC-001", contentUrl: "posts/oc_1.txt" },
    { id: "oc_2", name: "OC-002", contentUrl: "posts/oc_2.txt" },
    { id: "oc_3", name: "OC-003", contentUrl: "posts/oc_3.txt" }
];

// =====================================================================
// 📌 组织列表 - 从 lists/orgs.txt 加载
//     如果加载失败，用这里的备用数据
// =====================================================================
let ORGS = [
    { id: "org_1", name: "ORG-001", contentUrl: "posts/org_1.txt" },
    { id: "org_2", name: "ORG-002", contentUrl: "posts/org_2.txt" }
];

// =====================================================================
// 自动从 lists/ 文件夹加载列表（如果存在则覆盖上面的默认值）
// =====================================================================
(async function loadLists(){
    try{
        const resp=await fetch('lists/residents.txt');
        if(resp.ok){
            const text=await resp.text();
            RESIDENTS=text.split('\n')
                .map(line=>line.trim())
                .filter(line=>line.length>0)
                .map((name,i)=>({
                    id: 'oc_'+(i+1),
                    name: name,
                    contentUrl: 'posts/oc_'+(i+1)+'.txt'
                }));
        }
    }catch(e){console.log('居民列表加载失败，使用默认数据');}

    try{
        const resp=await fetch('lists/orgs.txt');
        if(resp.ok){
            const text=await resp.text();
            ORGS=text.split('\n')
                .map(line=>line.trim())
                .filter(line=>line.length>0)
                .map((name,i)=>({
                    id: 'org_'+(i+1),
                    name: name,
                    contentUrl: 'posts/org_'+(i+1)+'.txt'
                }));
        }
    }catch(e){console.log('组织列表加载失败，使用默认数据');}
})();
