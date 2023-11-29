!function(){"use strict";class e{constructor(){this.pathToServicesImages="img/dist/services",this.wrapEl=document.querySelector(".service__wrap")}insertServicesIntoPage(e){let t="";for(var s of e)t+=this.getServiceMarkup(s);this.wrapEl.insertAdjacentHTML("beforeend",t),this.addWindowResizeListener()}getServiceMarkup(e){return`
			<div class="service__item">
				<div class="service__flipper">
					<div class="service__front"
						style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${this.pathToServicesImages}/${e.image}) center / cover no-repeat ;">
						<h3 class="h5 service__subtitle">${e.name}</h3>
					</div>
					<div class="service__back"
						style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${this.pathToServicesImages}/${e.image}) center / cover no-repeat ;">
						<div class="service__inner">
							<h3 class="h5">${e.name}</h3>
							<p class="service__txt">${e.description}</p>
							<button type="button" class="button service__button button__feedback"
								data-value="Оставить заявку: ${e.name}">Оставить заявку</button>
						</div>
					</div>
				</div>
			</div>
			`}addWindowResizeListener(){this.setHeightCards(),window.addEventListener("resize",()=>{this.setHeightCards()})}setHeightCards(){document.querySelectorAll(".service__item").forEach(e=>{var t=e.offsetWidth;e.style.height=1.035*t+"px"})}}window.addEventListener("load",()=>{(new e).insertServicesIntoPage(services)})}();