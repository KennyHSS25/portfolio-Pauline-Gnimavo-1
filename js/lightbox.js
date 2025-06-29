// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightboxLinks = document.querySelectorAll('.project-overlay a');
    
    lightboxLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectImg = this.closest('.project-card').querySelector('.project-img img');
            const imgSrc = projectImg.src;
            const imgAlt = projectImg.alt;
            
            // Create lightbox overlay
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                cursor: zoom-out;
            `;
            
            // Create image element
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = imgAlt;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            img.style.borderRadius = '8px';
            img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
            
            // Close button
            const closeBtn = document.createElement('div');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.cssText = `
                position: absolute;
                top: 20px;
                right: 20px;
                color: white;
                font-size: 40px;
                cursor: pointer;
                z-index: 2001;
            `;
            
            lightbox.appendChild(img);
            lightbox.appendChild(closeBtn);
            document.body.appendChild(lightbox);
            
            // Close functionality
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});