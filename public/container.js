const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const topicsSelect = document.querySelector("#topics");
const urgencySelect = document.querySelector("#urgency");
const complaintTextarea = document.querySelector("#txt-area");

let id = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const topic = topicsSelect.value.trim();
  const urgency = urgencySelect.value.trim();
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
  const itemJson = localStorage.getItem("complaints") ?? "[]";
  const complaints = JSON.parse(itemJson);

  complaints.push(complaint);

  localStorage.setItem("complaints", JSON.stringify(complaints));
});
