import React from 'react';

function Header() {
	
	return <header className="header">
		<div className="header__container container">
			<div className="header__wrapper">
				<div className="header__logo">
					<p className="header__logo-text">Логотип</p>
				</div>
				<nav>
					<ul className="header__nav-list nav-list">
						<li className="nav-list__item"><a href="/">Главная</a></li>
						<li className="nav-list__item"><a href="/">Продать что-нибудь</a></li>
						<li className="nav-list__item"><a href="/">Вынести хату</a></li>
						<li className="nav-list__item"><a href="/">Доставка</a></li>
						<li className="nav-list__item"><a href="/">Отзывы</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>;
}

export default Header;