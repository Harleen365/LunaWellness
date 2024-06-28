// Define story content for each character and option
const stories = {
	alice: {
		name: 'Alice',
		description: `
            <p>Alice is an active and adventurous individual who values convenience and mobility during her period. She prefers using tampons because they are discreet and allow her to continue her physical activities without any hassle. Alice loves that tampons are compact and she can easily slip a few into her gym bag or pocket, making them perfect for her hikes and gym sessions. Tampons allow Alice to swim and engage in all her favorite sports without any worry. She feels confident and secure knowing that the tampon will stay in place and not interfere with her activities.</p>
            <p>However, Alice has also faced some challenges with tampons. The process of internal insertion was uncomfortable at first, and she had to learn how to place them correctly. She knows that tampons need to be changed regularly, every four to eight hours, to avoid the risk of Toxic Shock Syndrome (TSS). Despite these concerns, Alice finds the convenience and freedom they offer worth the effort. On heavy flow days, she sometimes pairs a tampon with a pad to prevent any leaks, especially during long workouts.</p>
        `
	},
	emma: {
		name: 'Emma',
		description: `
            <p>Emma is eco-conscious and prefers sustainable options that minimize environmental impact. She loves using menstrual cups because they are reusable and significantly reduce waste. Initially, there was a learning curve, and she had to get used to inserting and removing the cup. But once she got the hang of it, Emma found it to be a reliable and comfortable choice. She enjoys that a menstrual cup can stay in place for up to 12 hours, allowing her to go through her busy day without frequent trips to the bathroom. Emma finds that menstrual cups hold more blood than tampons, reducing the number of times she needs to empty it throughout the day. She simply pinches the cup closed, inserts it, and goes about her day. When it’s time to remove the cup, she empties it into the toilet, washes it, and reinserts it.</p>
            <p>The only downside Emma finds is the need to clean and sterilize the cup after each cycle, but the environmental benefits and convenience far outweigh this minor inconvenience for her. Emma appreciates the long-term cost savings and the reduced environmental footprint of menstrual cups, making them her preferred choice.</p>
        `
	},
	sarah: {
		name: 'Sarah',
		description: `
            <p>Sarah prioritizes comfort and reliability in menstrual products, ensuring they provide optimal protection and ease of use. She prefers sanitary pads because they are easy to use and don’t require internal insertion. Sarah finds pads to be the most comfortable and hassle-free option, especially during her work hours and when she’s at home. She likes that they are easy to use—just peel and stick, without any need for internal insertion. This makes them convenient for quick changes throughout the day. Pads come in various sizes, so Sarah can choose different sizes for her lighter and heavier flow days.</p>
            <p>However, Sarah also experiences some downsides. Pads can feel bulky and sometimes make a rustling noise, which isn’t very discreet. She needs to change them every four to six hours to avoid leaks, which can be inconvenient during busy days. Sarah also finds that some pads made with plastic materials can irritate her sensitive skin. Despite these drawbacks, Sarah appreciates the reliability and ease of use that pads offer. She finds them especially useful at the beginning and end of her period and while she’s sleeping.</p>
        `
	},
	lily: {
		name: 'Lily',
		description: `
            <p>Lily is a budget-conscious individual who seeks affordable and cost-effective menstrual product options. She often uses period underwear because they are reusable and provide excellent comfort. Lily enjoys the comfort and reusability of period underwear. She finds them to be a cost-effective and sustainable option in the long run. Period underwear is comfortable and easy to use, making them perfect for everyday wear or even sleeping in. They are discreet, and no one can tell she’s wearing them unless she says so.</p>
            <p>Period-proof underwear looks and feels like regular underwear but is designed with ultra-thin layers of material that absorb and hold period blood. These layers create a moisture-wicking, odor-neutralizing, blood-absorbing, and leak-proof barrier, offering Lily maximum comfort with minimal effort. The downside for Lily is the need for frequent washing, especially on heavy flow days. The initial cost of buying multiple pairs can be high, but she views it as an investment. Despite these challenges, Lily appreciates the environmental benefits and the comfort that period underwear provides. To wash her used underwear, she simply rinses them in cold water, uses a cold-water washing machine cycle, and line dries them.</p>
        `
	},
	mia: {
		name: 'Mia',
		description: `
            <p>Mia is a health-conscious individual who values organic and chemical-free menstrual products for her well-being. She prefers using organic cotton pads and tampons because they are free from harmful chemicals and gentle on her skin. Mia finds peace of mind in using organic products, knowing they are safe for her body and the environment. She alternates between pads and tampons based on her activities and flow. The organic cotton pads are soft and gentle on her skin, reducing any irritation or allergies. Mia appreciates that these pads are adhesive, with sticky material on stretchy “wings” and/or on the bottom, making them easy to line her underwear with the absorbent part on top.</p>
            <p>For her more active days, Mia prefers using organic tampons. Tampons are cotton-based products that are packed very tightly into a cylindrical or tent shape. She inserts the tampon into her vaginal canal, leaving a string that hangs out to help with removal later. Mia finds tampons convenient for her workouts and daily activities. However, she ensures to change them every four to eight hours to avoid any risk of TSS and does not use them while sleeping. Despite the need for regular changes and the initial discomfort of internal insertion, Mia is committed to using products that prioritize her health and the environment.</p>
        `
	}
};

// Function to show character's story
function showCharacter(character) {
	const storyContainer = document.getElementById('story');
	if (stories.hasOwnProperty(character)) {
		storyContainer.innerHTML = `
            <h2>${stories[character].name}'s Story</h2>
            ${stories[character].description}
        `;
		document.getElementById('character-options').style.display = 'none';
	} else {
		storyContainer.innerHTML = '<p>Character not found.</p>';
	}
}
