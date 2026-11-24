(function () {
	var root = document.documentElement;
	root.classList.add('js');

	// ---- Theme toggle (follows the OS until the visitor picks one) ----
	var toggle = document.querySelector('.theme-toggle');
	var mq = window.matchMedia('(prefers-color-scheme: dark)');
	function currentTheme() {
		return root.dataset.theme || (mq.matches ? 'dark' : 'light');
	}
	function syncToggle() {
		var dark = currentTheme() === 'dark';
		toggle.setAttribute('aria-pressed', String(dark));
		toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
	}
	toggle.addEventListener('click', function () {
		var next = currentTheme() === 'dark' ? 'light' : 'dark';
		root.dataset.theme = next;
		try { localStorage.setItem('theme', next); } catch (e) {}
		syncToggle();
	});
	mq.addEventListener && mq.addEventListener('change', syncToggle);
	syncToggle();

	// ---- Footer year ----
	var year = document.getElementById('year');
	if (year) year.textContent = new Date().getFullYear();

	// ---- Project lightbox ----
	var box = document.querySelector('.lightbox');
	if (box && typeof box.showModal === 'function') {
		var boxImg = box.querySelector('img');
		document.querySelectorAll('[data-lightbox]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				boxImg.src = btn.dataset.lightbox;
				boxImg.alt = btn.dataset.alt || '';
				box.showModal();
			});
		});
		box.querySelector('.lightbox__close').addEventListener('click', function () { box.close(); });
		box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
	}

	// ---- Contact form: submit in place, fall back to normal POST ----
	var form = document.querySelector('.form');
	if (form && window.fetch) {
		var status = form.querySelector('.form__status');
		var submit = form.querySelector('[type="submit"]');
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			status.className = 'form__status';
			status.textContent = 'Sending…';
			submit.disabled = true;
			fetch(form.action, {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' }
			}).then(function (res) {
				if (!res.ok) throw new Error(res.status);
				form.reset();
				status.classList.add('is-ok');
				status.textContent = 'Thanks! Your message is on its way. I’ll get back to you soon.';
			}).catch(function () {
				status.classList.add('is-err');
				status.innerHTML = 'Something went wrong. Please email me at <a href="mailto:mail@trungtruong.com">mail@trungtruong.com</a>.';
			}).finally(function () {
				submit.disabled = false;
			});
		});
	}

	// ---- Gentle reveal on scroll ----
	if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		var els = document.querySelectorAll('.section__head, .about > *, .project, .hobby, .contact > *');
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (en) {
				if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
			});
		}, { rootMargin: '0px 0px -8% 0px' });
		els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
	}
})();
