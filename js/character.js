// Comments data
const comments = [
    {
        author: "VinceBlack",
        title: "瘦宅，田中信徒",
        content: "会是香菜在key的第三重白毛分身吗(bgm38)",
        date: "2017-12-28 18:34"
    },
    {
        author: "神户小德",
        title: "今天吃什么？",
        content: "是时候请高桥李依了（虽然我估计99%还是香菜",
        date: "2018-1-15 02:16"
    },
    {
        author: "反手就是两刀",
        title: "脑洞已经比毛孔多了。",
        content: "黑裤袜(bgm105)",
        date: "2018-12-8 00:26"
    },
    {
        author: "小号系列V",
        title: "",
        content: "作为足控，好想有黑丝裤袜足X(╯3╰)",
        date: "2021-10-15 07:22"
    },
    {
        author: "冰花雪影",
        title: "",
        content: "不知道为什么，白裙加黑丝，我总觉得不合适，想了一下反过来的黑裙加白丝。。。",
        date: "2018-2-10 23:25"
    },
    {
        author: "两仪鲜花",
        title: "萌新一枚",
        content: "麻子是白发控",
        date: "2018-2-16 12:03"
    },
    {
        author: "VinceBlack",
        title: "瘦宅，田中信徒",
        content: "没想到你这白发大眼的竟然不是香菜(bgm38)",
        date: "2018-2-17 10:16"
    },
    {
        author: "异常游梦者",
        title: "电波biu",
        content: "(bgm38)(bgm38)(bgm38)(bgm38)(bgm38)",
        date: "2018-4-30 12:50"
    },
    {
        author: "废墟徘徊俱乐部",
        title: "",
        content: "(bgm38)(bgm38)一开头听到那段话还真以为是香菜，我也是服了（所以到底是为什么要用这个声线",
        date: "2018-5-2 16:32"
    },
    {
        author: "Shirakawa",
        title: "最後まで頑張ってください",
        content: "(bgm38)(bgm38)这真不是香菜吗",
        date: "2018-5-6 21:47"
    },
    // Adding more comments...
    {
        author: "昭和葛葉",
        title: "",
        content: "看起來像是友利奈緒+立華奏的合體233",
        date: "2018-10-27 18:53"
    },
    {
        author: "夜昧魔",
        title: "",
        content: "果然不止我一个人打从一开始就这么觉得……",
        date: "2018-5-9 23:00"
    },
    {
        author: "齐克果酱",
        title: "",
        content: "开头真以为是香菜。。",
        date: "2018-5-15 01:51"
    },
    {
        author: "醉卧流觞～",
        title: "自认为的老年人",
        content: "以为是香菜+1(bgm38) //通完，发现开头确实是香菜(bgm38)",
        date: "2018-5-23 16:19"
    },
    {
        author: "teletubbies",
        title: "麻子的颜太好吸啦，要弯了。。",
        content: "key的女主由长森瑞佳一二三号转变成立华奏一二三号，大家好，这就是新一代的立华奏",
        date: "2018-6-30 22:44"
    },
    // Continue with all 50 comments...
    {
        author: "泽渡真琴",
        title: "",
        content: "长森瑞佳一二三号是什么，愿闻其详...",
        date: "2019-1-7 15:05"
    },
    {
        author: "teletubbies",
        title: "",
        content: "并不是有什么富于意义和创见性的看法，当时写这个只是单纯地吐槽发色而已，黄毛当主角到白毛当主角。。麻子：你们都以为是我，其实是Naga哒",
        date: "2018-5-31 23:53"
    },
    {
        author: "朝倉美羽",
        title: "",
        content: "どすこい 反差萌",
        date: "2018-6-5 20:27"
    },
    {
        author: "成长式90后",
        title: "",
        content: "上面奶香菜的请自裁(bgm59)",
        date: "2018-6-14 01:19"
    },
    {
        author: "嗑个瓜子冷静下",
        title: "",
        content: "开头那段旁白是真的像……后面角色说话倒不像了",
        date: "2018-6-29 19:31"
    },
    // Adding remaining comments...
    {
        author: "风尘烟沐",
        title: "故我非我",
        content: "和服和怀孕那张好美！(",
        date: "2019-1-14 20:45"
    },
    {
        author: "Kamome_poi",
        title: "",
        content: "どすこい ~",
        date: "2019-1-14 21:00"
    }
];

// Load comments
function loadComments() {
    const $commentsList = $('.comments-box-list');
    
    comments.forEach(function(comment) {
        const $commentItem = $('<div>').addClass('comments-box-item');
        
        const $commentContent = $(`
            <div class="comments-box-wrapper">
                <img src="img/user_avatar.jpg" alt="${comment.author}" class="user-avatar">
                <div class="comment-bubble">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        ${comment.title ? `<span class="comment-title">(${comment.title})</span>` : ''}
                        <span class="comment-time">${comment.date}</span>
                    </div>
                    <div class="comment-content">${comment.content}</div>
                </div>
            </div>
        `);
        
        $commentItem.append($commentContent);
        $commentsList.append($commentItem);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    $('body').css('visibility', 'visible');
     if (typeof updateUI === 'function') {
        updateUI();
    } else {
        console.warn('updateUI function not found. Ensure main.js is loaded before character.js and defines updateUI.');
    }
    loadComments();
}); 
