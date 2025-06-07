const staffData = [
    ["中文名", "夏日口袋"],
    ["话数", "26"],
    ["放送开始", "2025年4月7日"],
    ["放送星期", "星期一"],
    ["播放电视台", "TOKYO MX / BS11"],
    ["别名", "サマーポケッツ、サマポケ"],
    ["原作", "VISUAL ARTS／Key (新島夕、魁、ハサマ)"],
    ["导演", "小林智樹"],
    ["系列构成", "大知慶一郎"],
    ["脚本", "山田靖智、魁、あおしまたかし、大知慶一郎"],
    ["分镜", "小林智樹、室谷靖、吉田英俊、大原実、清水聡、平峯義大"],
    ["演出", "今井翔太、莫梓航、Yuri Pinzon、立田眞一、藤井隆文、Elijah RAGAS、吉澤太智"],
    ["音乐", "折戸伸治、麻枝准、どんまる、竹下智博、水月陵、大橋柊平"],
    ["人物原案", "Na-Ga、和泉つばす、永山ゆうのん、ふむゆん"],
    ["人物设定", "大塚舞"],
    ["构图", "Chreest"],
    ["美术监督", "吉原俊一郎"],
    ["色彩设计", "田川沙里"],
    ["总作画监督", "川村幸祐、大塚舞、辻上彩華、柳川沙樹"],
    ["作画监督", "徳丸輝明（特技作画监督）、Cyrell Mamar、谷川亮介、熊谷勝弘、前田義宏、Lance Fonacier、佐藤元昭、川島尚、枡田邦彰、西田美弥子、刘云留、黒川あゆみ、Manuel Tayo、大塚舞、清水慶太、辻上彩華、杨烈骏、Rhea Jacintos、北村友幸"],
    ["摄影监督", "難波史"],
    ["道具设计", "立田眞一、森木靖泰、枡田邦彰"],
    ["剪辑", "丸山流美"],
    ["原案", "麻枝准"],
    ["主题歌编曲", "水月陵、中山真斗、どんまる"],
    ["主题歌作曲", "折戸伸治、どんまる"],
    ["主题歌作词", "新島夕、魁"],
    ["主题歌演出", "鈴木このみ"],
    ["音响监督", "納谷僚介"],
    ["动画制作", "feel."],
    ["制作", "鳥白島観光協会（小学館集英社プロダクション、VISUAL ARTS、毎日放送、ジェイアール東日本企画、ブシロード、フリュー、TOKYO MX、日本BS放送、丸井グループ）"]
]; 

const relatedWorks = [
    {
        type: '书籍',
        content: [
            {
                title: 'Summer Pockets ーなつのたからものー',
                image: 'img/related_1.jpg',
            }
        ]
    },
    {
        type: '游戏',
        content: [
            {
                title: 'Summer Pockets',
                image: 'img/related_2.jpg',
            }
        ]
    },
    {
        type: '衍生',
        content: [
            {
                title: 'Summer Pockets Radio～鳴瀬家の食卓 ～',
                image: 'img/related_3.jpg',
            },
            {
                title: 'Summer Pockets 離島応援ラジオ',
                image: 'img/related_4.jpg',
            },
        ]
    },
    {
        type: '片头曲',
        content: [
            {
                title: 'PCゲーム「Summer Pockets」オープニングテーマ「アルカテイル」',
                image: 'img/related_5.jpg',
            }
        ]
    },
    {
        type: '片尾曲',
        content: [
            {
                title: 'Summer Pockets Original SoundTrack',
                image: 'img/related_6.jpg',
            }
        ]
    }
]

// 评论数据
const comments = [
    {
        title: "夏日口袋万字解析",
        author: "千早爱音",
        date: "2025-5-19 21:18",
        votes: "+3",
        content: "原贴我发布在b站了，在这里发一次文字版的纯为了引流 \"故事中如果出现某个元素，那么它必须在之后发挥作用\"这是契诃夫理论的概述，游戏，电影等作品中，能够在场景里面出现的作品必有其道理，大到场景布置，人员安排，小至场景小道具安排，角色身上、角色身旁、场景的某个不 ... (more)"
    },
    {
        title: "（内涵剧透）鸥线完结，我们能从sp动画改中看到什么？",
        author: "奈绪_IshizakiNao",
        date: "2025-5-13 15:22",
        votes: "+4",
        content: "(本文同步发表于b站个人号） 动画的鸥线完结了，稍微来写点东西（先叠个甲，以下全是个人观点，且有大量剧透！）。 首先我的观点是，feel社已经尽力在提取线路中重要的内容，并且展现到了动画中，删改在我看来是一件再正常不过的事情，你不可能做到每一处细节都放进动画中。动画版 ... (more)"
    },
    {
        title: "恭喜大知庆一郎荣获作文缩写大赛一等奖",
        author: "热风丶",
        date: "2025-5-13 07:45",
        votes: "+2",
        content: "ep6真感觉脚本燃尽了，没有一个多余的镜头，主要cg也都给串进去了，动画党可能有点跟不上节奏，但原作党感觉已经可以了，4集拍完很难做到更好，算是单线平稳落地 (more)"
    },
    {
        title: "纪念最爱的gal summer pocket，动画追番记录",
        author: "Nayuta",
        date: "2025-5-13 02:01",
        votes: "+0",
        content: "顶着这个头像好几年了，孩子们 终于等到了动画化，能赢吗 ep1，经费看起来蛮不错的，画面基本没有崩的，动作流畅，原作打底的ost太充裕了，不过貌似有个角色曲用错了，op里竟然有小识 ep3.非常舒适的一集，夏日的感觉一下子有了，目前改编的思路也很好，个人线里穿插其他角色剧情， ... (more)"
    },
    {
        title: "绅士向:《summer pockets》粉丝不能错过的チビのん☆画师/工口漫画家的18x同人志",
        author: "ゆめ)就像(み)做梦(た一)样",
        date: "2025-5-7 00:23",
        votes: "+12",
        content: "目前9本，只有一半有翻译， 1，(C95) [黒猫亭 (チビのん☆)] サマーモンスター (Summer Pockets) 2，[黒猫亭 (チビのん☆)] それとも♥サマー (Summer Pockets) 3，[黒猫亭 (チビのん☆)] どす恋!! (Summer Pockets) 4，(C96) [黒猫亭 (チビのん☆)] ブルーさま～ (Summer ... (more)"
    }
];

// 讨论版数据
const discussions = [
    {
        title: "这片和草莓百分百有啥关系？每搁几集就出现一次",
        author: "Ceriv",
        replies: "1",
        date: "2025-5-28"
    },
    {
        title: "建议各位动画党放低预期",
        author: "两极X反转",
        replies: "27",
        date: "2025-5-15"
    },
    {
        title: "对key社的作品审美疲劳了",
        author: "Blindfruit",
        replies: "1",
        date: "2025-5-27"
    },
    {
        title: "【可能剧透】在umi看来，本剧是不是",
        author: "silverbell",
        replies: "3",
        date: "2025-5-20"
    },
    {
        title: "ep7与相比于之前op的改动",
        author: "Shiroha.7z",
        replies: "4",
        date: "2025-5-20"
    }
];

// 吐槽箱数据
const commentsBox = [
    {
        author: "WhiteColloid",
        status: "在看",
        time: "8m ago",
        rating: 4,
        content: "女角色好看，能光看这个云游戏剧情吗"
    },
    {
        author: "急冻愚者",
        status: "在看",
        time: "41m ago",
        rating: 3,
        content: "不负期待//先行上映会的反应还不错//摄影有点菜"
    },
    {
        author: "针钝",
        status: "在看",
        time: "1h 4m ago",
        rating: 5,
        content: "年轻真好啊（喝茶）"
    },
    {
        author: "CFYJZ",
        status: "在看",
        time: "2h 29m ago",
        rating: 4,
        content: "ep1 gal味挺浓，梦回十年前。画风偏幼就好这口。内容上纯粹角色介绍，一上岛就邂逅一堆角色有种在逛美少女动物园的感觉 7//ep2 或许是上班太累后半文戏全靠对话有点催眠 6.5//ep3 鴎这个角色塑造的还挺可爱 7//ep4 女仆装可爱捏，对于gal来说让观众感受到角色的魅力才是最重要的吧？7//ep5,6 篇幅太短导致剧情太跳跃，但至少故事是完整的 7//ep7 角色很可爱但节奏太快了观感很差6.5//ep8 日常好了点，观感像废萌 7"
    },
    {
        author: "花食节",
        status: "在看",
        time: "2h 37m ago",
        rating: 4,
        content: "虽然原作总体印象一般，但还是比较期待的，做好日常观感不会差，期待白羽和umi主线表现"
    },
    {
        author: "葬爱的kami",
        status: "在看",
        time: "2h 50m ago",
        rating: 4,
        content: "稳住就是胜利"
    },
    {
        author: "许为",
        status: "搁置",
        time: "2h 53m ago",
        rating: 3,
        content: "ep6：第六集一口气讲完几次反转感觉动画党可能会看不懂，作为原作党+鸥厨感觉还是基本满意的，可惜的是但凡多一分钟把一些地方讲清楚，比如前面是因为蝶带着灵魂飞出来导致鸥昏迷、最后是鸥过了一年终于醒来写信过来与男主相会，这些但凡再多一点交代效果都会好得多。总的来说，看到画师这么尽力地把鸥画得每一个小表情都可爱、新的声优尽可能把大小姐的声音配好，我还是得感谢制作团队的付出。原本游戏里的鸥线从第六集开头的情节开始就是哀伤为主基调的故事，动画缩到第六集去讲竟然意外地变成了治愈基调的故事，这样也挺好，无论是嗨梨还是鸥都是带着勇气克服重重困难，最后实现了童年的约定。希望接下来换监督后也能拍好。"
    },
    {
        author: "Decmoe47",
        status: "在看",
        time: "3h 39m ago",
        rating: 3,
        content: "不说和京阿尼比，就说当年节操社的little busters，现在一对比真是越来越有含金量了"
    },
    {
        author: "残响死灭",
        status: "在看",
        time: "4h 12m ago",
        rating: 4,
        content: "你麻的五年之约今年要是没打算的话可以拿这个充数（笑"
    },
    {
        author: "骨神凄寒",
        status: "在看",
        time: "4h 18m ago",
        rating: 4,
        content: "据说是25年4月//期待放的够低，真的能收获愉快的体验，望稳中向好！"
    }
];

// Load staff information
function loadStaffInfo() {
    const staffList = document.getElementById('staff-list');
    
    staffData.forEach(([label, value]) => {
        const item = document.createElement('div');
        item.className = 'info-item';
        
        const labelSpan = document.createElement('span');
        labelSpan.className = 'label';
        labelSpan.textContent = label;
        
        const valueSpan = document.createElement('span');
        valueSpan.className = 'value';
        valueSpan.textContent = value;
        
        item.appendChild(labelSpan);
        item.appendChild(valueSpan);
        staffList.appendChild(item);
    });
}

function initializeCompleteness() {
    const input = document.querySelector('.completeness-input');
    const progressBar = document.querySelector('.completeness-bar-fill');
    const totalEpisodes = 26; 

    // 将input类型设置为number
    input.type = 'number';
    input.min = '0';
    input.max = totalEpisodes.toString();

    function updateProgress(value) {
        const progress = Math.min(100, Math.max(0, (value / totalEpisodes) * 100));
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('data-progress', Math.round(progress));
    }

    input.addEventListener('blur', (e) => {
        let value = parseInt(e.target.value) || 0;
        value = Math.min(totalEpisodes, Math.max(0, value));
        e.target.value = value || '';
    });

    const updateButton = document.querySelector('.completeness-button');
    updateButton.addEventListener('click', () => {
        const value = parseInt(input.value) || 0;
        // 这里可以添加保存到服务器的逻辑
        updateProgress(value);
        
        updateButton.textContent = '完成！';
        updateButton.style.backgroundColor = '#4CAF50'; // 绿色
        
        setTimeout(() => {
            updateButton.textContent = '更新';
            updateButton.style.backgroundColor = ''; // 恢复原色
        }, 1000);
    });
}

function loadRelatedWorks() {
    const $relatedWorksContainer = $('.related-works');
    
    relatedWorks.forEach(work => {
        // 处理每个作品的内容项
        for(let i = 0; i < work.content.length; i++) {
            const item = work.content[i];
            const contentHtml = `
                    <div class = "related-work">
                        <div class = "work-type">${(i==0) ? work.type : ''}</div>
                        <div class = "work-content">
                            <a href = "detail.html" class = "text-reset text-decoration-none">
                                <img src="${item.image}" alt="${item.title}">
                                <div class = "work-title">${item.title}</div>
                            </a>
                        </div>
                    </div>
            `;
            $relatedWorksContainer.append(contentHtml);
        }
    });
}

// 加载评论
function loadComments() {
    const $commentsList = $('.comments-list');

    // 添加所有评论
    comments.forEach(function(comment) {
        const $commentItem = $('<div>').addClass('discussion-item');
        
        // 创建评论内容
        const $commentContent = $(`
            <div class="discussion-item-wrapper">
                <img src="img/user_avatar.jpg" alt="${comment.author}" class="user-avatar">
                <div class="discussion-item-main">
                    <a href="#" class="discussion-item-title">${comment.title}</a>
                    <div class="discussion-item-meta">by ${comment.author} ${comment.date} (${comment.votes})</div>
                    <div class="discussion-item-content">${comment.content}</div>
                </div>
            </div>
        `);
        
        // 将内容添加到评论项
        $commentItem.append($commentContent);
        
        // 将评论项添加到评论列表
        $commentsList.append($commentItem);
    });
}

// 加载讨论版
function loadDiscussions() {
    const $discussionList = $('.discussion-board-list');
    
    // 添加所有讨论
    discussions.forEach(function(discussion) {
        const $discussionItem = $('<div>').addClass('discussion-board-item');
        
        // 创建讨论内容
        const $discussionContent = $(`
            <div class="discussion-board-wrapper">
                <div class="discussion-title"><a href="#">${discussion.title}</a></div>
                <div class="discussion-author">${discussion.author}</div>
                <div class="discussion-replies">${discussion.replies} replies</div>
                <div class="discussion-date">${discussion.date}</div>
            </div>
        `);
        
        // 将内容添加到讨论项
        $discussionItem.append($discussionContent);
        
        // 将讨论项添加到讨论列表
        $discussionList.append($discussionItem);
    });
}

// 生成星级评分HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<i class="fas fa-star${i < rating ? ' active' : ''}"></i>`;
    }
    return stars;
}

// 加载吐槽箱
function loadCommentsBox() {
    const $commentsList = $('.comments-box-list');
    
    // 添加所有评论
    commentsBox.forEach(function(comment) {
        const $commentItem = $('<div>').addClass('comments-box-item');
        
        // 创建评论内容
        const $commentContent = $(`
            <div class="comments-box-wrapper">
                <img src="img/user_avatar.jpg" alt="${comment.author}" class="user-avatar">
                <div class="comment-bubble">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-rating">${generateStars(comment.rating)}</span>
                        <span class="comment-status">${comment.status}</span>
                        <span class="comment-time">${comment.time}</span>
                    </div>
                    <div class="comment-content">${comment.content}</div>
                </div>
            </div>
        `);
        
        // 将内容添加到评论项
        $commentItem.append($commentContent);
        
        // 将评论项添加到评论列表
        $commentsList.append($commentItem);
    });
}

// Initialize user rating functionality
function initializeUserRating() {
    const ratingTexts = {
        1: "不忍直视",
        2: "很差",
        3: "差",
        4: "较差",
        5: "不过不失",
        6: "还行",
        7: "推荐",
        8: "力荐",
        9: "神作",
        10: "超神作"
    };

    const stars = document.querySelectorAll('.user-rating-stars .fa-star');
    const ratingText = document.querySelector('.user-rating-text');
    var currentRating = 6;

    function updateStars(rating) {
        stars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function updateRatingText(rating) {
        ratingText.textContent = `我的评价: ${ratingTexts[rating]}`;
    }

    // Initialize default state
    updateStars(currentRating);
    updateRatingText(currentRating);

    // Add click events to stars
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const newRating = parseInt(star.dataset.rating);
            currentRating = newRating;
            updateStars(newRating);
            updateRatingText(newRating);
            // Here you can add code to send the rating to your backend
        });

        // Add hover effect
        star.addEventListener('mouseenter', () => {
            const hoverRating = parseInt(star.dataset.rating);
            updateStars(hoverRating);
            updateRatingText(hoverRating);
        });

    });

    const userRatingStars = $('.user-rating-stars');
    userRatingStars.on('mouseleave', () => {
        updateStars(currentRating);
        updateRatingText(currentRating);
    });

}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    $('body').css('visibility', 'visible');
    loadStaffInfo();
    initializeCompleteness();
    loadRelatedWorks();
    loadComments();
    loadDiscussions();
    loadCommentsBox();
    initializeUserRating();
}); 