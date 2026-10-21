// let container = document.getElementById("container");
// async function gitdata() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/photos", {
//         method: "GET"
//     })
//     let data = await response.json()
//     for (let i = 0; i < data.length; i++) {
//         console.log(i.id)
//          container.innerHTML += `
//          <div class="IMGAE">
//               <h2>${data[i].id}</h2>
//               src="${data[i].url}">
//           </div> `
//     }
// };
// gitdata();
// let container = document.getElementById("container");
// async function gitdata() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/photos", {
//         method: "GET"
//     });
//     let data = await response.json();
//     // تفريغ الحاوية أولاً
//     container.innerHTML = "";
//     // عرض أول 10 عناصر فقط كمثال حتى لا يثقل المتصفح لأن البيانات كثيرة
//     for (let i = 0; i < 10; i++) {
//         console.log(data)
//         console.log(data[i].id);
//         container.innerHTML += `
//          <div class="IMGAE">
//              <h2>${data[i].id}</h2>
//              <img src="${data[i].url}" alt="${data[i].title}" width="150">
//          </div>`;
//     }
// };
// gitdata();
// async function postdata(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users",{
//         method:"post",
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8" // لإخبار السيرفر بأن البيانات المرسلة هي JSON
//         },
//         body:JSON.stringify({
//            name:"Zeyad", 
//            email:"zeyad@gmail.com" 
//         })
//     })
//     let data = await response.json()
//     console.log(data)
// }
// postdata();
let name = document.getElementById("name")
let btn = document.getElementById("btn")
btn.addEventListener("click", async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name.value
        })
    })
    let data = await response.json();
    if (response.status === 201) {
        console.log("تم ")
    }

})
