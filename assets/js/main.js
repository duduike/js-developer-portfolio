function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkillsName')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
    <i class="${skill.name}"></i>
    `).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `
        <li>${skill}</li>
    `).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `
    <li>${languages}"</li>
    `).join('')
}

function updatePotfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => `
    <li>
        <a href="${portfolio.github}" target="_blank">
            <span class="acordeon__portfolio-title github">${portfolio.name}</span>
        </a>
        <a class="acordeon__portfolio-link" href="${portfolio.url}" target="_blank">${portfolio.url}</a>
    </li>
    `).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.professionalExperience.map( experience => `
    <li>
        <h3 class="acordeon__experience-title">${experience.name}</h3>
        <span class="acordeon__experience-period calendar">${experience.period}</span>
        <p class="acordeon__experience-p">${experience.description}</p>
    </li>
    `).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePotfolio(profileData)
    updateExperience(profileData)
})()