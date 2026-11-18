const pages = {
 overview:["Overview","Monitor your Minecraft server from one place."],
 console:["Console","Inspect output and try simulated commands."],
 players:["Players","View player status and moderation controls."],
 files:["File manager","Browse a preview of your server directory."],
 settings:["Settings","Configure the secure connection to your server."]
};
const toast = document.getElementById("toast");
let toastTimer;
function notify(message){toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600)}
function showPage(page){
  Object.keys(pages).forEach(key=>document.getElementById(key+"Page").classList.toggle("hidden",key!==page));
  document.querySelectorAll(".nav-link").forEach(btn=>btn.classList.toggle("active",btn.dataset.page===page));
  document.getElementById("pageCrumb").textContent=pages[page][0];
  document.getElementById("pageTitle").innerHTML=pages[page][0]+(page==="overview"?"<span>.</span>":"");
  document.getElementById("pageDescription").textContent=pages[page][1];
  document.getElementById("sidebar").classList.remove("open");
}
document.querySelectorAll(".nav-link").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.page)));
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("refreshBtn").addEventListener("click",()=>notify("Preview refreshed — no live server is connected."));
document.querySelectorAll("[data-demo]").forEach(btn=>btn.addEventListener("click",()=>notify(btn.dataset.demo+" is disabled in preview mode.")));
document.getElementById("commandForm").addEventListener("submit",e=>{
  e.preventDefault();const input=document.getElementById("commandInput");const value=input.value.trim();if(!value)return;
  const line=document.createElement("p");line.textContent="> "+value;line.style.color="#f17a88";
  const reply=document.createElement("p");reply.textContent="[PREVIEW] Command not sent. Connect a secure backend to enable server commands.";reply.style.color="#8e8e99";
  document.getElementById("consoleOutput").append(line,reply);input.value="";
  const body=document.querySelector(".terminal-body");body.scrollTop=body.scrollHeight;
});
