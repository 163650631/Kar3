// =====================================================================
//  📝 配置文件 - 只改这个文件！
//  新增帖子：在 POSTS 里加一条，然后在 posts/ 文件夹放对应 .txt
//  新增OC：在 lists/residents.txt 里加一行
//  新增组织：在 lists/orgs.txt 里加一行
//  修改正文：编辑 posts/xxx.txt
// =====================================================================

const SITE_CONFIG = {
    title: "机 密 资 料 库",
    subtitle: "[ 限制访问 ] [ 5级权限 ] [ 非法访问将追踪 ]"
};

const NAV_SECTIONS = [
    { id: "history",   label: "历史资料", sublists: [] },
    { id: "fog",       label: "白雾",     sublists: [] },
    { id: "residents", label: "居民档案", sublists: [
        { id: "sublist-residents", title: "居民档案", poster: "[档案管理员]" },
        { id: "sublist-orgs",      title: "已收录组织档案", poster: "[档案管理员]" }
    ]}
];

// 帖子目录（新增帖子在这里加一行）
const POSTS = [
    // 历史资料
    { id: "history1", section: "history", title: "遗失的历史", poster: "[匿名]", desc: "desc: "白雾吞噬土地，旧秩序消失，公司成为权力机构，人类退居小小的城市里，围墙外大雾弥漫。" },
    { id: "history2", section: "history", title: "薄雾街",     poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" },
    { id: "history3", section: "history", title: "博爱之城",   poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" },
    { id: "history4", section: "history", title: "公司部门",   poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" },
    // 白雾
    { id: "fog1", section: "fog", title: "雾中的世界",   poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" },
    { id: "fog2", section: "fog", title: "对白雾的研究", poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" },
    { id: "fog3", section: "fog", title: "恐雾症",       poster: "[匿名]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" },
    { id: "fog4", section: "fog", title: "？？？",       poster: "[未知]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" },
    // 公告
    { id: "announce1", section: "residents", title: "公告：档案格式与撰写规则", poster: "[管理员]", desc: "■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■ ■■■■" }
];

// 子列表数据（自动从 lists/ 文件夹加载，这里只定义结构和标签映射）
const LIST_DATA = [
    { id: "sublist-residents", prefix: "oc_", items: [] },
    { id: "sublist-orgs",      prefix: "org_", items: [] }
];

// 内置后备内容（当 .txt 文件不存在时使用）
const FALLBACK_CONTENT = {
    "history1": `<p style="color:#555;font-size:11px;">[文档: 0xA3F001] [密级:████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`,
    "history2": `<p style="color:#555;font-size:11px;">[文档: 0xB1F002] [密级:████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`,
    "history3": `<p style="color:#555;font-size:11px;">[文档: 0xC2A003] [密级:████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`,
    "history4": `<p style="color:#555;font-size:11px;">[文档: 0xD3C004] [密级:████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`,
    "fog1": `<p style="color:#555;font-size:11px;">[文档: 0xFOG001] [密级:████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`,
    "fog2": `<p style="color:#555;font-size:11px;">[文档: 0xFOG002] [密级:████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`,
    "fog3": `<p style="color:#555;font-size:11px;">[文档: 0xFOG003] [密级:████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`,
    "fog4": `<p style="color:#555;font-size:11px;">[文档: 0x????] [密级:████████]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p style="color:#999;">▮▮▮ [数据严重损坏——恢复失败] ▮▮▮</p>`,
    "announce1": `<p style="color:#555;font-size:11px;">[文档: 0xADM001] [密级:内部]</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p><p>■■■■■■■■■■ ■■■■■■■■■■ ■■■■■■■■■■</p>`
};

// ========== 自动加载 lists/ 目录下的列表 ==========
async function loadLists() {
    for (const ld of LIST_DATA) {
        const filename = ld.id.replace('sublist-', '') + '.txt';
        try {
            const res = await fetch('lists/' + filename);
            if (res.ok) {
                const text = await res.text();
                const lines = text.split('\n').filter(l => l.trim());
                ld.items = lines.map((line, i) => {
                    const parts = line.split('|').map(s => s.trim());
                    const name = parts[0];
                    const tag = parts[1] || '';
                    const customId = parts[2] || (ld.prefix + (i + 1));
                    return {
                        id: customId,
                        name: name,
                        tag: tag,
                        title: name,
                        poster: '[档案管理员]',
                        desc: '■■■■■■■■■■ ■■■■■■■■■■'
                    };
                });
            } else {
                // 文件不存在，使用默认数据
                ld.items = getDefaultItems(ld.id, ld.prefix);
            }
        } catch(e) {
            ld.items = getDefaultItems(ld.id, ld.prefix);
        }
    }

    // 填充子列表
    LIST_DATA.forEach(ld => fillSubList(ld.id, ld.items, ld.prefix));
}

function getDefaultItems(listId, prefix) {
    if (listId === 'sublist-residents') {
        return [
            { id: "oc_1", name: "OC-001", tag: "", title: "OC-001", poster: "[档案管理员]", desc: "■■■■■" },
            { id: "oc_2", name: "OC-002", tag: "", title: "OC-002", poster: "[档案管理员]", desc: "■■■■■" },
            { id: "oc_3", name: "OC-003", tag: "", title: "OC-003", poster: "[档案管理员]", desc: "■■■■■" }
        ];
    }
    if (listId === 'sublist-orgs') {
        return [
            { id: "org_1", name: "ORG-001", tag: "", title: "ORG-001", poster: "[档案管理员]", desc: "■■■■■" },
            { id: "org_2", name: "ORG-002", tag: "", title: "ORG-002", poster: "[档案管理员]", desc: "■■■■■" }
        ];
    }
    return [];
}

// 为 POSTS 中缺少的项添加 fallback content
POSTS.forEach(p => {
    if (!p.content) p.content = FALLBACK_CONTENT[p.id] || '<p>■■■■■■■■■■</p>';
});

// 页面加载完后自动加载列表
window.addEventListener('DOMContentLoaded', loadLists);
