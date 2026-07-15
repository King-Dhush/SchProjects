const cafes = ['Moon Brew Café', 'Starlight Coffee House', 'The Gemstone Grind', 'Lunar Latte Bar'];
    const workshops = ['Crystal Wire-Wrapping', 'Moonstone Bracelet Bar', 'Gem Carving Studio', 'Beaded Treasure Workshop', 'Celestial Keychain Lab', 'Sparkle & String Studio'];
    const pick = (items, count) => [...items].sort(() => Math.random() - .5).slice(0, count);
    const route = document.querySelector('#route span');
    const stamps = [...document.querySelectorAll('.stamp')];
    const reward = document.querySelector('#reward');
    const rewardTitle = document.querySelector('#rewardTitle');
    document.querySelector('#generate').addEventListener('click', () => {
      const chosen = pick(workshops, 3);
      route.innerHTML = `<b>Café:</b> ${pick(cafes,1)[0]}<br><b>Workshops:</b> ${chosen.join(' · ')}<br><b>Final stamp:</b> Follow @moonstonelane`;
      stamps.forEach(s => s.classList.remove('done'));
      reward.classList.add('locked'); rewardTitle.textContent = 'Collect all 5 stamps';
    });
    stamps.forEach(stamp => stamp.addEventListener('click', () => {
      stamp.classList.toggle('done');
      const collected = document.querySelectorAll('.stamp.done').length;
      if (collected === 5) { reward.classList.remove('locked'); reward.classList.remove('unlocked'); void reward.offsetWidth; reward.classList.add('unlocked'); rewardTitle.textContent = 'You unlocked the Lucky Draw!'; }
    }));
