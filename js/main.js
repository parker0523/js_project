// Sample anime data (in a real application, this would come from an API)
const sampleAnimeData = [
    {
        id: 1,
        title: "进击的巨人 最终季",
        originalTitle: "進撃の巨人 The Final Season",
        image: "https://lain.bgm.tv/pic/cover/l/0b/dd/326851_1hF3K.jpg",
        rating: 4.5,
        episodes: 16,
        status: "已完结",
        type: "TV",
        airDate: "2024-01"
    },
    {
        id: 2,
        title: "咒术回战 第二季",
        originalTitle: "呪術廻戦 第2期",
        image: "https://lain.bgm.tv/pic/cover/l/86/3c/425196_qD38U.jpg",
        rating: 4.8,
        episodes: 23,
        status: "连载中",
        type: "TV",
        airDate: "2023-07"
    },
    {
        id: 3,
        title: "葬送的芙莉莲",
        originalTitle: "葬送のフリーレン",
        image: "https://lain.bgm.tv/pic/cover/l/cb/3f/425203_u5658.jpg",
        rating: 4.7,
        episodes: 28,
        status: "连载中",
        type: "TV",
        airDate: "2023-09"
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
        { id: 1, title: "塞尔达传说：王国之泪", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 7654 },
        { id: 2, title: "霍格沃茨之遗", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 6543 },
        { id: 3, title: "最终幻想16", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 8765 },
        { id: 4, title: "星空", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 5432 },
        { id: 5, title: "生化危机4重制版", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 9876 }
    ],
    books: [
        { id: 1, title: "无职转生", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 4321 },
        { id: 2, title: "86-不存在的战区", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 5432 },
        { id: 3, title: "魔法使之夜", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 6543 },
        { id: 4, title: "Re:从零开始的异世界生活", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 7654 },
        { id: 5, title: "刀剑神域", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 8765 }
    ],
    music: [
        { id: 1, title: "YOASOBI - アイドル", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 3456 },
        { id: 2, title: "米津玄師 - LADY", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 4567 },
        { id: 3, title: "Official髭男dism - Subtitle", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 5678 },
        { id: 4, title: "King Gnu - 一途", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 6789 },
        { id: 5, title: "Mrs. GREEN APPLE - ケセラセラ", image: "https://lain.bgm.tv/pic/cover/l/c7/76/371492_u1uG8.jpg", followers: 7890 }
    ]
};

// Sample user activities
const userActivities = [
    { userId: "白玉", userName: "白玉", action: "看过", title: "间谍过家家", time: "5分钟前" },
    { userId: "青空", userName: "青空", action: "想看", title: "莉可丽丝", time: "10分钟前" },
    { userId: "樱花", userName: "樱花", action: "看过", title: "孤独摇滚！", time: "15分钟前" },
    { userId: "星月", userName: "星月", action: "想看", title: "电锯人", time: "20分钟前" },
    { userId: "流星", userName: "流星", action: "看过", title: "死神 千年血战篇", time: "25分钟前" },
    { userId: "雨滴", userName: "雨滴", action: "想看", title: "塞尔达传说：王国之泪", time: "30分钟前" },
    { userId: "彩虹", userName: "彩虹", action: "看过", title: "最终幻想16", time: "35分钟前" },
    { userId: "云朵", userName: "云朵", action: "想看", title: "无职转生", time: "40分钟前" }
];

// Initialize the page when DOM is ready
$(document).ready(function() {
    // Randomly change musume class
    const randomMusume = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
    $('.navbar .bg').removeClass('musume_1').addClass(`musume_${randomMusume}`);
    
    // Load featured anime
    loadFeaturedAnime();

    // Load category items
    loadCategoryItems('anime', '#anime-category');
    loadCategoryItems('games', '#games-category');
    loadCategoryItems('books', '#books-category');
    loadCategoryItems('music', '#music-category');

    // Load user activities
    loadUserActivities();
});

// Load featured anime section
function loadFeaturedAnime() {
    const $featuredSection = $('#featured-anime');
    $featuredSection.empty();
    
    // Take first 3 anime for featured section
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
        </div>
    `;
}

// Search functionality
$('form').on('submit', function(e) {
    e.preventDefault();
    const searchTerm = $(this).find('input').val().toLowerCase();
    
    const filteredAnime = sampleAnimeData.filter(anime => 
        anime.title.toLowerCase().includes(searchTerm) || 
        anime.originalTitle.toLowerCase().includes(searchTerm)
    );
    
    const $animeList = $('#featured-anime');
    $animeList.empty();
    
    if (filteredAnime.length === 0) {
        $animeList.append('<div class="col-12 text-center py-5">没有找到相关作品</div>');
    } else {
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
                <div class="image-container">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="overlay"></div>
                    <div class="item-title" title="${item.title}">${item.title}</div>
                </div>
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
            <a href="#" class="user-name">${activity.userName}</a>
            <span class="activity-type">${activity.action}</span>
            <a href="#" class="activity-title">${activity.title}</a>
            <div class="text-muted small">${activity.time}</div>
        </div>
    `;
} 