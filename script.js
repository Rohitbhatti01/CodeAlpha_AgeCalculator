const inputBtn = document.getElementById("input-dob");
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    if(inputBtn.value === "") {
        alert("Please enter your date of birth!");
    } else {
        // Input Date
        const dob = new Date(inputBtn.value);
        
        // Get current date
        const now = new Date();
        
        // Calculate age difference
        let age = now.getFullYear() - dob.getFullYear();
        
        // Check if the birthday has occurred yet this year
        const dobMonth = dob.getMonth();
        const dobDay = dob.getDate();
        const nowMonth = now.getMonth();
        const nowDay = now.getDate();
        
        if (nowMonth < dobMonth || (nowMonth === dobMonth && nowDay < dobDay)) {
            age--; // Subtract 1 if the birthday hasn't occurred yet this year
        }

        result.innerHTML = `Your Age is : ${age}`;
    }
});
