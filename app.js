import { auth, db } from "./firebase.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

window.login = async function () {
  await signInAnonymously(auth);
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("app").style.display = "block";
  loadJobs();
};

window.createJob = async function () {
  const locationText = document.getElementById("locationText").value;
  const quantity = document.getElementById("quantity").value;
  if (!locationText || !quantity) return;
  await addDoc(collection(db, "jobs"), {
    locationText,
    quantityFosto: Number(quantity),
    status: "pending",
    createdAt: new Date()
  });
  document.getElementById("locationText").value = "";
  document.getElementById("quantity").value = "";
  loadJobs();
};

async function loadJobs() {
  const snapshot = await getDocs(collection(db, "jobs"));
  const list = document.getElementById("jobsList");
  list.innerHTML = "";
  snapshot.forEach(doc => {
    const li = document.createElement("li");
    const data = doc.data();
    li.textContent = `${data.locationText} - ${data.quantityFosto} Fosto`; // simple display
    list.appendChild(li);
  });
}
