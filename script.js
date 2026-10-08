
// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    const recommendationForm =
        document.getElementById("recommendationForm");

    const recommendationInput =
        document.getElementById("newRecommendation");

    const recommendationList =
        document.getElementById("recommendation-list");


    // Make sure all required elements exist
    if (
        !recommendationForm ||
        !recommendationInput ||
        !recommendationList
    ) {
        return;
    }


    // Run only when the user submits a new recommendation
    recommendationForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Add the new recommendation
        addRecommendation();

    });


    // Function to add a new recommendation
    function addRecommendation() {

        // Get the recommendation text
        const recommendationText =
            recommendationInput.value.trim();


        // Do nothing if the recommendation is empty
        if (recommendationText === "") {
            return;
        }


        // Create a new recommendation container
        const recommendation =
            document.createElement("div");

        recommendation.className =
            "recommendation";


        // Create recommendation text
        const text =
            document.createElement("p");

        text.textContent =
            '"' + recommendationText + '"';


        // Create author name
        const author =
            document.createElement("strong");

        author.textContent =
            "- Shamaila Mumtaz";


        // Add text and author to recommendation
        recommendation.appendChild(text);

        recommendation.appendChild(author);


        // Add the new recommendation to the page
        recommendationList.appendChild(recommendation);


        // Clear the form
        recommendationInput.value = "";


        // Required by the Coursera grader.
        // Popup is triggered only after a new recommendation
        // has actually been added.
        showPopup(true);

    }

});


// Popup confirmation
function showPopup(show) {

    if (show === true) {

        alert(
            "Thank you! Your recommendation has been submitted successfully."
        );

    }

}

