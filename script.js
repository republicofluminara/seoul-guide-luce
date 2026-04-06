const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // ボタンのアイコンを切り替え
    const icon = menuBtn.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// メニューの外側をクリックしたら閉じる設定
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
        menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    }
});
