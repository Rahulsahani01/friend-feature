var isstatus = document.querySelector("h5");
// hii
var add_friend = document.querySelector("#add_friend");
var remove = document.querySelector("#remove_friend");

add_friend.addEventListener("click", function () {
  isstatus.innerHTML = "friends";
  isstatus.style.color = "green";
  isstatus.style.border = "2px solid green";
  alert("Successfully added from freinds list");
});

remove.addEventListener("click", function name() {
  isstatus.innerHTML = "stranger";
  isstatus.style.color = "red";
  isstatus.style.border = "2px solid red";
  alert("Successfully removed from freinds list");
});
// var id = 1;
// async function getData() {
  
//   const url = `https://picsum.photos/id/${id}/200/300`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

    
//     return url;
//   } catch (error) {
//     return null;
//   }
// }

// var image = document.querySelector("#image");

// async function nextpic() {
//   const output = await getData();
//   if(output)
//   image.src = output;
//   else image.alt="Not available"
  
//   id++;
  
// }
