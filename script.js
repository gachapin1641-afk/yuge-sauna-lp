// ============================================
// 湯気サウナLP - JavaScript
// ============================================

// DOMContentLoaded - ページ読み込み完了時に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // スクロール追従CTAボタンの表示制御
    initStickyCTA();
    
    // スムーススクロール
    initSmoothScroll();
    
    // 温度ボタンのインタラクション
    initTemperatureButtons();
});

// ============================================
// スクロール追従CTAボタン
// ============================================
function initStickyCTA() {
    const stickyCta = document.getElementById('sticky-cta');
    
    if (!stickyCta) return;
    
    window.addEventListener('scroll', function() {
        // スクロール位置が500px以上で表示
        if (window.scrollY > 500) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    });
}

// ============================================
// スムーススクロール
// ============================================
function initSmoothScroll() {
    // すべてのアンカーリンクを取得
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // デフォルトの動作を防止
            const href = this.getAttribute('href');
            
            // #のみの場合はスキップ
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            // 対象要素を取得
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // スムーススクロール（ブラウザネイティブ）
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // URLにハッシュを追加（履歴に残す）
                history.pushState(null, null, href);
            }
        });
    });
}

// ============================================
// 温度ボタンのインタラクション
// ============================================
function initTemperatureButtons() {
    const tempButtons = document.querySelectorAll('.temp-btn');
    
    tempButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // 既存の選択状態をクリア
            tempButtons.forEach(function(btn) {
                btn.style.background = 'rgba(255, 255, 255, 0.2)';
                btn.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            });
            
            // クリックされたボタンを選択状態に
            this.style.background = 'rgba(255, 255, 255, 0.4)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.9)';
            
            // コンソールに選択された温度を表示（デバッグ用）
            console.log('選択された温度:', this.textContent.trim());
            
            // 料金プランセクションへスクロール
            var plansSection = document.getElementById('plans');
            if (plansSection) {
                plansSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// パフォーマンス最適化：画像の遅延読み込み
// ============================================
// 画像が追加された際に有効化できるコード（現在はコメントアウト）
/*
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(function(img) {
        imageObserver.observe(img);
    });
}
*/

// ============================================
// フォームバリデーション（予約フォーム実装時に使用）
// ============================================
/*
function initFormValidation() {
    const reservationForm = document.getElementById('reservation-form');
    
    if (!reservationForm) return;
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // バリデーションロジック
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        if (!name || !email || !phone) {
            alert('必須項目を入力してください');
            return false;
        }
        
        // メール形式チェック
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('正しいメールアドレスを入力してください');
            return false;
        }
        
        // 送信処理（実際のAPIエンドポイントに変更）
        console.log('予約送信:', { name, email, phone });
        alert('予約を受け付けました！');
        
        return false;
    });
}
*/

// ============================================
// Google Analytics イベントトラッキング（実装時に使用）
// ============================================
/*
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// ボタンクリック時のトラッキング例
document.querySelectorAll('.btn-primary').forEach(function(button) {
    button.addEventListener('click', function() {
        trackEvent('Button', 'click', 'Reservation CTA');
    });
});

document.querySelectorAll('.btn-line').forEach(function(button) {
    button.addEventListener('click', function() {
        trackEvent('Button', 'click', 'LINE Registration');
    });
});
*/
