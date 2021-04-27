// //---------------------створення карток----------------------
// function renderCards(data) {
//     switch (data.doctor) {
//         case "Cardiologist":
//             new VisitTherapist(data).render();
//             break;
//         case "Dentist":
//             new VisitCardiologist(data).render();
//             break;
//         case "Therapist":
//             new VisitDentist(data).render();
//             break;
//     }
// }

// const filterBtn = document.querySelector(".filter__btn");

// filterBtn.addEventListener("click", async(ev) => {
//     const inputSearch = document.querySelector(".filter__search").value;
//     const statusVisit = document.querySelector("#time-select").value;
//     const priorityVisit = document.querySelector(".bd-highlight > select").value;
//     clearCards()
//     const response = await getAllCards();

//     response.data.forEach((el) => {
//         const status =
//             new Date() < new Date(el["date-visit"]) ? "Open" : "Close";
//         const { time, ...rest } = el;

//         if (time === priorityVisit && statusVisit === status) {
//             if (inputSearch) {
//                 Object.values(rest).filter((item) => {
//                     if (item === inputSearch) renderCards(el);
//                 });
//             }
//             if (!inputSearch) renderCards(el);
//         }
//     });
// });

// function clearCards() {
//     const container = document.querySelector(".visit, .container");
//     container.querySelectorAll(".visit-cards").forEach((card) => card.remove());
//     container.querySelector('.visit__title').classList.toggle('hidden')
// }
// const clearBtn = document.querySelector(".filter__btn-clr");
// clearBtn.addEventListener("click", clearCards);
