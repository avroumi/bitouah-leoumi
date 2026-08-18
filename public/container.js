const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const topicsSelect = document.querySelector("#topics");
const urgencySelect = document.querySelector("#urgency");
const complaintTextarea = document.querySelector("#txt-area");

let id = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const topic = topicsSelect.value;
  const urgency = urgencySelect.value;
  const textArea = complaintTextarea.value.trim();

  const complaint = {
    id: id++,
    name,
    topic,
    urgency,
    textArea,
    date: new Date(),
    status: "pending",
  };

  const complaints = JSON.parse(localStorage.getItem("complaints") ?? "[]");

  complaints.push(complaint);

  localStorage.setItem("complaints", JSON.stringify(complaints));

  renderComplaints(complaints);
});
