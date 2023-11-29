!function(){"use strict";class e{constructor(){this.buttonFeedbackElems=document.querySelectorAll(".button__feedback"),this.popUpOverlayEl=document.querySelector(".pop-up__overlay"),this.acceptedEl=document.querySelector(".accepted"),this.mobileMenuEl=document.querySelector(".main-header__mobile-menu"),this.mobileBurgerEl=document.querySelector(".main-header__mobile-burger"),this.mainHeaderEl=document.querySelector(".main-header")}addButtonsFeedbackClickListener(){this.buttonFeedbackElems.forEach(t=>{t.addEventListener("click",()=>{var e=this.getNameForm(t),e=this.getFormFeedback(t.textContent,e);this.popUpOverlayEl.classList.add("active-pop-up"),this.acceptedEl.insertAdjacentHTML("beforebegin",e),this.addMaskPhone(),this.addCloseElemsClickListener(),this.addButtonsPopUpClickListener(),this.addPopUpElemsClickListener(),this.closeMobileMenu()})})}closeMobileMenu(){this.popUpOverlayEl.classList.remove("active-mobile-menu"),this.mobileMenuEl.classList.remove("active"),this.mobileBurgerEl.classList.remove("cross"),this.mainHeaderEl.classList.remove("active")}getNameForm(e){return e.dataset.value}getFormFeedback(e,t){return`<div class="pop-up">
			<div class="pop-up__container">
				<div class="pop-up__body" style="background: linear-gradient(90.92deg, #FFFFFF 0.79%, rgba(217, 217, 217, 0) 99.28%), right top / cover no-repeat url(img/dist/bg-pop-up.webp);">
					<h6 class="pop-up__title">Обратная связь</h6>
					<p class="txt pop-up__txt">Заполните форму и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами!</p>
					<form class="pop-up__form form-application">
						<input type="hidden" name="name-form" value="${t}">
						<div class="pop-up__name">
							<input type="text" class="pop-up__input" placeholder="Укажите Ваше имя" name="name">
						</div>
						<div class="pop-up__phone">
							<input required class="pop-up__input mask-phone" type="text" placeholder="Укажите Ваш номер телефона" name="phone">
						</div>
						<p class="txt pop-up__error-phone">Для отправки формы, пожалуйста, укажите Ваш номер телефона</p>
						<button type="submit" class="button button__red pop-up__button">${e}</button>
					</form>
					<button type="button" class="pop-up__close">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="pop-up__close-svg">
							<path d="M1.2915 1.29163L16.7082 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.7082 1.29163L1.2915 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
				</div>
			</div>
		</div>`}addButtonsPopUpClickListener(){document.querySelectorAll(".pop-up__button").forEach(e=>{var t=e.closest(".pop-up");let o=t.querySelector(".mask-phone"),p=t.querySelector(".pop-up__error-phone");e.addEventListener("click",()=>{""==o.value?p.style.display="block":p.style.display="none"})})}addCloseElemsClickListener(){document.querySelectorAll(".pop-up__close").forEach(t=>{t.addEventListener("click",()=>{var e=t.closest(".pop-up");this.popUpOverlayEl.classList.remove("active-pop-up"),e.style.display="none"})})}addMaskPhone(){let e;$(".mask-phone").mask("+375 (99) 999-99-99"),$(".pop-up .mask-phone").on("keyup",function(){12==(e=$(this).val().match(/\d+/g).join("").length)&&$(".pop-up__error-phone").css("display","none")})}addPopUpElemsClickListener(){document.querySelectorAll(".pop-up").forEach(o=>{o.addEventListener("click",e=>{var t=o.querySelector(".pop-up__container");e.target==t&&(this.popUpOverlayEl.classList.remove("active-pop-up"),o.style.display="none")})})}}window.addEventListener("load",()=>{(new e).addButtonsFeedbackClickListener()})}();