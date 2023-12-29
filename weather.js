

const button=document.getElementById('btn');
const divF=document.getElementById('f');
const dicS=document.getElementById('s');
const dicT=document.getElementById('t');
const dicE=document.querySelector('.yo');

const get=document.getElementById('you');
const pop = document.getElementById('location');


button.addEventListener('click',()=>{
const city=document.getElementById('search1').value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d224dc25ee6dfd3dbcbb2bf83547947&units=metric`).then((res)=>{
    return res.json();
}).then((data)=>{
   const tempr=data.main.temp;
   const tempr_min=data.main.temp_min;
   const tempr_max=data.main.temp_max;
   
   const wind=data.wind.speed;
   const wind2=data.wind.gust;
   const wind3=data.wind.deg;
   const km = (wind * 3.6).toFixed(2);


   const humi=data.main.humidity;

   const coun=data.sys.country;

   const city=data.name;

divF.innerHTML=`
<img src="./images/01.png" alt="" id="img" >
<p class="para">Temprature : ${tempr}</p>
<p class="para">Temprature Minimun:${tempr_min}</p>
<p class="para">Temprature Maximun:${tempr_max}</p>
`;
dicS.innerHTML=`
<img src="./images/141.png" alt="" id="img">
<p class="para">Wind Speed in Km : ${km} kg</p>
<p class="para">Wind Gust : ${wind2}</p>
<p class="para">Wind Degree : ${wind3}</p>
`;

dicT.innerHTML=`
<img src="./images/004.png" alt="" id="img">
<p class="para">Humidity : ${humi}</p>
`;

dicE.innerHTML=`
<p>Country:--${coun}</p>
<p>City:--${city}</p>
`
})

})