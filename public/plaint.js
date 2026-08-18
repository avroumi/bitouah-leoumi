const infoTable = document.querySelector(".info-table");
const numberOfPLaint = document.querySelector("#number-of-plaint");
const numberOfplainter = document.querySelector("#number-of-plainter");

const complaints = JSON.parse(localStorage.getItem("complaints") ?? "[]");

function renderComplaints(complaints) {
  const plaint = complaints.length;
  numberOfPLaint.textContent = plaint;

  const setName = new Set(complaints.map((complain) => complain.name));
  const differentName = setName.size;
  numberOfplainter.textContent = differentName;

  const data = complaints
    .map(
      (complaint) => `
        <div class="complaint-row">
          <article>${complaint.id}</article>
          <article>${complaint.name}</article>
          <article>${complaint.topic}</article>
          <article>${complaint.urgency}</article>
          <article>${complaint.textArea}</article>
          <article>${complaint.date}</article>
          <article>${complaint.status}</article>
        </div>
      `,
    )
    .join("");

  infoTable.innerHTML = data;
}

renderComplaints(complaints);
