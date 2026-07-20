// =============================
// REGISTER PANDIT
// =============================

function registerPandit() {

    let fullname = document.getElementById("fullname").value.trim();
    let father = document.getElementById("father").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let area = document.getElementById("area").value;

    let experience = document.getElementById("experience").value;
    let charges = document.getElementById("charges").value;
    let languages = document.getElementById("languages").value.trim();
    let specialization = document.getElementById("specialization").value;

    let homevisit = document.getElementById("homevisit").value;
    let travel = document.getElementById("travel").value;
    let vehicle = document.getElementById("vehicle").value;
    let samagri = document.getElementById("samagri").value;

    let aadhaar = document.getElementById("aadhaar").value.trim();
    let pan = document.getElementById("pan").value.trim();
    let about = document.getElementById("about").value.trim();

    // ==========================
    // REQUIRED VALIDATION
    // ==========================

    if (fullname === "") {
        alert("Please enter Full Name.");
        return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("Please enter a valid 10-digit Mobile Number.");
        return;
    }

    if (!isValidAadhaar(aadhaar)) {
        alert("Please enter a valid Aadhaar Number.");
        return;
    }

    // ==========================
    // SERVICES
    // ==========================

    let services = [];

    document.querySelectorAll(".service-checks input[type='checkbox']:checked")
        .forEach(function (service) {
            services.push(service.value);
        });

    // ==========================
    // WHATSAPP MESSAGE
    // ==========================

    let message =
`🕉️ *NEW PANDIT REGISTRATION*

👤 Full Name: ${fullname}
👨 Father's Name: ${father}

📱 Mobile: ${mobile}
📧 Email: ${email}

🎂 DOB: ${dob}
🎂 Age: ${age}

🏙️ City: ${city}
📍 Area: ${area}

📖 Experience: ${experience} Years
💰 Charges: ₹${charges}

🗣️ Languages:
${languages}

🙏 Specialization:
${specialization}

📜 Services:
${services.join(", ")}

🏠 Home Visit: ${homevisit}
🚗 Travel: ${travel}
🛵 Vehicle: ${vehicle}
🪔 Samagri: ${samagri}

🆔 Aadhaar:
${aadhaar}

💳 PAN:
${pan}

📝 About:

${about}`;

    let url =
        "https://wa.me/919076203111?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");

}


// =============================
// AADHAAR VALIDATION
// =============================

function isValidAadhaar(number) {

    if (!/^\d{12}$/.test(number)) {
        return false;
    }

    const d = [
        [0,1,2,3,4,5,6,7,8,9],
        [1,2,3,4,0,6,7,8,9,5],
        [2,3,4,0,1,7,8,9,5,6],
        [3,4,0,1,2,8,9,5,6,7],
        [4,0,1,2,3,9,5,6,7,8],
        [5,9,8,7,6,0,4,3,2,1],
        [6,5,9,8,7,1,0,4,3,2],
        [7,6,5,9,8,2,1,0,4,3],
        [8,7,6,5,9,3,2,1,0,4],
        [9,8,7,6,5,4,3,2,1,0]
    ];

    const p = [
        [0,1,2,3,4,5,6,7,8,9],
        [1,5,7,6,2,8,3,0,9,4],
        [5,8,0,3,7,9,6,1,4,2],
        [8,9,1,6,0,4,3,5,2,7],
        [9,4,5,3,1,2,6,8,7,0],
        [4,2,8,6,5,7,3,9,0,1],
        [2,7,9,3,8,0,6,4,1,5],
        [7,0,4,6,9,1,3,2,5,8]
    ];

    let c = 0;

    const reversed = number
        .split("")
        .reverse()
        .map(Number);

    for (let i = 0; i < reversed.length; i++) {
        c = d[c][p[i % 8][reversed[i]]];
    }

    return c === 0;
}