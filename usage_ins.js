// usage_ins.js
function changeLanguage() {
	var language = document.getElementById('language').value;
	var elements = document.querySelectorAll('[data-lang-en]');

	elements.forEach(function (element) {
		element.innerText = element.getAttribute('data-lang-' + language);
	});
}

function showSection(sectionId) {
	var sections = document.querySelectorAll('.content-section');
	sections.forEach(function (section) {
		section.style.display = 'none';
	});
	document.getElementById(sectionId).style.display = 'block';
}

function updateProgress(sectionId) {
	var checkboxes = document.querySelectorAll(
		`#${sectionId} input[type="checkbox"]`
	);
	var progress = 0;
	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			progress += 1;
		}
	});
	var progressBar = document.getElementById(`progress-bar-${sectionId}`);
	var progressPercentage = (progress / checkboxes.length) * 100;
	progressBar.style.width = progressPercentage + '%';

	if (progressPercentage === 100) {
		document.getElementById('congratulations-modal').style.display =
			'block';
	}
}

function closeModal() {
	document.getElementById('congratulations-modal').style.display = 'none';
}
