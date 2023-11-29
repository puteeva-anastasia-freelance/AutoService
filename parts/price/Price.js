!function(){"use strict";class e{constructor(){this.buttonPriceEl=document.querySelector(".button__price"),this.popUpOverlayEl=document.querySelector(".pop-up__overlay")}addButtonPriceClickListener(i){this.buttonPriceEl.addEventListener("click",()=>{var e=this.getPricesServices(i);this.popUpOverlayEl.classList.add("active-pop-up"),this.popUpOverlayEl.insertAdjacentHTML("afterend",e),this.addCloseElClickListener(),this.addPriceElClickListener()})}addCloseElClickListener(){document.querySelector(".price__close").addEventListener("click",()=>{var e=document.querySelector(".price");this.popUpOverlayEl.classList.remove("active-pop-up"),e.style.display="none"})}getNameAndPriceService(e){var i=this.getPriceService(e);return`
				<div class="price__item">
					<span class="price__name">${e.name}</span>
					${i}
				</div>`}getPriceService(e){return 0==e.minPrice?'<span class="price__value">бесплатно</span>':`<span class="price__value">от ${e.minPrice} руб.</span>`}getPricesServices(e){let i="";for(var t of e)i+=this.getNameAndPriceService(t);return`
				<div class="price">
					<div class="price__container">
						<div class="price__body">
							<h6 class="price__title">Цены на&nbsp;наши работы</h6>
							<p class="price__txt">Окончательная стоимость работ формируется в&nbsp;зависимости от&nbsp;сложности работы и&nbsp;количества затраченных на&nbsp;это часов</p>
							<div class="price__list">
								${i}
							</div>
							<button type="button" class="price__close">
								<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.2915 1.29163L16.7082 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M16.7082 1.29163L1.2915 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			`}addPriceElClickListener(){let t=document.querySelector(".price");t.addEventListener("click",e=>{var i=t.querySelector(".price__container");e.target==i&&(this.popUpOverlayEl.classList.remove("active-pop-up"),t.style.display="none")})}}window.addEventListener("load",()=>{(new e).addButtonPriceClickListener(prices)})}();