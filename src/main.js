import "./style.css";
document.addEventListener("DOMContentLoaded", async () => {
  const usersContainer = document.getElementById("users-container");

  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const users = data.users.slice(0, 10);

    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className =
        "bg-white border border-gray-300 rounded-lg shadow p-4 text-center flex flex-col space-y-2 w-[200px]";

      userCard.innerHTML = `
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}" class="rounded-full w-24 h-24 object-cover mx-auto">
        <h2 class="text-lg font-semibold">${user.firstName} ${user.lastName}</h2>
        <p class="text-gray-600">Age: ${user.age}</p>
        <p class="text-gray-600 break-words">Email: ${user.email}</p>
      `;

      usersContainer.appendChild(userCard);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});
