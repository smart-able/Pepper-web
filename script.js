document.addEventListener("DOMContentLoaded", function () {
    const imageUpload = document.getElementById("imageUpload");
    const predictButton = document.getElementById("predictButton");
    const imagePreview = document.getElementById("imagePreview");
    const resultDiv = document.getElementById("result");

    imageUpload.addEventListener("change", function () {
        const file = imageUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.src = e.target.result;
                img.onload = function () {
                    imagePreview.innerHTML = "";
                    imagePreview.appendChild(img);
                };
            };
            reader.readAsDataURL(file);
        }
    });

    predictButton.addEventListener("click", function () {
        // Assuming you have a function to make a prediction from the model
        const predictionResult = predictDisease(imageUpload.files[0]);
        resultDiv.innerText = `Predicted Disease: ${predictionResult}`;
    });

    // Replace this with actual prediction logic using your model
    function predictDisease(imageFile) {
        // Here, you should implement code to send the image to your model and get the prediction
        // You might want to use a server/backend for this task
        // For simplicity, we return a random prediction here
        const diseases = ["Healthy", "Fungal Infection", "Virus Attack"];
        const randomIndex = Math.floor(Math.random() * diseases.length);
        return diseases[randomIndex];
    }
});
