const git_icon_btn = document.getElementById("git_btn");
const linked_icon_btn = document.getElementById("linkedin_btn");
const email_icon_btn = document.getElementById("email_btn");
const twitter_icon_btn = document.getElementById("twitter_btn");

const cont_btn = document.getElementById("cont_btn");
const link_btn = document.getElementById("link_btn");
const repos_btn = document.getElementById("repos_btn");

git_icon_btn.addEventListener("click", () => {
    window.open("https://github.com/AndreMeneses0103");
})
linked_icon_btn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/andre-meneses-dev/");
})
email_icon_btn.addEventListener("click", () => {
    window.open("mailto:andremeneses0103@gmail.com");
})
twitter_icon_btn.addEventListener("click", () => {
    window.open("https://twitter.com/andref_meneses");
})

cont_btn.addEventListener("click", () => {
    sendEmail();
})

link_btn.addEventListener("click", () =>{
    window.open("https://www.linkedin.com/messaging/compose/?to=andre-meneses-dev");
})

repos_btn.addEventListener("click",()=>{
    window.open("https://github.com/AndreMeneses0103");
})

function sendEmail() { 
    let name = document.getElementById("cont_name").value;
    name = name.trim();
    let title = document.getElementById("cont_title").value;
    title = title.trim();
    let text = document.getElementById("cont_text").value;
    text = text.trim();

    //mailto:andremeneses0103@gmail.com?subject=A%20B%20C&body=1%202%203%204%205
    if(name == "" || title == "" || text == "" ){
        alert("Please, complete all inputs correctly.")
    }else{
        let link = "";
        name = name.replace(/ /g, "%20");
        title= title.replace(/ /g, "%20");
        text = text.replace(/ /g, "%20");
        text = text.replace(/\n/g, '%0A');
        link = "mailto:andremeneses0103@gmail.com?subject=" + title + "&body=Message%20written%20by%20"+name+"%0A%0A" + text;
        window.open(link);
    }
}

window.onload = () =>{
    fetch('https://api.github.com/users/AndreMeneses0103/repos', {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then(data =>{
        const a = data;
        insertProjects(a);
    })
    .catch(error=>{
        console.error("Erro ocorrido: ", error);
        projectsError(error);
    })

    function insertProjects(projects) { 
        let public_projects = [];
        for(let x = 0; x<projects.length; x++){
            if(projects[x].private == false){
                public_projects.push(projects[x]);
            }
        }
        for(let y = 1; y < 6; y++){
            const project_button = 
            `
            <div class="git_project">
                    <a target="_blank" href="${public_projects[y].html_url}" class="project_btn">
                        <span id="project_title">
                            ${public_projects[y].name}
                        </span>
                        <span id="project_desc">
                            ${public_projects[y].description}
                        </span>
                        <span id="project_itens">
                            <span class="language">
                                ${public_projects[y].language}
                            </span>
                            <span class="stars">
                                ${public_projects[y].stargazers_count}⭐
                            </span>
                        </span>
                    </a>
                </div>
            `
            document.getElementById("All_Projects").innerHTML += project_button;
        }
    }

    function projectsError(error){
        document.getElementById("All_Projects").style.display = "block";
        const msg_error = `
            <h3 style="color: red">${error}</h3>
        `
        document.getElementById("All_Projects").innerHTML = msg_error;
    }
}