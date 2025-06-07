// Sample anime data (in a real application, this would come from an API)
const sampleAnimeData = [
    {
        id: 1,
        title: "时光流逝，饭菜依旧美味",
        originalTitle: "日々は過ぎれど飯うまし",
        image: "./img/anime_1.jpg",
        rating: 3.7,
        episodes: 12,
        status: "连载中",
        type: "TV",
        airDate: "2025-04"
    },
    {
        id: 2,
        title: "赛马娘 芦毛灰姑娘",
        originalTitle: "ウマ娘 シンデレラグレイ",
        image: "./img/anime_2.jpg",
        rating: 4.5,
        episodes: 13,
        status: "连载中",
        type: "TV",
        airDate: "2025-04"
    },
    {
        id: 3,
        title: "mono女孩",
        originalTitle: "mono",
        image: "./img/anime_3.jpg",
        rating: 3.8,
        episodes: 12,
        status: "连载中",
        type: "TV",
        airDate: "2025-04"
    }
];

// Sample category data
const categoryData = {
    anime: [
        { id: 1, title: "Summer Pockets", image: "https://lain.bgm.tv/r/400/pic/cover/l/23/ce/363957_pgptl.jpg", followers: 12453 },
        { id: 2, title: "莉可丽丝", image: "https://lain.bgm.tv/r/400/pic/cover/l/65/19/364450_xx2zx.jpg", followers: 8765 },
        { id: 3, title: "孤独摇滚！", image: "https://lain.bgm.tv/pic/cover/m/e2/e7/328609_2EHLJ.jpg", followers: 9876 },
        { id: 4, title: "BanG Dream! It's MyGO!!!!! ", image: "https://lain.bgm.tv/r/400/pic/cover/l/e7/a7/428735_1v11n.jpg", followers: 15678 },
        { id: 5, title: "BanG Dream! Ave Mujica ", image: "https://lain.bgm.tv/r/400/pic/cover/l/77/c3/454684_ZH5tU.jpg", followers: 11234 }
    ],
    games: [
        { id: 1, title: "Clair Obscur: Expedition 33", image: "./img/game_sample.jpg", followers: 7654 },
        { id: 2, title: "明日方舟", image: "https://lain.bgm.tv/r/400/pic/cover/l/b5/34/225878_ox8Ax.jpg", followers: 5135 },
        { id: 3, title: "エッチで一途なド田舎兄さまと、古式ゆかしい病弱妹", image: "https://lain.bgm.tv/r/400/pic/cover/l/ed/c0/470980_4SfOR.jpg", followers: 3526 },
        { id: 4, title: "Summer Pockets REFLECTION BLUE", image: "https://lain.bgm.tv/r/400/pic/cover/l/ab/76/295957_H64uh.jpg", followers: 1733 },
        { id: 5, title: "魔法使いの夜", image: "https://lain.bgm.tv/r/400/pic/cover/l/7d/3e/5418_VTRT4.jpg", followers: 1631 },
    ],
    books: [
        { id: 1, title: "異世界迷宮の最深部を目指そう", image: "./img/book_sample.jpg", followers: 4321 },
        { id: 2, title: "異世界迷宮の最深部を目指そう(2)", image: "https://lain.bgm.tv/r/400/pic/cover/l/34/81/167119_jp.jpg", followers: 1231 },
        { id: 3, title: "異世界迷宮の最深部を目指そう(3)", image: "https://lain.bgm.tv/r/400/pic/cover/l/a7/bb/167120_jp.jpg", followers: 5131 },
        { id: 4, title: "異世界迷宮の最深部を目指そう(4)", image: "https://lain.bgm.tv/r/400/pic/cover/l/a9/d6/167122_jp.jpg", followers: 1613 },
        { id: 5, title: "異世界迷宮の最深部を目指そう(5)", image: "https://lain.bgm.tv/r/400/pic/cover/l/58/f6/167123_jp.jpg", followers: 1919 },
    ],
    music: [
        { id: 1, title: "夏草が邪魔をする", image: "https://lain.bgm.tv/r/400/pic/cover/l/ed/d0/214575_D4s6L.jpg", followers: 8433 },
        { id: 2, title: "負け犬にアンコールはいらない", image: "./img/music_sample.jpg", followers: 1346 },
        { id: 3, title: "藍二乗", image: "https://lain.bgm.tv/pic/cover/c/99/2a/270751_h0Nzk.jpg", followers: 9349 },
        { id: 4, title: "だから僕は音楽を辞めた", image: "https://lain.bgm.tv/pic/cover/c/2b/f1/273441_Z791Q.jpg", followers: 1611 },
        { id: 5, title: "エルマ", image: "https://lain.bgm.tv/pic/cover/c/c2/07/283367_lG7eZ.jpg", followers: 4591 },
    ]
};

// Sample user activities
const userActivities = [
    { userId: "1", userName: "yybbz", action: "看过", title: "间谍过家家", time: "5分钟前" },
    { userId: "2", userName: "辉之钥", action: "想看", title: "莉可丽丝", time: "10分钟前" },
    { userId: "3", userName: "冥桦", action: "看过", title: "孤独摇滚！", time: "15分钟前" },
    { userId: "4", userName: "ksbsjssb", action: "想看", title: "电锯人", time: "20分钟前" },
    { userId: "5", userName: "Elysia", action: "看过", title: "死神 千年血战篇", time: "25分钟前" },
    { userId: "6", userName: "雪野百香里", action: "想看", title: "塞尔达传说：王国之泪", time: "30分钟前" },
    { userId: "7", userName: "泰山陨石坠", action: "看过", title: "最终幻想16", time: "35分钟前" },
    { userId: "8", userName: "牢大", action: "想看", title: "无职转生", time: "40分钟前" }
];

// Initialize the page when DOM is ready
$(document).ready(function() {
    const randomMusume = Math.floor(Math.random() * 5) + 1;
    $('.navbar .bg').removeClass('musume_1').addClass(`musume_${randomMusume}`);

    $('.navbar-nav .nav-link').removeClass('active'); 
    const currentPage = window.location.pathname.split('/').pop();
    $('.navbar-nav .nav-link').each(function() {
        const href = $(this).attr('href');
        if (href && href === currentPage) {
            $(this).addClass('active');
            if ($(this).hasClass('dropdown-toggle')) {
                 $(this).closest('.nav-item.dropdown').addClass('active');
            }
        }
    });
    
    loadFeaturedAnime();
    loadCategoryItems('anime', '#anime-category');
    loadCategoryItems('games', '#games-category');
    loadCategoryItems('books', '#books-category');
    loadCategoryItems('music', '#music-category');

    loadUserActivities();


    $('body').css('visibility', 'visible');
    if (typeof loadAllAnime === 'function') {
        loadAnimePageLog('#anime-log-list');
    }

    if (typeof loadAnimePageLog === 'function') {
        loadAnimePageLog();
    }
    if (typeof loadAnimePageDiscussions === 'function') {
        loadAnimePageDiscussions('#latest-discussions-list');
    }
    
});

function loadFeaturedAnime() {
    const $featuredSection = $('#featured-anime');
    $featuredSection.empty();
    
    sampleAnimeData.slice(0, 3).forEach(anime => {
        const card = createAnimeCard(anime, true);
        $featuredSection.append(card);
    });
}

// Create anime card HTML
function createAnimeCard(anime, isFeatured) {
    const colClass = isFeatured ? 'col-md-4' : 'col-md-3';
    const stars = '★'.repeat(Math.floor(anime.rating)) + '☆'.repeat(5 - Math.floor(anime.rating));
    
    return `
        <div class="${colClass}">
            <a href="detail.html" class="text-reset text-decoration-none">
            <div class="anime-card">
                <img src="${anime.image}" alt="${anime.title}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${anime.title}</h5>
                    <div class="anime-info">
                        <p class="mb-1">${anime.originalTitle}</p>
                        <p class="mb-1">
                            <span class="rating">${stars}</span>
                            <span class="ms-1">${anime.rating.toFixed(1)}</span>
                        </p>
                        <p class="mb-1">${anime.type} · ${anime.episodes}话 · ${anime.status}</p>
                        <p class="mb-0">放送时间: ${anime.airDate}</p>
                    </div>
                </div>
            </div>
            </a>
        </div>
    `;
}

// Search functionality
$('#navSearchForm').on('submit', function(e) {
    e.preventDefault();
    const searchTerm = $(this).find('input[type="search"]').val().toLowerCase();
    
    const filteredAnime = sampleAnimeData.filter(anime => 
        anime.title.toLowerCase().includes(searchTerm) || 
        anime.originalTitle.toLowerCase().includes(searchTerm)
    );
    
    const $animeList = $('#featured-anime');
    $animeList.empty();
    
    if (filteredAnime.length === 0 && searchTerm.trim() !== "") {
        $animeList.append('<div class="col-12 text-center py-5">没有找到相关作品</div>');
    } else if (searchTerm.trim() === "" && filteredAnime.length === 0) {
        loadFeaturedAnime(); }
    else {
        filteredAnime.forEach(anime => {
            const card = createAnimeCard(anime, true);
            $animeList.append(card);
        });
    }
});

// Load category items
function loadCategoryItems(category, containerId) {
    const $container = $(containerId);
    $container.empty();
    
    categoryData[category].forEach(item => {
        const itemHtml = createCategoryItem(item);
        $container.append(itemHtml);
    });
}

// Create category item HTML
function createCategoryItem(item) {
    return `
        <div class="col">
            <div class="category-item">
                <a href="detail.html"> 
                    <div class="image-container">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="overlay"></div>
                        <div class="item-title" title="${item.title}">${item.title}</div>
                    </div>
                </a>
                <div class="item-followers">${item.followers.toLocaleString()} 人关注</div>
            </div>
        </div>
    `;
}

// Load user activities
function loadUserActivities() {
    const $container = $('#user-activities');
    $container.empty();
    
    userActivities.forEach(activity => {
        const activityHtml = createActivityItem(activity);
        $container.append(activityHtml);
    });
}

// Create activity item HTML
function createActivityItem(activity) {
    return `
        <div class="activity-item">
            <img src="img/icon.jpg" alt="${activity.userName}" class="user-avatar">
            <div class="activity-content">
                <div>
                    <a href="#" class="user-name">${activity.userName}</a>
                    <span class="activity-type">${activity.action}</span>
                    <a href="#" class="activity-title">${activity.title}</a>
                </div>
                <div class="text-muted small">${activity.time}</div>
            </div>
        </div>
    `;
} 

// Function to load anime page logs
function loadAnimePageLog() {
    if ($('#anime-log-list').length) {
        const $logContainer = $('#anime-log-list');
        $logContainer.empty();
        const sampleLogs = [
            {
                imgSrc: "https://lain.bgm.tv/pic/cover/s/8f/8a/445827_L6Zh0.jpg",
                title: "一般的剧情, 不错的画风, 总之我挺喜欢",
                user: "liyun1021",
                action: "评论",
                animeName: "ギルドの受付嬢ですが、残業は嫌なのでボスをソロ討伐しようと思います",
                time: "2小时前",
                content: "剧情一般, 有些说不通或者靠气势解决一切的剧情, 反正是爽番就不用带脑子看了。画风个人很...",
                plus: "(+1)",
            },
            {
                imgSrc: "https://lain.bgm.tv/pic/cover/s/4e/a0/770_EvrMq.jpg",
                title: "“西蒙不是神”——这不是一部无脑燃的作品",
                user: "孤独者们",
                action: "评论",
                animeName: "天元突破グレンラガン",
                time: "2小时31分钟前",
                content: "为什么不复活尼亚? 反螺旋族连临时宇宙都造得出来, 螺旋力在他们之上的西蒙怎么会做不到复...",
                plus: "(+0)"
            },
            {
                imgSrc: "https://lain.bgm.tv/pic/cover/s/13/c5/400602_ZI8Y9.jpg",
                title: "葬送的芙莉莲简评",
                user: "今生",
                action: "评论",
                animeName: "葬送のフリーレン",
                time: "2小时32分钟前",
                content: "反传统的叙事结构与主题创新。在《鬼灭之刃》《咒术回战》等快节奏作品主导的市场中，《...",
                plus: "(+1)"
            },
            {
                imgSrc: "https://lain.bgm.tv/pic/cover/s/77/c3/454684_ZH5tU.jpg",
                title: "世人昨日看错了我母鸡卡, 今日, 又看错了。(接吐槽)",
                user: "合河五柳",
                action: "评论",
                animeName: "BanG Dream! Ave Mujica",
                time: "2小时56分钟前",
                content: "我们见识到了一部少女乐队动画史上, 最浓墨重彩的一部动画。你们说我应该多花笔墨塑造m...",
                plus: "(+1)"
            },
            {
                imgSrc: "https://lain.bgm.tv/pic/photo/g/94/5e/933294_ml4i6.jpg",
                title: "8集最大记忆",
                user: "Fulcrum233",
                action: "评论",
                animeName: "LAZARUS",
                time: "10小时11分钟前",
                content: "那个爽朗的笑容让人回想起了速度与激情",
                plus: "(+1)"
            },
            {
                imgSrc: "https://lain.bgm.tv/pic/photo/g/a5/b7/604126_6g23B.jpg",
                title: "起源故事的意外教训最后和解正当化,怪味",
                user: "划船的苹果",
                action: "评论",
                animeName: "Spider-Man: Across the Spider-Verse",
                time: "1天前",
                content: "炫技动画精致炖＊，看到那群被制作技术力高忽悠 然后天天狂吹的ylg不服，我这种闲人现在重看 ...",
                plus: "(+0)"
            }
        ];

        sampleLogs.forEach(log => {
        const logHtml = `
        <div class="col-md-6">
            <div class="log-entry">
                <a href="detail.html">
                    <img src="${log.imgSrc}" alt="Anime Cover" class="log-entry-image">
                </a>
                <div class="log-entry-details">
                    <a href="detail.html" class="log-entry-title">${log.title}</a>
                    <div class="log-entry-meta">
                        <a href="#">${log.user}</a> / ${log.action} <a href="#">${log.animeName}</a> / ${log.time}
                    </div>
                    <p class="log-entry-content">${log.content}</p>
                    <div class="log-entry-plus">${log.plus}</div>
                </div>
            </div>
        </div>`;
        $logContainer.append(logHtml);
        });
    }
}

function loadAnimePageDiscussions() {
    if ($('#latest-discussions-list').length) {
        const $discussionsContainer = $('#latest-discussions-list');
        $discussionsContainer.empty();
        const discussions = [
            { title: "对key社的作品审美疲劳了 (+1)", anime: "Summer Pockets", user: "Blindfruit", date: "2025-05-27" },
            { title: "泛式谈GQuuuuuuX第七话:非常喜欢这一集 (+7)", anime: "機動戰士Gundam GQuuuuuuX", user: "楚轩", date: "2025-05-27" },
            { title: "第七集杀伤力有点大 (+3)", anime: "mono", user: "宫内莲华", date: "2025-05-27" },
            { title: "所以磨合指的是哪种关系 (没看过原作) (+0)", anime: "義妹生活", user: "Kaguya", date: "2025-05-27" },
            { title: "有关各主角所修的专业 (+14)", anime: "日々は過ぎれど飯うまし", user: "AkariSam", date: "2025-05-27" },
            { title: "不懂这个评分怎么来的 (+7)", anime: "忍者と殺し屋のふたりぐらし", user: "白雪的骑士", date: "2025-05-27" }
        ];
        discussions.forEach(disc => {
            const discussionHtml = `
                <div class="discussion-item">
                    <div class="discussion-item-main">
                        <a href="#" class="discussion-item-title">${disc.title}</a>
                        <div class="discussion-item-anime">"${disc.anime}"</div>
                    </div>
                    <div class="discussion-item-meta-right">
                        <span class="discussion-item-user">${disc.user}</span>
                        <span class="discussion-item-date">${disc.date}</span>
                    </div>
                </div>`;
            $discussionsContainer.append(discussionHtml);
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const usersKey = 'bangumiAppUsers';
    const currentUserKey = 'bangumiAppCurrentUser';

    const registrationForm = document.getElementById('registrationForm');
    const loginFormNav = document.getElementById('loginFormNav'); 
    
    const navLogoutBtn = document.getElementById('navLogoutBtn');
    
    const loggedOutNav = document.getElementById('loggedOutNav');
    const loggedInNav = document.getElementById('loggedInNav');
    const welcomeUserLink = document.getElementById('welcomeUserText');


    const registerModalElement = document.getElementById('registerModal');
    const registerModal = bootstrap.Modal.getOrCreateInstance(registerModalElement);
    
    const loginModalNavElement = document.getElementById('loginModalNav');
    const loginModalNavInstance = bootstrap.Modal.getOrCreateInstance(loginModalNavElement);

    const loginModalRegisterBtn = document.getElementById('loginModalRegisterBtn');
    const loginModalResetPasswordBtn = document.getElementById('loginModalResetPasswordBtn');


    function getUsers() {
        return JSON.parse(localStorage.getItem(usersKey)) || [];
    }

    function saveUsers(users) {
        localStorage.setItem(usersKey, JSON.stringify(users));
    }

    function setCurrentUser(email) {
        localStorage.setItem(currentUserKey, email);
    }

    function getCurrentUser() {
        return localStorage.getItem(currentUserKey);
    }

    function clearCurrentUser() {
        localStorage.removeItem(currentUserKey);
    }

    function updateUI() {
        const currentUserEmail = getCurrentUser();
        if (currentUserEmail) {
            loggedOutNav.style.display = 'none';
            loggedInNav.style.display = 'flex'; 
            welcomeUserText.textContent = `欢迎, ${currentUserEmail.split('@')[0]}`;
            welcomeUserLink.href = 'profile.html';
        } else {
            loggedOutNav.style.display = 'flex';
            loggedInNav.style.display = 'none';
            welcomeUserText.textContent = '';
            welcomeUserLink.href = '#';
        }
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;

            if (password !== confirmPassword) {
                alert('密码不匹配!');
                return;
            }

            const users = getUsers();
            if (users.find(user => user.email === email)) {
                alert('该Email已被注册!');
                return;
            }
            users.push({ email, password });
            saveUsers(users);
            alert('注册成功! 请登录.');
            registrationForm.reset();
            registerModal.hide();
            loginModalNavInstance.show();
        });
    }

    function handleLoginAttempt(email, password) {
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            setCurrentUser(email);
            updateUI();
            alert('登录成功!');
            return true; 
        } else {
            alert('Email或密码错误.');
            return false; 
        }
    }

    if (loginFormNav) {
        loginFormNav.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmailNav').value;
            const password = document.getElementById('loginPasswordNav').value;
            if (handleLoginAttempt(email, password)) {
                loginModalNavInstance.hide(); 
            }
        });
    }

    if (navLogoutBtn) {
        navLogoutBtn.addEventListener('click', () => {
            clearCurrentUser();
            updateUI();
            alert('已登出.');
        });
    }

    if (loginModalRegisterBtn) {
        loginModalRegisterBtn.addEventListener('click', () => {
            loginModalNavInstance.hide();
            registerModal.show();
        });
    }

    if (loginModalResetPasswordBtn) {
        loginModalResetPasswordBtn.addEventListener('click', () => {
            alert('密码重置功能暂未开放。');
        });
    }
    
    updateUI();
});