function generateResume() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const education = document.getElementById('education').value.trim();
    const experience = document.getElementById('experience').value.trim();

    if (!name || !email || !phone || !education || !experience) {
        alert("Please fill out all fields.");
        return;
    }

    const resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
       
        <h4>Education:</h4>
        <p>${education}</p>
        <h4>Experience:</h4>
        <p>${experience}</p>
    `;

    document.getElementById('resumeContent').innerHTML = resumeHTML;
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const resumeElement = document.getElementById('resumeContent');
    const resumeText = resumeElement.innerText;

    doc.text(resumeText, 10, 10);
    doc.save("resume.pdf");
}
