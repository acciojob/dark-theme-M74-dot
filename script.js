//your code here

document.addEventListener('DOMContentLoaded',()=>{
	const app = document.querySelector('#app');
	const switchBtn = document.querySelector('#swap');

	function swapTheme(){
		if(app.classList.contains('day')){
			app.classList.remove('day');
			app.classList.add('night');
			switchBtn.classList.remove('button_day');
			switchBtn.classList.add('button_night');
		}else{
			app.classList.remove('night');
			app.classList.add('day');
			switchBtn.classList.remove('button_night');
			switchBtn.classList.add('button_day');
		}
	}
	switchBtn.addEventListener('click',swapTheme);
});