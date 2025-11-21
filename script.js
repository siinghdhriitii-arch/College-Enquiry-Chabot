function submitDetails() { 
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const city = document.getElementById('city').value.trim();
  const program = document.getElementById('program').value.trim();

  if (!name || !email || !phone || !city || !program) {
    alert("All fields are required.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email containing '@'.");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += createBotMessage(`Thanks for sharing your details, ${name}.`);
  chatBox.innerHTML += createBotMessage("Please select one to view details:");

  const options = [
    "About Us", "Programs Offered", "Campus Life",
    "Placements", "Infrastructure", "FST Faculty",
    "FST 360° View", "Code of Conduct", "Uniform for FST", "Apply Now",
    "Thanks"
  ];

  let buttons = '<div class="form-fields">';
  options.forEach(opt => {
    buttons += `<button onclick="reply('${opt}')">${opt}</button>`;
  });
  buttons += '</div>';

  chatBox.innerHTML += buttons;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function reply(option) {
  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<div class="user-message">${option}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  let response = "";

  switch (option) {

    case "About Us":
      response = `
        The Faculty of Science and Technology (FST) is a constituent of the ICFAI Foundation for Higher Education (IFHE),
        a Deemed-to-be University established under Section 3 of the UGC Act, 1956.<br><br>
        FST provides high-quality education in science and technology through a student-centric approach blending
        academic knowledge with practical and innovation-driven learning.<br><br>
        Applicants can apply online through a secure payment gateway.
      `;
      break;

    case "Programs Offered":
      response = "Please select a category to view the available programs:";
      setTimeout(() => {
        chatBox.innerHTML += createBotMessage(response);
        let programOptions = `
          <div class="form-fields">
            <button onclick="reply('UG Programs')">UG Programs</button>
            <button onclick="reply('PG Programs')">PG Programs</button>
          </div>
        `;
        chatBox.innerHTML += programOptions;
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 700);
      return;

    case "UG Programs":
      response = `
        <strong>Undergraduate Programs:</strong><br>
        - BCA<br>
        - B.Sc (Data Analytics)<br>
        - B.Sc (Computer Science)<br>
        - B.Tech (Specializations)<br>
        - B.Arch
      `;
      break;

    case "PG Programs":
      response = `
        <strong>Postgraduate Programs:</strong><br>
        - MCA<br>
        - M.Sc (CS)<br>
        - M.Tech (AI, DS & more)
      `;
      break;

    case "Campus Life":
      response = `Vibrant campus with clubs, fests, sports & a great learning atmosphere.`;
      break;

    case "Placements":
      response = `
        Top recruiters visit every year.<br>
        Placement cell provides training, resume support & mock interviews.
      `;
      break;

    case "Infrastructure":
      response = `
        <strong>Campus Infrastructure</strong><br><br>
        <div class="image-gallery">
          <img src="images/campus1.png" class="infra-img">
          <img src="images/campus2.png" class="infra-img">
          <img src="images/lab.png" class="infra-img">
          <img src="images/lib.png" class="infra-img">
        </div>
      `;
      break;

    case "FST Faculty":
      response = `
        <strong>Meet Our Esteemed Faculty</strong><br><br>
        <div class="faculty-gallery">
          <div class="faculty-card">
            <img src="images/sandeepsir.png">
            <p><strong>Dr. Sandeep Kumar Panda</strong><br>Professor</p>
          </div>
          <div class="faculty-card">
            <img src="images/pavansir.png">
            <p><strong>Dr. P. Pavan Kumar</strong><br>Associate Professor</p>
          </div>
          <div class="faculty-card">
            <img src="images/laxmimam.png">
            <p><strong>Dr. L. Lakshmi</strong><br>Associate Professor</p>
          </div>
          <div class="faculty-card">
            <img src="images/sreemam.png">
            <p><strong>Dr. A. Sree Lakshmi</strong><br>Associate Professor</p>
          </div>
          <div class="faculty-card">
            <img src="images/sridevimam.png">
            <p><strong>Dr. Kotari Sridevi</strong><br>Associate Professor</p>
          </div>
        </div>
      `;
      break;

    case "FST 360° View":
      response = `
        <strong>360° Street View of FST Block</strong><br><br>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1763443673280!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VuOTdSQ2c.!2m2!1d17.41934712463411!2d78.22014412438722!3f257!4f0!5f0.7820865974627469"
          width="100%" height="350" style="border:0;border-radius:10px;"
          allowfullscreen="" loading="lazy">
        </iframe>
      `;
      break;

    case "Code of Conduct":
      response = `
        <strong>Opening Code of Conduct PDF...</strong><br><br>
        If the PDF didn’t open, click below:<br>
        <a href="https://www.ifheindia.org/students-conduct-and-discipline-Rules.pdf" target="_blank">
          Open Code of Conduct PDF
        </a>
      `;
      window.open("https://www.ifheindia.org/students-conduct-and-discipline-Rules.pdf", "_blank");
      break;

    case "Apply Now":
      response = `
        Click below to apply:<br><br>
        <a href="https://ifheindia.org/online-registration" target="_blank">Apply Now</a>
      `;
      break;

    /* ✅ NEW OPTION ADDED */
    case "Uniform for FST":
      response = `
        <strong>FST Uniform</strong><br><br>
        <img src="images/uniformfst.png" style="width:100%;max-width:300px;border-radius:10px;">
      `;
      break;

    case "Thanks":
      response = "You're welcome! Have a great day! 🌟";
      break;

    default:
      response = "Please choose an option from the buttons above.";
  }

  setTimeout(() => {
    chatBox.innerHTML += createBotMessage(response);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function createBotMessage(message) {
  return `
    <div class="bot-message">
      <img src="images/chatbot.png" class="bot-img">
      <span>${message}</span>
    </div>
  `;
}






