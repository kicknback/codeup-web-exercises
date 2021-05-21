
function addButtonEvent() {
    document.getElementById("submitBtn")
            .addEventListener("click", addPost);
}

function addPost() {
    let theDate = new Date();
    if (document.getElementById("user-input").value !== "") {
        let replicatePost = document.createElement("div");
        replicatePost.setAttribute("class", "border text-light bg-dark text-wrap");
        replicatePost.setAttribute("id", "new-post");
        replicatePost.textContent = document.getElementById("user-input").value + `\n\n${theDate}`;
        document.getElementById("blog-container").appendChild(replicatePost);
    } else {
        alert("Please do not leave blank. Input your post");
    }
}

addButtonEvent();