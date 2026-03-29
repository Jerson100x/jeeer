// Chosen Soul - Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // 🌟 Main CTA Button Handler
    const revealBtn = document.querySelector('.rainbow-glow');
    if (revealBtn) {
        revealBtn.addEventListener('click', function(e) {
            e.preventDefault();
            unlockDestiny();
        });
    }

    // 🎯 Unlock Destiny Animation
    function unlockDestiny() {
        const btn = event.target.closest('a');
        const originalText = btn.innerHTML;
        
        // Loading state
        btn.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-spinner fa-spin text-xl"></i>
                <span>Unveiling...</span>
            </div>
        `;
        btn.style.transform = 'scale(0.97)';
        btn.style.pointerEvents = 'none';

        // Simulate API call
        setTimeout(() => {
            showDestinyModal();
            btn.innerHTML = originalText;
            btn.style.transform = 'scale(1.02)';
            btn.style.pointerEvents = 'auto';
        }, 2500);
    }

    // ✨ Destiny Reveal Modal
    function showDestinyModal() {
        const modal = document.createElement('div');
        modal.id = 'destiny-modal';
        modal.innerHTML = `
            <div class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div class="glass-effect max-w-md w-full mx-4 rounded-3xl p-8 text-center animate-scale-in">
                    <div class="rainbow-glow w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
                        <i class="fas fa-magic"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-4">✨ DESTINY UNLOCKED! ✨</h2>
                    <div class="space-y-3 text-white/90 mb-8">
                        <div><strong>Life Path 7:</strong> Spiritual Seeker & Analyst</div>
                        <div><strong>Destiny 9:</strong> Humanitarian Visionary</div>
                        <div><strong>Soul Urge 11:</strong> Master Intuitive</div>
                    </div>
                    <button onclick="closeModal()" class="rainbow-glow text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg w-full hover:scale-105 transition-all">
                        View Full 27-Page Report
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Auto-close after 8 seconds
        setTimeout(closeModal, 8000);
    }

    // ❌ Close Modal
    window.closeModal = function() {
        const modal = document.getElementById('destiny-modal');
        if (modal) {
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.9)';
            setTimeout(() => modal.remove(), 300);
        }
    };

    // 🖱️ Parallax Mouse Effect
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Background orbs parallax
        const orbs = document.querySelectorAll('.animate-ping, .animate-bounce');
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.015;
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // 📱 Touch parallax for mobile
    let lastTouchX = 0;
    document.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        const mouseX = touch.clientX / window.innerWidth;
        const mouseY = touch.clientY / window.innerHeight;
        
        const orbs = document.querySelectorAll('.animate-ping, .animate-bounce');
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.01;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // 🎬 Entrance Animation
    function entranceAnimation() {
        const elements = document.querySelectorAll('.glass-effect');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            setTimeout(() => {
                el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // Progress bar animation
    const progressBars = document.querySelectorAll('.rainbow-glow:not([class*="w-"])');
    progressBars.forEach(bar => {
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 2s ease';
            bar.style.width = '100%';
        }, 500);
    });

    // Initialize
    setTimeout(entranceAnimation, 300);

    // 🔄 Number hover sparkle effect
    const numbers = document.querySelectorAll('[class*="text-3xl"], [class*="text-4xl"]');
    numbers.forEach(num => {
        num.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        });
        num.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 25px 25px rgba(0,0,0,0.15)';
        });
    });

    // 📊 Random number generator (for dynamic feel)
    function generateSoulNumbers() {
        const lifePath = Math.floor(Math.random() * 9) + 1;
        const destiny = Math.floor(Math.random() * 9) + 1;
        const soulUrge = Math.floor(Math.random() * 9) + 1 + (Math.random() > 0.7 ? 2 : 0); // 10% chance master number
        
        document.querySelectorAll('.text-3xl, .text-4xl')[0].textContent = lifePath;
        document.querySelectorAll('.text-3xl, .text-4xl')[1].textContent = destiny;
        document.querySelectorAll('.text-3xl, .text-4xl')[2].textContent = soulUrge;
    }

    // Uncomment to enable dynamic numbers on reload
    // generateSoulNumbers();
});
