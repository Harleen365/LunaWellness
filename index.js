document
	.getElementById('contactForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		// Get form values
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;

		// Prepare the email parameters
		const templateParams = {
			from_name: name,
			from_email: email,
			message: message
		};

		// Send the email
		emailjs
			.send('service_6n9y5cj', 'template_tfzuzw1', templateParams)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
					alert('Your message has been sent successfully!');
				},
				function (error) {
					console.error('FAILED...', error);
					alert(
						'Failed to send your message. Please try again later.'
					);
				}
			);
	});

document
	.getElementById('storyForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		const userName = document.getElementById('userName').value;
		const userStory = document.getElementById('userStory').value;
		const displayName = document.getElementById(
			'displayNameCheckbox'
		).checked;

		const storyContainer = document.createElement('div');
		storyContainer.classList.add('story');

		const nameElement = document.createElement('h3');
		nameElement.textContent = displayName ? userName : 'Anonymous';
		storyContainer.appendChild(nameElement);

		const storyElement = document.createElement('p');
		storyElement.textContent = userStory;
		storyContainer.appendChild(storyElement);

		document.getElementById('submittedStories').appendChild(storyContainer);

		document.getElementById('storyForm').reset();
		alert('Your story has been submitted successfully!');
	});
