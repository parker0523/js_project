$(document).ready(function() {
    const currentUserEmail = localStorage.getItem('bangumiAppCurrentUser');
    const profileUserNameHeader = $('#profileUserNameHeader');
    const profileActivityFeed = $('#profileActivityFeed');
    const groupTopicsList = $('#groupTopicsList');
    const hotDiscussionsList = $('#hotDiscussionsList');
    const dailyBroadcastSidebarTitle = $('#dailyBroadcastSidebarTitle');
    const dailyBroadcastSidebarContent = $('#dailyBroadcastSidebarContent');

    if (currentUserEmail) {
        const username = currentUserEmail.split('@')[0];
        profileUserNameHeader.text(`Hi! ${username}`);
    } else {
        profileUserNameHeader.text('Hi! Guest');
    }

    const profileUserActivities = [
        { userName: "平泽唯", action: "看过", title: "未来日记 OAD", time: "11秒前", userAvatar: "https://lain.bgm.tv/pic/user/s/000/00/00/1.jpg", itemImage: "https://lain.bgm.tv/r/200/pic/cover/l/6e/1a/509986_99qsc.jpg", details: { info: "1话 / 2010年12月9日 / 细田直人 / えすのサカエ / 平山英嗣", rating: "⭐ 0.0 (1260)"} },
        { userName: "krxdtr", action: "看过", title: "ep.39 さよなら杜王町－黄金の心", time: "13秒前", userAvatar: "https://lain.bgm.tv/pic/user/s/000/00/00/2.jpg", itemImage: "https://lain.bgm.tv/r/200/pic/cover/l/29/22/446296_rRM5n.jpg", details: { info: "JOJO的奇妙冒险 不灭钻石", rating: ""} },
        { userName: "D.Z", action: "看过", title: "ep.4 八鬼襲撃", time: "15秒前", userAvatar: "https://lain.bgm.tv/pic/user/s/000/00/00/3.jpg", itemImage: "https://lain.bgm.tv/r/200/pic/cover/l/32/ac/538840_M94I9.jpg", details: { info: "真・恋姫†無双 乙女大乱", rating: ""} },
        { userName: "Z", action: "看过", title: "ep.69 右京のスカート大作戦!", time: "18秒前", userAvatar: "https://lain.bgm.tv/pic/user/s/000/00/00/4.jpg", itemImage: "https://lain.bgm.tv/r/200/pic/cover/l/cb/8c/295959_8Htgt.jpg", details: { info: "乱马1/2 热斗篇", rating: ""} },
        { userName: "Eaten", action: "看过", title: "ep.23 救いの手", time: "18秒前", userAvatar: "https://lain.bgm.tv/pic/user/s/000/00/00/5.jpg", itemImage: "https://lain.bgm.tv/r/200/pic/cover/l/5e/4f/506672_K9EQT.jpg", details: { info: "防风少年 第二季", rating: ""} },
    ];

    if (profileUserActivities.length > 0) {
        profileActivityFeed.empty();
        profileActivityFeed.append('<p class="text-center text-muted small mb-2">今天</p>');
        profileUserActivities.forEach(activity => {
            const activityHtml = createProfileActivityItem(activity);
            profileActivityFeed.append(activityHtml);
        });
    } else {
        profileActivityFeed.html('<p class="text-center text-muted">暂无动态。</p>');
    }

    const sampleGroupTopics = [
        { name: "补旧番", members: 14410, avatar: "https://lain.bgm.tv/pic/icon/m/000/00/00/1_2s881.jpg" }, 
        { name: "靠谱人生茶话会", members: 13897, avatar: "https://lain.bgm.tv/pic/icon/m/000/00/01/100.jpg" },
        { name: "我们就是爱acfun", members: 4523, avatar: "https://lain.bgm.tv/pic/icon/m/000/00/00/11.jpg" },
        { name: "伪春菜", members: 3421, avatar: "https://lain.bgm.tv/pic/icon/m/000/00/00/12.jpg" },
        { name: "技术宅拯救世界", members: 13973, avatar: "https://lain.bgm.tv/pic/icon/m/000/00/00/13.jpg" },
        { name: "宽带综合症候群", members: 5951, avatar: "https://lain.bgm.tv/pic/icon/m/000/00/00/14.jpg" },
    ];
    groupTopicsList.empty();
    sampleGroupTopics.forEach(topic => {
        groupTopicsList.append(`
            <li class="d-flex align-items-center mb-2">
                <img src="${topic.avatar}" alt="${topic.name}" class="rounded me-2" style="width: 32px; height: 32px; object-fit: cover;">
                <div>
                    <a href="#">${topic.name}</a>
                    <div class="small text-muted">${topic.members} 位成员</div>
                </div>
            </li>
        `);
    });

    const sampleHotDiscussions = [
        { title: "2025奥斯汀Major观赛竞猜相关讨论 (+125)", source: "Counter-Strike 2" },
        { title: "这部简称应该叫京城玛吗 (+16)", source: "CITY THE ANIMATION" },
        { title: "【转载】全世界评分最高动画TOP100！ (+60)", source: "CLANNAD ~AFTER STORY~" },
        { title: "沧海中漂亮的一颗明珠——「朱-Aka-」原创原声集其之一 (+5)", source: "「朱-Aka-」完全版2枚組 オリジナルサウンドトラック" },
        { title: "为啥让一个拿不出像样作品的人当监督 (+17)", source: "光が死んだ夏" },
        { title: "为什么第七集明明有能力创造火柴和芯片却不修理环境的人工只 (+41)", source: "アポカリプスホテル" },
    ];
    hotDiscussionsList.empty();
    sampleHotDiscussions.forEach(disc => {
        hotDiscussionsList.append(`
            <li class="mb-2">
                <a href="#">${disc.title}</a>
                <div class="small text-muted">${disc.source}</div>
            </li>
        `);
    });

    const today = new Date();
    const todayStr = `${today.getFullYear()}年${String(today.getMonth() + 1).padStart(2, '0')}月${String(today.getDate()).padStart(2, '0')}日`;
    dailyBroadcastSidebarTitle.html(`每日放送 ${todayStr} <a href="#" class="small text-muted">..more</a>`);

    dailyBroadcastSidebarContent.empty();
    if (typeof sampleAnimeData !== 'undefined' && sampleAnimeData.length > 0) {
        sampleAnimeData.slice(0, 6).forEach(anime => {
            dailyBroadcastSidebarContent.append(`
                <div class="d-flex align-items-center mb-2 daily-broadcast-item-sidebar">
                    <img src="${anime.image}" alt="${anime.title}" class="me-2">
                    <div>
                        <a href="detail.html" class="small d-block">${anime.title}</a>
                        <span class="text-muted" style="font-size: 0.7rem;">${anime.originalTitle}</span>
                    </div>
                </div>
            `);
        });
    } else {
        dailyBroadcastSidebarContent.html('<p class="text-muted small">暂无今日放送信息。</p>');
    }
});

function createProfileActivityItem(activity) {
    const userAvatar = activity.userAvatar || 'img/icon.jpg';
    const itemImage = activity.itemImage || './img/item_placeholder.png';

    return `
        <div class="profile-activity-item d-flex mb-3 pb-3 border-bottom">
            <img src="${userAvatar}" alt="${activity.userName}" class="user-avatar rounded-circle me-3">
            <div class="flex-grow-1">
                <div class="mb-1">
                    <a href="#" class="fw-bold text-decoration-none me-1">${activity.userName}</a>
                    <span class="text-muted">${activity.action}</span>
                    <a href="#" class="text-decoration-none ms-1">${activity.title}</a>
                </div>
                ${activity.details ? `
                <div class="mt-1 p-2 bg-light rounded d-flex align-items-start">
                    <img src="${itemImage}" alt="${activity.title}" class="item-details-img me-2">
                    <div>
                        <h6 class="small mb-0 fw-normal">${activity.title}</h6>
                        <p class="small text-muted mb-0" style="font-size: 0.75rem;">${activity.details.info || ''}</p>
                        ${activity.details.rating ? `<p class="small text-muted mb-0" style="font-size: 0.75rem;">${activity.details.rating}</p>` : ''}
                    </div>
                </div>` : ''}
                 <div class="small text-muted mt-1 d-flex justify-content-between">
                    <span>${activity.time}</span>
                    <span>via web</span>
                </div>
            </div>
        </div>
    `;
}