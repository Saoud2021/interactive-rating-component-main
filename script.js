document.addEventListener('DOMContentLoaded', () => {
    const ratingState = document.getElementById('rating-state');
    const thankYouState = document.getElementById('thank-you-state');
    const submitBtn = document.getElementById('submit-btn');
    const ratingBtns = document.querySelectorAll('.rating-btn');
    const ratingValue = document.getElementById('rating-value');
    const container = document.querySelector('.container');
    let selectedRating = 0;

    function resetState() {
        ratingState.classList.remove('hidden');
        thankYouState.classList.add('hidden');
        selectedRating = 0;
        ratingBtns.forEach(btn => btn.classList.remove('active'));
    }

    ratingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            ratingBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRating = btn.dataset.value;
        });
    });

    submitBtn.addEventListener('click', () => {
        if (selectedRating > 0) {
            ratingValue.textContent = selectedRating;
            ratingState.classList.add('hidden');
            thankYouState.classList.remove('hidden');
        }
    });

    // Add click event listener to the document
    document.addEventListener('click', (event) => {
        // Check if the thank you state is visible and the click is outside the container
        if (!thankYouState.classList.contains('hidden') && !container.contains(event.target)) {
            resetState();
        }
    });
});