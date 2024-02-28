document.addEventListener('DOMContentLoaded', function() {
    var galleryRows = document.querySelectorAll('.gallery-row');

    galleryRows.forEach(function(row) {
        // 랜덤하게 0 또는 1을 생성
        var randomNum = Math.floor(Math.random() * 2);
        if (randomNum === 0) {
            row.classList.add('two-cols');
        } else {
            row.classList.add('three-cols');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const totalImages = 8; // 예를 들어, 10개의 이미지가 있다고 가정합니다.

    for (let i = 0; i < 5; i++) { // 5개의 로우를 생성합니다.
        const row = document.createElement('div');
        row.className = 'gallery-row';
        const cols = Math.random() < 0.5 ? 2 : 3; // 랜덤하게 2개 또는 3개의 컬럼 결정

        for (let j = 0; j < cols; j++) {
            const imageIndex = Math.floor(Math.random() * totalImages) + 1; // 1부터 totalImages까지의 랜덤 번호
            const imagePath = `images/image${imageIndex}.png`; // 이미지 경로

            const galleryDiv = document.createElement('div');
            galleryDiv.className = 'gallery';
            const image = document.createElement('img');
            image.src = imagePath;
            image.alt = `Image ${imageIndex}`;

            const caption = document.createElement('p');
            caption.textContent = `Image ${imageIndex} Description`;

            galleryDiv.appendChild(image);
            galleryDiv.appendChild(caption);
            row.appendChild(galleryDiv);
        }

        mainContent.appendChild(row);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const imageData = [
      {
        "src": "image1.jpg",
        "caption": "Image 1 Caption"
      },
      {
        "src": "image2.jpg",
        "caption": "Image 2 Caption"
      },
      {
        "src": "image3.jpg",
        "caption": "Image 3 Caption"
      }
      // 추가 이미지 정보
    ];

    const mainContent = document.getElementById('main-content');

    imageData.forEach(data => {
        const galleryDiv = document.createElement('div');
        galleryDiv.className = 'gallery';

        const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.caption;

        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = data.caption;

        galleryDiv.appendChild(img);
        galleryDiv.appendChild(caption);

        mainContent.appendChild(galleryDiv);
    });
});

document.getElementById('filter-toggle').addEventListener('click', function() {
    document.querySelectorAll('.filter-btn.hidden').forEach(btn => {
        btn.classList.toggle('visible'); // 'visible' 클래스 토글
        if (btn.classList.contains('visible')) {
            btn.style.visibility = 'visible';
            btn.style.opacity = 1;
        } else {
            btn.style.visibility = 'hidden';
            btn.style.opacity = 0;
        }
    });
});

function toggleFilters() {
    // 모든 filter-btn 중에서 hidden 클래스를 가지지 않은 버튼들을 선택
    const filterButtons = document.querySelectorAll('.filter-btn:not(:first-child)');
    filterButtons.forEach(button => {
        // CSS에서 정의된 hidden 클래스를 토글함
        button.classList.toggle('hidden');
    });
}
