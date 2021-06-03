let items = document.querySelectorAll(".question");
let arrows_bottom = document.querySelectorAll(".question span:first-child");
let arrows_top = document.querySelectorAll(".question span:last-child");
const ans_area = document.createElement("div");

ans_area.className="answer";
ans_area.style.width = 100+"%";

const ans = document.createElement("p");
let textNode;

let arr =[0,0,0,0];

items[0].addEventListener('click',()=>{
  if(arr[0]==0){
    remove(0);
    textNode = document.createTextNode("This project for practice css, html and Javascript.");
    ans.appendChild(textNode);
    items[0].appendChild(ans_area);
  }else{
    arrows_top[0].style.display = "none";
    arrows_bottom[0].style.display = "block"
    ans.removeChild(textNode);
    items[0].removeChild(ans_area);
    arr[0]=0;
  }
  
}); 

items[1].addEventListener('click',()=>{
  if(arr[1]==0){
    remove(1);
    textNode = document.createTextNode("I learned how to use dom in Javascript, but I think I'm still not good at Javascript. So I have to study more.");
    ans.appendChild(textNode);
    items[1].appendChild(ans_area);
  }else{
    arrows_top[1].style.display = "none";
    arrows_bottom[1].style.display = "block"
    ans.removeChild(textNode);
    items[1].removeChild(ans_area);
    arr[1]=0;
  }
  
}); 

ans_area.appendChild(ans);

items[2].addEventListener('click',()=>{
  if(arr[2]==0){
    remove(2);
    textNode = document.createTextNode("2021/06/03, and made by Eunhee Jang.");
    ans.appendChild(textNode);
    items[2].appendChild(ans_area);
  }else{
    arrows_top[2].style.display = "none";
    arrows_bottom[2].style.display = "block"
    ans.removeChild(textNode);
    items[2].removeChild(ans_area);
    arr[2]=0;
  }
  
}); 

items[3].addEventListener('click',()=>{
  if(arr[3]==0){
    remove(3);
    textNode = document.createTextNode("You can press the question which you want to see the answer. And if you want to add more questions and answers, you just edit the the Javascript. In the js file, you can create more elements to make the Q&A.");
    ans.appendChild(textNode);
    items[3].appendChild(ans_area);
  }else{
    arrows_top[3].style.display = "none";
    arrows_bottom[3].style.display = "block"
    ans.removeChild(textNode);
    items[3].removeChild(ans_area);
    arr[3]=0;
  }
  
}); 

function remove(x){
  arr[x]=1;
  let num=x;
  let num_cnt=0;

  for (let i=0; i<arr.length;i++){
    if (arr[i] !== 0){

      if(x !== i){
        num=i;
        num_cnt+=1;
      }
    }
  }
  if(num_cnt>0){
    ans.removeChild(textNode);
    for (let i=0; i<arr.length;i++){
      
      if(i ===x ){
        continue
      }
      else{
        arr[i] = 0;
      } 
    }
    items[num].removeChild(ans_area);
    arrows_bottom[num].style.display = "block";
    arrows_top[num].style.display = "none";
}   
    arrows_bottom[x].style.display = "none";
    arrows_top[x].style.display = "block";
}

